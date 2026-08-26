import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

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

type AccessibilityContextValue = {
  settings: Settings
  increaseText: () => void
  decreaseText: () => void
  resetText: () => void
  toggleContrast: () => void
  toggleLinks: () => void
  toggleMotion: () => void
  reset: () => void
}

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null)

function readSettings(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaults
    const parsed = JSON.parse(raw) as Partial<Settings>
    return {
      textSize: typeof parsed.textSize === 'number' ? parsed.textSize : 100,
      contrast: Boolean(parsed.contrast),
      links: Boolean(parsed.links),
      motion: Boolean(parsed.motion),
    }
  } catch {
    return defaults
  }
}

function applySettings(settings: Settings) {
  const root = document.documentElement
  root.style.setProperty('--text-scale', String(settings.textSize / 100))
  root.dataset.a11yContrast = String(settings.contrast)
  root.dataset.a11yLinks = String(settings.links)
  root.dataset.a11yMotion = String(settings.motion)
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaults)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const initial = readSettings()
    setSettings(initial)
    applySettings(initial)
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    applySettings(settings)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [ready, settings])

  const value = useMemo<AccessibilityContextValue>(
    () => ({
      settings,
      increaseText: () =>
        setSettings((current) => ({
          ...current,
          textSize: Math.min(current.textSize + 12.5, 162.5),
        })),
      decreaseText: () =>
        setSettings((current) => ({
          ...current,
          textSize: Math.max(current.textSize - 12.5, 100),
        })),
      resetText: () =>
        setSettings((current) => ({
          ...current,
          textSize: 100,
        })),
      toggleContrast: () =>
        setSettings((current) => ({ ...current, contrast: !current.contrast })),
      toggleLinks: () =>
        setSettings((current) => ({ ...current, links: !current.links })),
      toggleMotion: () =>
        setSettings((current) => ({ ...current, motion: !current.motion })),
      reset: () => setSettings(defaults),
    }),
    [settings],
  )

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}
