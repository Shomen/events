import type { Event } from '~~/types/event'
import eventsSource from '~~/data/events.json'

/** JSON `import` may be the array or `{ default: array }` depending on bundler settings. */
function normalizeEventsImport(raw: unknown): Event[] {
  if (Array.isArray(raw)) return raw as Event[]
  if (
    raw &&
    typeof raw === 'object' &&
    'default' in raw &&
    Array.isArray((raw as { default: unknown }).default)
  ) {
    return (raw as { default: Event[] }).default
  }
  return []
}

function sortedEvents(list: Event[]): Event[] {
  return [...list].sort((a, b) => a.startsAt.localeCompare(b.startsAt))
}

const events = sortedEvents(normalizeEventsImport(eventsSource))

export function useEvents() {
  return useAsyncData(
    'events',
    async () => events,
    {
      default: () => [] as Event[],
    },
  )
}

export function useEventBySlug() {
  const route = useRoute()
  const slug = computed(() => {
    const p = route.params.slug
    if (typeof p === 'string') return p
    if (Array.isArray(p)) return p[0] ?? ''
    return ''
  })

  return useAsyncData(
    () => `event-${slug.value}`,
    async () => {
      const s = slug.value
      if (!s) return null
      return events.find((e) => e.slug === s) ?? null
    },
    {
      watch: [slug],
      default: () => null,
    },
  )
}
