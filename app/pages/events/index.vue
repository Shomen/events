<template>
  <div class="space-y-8">
    <header class="space-y-3 max-w-3xl">
      <p class="text-sm font-medium text-sky-600 uppercase tracking-wide">
        Browse
      </p>
      <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
        Events
      </h1>
      <p class="text-slate-600 leading-relaxed text-lg">
        Explore upcoming experiences, filter by category and date, then open an
        event to see details and book a spot. Event data will load from a JSON
        file in a later step; filters and the booking flow will plug in here.
      </p>
    </header>

    <div
      class="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 sm:p-10 text-center"
    >
      <p class="text-slate-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. This area will
        list event cards with category badges, dates, and “Book” actions. Until
        then, use the navigation to explore other pages.
      </p>
      <NuxtLink
        to="/contact"
        class="inline-block mt-6 text-sm font-medium text-sky-600 hover:text-sky-700"
      >
        Questions? Contact us →
      </NuxtLink>
    </div>
  </div>
</template>
