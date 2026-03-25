<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEventsCatalog } from '../../composables/useEventsCatalog'

const route = useRoute()
const router = useRouter()
const { data: catalog, pending, error } = useEventsCatalog()

const selectedCategoryId = computed(() => {
  const q = route.query.category
  return typeof q === 'string' ? q : undefined
})

const selectedMonth = ref<string>('')

const monthOptions = computed(() => {
  const set = new Set<string>()
  for (const e of catalog.value?.events ?? []) {
    set.add(e.date.slice(0, 7))
  }
  const months = [...set].sort()
  return months.map((m) => ({ value: m, label: formatMonthLabel(m) }))
})

function formatMonthLabel(ym: string) {
  const match = ym.match(/^(\d{4})-(\d{2})$/)
  if (!match) return ym
  const year = Number(match[1])
  const monthIndex = Number(match[2]) - 1
  const d = new Date(Date.UTC(year, monthIndex, 1))
  return new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(d)
}

const filteredEvents = computed(() => {
  let list = [...(catalog.value?.events ?? [])]
  const cat = catalog.value?.categories.find((c) => c.id === selectedCategoryId.value)
  if (cat) {
    list = list.filter((e) => e.category === cat.name)
  }
  if (selectedMonth.value) {
    list = list.filter((e) => e.date.startsWith(selectedMonth.value))
  }
  list.sort((a, b) => a.date.localeCompare(b.date))
  return list
})

function setCategory(id: string | undefined) {
  router.push({ path: '/events', query: id ? { category: id } : {} })
}

function clearFilters() {
  selectedMonth.value = ''
  setCategory(undefined)
}
</script>

<template>
  <div class="px-6 sm:px-10 lg:px-16 pb-20 max-w-[1400px] mx-auto">
    <header class="pt-4 sm:pt-8 pb-10 max-w-3xl">
      <div class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold mb-2">
        Browse
      </div>
      <h1 class="font-display font-bold text-3xl sm:text-[2.75rem] leading-tight text-ink tracking-tight mb-4">
        Events
      </h1>
      <p class="text-ink/55 leading-relaxed text-base sm:text-lg font-light">
        Filter by category and month, then open an event for full details and booking. Data loads from
        <code class="font-mono text-xs bg-warm px-1.5 py-0.5 rounded">/data/events.json</code>.
      </p>
    </header>

    <div
      class="flex flex-col lg:flex-row lg:flex-wrap lg:items-end gap-6 lg:gap-10 mb-10 pb-8 border-b border-ink/10"
    >
      <div class="flex-1 min-w-0">
        <p class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/40 mb-3">
          Category
        </p>
        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            class="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-3 py-2 border-[1.5px] rounded-sm transition-colors"
            :class="
              !selectedCategoryId
                ? 'bg-ink text-cream border-ink'
                : 'bg-paper text-ink border-ink/12 hover:border-ink/30'
            "
            @click="setCategory(undefined)"
          >
            All
          </button>
          <button
            v-for="c in catalog?.categories ?? []"
            :key="c.id"
            type="button"
            class="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-3 py-2 border-[1.5px] rounded-sm transition-colors inline-flex items-center gap-2"
            :class="
              selectedCategoryId === c.id
                ? 'bg-ink text-cream border-ink'
                : 'bg-paper text-ink border-ink/12 hover:border-ink/30'
            "
            @click="setCategory(c.id)"
          >
            <span>{{ c.icon }}</span> {{ c.name }}
          </button>
        </div>
      </div>
      <div class="w-full sm:w-auto lg:w-56 shrink-0">
        <p class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/40 mb-3">
          Month
        </p>
        <select
          v-model="selectedMonth"
          class="w-full bg-paper border-[1.5px] border-ink/12 px-4 py-3 font-sans text-sm text-ink rounded-sm outline-none focus:border-gold cursor-pointer"
        >
          <option value="">All upcoming</option>
          <option v-for="m in monthOptions" :key="m.value" :value="m.value">
            {{ m.label }}
          </option>
        </select>
      </div>
    </div>

    <p v-if="error" class="font-mono text-sm text-rust mb-8">Could not load events.</p>

    <div v-if="pending" class="font-mono text-sm text-ink/40 py-16">Loading…</div>

    <div
      v-else-if="filteredEvents.length === 0"
      class="text-center py-16 border border-dashed border-ink/15 bg-cream/50 rounded-sm"
    >
      <p class="text-ink/50 font-light">No events match these filters.</p>
      <button
        type="button"
        class="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-gold hover:text-ink"
        @click="clearFilters"
      >
        Clear filters
      </button>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-px bg-ink/10">
      <EventCard v-for="ev in filteredEvents" :key="ev.slug" :event="ev" />
    </div>
  </div>
</template>
