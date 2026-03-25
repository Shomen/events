<template>
  <header
    class="sticky top-0 z-10 border-b border-slate-200/80 bg-white/80 backdrop-blur-md"
  >
    <div
      class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 h-auto sm:h-14 py-3 sm:py-0"
    >
      <NuxtLink
        to="/"
        class="font-semibold text-lg tracking-tight text-slate-900 hover:text-sky-700 transition-colors"
      >
        Events
      </NuxtLink>
      <nav
        class="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm w-full sm:w-auto justify-start sm:justify-end"
        aria-label="Main"
      >
        <NuxtLink
          to="/"
          class="text-slate-600 hover:text-slate-900 transition-colors"
          active-class="text-sky-600 font-medium"
          exact-active-class="text-sky-600 font-medium"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/events"
          class="text-slate-600 hover:text-slate-900 transition-colors"
          active-class="text-sky-600 font-medium"
        >
          Events
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-slate-600 hover:text-slate-900 transition-colors"
          active-class="text-sky-600 font-medium"
        >
          Contact
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
