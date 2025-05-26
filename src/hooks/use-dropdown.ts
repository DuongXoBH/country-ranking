import { useState, useRef, useCallback } from 'react'
import { useOutsideClick } from './use-outside-click'

/**
 * Hook to manage dropdown state with outside click handling
 * @param initialState - Whether dropdown should be open initially
 * @param onStateChange - Optional callback when dropdown state changes
 */
export function useDropdown(
  initialState = false,
  onStateChange?: (isOpen: boolean) => void
) {
  const [isOpen, setIsOpen] = useState(initialState)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = useCallback(() => {
    const newState = !isOpen
    setIsOpen(newState)
    if (onStateChange) {
      onStateChange(newState)
    }
  }, [isOpen, onStateChange])

  const closeDropdown = useCallback(() => {
    setIsOpen(false)
    if (onStateChange && isOpen) {
      onStateChange(false)
    }
  }, [isOpen, onStateChange])

  // Setup outside click handling
  useOutsideClick([dropdownRef], closeDropdown, isOpen)

  return {
    isOpen,
    setIsOpen,
    toggleDropdown,
    closeDropdown,
    dropdownRef,
  }
}

export default useDropdown
