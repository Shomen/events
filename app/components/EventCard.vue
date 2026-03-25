<script setup lang="ts">
import type { CatalogEvent } from '~/composables/useEventsCatalog'
import { formatCardDate } from '~/utils/formatEventDate'

const props = withDefaults(
  defineProps<{
    event: CatalogEvent
    large?: boolean
  }>(),
  { large: false },
)

const bgClass = computed(() => {
  const map: Record<number, string> = {
    1: 'bg-ov-card-1',
    2: 'bg-ov-card-2',
    3: 'bg-ov-card-3',
    4: 'bg-ov-card-4',
    5: 'bg-ov-card-5',
  }
  return map[props.event.imageVariant] ?? 'bg-ov-card-1'
})

const cardInfo = computed(
  () => `${formatCardDate(props.event.date)} · ${props.event.time} · ${props.event.city}`,
)
</script>

<template>
  <NuxtLink
    :to="`/events/${event.slug}`"
    class="group bg-cream overflow-hidden relative transition-transform duration-300 hover:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    :class="large ? 'lg:row-span-2' : ''"
  >
    <div
      class="w-full overflow-hidden bg-ink relative"
      :class="
        large
          ? 'aspect-[16/11] lg:aspect-auto lg:min-h-[280px] lg:h-[400px]'
          : 'aspect-[16/10]'
      "
    >
      <div
        class="w-full h-full min-h-[160px] flex items-center justify-center text-4xl sm:text-5xl"
        :class="bgClass"
      >
        {{ event.emoji }}
      </div>
    </div>
    <div class="px-5 sm:px-7 pt-5 pb-7 sm:pb-8">
      <div
        class="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-gold mb-2 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-gold"
      >
        {{ event.tag }}
      </div>
      <h3
        class="font-display font-bold text-ink leading-snug mb-2"
        :class="large ? 'text-xl sm:text-2xl lg:text-[1.7rem]' : 'text-[1.05rem] sm:text-lg'"
      >
        {{ event.title }}
      </h3>
      <p class="font-mono text-[0.68rem] text-ink/45 tracking-[0.05em] mb-4">
        {{ cardInfo }}
      </p>
      <div class="flex justify-between items-center">
        <div class="font-display font-bold text-lg sm:text-xl text-ink">
          {{ event.currency }}{{ event.priceFrom }}
          <small class="font-mono text-[0.65rem] font-normal text-ink/35">/ person</small>
        </div>
        <div
          class="w-9 h-9 border-[1.5px] border-ink/20 flex items-center justify-center text-sm transition-all duration-200 group-hover:bg-ink group-hover:text-cream group-hover:border-ink"
        >
          →
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
