<script setup lang="ts">
const topics = [
  'General Enquiry',
  'Booking Help',
  'Group Booking',
  'Press & Media',
  'Partnership',
  'Other'
] as const

const selectedTopics = ref<string[]>(['Group Booking'])
const submitted = ref(false)

function toggleTopic(t: string) {
  const cur = selectedTopics.value
  const i = cur.indexOf(t)
  selectedTopics.value =
    i === -1 ? [...cur, t] : cur.filter((x) => x !== t)
}

function submitContact() {
  submitted.value = true
}
</script>

<template>
  <div>
    <section
      class="relative px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 pb-16 lg:pb-20 bg-ink text-cream min-h-[45vh] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end overflow-hidden before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(ellipse_at_10%_50%,rgba(201,168,76,0.06)_0%,transparent_50%),repeating-linear-gradient(135deg,transparent,transparent_60px,rgba(255,255,255,0.008)_60px,rgba(255,255,255,0.008)_61px)]"
    >
      <div class="relative z-[1]">
        <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-[4rem] leading-[0.95] text-cream">
          Let's<br />talk<br /><em class="italic text-gold-light font-display">events.</em>
        </h1>
      </div>
      <div class="relative z-[1] pb-2">
        <p class="text-[0.95rem] leading-[1.75] text-cream/45 font-light mb-8 max-w-md">
          Whether you're planning a corporate gala, a private recital, or simply want help finding the
          perfect evening — we're here for every question.
        </p>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.08em] text-cream/50">
            <span class="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
            hello@sparkle.events
          </div>
          <div class="flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.08em] text-cream/50">
            <span class="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
            +1 (212) 555-0194
          </div>
          <div class="flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.08em] text-cream/50">
            <span class="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
            Mon–Fri · 9:00 AM – 6:00 PM EST
          </div>
          <div class="flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.08em] text-cream/50">
            <span class="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
            540 Fifth Avenue, New York, NY
          </div>
        </div>
      </div>
    </section>

    <section
      class="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 px-6 sm:px-10 lg:px-16 py-16 lg:py-20 max-w-[1400px] mx-auto"
    >
      <div class="pt-2 space-y-0">
        <div class="py-6 border-b border-ink/[0.08]">
          <div class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold mb-1">
            General Enquiries
          </div>
          <div class="text-[0.92rem] font-medium text-ink">hello@sparkle.events</div>
          <div class="text-[0.8rem] text-ink/40 mt-1">Response within 24 hours</div>
        </div>
        <div class="py-6 border-b border-ink/[0.08]">
          <div class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold mb-1">
            Group Bookings
          </div>
          <div class="text-[0.92rem] font-medium text-ink">groups@sparkle.events</div>
          <div class="text-[0.8rem] text-ink/40 mt-1">10+ attendees, bespoke pricing</div>
        </div>
        <div class="py-6 border-b border-ink/[0.08]">
          <div class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold mb-1">
            Press & Partnerships
          </div>
          <div class="text-[0.92rem] font-medium text-ink">press@sparkle.events</div>
          <div class="text-[0.8rem] text-ink/40 mt-1">Media & collaboration enquiries</div>
        </div>
        <div class="py-6 border-b border-ink/[0.08]">
          <div class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold mb-1">Phone</div>
          <div class="text-[0.92rem] font-medium text-ink">+1 (212) 555-0194</div>
          <div class="text-[0.8rem] text-ink/40 mt-1">Mon–Fri, 9:00 AM – 6:00 PM EST</div>
        </div>
      </div>

      <div class="bg-warm p-6 sm:p-10 lg:p-12">
        <div v-if="!submitted" id="contact-form-content">
          <h2 class="font-display font-bold text-2xl sm:text-[1.8rem] text-ink mb-1">
            Send us a message
          </h2>
          <p class="text-[0.85rem] text-ink/45 mb-8">We'd love to hear from you.</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div class="flex flex-col gap-2">
              <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
                >First Name</label
              >
              <input
                type="text"
                placeholder="First"
                class="bg-paper border-[1.5px] border-ink/12 px-4 py-3 text-sm outline-none focus:border-gold rounded-sm"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
                >Last Name</label
              >
              <input
                type="text"
                placeholder="Last"
                class="bg-paper border-[1.5px] border-ink/12 px-4 py-3 text-sm outline-none focus:border-gold rounded-sm"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2 mb-4">
            <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              class="w-full bg-paper border-[1.5px] border-ink/12 px-4 py-3 text-sm outline-none focus:border-gold rounded-sm"
            />
          </div>
          <div class="flex flex-col gap-2 mb-4">
            <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50">Topic</label>
            <div class="flex flex-wrap gap-2 mt-1">
              <button
                v-for="t in topics"
                :key="t"
                type="button"
                class="font-mono text-[0.65rem] tracking-[0.1em] px-3 py-2 border-[1.5px] rounded-sm transition-colors bg-paper border-ink/12 hover:bg-ink hover:text-cream hover:border-ink"
                :class="selectedTopics.includes(t) ? '!bg-ink !text-cream !border-ink' : ''"
                @click="toggleTopic(t)"
              >
                {{ t }}
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-2 mb-8">
            <label class="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/50"
              >Message</label
            >
            <textarea
              placeholder="Tell us how we can help..."
              rows="5"
              class="w-full mt-2 bg-paper border-[1.5px] border-ink/12 px-4 py-3 text-sm outline-none focus:border-gold resize-y min-h-[120px] rounded-sm"
            />
          </div>
          <button
            type="button"
            class="w-full bg-ink text-cream py-4 font-mono text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#1e1a16] transition-colors rounded-sm"
            @click="submitContact"
          >
            Send Message →
          </button>
        </div>

        <div v-else class="text-center py-8">
          <div class="text-4xl mb-4 animate-popIn">✉️</div>
          <h3 class="font-display font-bold text-[1.8rem] text-ink mb-2">Message received!</h3>
          <p class="text-[0.88rem] text-ink/45">
            We'll get back to you within 24 hours.<br />
            In the meantime, why not explore upcoming events?
          </p>
          <NuxtLink
            to="/events"
            class="inline-block mt-8 bg-ink text-cream px-6 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] rounded-sm hover:bg-[#1e1a16]"
          >
            Browse Events →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
