<script setup lang="ts">
import { computed } from 'vue'
import { useEventsCatalog } from '../composables/useEventsCatalog'

const { data: catalog } = useEventsCatalog()

const bookHref = computed(() => {
  const featured = catalog.value?.events.find((e) => e.featured) ?? catalog.value?.events[0]
  return featured ? `/events/${featured.slug}#booking` : '/events'
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-[100] border-b border-gold/20 bg-cream/85 px-5 py-4 backdrop-blur-[14px] sm:px-10 sm:py-5"
  >
    <div
      class="max-w-[1400px] mx-auto w-full flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
    >
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          <SparkleLogo variant="light" />
        </NuxtLink>

        <NuxtLink
          :to="bookHref"
          class="bg-ink !text-cream px-4 py-2.5 uppercase tracking-[0.12em] opacity-100 hover:bg-[#1e1a16] transition-colors rounded-sm sm:hidden"
        >
          Book Now
        </NuxtLink>
      </div>

      <nav
        class="flex flex-wrap justify-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.14em] sm:justify-end sm:flex-nowrap sm:gap-10 sm:text-[0.72rem]"
        aria-label="Main"
      >
        <NuxtLink
          to="/"
          class="text-ink/65 hover:text-ink transition-opacity px-2 py-1 rounded-sm"
          active-class="!opacity-100 !text-ink font-medium"
          exact-active-class="!opacity-100 !text-ink font-medium"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/events"
          class="text-ink/65 hover:text-ink transition-opacity px-2 py-1 rounded-sm"
          active-class="!opacity-100 !text-ink font-medium"
        >
          Events
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-ink/65 hover:text-ink transition-opacity px-2 py-1 rounded-sm"
          active-class="!opacity-100 !text-ink font-medium"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-ink/65 hover:text-ink transition-opacity px-2 py-1 rounded-sm"
          active-class="!opacity-100 !text-ink font-medium"
        >
          Contact
        </NuxtLink>

        <NuxtLink
          :to="bookHref"
          class="hidden sm:inline-flex bg-ink !text-cream px-4 py-2.5 uppercase tracking-[0.12em] opacity-100 hover:bg-[#1e1a16] transition-colors rounded-sm"
        >
          Book Now
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
