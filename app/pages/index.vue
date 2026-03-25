<script setup lang="ts">
import type { CatalogEvent } from '~/composables/useEventsCatalog'

const { data: catalog, pending, error } = useEventsCatalog()

const grid = computed(() => {
  const all = catalog.value?.events.filter((e) => e.featuredOnHome) ?? []
  const feat = all.find((e) => e.featured) ?? all[0]
  const others = all.filter((e) => e.slug !== feat?.slug)
  return { feat, others }
})

function formatFeaturedMeta(e: CatalogEvent) {
  const d = new Date(`${e.date}T12:00:00Z`)
  const dateStr = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  return `${dateStr} · ${e.time} · ${e.venue}, ${e.city}`
}
</script>

<template>
  <div>
    <section
      class="min-h-[calc(100dvh-5rem)] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden animate-fade-up"
    >
      <div
        class="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-20 lg:pl-12 lg:pr-8 lg:py-24 order-2 lg:order-1"
      >
        <div
          class="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-gold mb-6 flex items-center gap-3 before:content-[''] before:w-8 before:h-px before:bg-gold"
        >
          Curated experiences
        </div>
        <h1
          class="font-display font-black text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-tight text-ink mb-8"
        >
          Where<br />moments<br /><em class="font-display not-italic text-rust block">become<br />memories.</em>
        </h1>
        <p class="text-base leading-[1.7] text-ink/55 max-w-[380px] mb-10 font-light">
          Discover extraordinary events — from intimate jazz evenings to grand orchestral galas. Every
          ticket is a doorway to something unforgettable.
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <NuxtLink
            to="/events"
            class="inline-block bg-ink text-cream px-8 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.15em] hover:bg-[#1e1a16] transition-colors relative overflow-hidden rounded-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
          >
            Explore Events
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-block border-[1.5px] border-ink/25 text-ink px-8 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.15em] hover:border-ink hover:bg-ink/[0.04] transition-all rounded-sm"
          >
            Get in Touch
          </NuxtLink>
        </div>
        <div
          v-if="catalog?.stats"
          class="flex flex-wrap gap-8 sm:gap-10 mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-ink/10"
        >
          <div>
            <div class="font-display font-bold text-3xl leading-none text-ink">
              {{ catalog.stats.eventsSeason }}<sup class="text-[0.45em] text-gold align-super">+</sup>
            </div>
            <div class="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink/40 mt-1">
              Events this season
            </div>
          </div>
          <div>
            <div class="font-display font-bold text-3xl leading-none text-ink">
              {{ catalog.stats.attendees }}
            </div>
            <div class="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink/40 mt-1">
              Happy attendees
            </div>
          </div>
          <div>
            <div class="font-display font-bold text-3xl leading-none text-ink">
              {{ catalog.stats.satisfaction }}
            </div>
            <div class="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink/40 mt-1">
              Satisfaction rate
            </div>
          </div>
        </div>
      </div>

      <div
        class="relative min-h-[420px] lg:min-h-0 bg-ink order-1 lg:order-2"
      >
        <div class="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
          <div class="absolute inset-0 bg-ov-pattern pointer-events-none" />

          <div
            class="absolute top-24 right-6 sm:right-8 bg-cream px-4 py-3 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.3) z-[3] animate-float hidden sm:block"
          >
            <div class="font-display font-bold text-xl text-ink leading-none">
              {{ catalog?.stats?.cities ?? '24' }}
            </div>
            <div class="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink/40 mt-1">
              Cities worldwide
            </div>
          </div>
          <div
            class="absolute top-1/2 left-4 sm:left-8 -translate-y-1/2 bg-cream px-4 py-3 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.3) z-[3] animate-float-delayed hidden md:block"
          >
            <div class="font-display font-bold text-xl text-ink leading-none">
              ⭐ {{ catalog?.stats?.rating ?? '4.9' }}
            </div>
            <div class="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink/40 mt-1">
              Average rating
            </div>
          </div>

          <div
            v-if="grid.feat"
            class="relative z-[2] bg-cream/[0.06] border border-cream/10 backdrop-blur-md p-6 sm:p-8 rounded-sm"
          >
            <div class="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold mb-4">
              Featured Tonight
            </div>
            <div class="font-display font-bold text-xl sm:text-2xl text-cream leading-snug mb-2">
              {{ grid.feat.title }}
            </div>
            <div class="text-[0.82rem] text-cream/50">
              {{ formatFeaturedMeta(grid.feat) }}
            </div>
            <div class="font-display font-bold text-2xl sm:text-3xl text-gold-light mt-4">
              <span class="font-mono text-[0.7rem] font-normal text-cream/40 align-super mr-1">from</span
              >{{ grid.feat.currency }}{{ grid.feat.priceFrom }}
            </div>
            <NuxtLink
              :to="`/events/${grid.feat.slug}`"
              class="inline-block mt-6 bg-gold text-ink px-6 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-colors rounded-sm"
            >
              View Event →
            </NuxtLink>
          </div>
          <div v-else-if="pending" class="relative z-[2] text-cream/40 font-mono text-sm p-8">
            Loading…
          </div>
        </div>
      </div>
    </section>

    <section v-if="error" class="px-6 py-8 text-rust font-mono text-sm">
      Could not load events data.
    </section>

    <section class="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-warm border-t border-ink/[0.08]">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-10 sm:mb-12">
          <div>
            <div class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold mb-2">
              Browse by genre
            </div>
            <h2 class="font-display font-bold text-3xl sm:text-[2.4rem] leading-tight text-ink">
              Find your<br /><em class="font-display italic">kind of event</em>
            </h2>
          </div>
          <NuxtLink
            to="/events"
            class="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-ink/50 hover:text-ink self-start sm:self-auto shrink-0"
          >
            View all →
          </NuxtLink>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/[0.15]"
        >
          <NuxtLink
            v-for="c in catalog?.categories ?? []"
            :key="c.id"
            :to="{ path: '/events', query: { category: c.id } }"
            class="group bg-cream p-8 sm:p-10 relative overflow-hidden transition-colors before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-ink before:transition-all before:duration-300 before:z-0 hover:before:h-full"
          >
            <span
              class="text-3xl sm:text-4xl mb-5 block relative z-[1] transition-[filter] duration-300 group-hover:invert"
              >{{ c.icon }}</span
            >
            <div
              class="font-display font-bold text-lg sm:text-xl text-ink mb-1 relative z-[1] transition-colors duration-300 group-hover:text-cream"
            >
              {{ c.name }}
            </div>
            <div
              class="font-mono text-[0.68rem] tracking-[0.1em] text-ink/40 relative z-[1] transition-colors duration-300 group-hover:text-cream/70"
            >
              {{ c.count }} upcoming events
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8 sm:mb-12">
          <div>
            <div class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold mb-2">
              On the calendar
            </div>
            <h2 class="font-display font-bold text-3xl sm:text-[2.4rem] leading-tight text-ink">
              This month's<br /><em class="font-display italic">highlights</em>
            </h2>
          </div>
        </div>

        <div
          v-if="pending"
          class="font-mono text-sm text-ink/40 py-16"
        >
          Loading events…
        </div>
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-px bg-ink/10 auto-rows-auto lg:grid-rows-2"
        >
          <EventCard
            v-if="grid.feat"
            :event="grid.feat"
            large
          />
          <EventCard
            v-for="ev in grid.others"
            :key="ev.slug"
            :event="ev"
          />
        </div>
      </div>
    </section>
  </div>
</template>
