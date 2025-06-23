import { useState, useEffect } from 'react'
import { UserDiscoveryFilters, UserRole } from '../services/userService'

interface ProfileFiltersProps {
  value: UserDiscoveryFilters
  onChange: (filters: UserDiscoveryFilters) => void
  availableRoles?: UserRole[]
  availableLocations?: string[]
  availableInterests?: string[]
}

const defaultRoles: UserRole[] = ['investor', 'filmmaker', 'talent', 'brand']

export const ProfileFilters = ({
  value,
  onChange,
  availableRoles = defaultRoles,
  availableLocations = [],
}: ProfileFiltersProps) => {
  const [search, setSearch] = useState(value?.interests?.join(', ') || '')
  const [debouncedSearch, setDebouncedSearch] = useState(search)

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 400)
    return () => clearTimeout(handler)
  }, [search])

  // Update parent when debounced search changes
  useEffect(() => {
    onChange({
      ...value,
      interests: debouncedSearch
        ? debouncedSearch
            .split(',')
            .map((s: string) => s.trim())
            .filter(Boolean)
        : [],
    })
    // eslint-disable-next-line
  }, [debouncedSearch])

  return (
    <form className="flex flex-wrap gap-2 items-center justify-between mb-4 w-full">
      {/* Role filter */}
      <label className="flex flex-col text-xs text-blue-200">
        Role
        <select
          className="rounded px-2 py-1 bg-white/20 text-white focus:outline-none"
          value={value.role || ''}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onChange({ ...value, role: e.target.value as UserRole })
          }
        >
          <option value="">All</option>
          {availableRoles.map(role => (
            <option key={role} value={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </option>
          ))}
        </select>
      </label>
      {/* Location filter */}
      <label className="flex flex-col text-xs text-blue-200">
        Location
        <select
          className="rounded px-2 py-1 bg-white/20 text-white focus:outline-none"
          value={value.location || ''}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onChange({ ...value, location: e.target.value })
          }
        >
          <option value="">All</option>
          {availableLocations.map(loc => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </label>
      {/* Interests filter (text input for now) */}
      <label className="flex flex-col text-xs text-blue-200 flex-1 min-w-[120px]">
        Interests
        <input
          type="text"
          className="rounded px-2 py-1 bg-white/20 text-white focus:outline-none"
          placeholder="e.g. Drama, Tech, Acting"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
      </label>
    </form>
  )
}

export default ProfileFilters
