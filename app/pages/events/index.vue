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
        Data comes from <code class="text-sm bg-slate-200/80 px-1.5 py-0.5 rounded">data/events.json</code>
        via <code class="text-sm bg-slate-200/80 px-1.5 py-0.5 rounded">useEvents()</code>.
        Category and date filters can plug in next.
      </p>
    </header>

    <div
      v-if="pending"
      class="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500"
      role="status"
    >
      Loading events…
    </div>

    <div
      v-else-if="error"
      class="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800 text-sm"
      role="alert"
    >
      Something went wrong loading events.
    </div>

    <ul
      v-else-if="events.length"
      class="grid gap-6 sm:grid-cols-2"
    >
      <li v-for="event in events" :key="event.id">
        <article
          class="h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-sky-200 hover:shadow-md transition-all"
        >
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span
              class="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800"
            >
              {{ event.category }}
            </span>
            <span class="text-xs text-slate-500">{{ event.priceLabel }}</span>
          </div>
          <h2 class="text-lg font-semibold text-slate-900 mb-2">
            {{ event.title }}
          </h2>
          <p class="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
            {{ event.summary }}
          </p>
          <dl class="text-xs text-slate-500 space-y-1 mb-4">
            <div class="flex gap-2">
              <dt class="font-medium text-slate-600 shrink-0">When</dt>
              <dd>{{ formatStarts(event.startsAt) }}</dd>
            </div>
            <div class="flex gap-2">
              <dt class="font-medium text-slate-600 shrink-0">Where</dt>
              <dd>{{ event.venue }}</dd>
            </div>
            <div class="flex gap-2">
              <dt class="font-medium text-slate-600 shrink-0">Spots</dt>
              <dd>{{ event.remaining }} / {{ event.capacity }} left</dd>
            </div>
          </dl>
          <NuxtLink
            :to="`/events/${event.slug}`"
            class="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            View & book
          </NuxtLink>
        </article>
      </li>
    </ul>

    <p
      v-else
      class="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center text-slate-500 text-sm"
    >
      No events available.
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Event } from '~~/types/event'

const { data, pending, error } = await useEvents()

const events = computed<Event[]>(() => data.value ?? [])

const formatStarts = useFormatEventStarts('medium')
</script>
