import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAccessibility } from '../context/AccessibilityContext'

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const titleId = 'a11y-options-title'
  const dialogId = 'a11y-options-dialog'
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const {
    settings,
    increaseText,
    decreaseText,
    resetText,
    toggleContrast,
    toggleLinks,
    toggleMotion,
    reset,
  } = useAccessibility()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  function handleClose() {
    setOpen(false)
    buttonRef.current?.focus()
  }

  const widget = (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="a11y-fab"
        aria-label="Open accessibility options"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">♿</span>
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-labelledby={titleId}
        className="a11y-dialog"
        onClose={handleClose}
      >
        <div className="flex items-start justify-between gap-3">
          <h2 id={titleId} className="font-serif text-xl font-semibold text-navy">
            Accessibility Options
          </h2>
          <button
            type="button"
            className="a11y-control inline-flex w-auto items-center px-4"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
        </div>
        <p className="mt-3 text-base leading-relaxed text-navy">
          These tools are optional. You can use this website with a keyboard
          and screen reader without opening this panel.
        </p>
        <div className="mt-4 grid gap-2">
          <button type="button" className="a11y-control" onClick={increaseText}>
            Increase text size
          </button>
          <button type="button" className="a11y-control" onClick={decreaseText}>
            Decrease text size
          </button>
          <button type="button" className="a11y-control" onClick={resetText}>
            Reset text size
          </button>
          <button
            type="button"
            className="a11y-control"
            aria-pressed={settings.contrast}
            onClick={toggleContrast}
          >
            High contrast {settings.contrast ? '(on)' : '(off)'}
          </button>
          <button
            type="button"
            className="a11y-control"
            aria-pressed={settings.links}
            onClick={toggleLinks}
          >
            Enhanced link visibility {settings.links ? '(on)' : '(off)'}
          </button>
          <button
            type="button"
            className="a11y-control"
            aria-pressed={settings.motion}
            onClick={toggleMotion}
          >
            Reduce motion {settings.motion ? '(on)' : '(off)'}
          </button>
          <button type="button" className="a11y-control" onClick={reset}>
            Reset accessibility preferences
          </button>
        </div>
      </dialog>
    </>
  )

  return createPortal(widget, document.body)
}
