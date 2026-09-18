import { useEffect, useMemo, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'crs-accessibility'

type Settings = {
  textSize: number
  contrast: boolean
  links: boolean
  motion: boolean
}

const defaults: Settings = {
  textSize: 100,
  contrast: false,
  links: false,
  motion: false,
}

type AccessibilityApi = {
  settings: Settings
  increaseText: () => void
  decreaseText: () => void
  resetText: () => void
  toggleContrast: () => void
  toggleLinks: () => void
  toggleMotion: () => void
  reset: () => void
}

const listeners = new Set<() => void>()
let cachedRaw: string | null = null
let cachedSettings: Settings = defaults
let cacheReady = false

function emit() {
  listeners.forEach((listener) => listener())
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange)
  return () => {
    listeners.delete(onStoreChange)
  }
}

function parseSettings(raw: string | null): Settings {
  if (!raw) return defaults
  try {
    const parsed = JSON.parse(raw) as Partial<Settings>
    const textSize = typeof parsed.textSize === 'number' ? parsed.textSize : 100
    return {
      textSize: Math.min(162.5, Math.max(100, textSize)),
      contrast: Boolean(parsed.contrast),
      links: Boolean(parsed.links),
      motion: Boolean(parsed.motion),
    }
  } catch {
    return defaults
  }
}

function readRaw(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function applySettings(settings: Settings) {
  const root = document.documentElement
  root.dataset.a11yText = String(settings.textSize)
  root.dataset.a11yContrast = String(settings.contrast)
  root.dataset.a11yLinks = String(settings.links)
  root.dataset.a11yMotion = String(settings.motion)
}

function writeSettings(next: Settings) {
  const serialized = JSON.stringify(next)
  try {
    localStorage.setItem(STORAGE_KEY, serialized)
  } catch {
    // Private mode or quota — still apply for this session.
  }
  cachedRaw = serialized
  cachedSettings = next
  cacheReady = true
  applySettings(next)
  emit()
}

function getSnapshot(): Settings {
  const raw = readRaw()
  if (cacheReady && raw === cachedRaw) return cachedSettings
  cachedRaw = raw
  cachedSettings = parseSettings(raw)
  cacheReady = true
  return cachedSettings
}

function getServerSnapshot(): Settings {
  return defaults
}

export function useAccessibility(): AccessibilityApi {
  const settings = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    applySettings(settings)
  }, [settings])

  return useMemo(
    () => ({
      settings,
      increaseText: () =>
        writeSettings({
          ...settings,
          textSize: Math.min(settings.textSize + 12.5, 162.5),
        }),
      decreaseText: () =>
        writeSettings({
          ...settings,
          textSize: Math.max(settings.textSize - 12.5, 100),
        }),
      resetText: () => writeSettings({ ...settings, textSize: 100 }),
      toggleContrast: () => writeSettings({ ...settings, contrast: !settings.contrast }),
      toggleLinks: () => writeSettings({ ...settings, links: !settings.links }),
      toggleMotion: () => writeSettings({ ...settings, motion: !settings.motion }),
      reset: () => writeSettings(defaults),
    }),
    [settings],
  )
}
