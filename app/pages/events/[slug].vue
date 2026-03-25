<script setup lang="ts">
import type { TicketTier } from '~/composables/useEventsCatalog'
import { formatCardDate, formatLongBadgeDate } from '~/utils/formatEventDate'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data: catalog, pending } = useEventsCatalog()

const event = computed(() => catalog.value?.events.find((e) => e.slug === slug.value))

watch(
  [pending, catalog, slug],
  () => {
    if (pending.value) return
    if (!catalog.value) return
    if (!event.value) {
      throw createError({ statusCode: 404, statusMessage: 'Event not found' })
    }
  },
  { immediate: true }
)

const step = ref(1)
const qty = reactive<Record<string, number>>({})
const bookingRef = ref('')

watch(
  event,
  (e) => {
    if (!e) return
    for (const t of e.tickets) {
      if (qty[t.id] === undefined) qty[t.id] = 0
    }
  },
  { immediate: true }
)

function ticketById(id: string): TicketTier | undefined {
  return event.value?.tickets.find((t) => t.id === id)
}

const orderLines = computed(() => {
  const e = event.value
  if (!e) return { lines: [] as { label: string; sub: number }[], total: 0 }
  const lines: { label: string; sub: number }[] = []
  let total = 0
  for (const t of e.tickets) {
    const q = qty[t.id] ?? 0
    if (q > 0) {
      const sub = q * t.price
      total += sub
      lines.push({ label: `${t.name} × ${q}`, sub })
    }
  }
  return { lines, total }
})

const currency = computed(() => event.value?.currency ?? '€')

function changeQty(id: string, delta: number) {
  const t = ticketById(id)
  if (!t) return
  const next = Math.max(0, (qty[id] ?? 0) + delta)
  qty[id] = next
}

function goStep(n: number) {
  step.value = n
  nextTick(() => {
    document.getElementById('booking-anchor')?.scrollIntoView({ behavior: 'smooth' })
  })
}

function completeBooking() {
  const y = new Date().getFullYear()
  const num = Math.floor(1000 + Math.random() * 9000)
  bookingRef.value = `SPK-${y}-${num}`
  goStep(4)
}

function resetBooking() {
  if (event.value) {
    for (const t of event.value.tickets) qty[t.id] = 0
  }
  goStep(1)
}

function scrollToBooking() {
  if (import.meta.client) {
    document.getElementById('booking-anchor')?.scrollIntoView({ behavior: 'smooth' })
  }
}

const bgClass = computed(() => {
  const v = event.value?.imageVariant ?? 1
  const map: Record<number, string> = {
    1: 'bg-ov-card-1',
    2: 'bg-ov-card-2',
    3: 'bg-ov-card-3',
    4: 'bg-ov-card-4',
    5: 'bg-ov-card-5'
  }
  return map[v] ?? 'bg-ov-card-1'
})

useHead({
  title: () => (event.value ? `${event.value.title} — Sparkle` : 'Event — Sparkle'),
})
</script>

<template>
  <div v-if="event">
    <section
      class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] min-h-[70vh] lg:min-h-[85vh] overflow-hidden"
    >
      <div class="relative min-h-[280px] lg:min-h-[500px] order-2 lg:order-1">
        <div
          class="w-full h-full min-h-[280px] lg:min-h-[500px] lg:absolute lg:inset-0 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl"
          :class="bgClass"
        >
          {{ event.emoji }}
        </div>
      </div>
      <div
        class="bg-ink px-6 py-12 sm:px-10 sm:py-16 lg:py-20 flex flex-col justify-center relative order-1 lg:order-2 before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_80%_0%,rgba(201,168,76,0.08)_0%,transparent_60%)] before:pointer-events-none"
      >
        <div class="relative z-[1]">
          <div
            class="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-3 py-2 rounded-sm font-mono text-[0.68rem] tracking-[0.12em] text-gold mb-6"
          >
            📅 {{ formatLongBadgeDate(event.date, event.weekday, event.time) }}
          </div>
          <h1 class="font-display font-black text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.05] text-cream mb-5">
            <template v-for="(line, i) in event.titleLines" :key="i">
              <em
                v-if="event.titleEmphasisLineIndex === i"
                class="font-display italic text-gold-light"
                >{{ line }}</em
              >
              <template v-else>{{ line }}</template>
              <br v-if="i < event.titleLines.length - 1" />
            </template>
          </h1>
          <p class="text-[0.92rem] leading-[1.75] text-cream/55 font-light mb-8 max-w-lg">
            {{ event.description }}
          </p>
          <div class="grid grid-cols-2 gap-3 mb-8">
            <div class="bg-cream/[0.05] border border-cream/[0.08] p-4">
              <div class="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/30 mb-1">
                Venue
              </div>
              <div class="text-sm text-cream font-medium">{{ event.venue }}</div>
            </div>
            <div class="bg-cream/[0.05] border border-cream/[0.08] p-4">
              <div class="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/30 mb-1">
                Location
              </div>
              <div class="text-sm text-cream font-medium">{{ event.city }}</div>
            </div>
            <div class="bg-cream/[0.05] border border-cream/[0.08] p-4">
              <div class="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/30 mb-1">
                Duration
              </div>
              <div class="text-sm text-cream font-medium">{{ event.duration }}</div>
            </div>
            <div class="bg-cream/[0.05] border border-cream/[0.08] p-4">
              <div class="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/30 mb-1">
                Capacity
              </div>
              <div class="text-sm text-cream font-medium">{{ event.capacity }}</div>
            </div>
          </div>
          <button
            type="button"
            class="bg-ink text-cream border border-cream/20 px-8 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.15em] hover:bg-[#1e1a16] w-fit rounded-sm"
            @click="scrollToBooking"
          >
            Reserve Your Seats ↓
          </button>
        </div>
      </div>
    </section>

    <section
      class="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 px-6 sm:px-10 lg:px-16 py-16 lg:py-20 max-w-[1400px] mx-auto"
    >
      <div>
        <h2 class="font-display font-bold text-2xl sm:text-[1.6rem] text-ink mb-5">About the Evening</h2>
        <p class="text-[0.92rem] leading-[1.8] text-ink/60 font-light whitespace-pre-line">
          {{ event.about }}
        </p>
      </div>
      <div>
        <h2 class="font-display font-bold text-2xl sm:text-[1.6rem] text-ink mb-5">Line-up</h2>
        <div
          v-for="row in event.lineup"
          :key="row.num"
          class="flex items-center gap-4 py-4 border-b border-ink/[0.06]"
        >
          <span class="font-mono text-[0.65rem] text-gold w-6 shrink-0">{{ row.num }}</span>
          <span class="font-semibold text-ink flex-1 min-w-0">{{ row.name }}</span>
          <span class="font-mono text-[0.72rem] text-ink/35 shrink-0">{{ row.time }}</span>
        </div>
      </div>
    </section>

    <section id="booking-anchor" class="bg-warm px-6 sm:px-10 lg:px-16 py-16 lg:py-20 scroll-mt-24">
      <div class="max-w-[900px] mx-auto">
        <div class="mb-10">
          <div class="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold mb-2">
            Secure your place
          </div>
          <h2 class="font-display font-bold text-3xl sm:text-[2.4rem] text-ink">Book Your Tickets</h2>
        </div>

        <div class="relative flex mb-10 sm:mb-14 before:absolute before:top-4 before:left-0 before:right-0 before:h-px before:bg-ink/12">
          <div
            v-for="s in 4"
            :key="s"
            class="flex-1 flex flex-col items-center gap-2 relative z-[1]"
          >
            <div
              class="w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-[0.7rem] font-medium bg-warm transition-colors"
              :class="
                step === s
                  ? 'bg-ink border-ink text-cream'
                  : step > s
                    ? 'bg-gold border-gold text-ink'
                    : 'border-ink/15 text-ink/40'
              "
            >
              {{ s }}
            </div>
            <span
              class="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-center"
              :class="step === s ? 'text-ink' : 'text-ink/35'"
            >
              {{ ['Tickets', 'Details', 'Payment', 'Confirm'][s - 1] }}
            </span>
          </div>
        </div>

        <div v-show="step === 1">
          <div class="bg-paper border-[1.5px] border-ink/12 rounded-sm overflow-hidden">
            <div
              v-for="t in event.tickets"
              :key="t.id"
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-5 border-b border-ink/[0.06] last:border-0 hover:bg-gold/[0.04] transition-colors"
            >
              <div>
                <div class="font-semibold text-ink mb-0.5">{{ t.name }}</div>
                <div class="text-sm text-ink/40">{{ t.description }}</div>
              </div>
              <div class="flex items-center gap-4 sm:gap-6 shrink-0">
                <div class="font-display font-bold text-lg text-ink">{{ currency }}{{ t.price }}</div>
                <div class="flex items-center border-[1.5px] border-ink/15">
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center hover:bg-ink/5 text-lg leading-none"
                    aria-label="Decrease"
                    @click="changeQty(t.id, -1)"
                  >
                    −
                  </button>
                  <div
                    class="w-8 text-center font-mono text-sm border-x border-ink/10 py-1"
                  >
                    {{ qty[t.id] ?? 0 }}
                  </div>
                  <button
                    type="button"
                    class="w-8 h-8 flex items-center justify-center hover:bg-ink/5 text-lg leading-none"
                    aria-label="Increase"
                    @click="changeQty(t.id, 1)"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-ink text-cream p-6 sm:p-8 mt-6 rounded-sm">
            <div class="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold mb-4">
              Order Summary
            </div>
            <template v-if="orderLines.lines.length">
              <div
                v-for="(ln, i) in orderLines.lines"
                :key="i"
                class="flex justify-between text-sm py-2 border-b border-cream/[0.06] text-cream/70"
              >
                <span>{{ ln.label }}</span>
                <span>{{ currency }}{{ ln.sub }}</span>
              </div>
            </template>
            <div v-else class="text-sm text-cream/30 italic py-2">No tickets selected yet</div>
            <div class="flex justify-between items-center pt-4 mt-2">
              <span class="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-cream/50"
                >Total</span
              >
              <span class="font-display font-bold text-3xl text-gold-light"
                >{{ currency }}{{ orderLines.total }}</span
              >
            </div>
          </div>

          <div class="flex justify-end mt-8">
            <button
              type="button"
              class="bg-ink text-cream px-6 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] hover:bg-[#1e1a16] rounded-sm"
              @click="goStep(2)"
            >
              Continue to Details →
            </button>
          </div>
        </div>

        <div v-show="step === 2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div class="flex flex-col gap-2">
              <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
                >First Name</label
              >
              <input
                type="text"
                placeholder="Alexandra"
                class="bg-paper border-[1.5px] border-ink/12 px-4 py-3.5 text-sm outline-none focus:border-gold rounded-sm"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
                >Last Name</label
              >
              <input
                type="text"
                placeholder="Beaumont"
                class="bg-paper border-[1.5px] border-ink/12 px-4 py-3.5 text-sm outline-none focus:border-gold rounded-sm"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
                >Email</label
              >
              <input
                type="email"
                placeholder="alex@example.com"
                class="bg-paper border-[1.5px] border-ink/12 px-4 py-3.5 text-sm outline-none focus:border-gold rounded-sm"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
                >Phone</label
              >
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                class="bg-paper border-[1.5px] border-ink/12 px-4 py-3.5 text-sm outline-none focus:border-gold rounded-sm"
              />
            </div>
            <div class="flex flex-col gap-2 sm:col-span-2">
              <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
                >Special Requests</label
              >
              <textarea
                placeholder="Accessibility, dietary, etc."
                rows="4"
                class="bg-paper border-[1.5px] border-ink/12 px-4 py-3.5 text-sm outline-none focus:border-gold resize-y min-h-[100px] rounded-sm"
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-between gap-4 mt-8">
            <button
              type="button"
              class="border-[1.5px] border-ink/25 px-6 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] hover:border-ink hover:bg-ink/[0.04] rounded-sm"
              @click="goStep(1)"
            >
              ← Back
            </button>
            <button
              type="button"
              class="bg-ink text-cream px-6 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] hover:bg-[#1e1a16] rounded-sm"
              @click="goStep(3)"
            >
              Proceed to Payment →
            </button>
          </div>
        </div>

        <div v-show="step === 3">
          <div class="flex flex-col gap-2 mb-4">
            <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
              >Cardholder</label
            >
            <input
              type="text"
              placeholder="Alexandra Beaumont"
              class="bg-paper border-[1.5px] border-ink/12 px-4 py-3.5 text-sm outline-none focus:border-gold rounded-sm"
            />
          </div>
          <div class="flex flex-col gap-2 mb-4">
            <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
              >Card Number</label
            >
            <div
              class="flex items-center gap-2 bg-paper border-[1.5px] border-ink/12 px-4 rounded-sm focus-within:border-gold"
            >
              <span class="opacity-35 text-lg">💳</span>
              <input
                type="text"
                placeholder="1234  5678  9012  3456"
                maxlength="22"
                class="flex-1 border-0 py-3.5 text-sm outline-none bg-transparent"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="flex flex-col gap-2">
              <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
                >Expiry</label
              >
              <input
                type="text"
                placeholder="MM / YY"
                class="bg-paper border-[1.5px] border-ink/12 px-4 py-3.5 text-sm outline-none focus:border-gold rounded-sm"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
                >CVV</label
              >
              <input
                type="text"
                placeholder="•••"
                maxlength="4"
                class="bg-paper border-[1.5px] border-ink/12 px-4 py-3.5 text-sm outline-none focus:border-gold rounded-sm"
              />
            </div>
          </div>

          <div class="bg-ink text-cream p-6 rounded-sm">
            <div class="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold mb-4">
              Payment Summary
            </div>
            <template v-if="orderLines.lines.length">
              <div
                v-for="(ln, i) in orderLines.lines"
                :key="i"
                class="flex justify-between text-sm py-2 border-b border-cream/[0.06] text-cream/70"
              >
                <span>{{ ln.label }}</span>
                <span>{{ currency }}{{ ln.sub }}</span>
              </div>
            </template>
            <div class="flex justify-between items-center pt-4 mt-2">
              <span class="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-cream/50"
                >Charging today</span
              >
              <span class="font-display font-bold text-3xl text-gold-light"
                >{{ currency }}{{ orderLines.total }}</span
              >
            </div>
          </div>

          <div class="flex flex-wrap justify-between gap-4 mt-8">
            <button
              type="button"
              class="border-[1.5px] border-ink/25 px-6 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] hover:border-ink rounded-sm"
              @click="goStep(2)"
            >
              ← Back
            </button>
            <button
              type="button"
              class="bg-ink text-cream px-6 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] hover:bg-[#1e1a16] rounded-sm"
              @click="completeBooking()"
            >
              Complete Booking ✓
            </button>
          </div>
        </div>

        <div v-show="step === 4" class="text-center py-8">
          <div
            class="w-20 h-20 bg-ink rounded-full flex items-center justify-center text-3xl mx-auto mb-8 animate-popIn"
          >
            {{ event.emoji }}
          </div>
          <h2 class="font-display font-bold text-3xl sm:text-[2.5rem] text-ink mb-3">You're going!</h2>
          <p class="text-[0.95rem] text-ink/50 font-light mb-10">
            Your tickets have been confirmed. Check your email for details.
          </p>
          <div
            class="inline-block bg-ink text-cream px-10 py-8 relative mb-10 rounded-sm text-left min-w-[280px] max-w-full before:absolute before:w-6 before:h-6 before:bg-warm before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-3 after:absolute after:w-6 after:h-6 after:bg-warm after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-right-3"
          >
            <div class="font-display font-bold text-xl text-cream mb-1">{{ event.title }}</div>
            <div class="font-mono text-[0.7rem] tracking-[0.12em] text-gold mb-6 uppercase">
              {{ formatCardDate(event.date).toUpperCase() }} · {{ event.time }}
            </div>
            <div
              class="h-px bg-[repeating-linear-gradient(to_right,rgba(245,240,232,0.2)_0px,rgba(245,240,232,0.2)_8px,transparent_8px,transparent_16px)] mb-6"
            />
            <div class="font-mono text-[0.65rem] tracking-[0.2em] text-cream/40 uppercase">
              Booking Reference
            </div>
            <div class="font-mono text-xl text-gold-light tracking-wider mt-1">{{ bookingRef }}</div>
          </div>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink
              to="/events"
              class="bg-ink text-cream px-6 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] hover:bg-[#1e1a16] rounded-sm inline-block"
            >
              Explore More Events
            </NuxtLink>
            <button
              type="button"
              class="border-[1.5px] border-ink/25 px-6 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] hover:border-ink rounded-sm"
              @click="resetBooking()"
            >
              Book Another
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else-if="pending" class="min-h-[50vh] flex items-center justify-center font-mono text-ink/40">
    Loading…
  </div>
</template>
