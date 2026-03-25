<template>
  <div class="space-y-8">
    <div v-if="pending" class="text-slate-500" role="status">
      Loading…
    </div>

    <div
      v-else-if="error"
      class="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800 text-sm"
      role="alert"
    >
      Could not load this event.
    </div>

    <template v-else-if="event">
      <nav class="text-sm">
        <NuxtLink
          to="/events"
          class="text-sky-600 hover:text-sky-700 font-medium"
        >
          ← All events
        </NuxtLink>
      </nav>

      <article class="max-w-3xl space-y-6">
        <header class="space-y-3">
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="inline-flex rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800"
            >
              {{ event.category }}
            </span>
            <span class="text-sm text-slate-500">{{ event.priceLabel }}</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {{ event.title }}
          </h1>
          <p class="text-slate-600 leading-relaxed text-lg">
            {{ event.summary }}
          </p>
        </header>

        <dl class="grid gap-3 text-sm sm:grid-cols-2 rounded-2xl border border-slate-200 bg-white p-6">
          <div>
            <dt class="font-medium text-slate-500">Starts</dt>
            <dd class="text-slate-900 mt-0.5">{{ formatStarts(event.startsAt) }}</dd>
          </div>
          <div>
            <dt class="font-medium text-slate-500">Venue</dt>
            <dd class="text-slate-900 mt-0.5">{{ event.venue }}</dd>
          </div>
          <div>
            <dt class="font-medium text-slate-500">Capacity</dt>
            <dd class="text-slate-900 mt-0.5">{{ event.capacity }} total</dd>
          </div>
          <div>
            <dt class="font-medium text-slate-500">Remaining</dt>
            <dd class="text-slate-900 mt-0.5">{{ event.remaining }} spots</dd>
          </div>
        </dl>

        <div class="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-6 text-sm text-slate-600">
          Booking form will go here in a later step. For now this page confirms routing and
          <code class="text-xs bg-slate-200/80 px-1 rounded">useEventBySlug()</code>.
        </div>
      </article>
    </template>

    <div v-else class="space-y-4 max-w-lg">
      <h1 class="text-2xl font-bold text-slate-900">Event not found</h1>
      <p class="text-slate-600 text-sm leading-relaxed">
        There is no event for this URL. Check the link or return to the list.
      </p>
      <NuxtLink
        to="/events"
        class="inline-flex text-sm font-medium text-sky-600 hover:text-sky-700"
      >
        ← Back to events
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: event, pending, error } = await useEventBySlug()

const formatStarts = useFormatEventStarts('full')

watchEffect(() => {
  if (event.value) {
    useHead({ title: `${event.value.title} · Events` })
  } else if (!pending.value) {
    useHead({ title: 'Event not found · Events' })
  }
})
</script>
