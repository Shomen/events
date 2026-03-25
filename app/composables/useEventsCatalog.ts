export interface TicketTier {
  id: string
  name: string
  description: string
  price: number
}

export interface LineupItem {
  num: string
  name: string
  time: string
}

export interface CatalogEvent {
  slug: string
  title: string
  titleLines: string[]
  titleEmphasisLineIndex: number | null
  category: string
  tag: string
  date: string
  weekday: string
  time: string
  doorsTime: string
  city: string
  venue: string
  priceFrom: number
  currency: string
  imageVariant: number
  emoji: string
  featured: boolean
  featuredOnHome: boolean
  duration: string
  capacity: string
  description: string
  about: string
  lineup: LineupItem[]
  tickets: TicketTier[]
}

export interface CategoryItem {
  id: string
  name: string
  icon: string
  count: number
}

export interface SiteStats {
  eventsSeason: number
  attendees: string
  satisfaction: string
  cities: number
  rating: string
}

export interface EventsCatalog {
  stats: SiteStats
  categories: CategoryItem[]
  events: CatalogEvent[]
}

export function useEventsCatalog() {
  return useFetch<EventsCatalog>('/data/events.json', {
    key: 'events-catalog',
  })
}
