<script setup lang="ts">
const { data: catalog } = useEventsCatalog()

const bookHref = computed(() => {
  const featured = catalog.value?.events.find((e) => e.featured) ?? catalog.value?.events[0]
  return featured ? `/events/${featured.slug}#booking` : '/events'
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-[100] flex flex-wrap items-center justify-between gap-4 border-b border-gold/20 bg-cream/85 px-5 py-4 backdrop-blur-[14px] sm:px-10 sm:py-5"
  >
    <NuxtLink
      to="/"
      class="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <SparkleLogo variant="light" />
    </NuxtLink>
    <nav
      class="flex flex-wrap items-center gap-6 sm:gap-10 font-mono text-[0.72rem] uppercase tracking-[0.14em]"
      aria-label="Main"
    >
      <NuxtLink
        to="/"
        class="text-ink/65 hover:text-ink transition-opacity"
        active-class="!opacity-100 !text-ink font-medium"
        exact-active-class="!opacity-100 !text-ink font-medium"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/events"
        class="text-ink/65 hover:text-ink transition-opacity"
        active-class="!opacity-100 !text-ink font-medium"
      >
        Events
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="text-ink/65 hover:text-ink transition-opacity"
        active-class="!opacity-100 !text-ink font-medium"
      >
        Contact
      </NuxtLink>
      <NuxtLink
        :to="bookHref"
        class="bg-ink !text-cream px-4 py-2.5 uppercase tracking-[0.12em] opacity-100 hover:bg-[#1e1a16] transition-colors rounded-sm"
      >
        Book Now
      </NuxtLink>
    </nav>
  </header>
</template>
