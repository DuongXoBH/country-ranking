import { useEffect, RefObject } from 'react'

/**
 * Hook that handles clicking outside of specified element(s)
 * @param refs - Array of refs to elements that should not trigger the handler
 * @param handler - Callback function to execute when clicked outside
 * @param enabled - Whether the hook is active
 */
export function useOutsideClick(
  refs: RefObject<HTMLElement | null>[],
  handler: () => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return

    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside all provided refs
      const clickedOutside = refs.every(
        (ref) => !ref.current || !ref.current.contains(event.target as Node)
      )

      if (clickedOutside) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refs, handler, enabled])
}

export default useOutsideClick
