<template>
  <footer class="border-t border-slate-200 bg-white mt-auto">
    <div
      class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-600"
    >
      <p class="text-slate-500">
        © {{ year }} Events. Demo app — bookings are not processed.
      </p>
      <nav class="flex flex-wrap gap-x-5 gap-y-1" aria-label="Footer">
        <NuxtLink to="/" class="hover:text-slate-900 transition-colors">Home</NuxtLink>
        <NuxtLink to="/events" class="hover:text-slate-900 transition-colors">Events</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-slate-900 transition-colors">Contact</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
