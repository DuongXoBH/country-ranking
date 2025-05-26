import { useState, useCallback } from 'react'

export interface BaseFilterState {
  fromDate?: Date
  toDate?: Date
  [key: string]: string | number | boolean | Date | undefined
}

export function useBaseFilters<T extends BaseFilterState>(
  defaultFilters: T,
  onFilterApplied?: (filters: T) => void
) {
  const [filters, setFilters] = useState<T>(defaultFilters)

  const resetFilters = useCallback(() => {
    setFilters(defaultFilters)
  }, [defaultFilters])

  const updateFilter = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }, [])

  const applyFilters = useCallback(() => {
    if (onFilterApplied) {
      onFilterApplied(filters)
    }
  }, [filters, onFilterApplied])

  return {
    filters,
    setFilters,
    resetFilters,
    updateFilter,
    applyFilters,
  }
}
