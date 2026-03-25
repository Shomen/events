<script setup lang="ts">
useHead({ title: 'About — Sparkle' })
</script>

<template>
  <div class="space-y-0">
    <section
      class="relative px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 pb-16 lg:pb-20 bg-ink text-cream min-h-[45vh] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end overflow-hidden before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(ellipse_at_10%_50%,rgba(201,168,76,0.06)_0%,transparent_50%),repeating-linear-gradient(135deg,transparent,transparent_60px,rgba(255,255,255,0.008)_60px,rgba(255,255,255,0.008)_61px)]"
    >
      <div class="relative z-[1]">
        <div class="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-gold mb-4">
          About Sparkle
        </div>
        <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-[4rem] leading-[0.95]">
          The stage<br />
          where<br /><em class="italic text-gold-light font-display">moments</em> begin.
        </h1>
        <p class="text-[0.95rem] leading-[1.75] text-cream/45 font-light max-w-xl mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div class="flex flex-wrap gap-4 items-center mt-10">
          <NuxtLink
            to="/events"
            class="inline-block bg-ink text-cream px-8 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] hover:bg-[#1e1a16] transition-colors rounded-sm"
          >
            Browse events
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-block border-[1.5px] border-cream/25 text-cream px-8 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] hover:bg-cream/[0.06] transition-colors rounded-sm"
          >
            Contact us
          </NuxtLink>
        </div>
      </div>

      <div class="relative z-[1]">
        <div class="bg-warm p-6 sm:p-10 lg:p-12 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
          <div class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/60 mb-5">
            Our promise (dummy)
          </div>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="mt-0.5 w-1.5 h-1.5 bg-ink rounded-full shrink-0" />
              <p class="text-ink/80 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-0.5 w-1.5 h-1.5 bg-ink rounded-full shrink-0" />
              <p class="text-ink/80 text-sm leading-relaxed">
                Curated categories, clear dates, and an accessible booking flow.
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-0.5 w-1.5 h-1.5 bg-ink rounded-full shrink-0" />
              <p class="text-ink/80 text-sm leading-relaxed">
                Responsive UI that stays consistent across devices.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="px-6 sm:px-10 lg:px-16 py-16 lg:py-20 bg-warm border-t border-ink/[0.08]">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-col lg:flex-row lg:items-start gap-12">
          <div class="lg:w-1/2">
            <div class="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/50 mb-4">
              Our story
            </div>
            <h2 class="font-display font-bold text-3xl sm:text-[2.4rem] leading-tight text-ink">
              Built for<br /><em class="font-display italic">real</em> booking journeys.
            </h2>
            <div class="mt-8 space-y-4">
              <p class="text-[0.95rem] leading-[1.85] text-ink/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed
                consectetur.
              </p>
              <p class="text-[0.95rem] leading-[1.85] text-ink/70">
                Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
            </div>
          </div>

          <div class="lg:w-1/2 space-y-6">
            <div class="bg-paper border-[1.5px] border-ink/12 p-6 sm:p-8 rounded-sm">
              <div class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold mb-3">
                Values (dummy)
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                  <span class="text-ink/70 text-sm leading-relaxed">Clarity beats clutter.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                  <span class="text-ink/70 text-sm leading-relaxed">Design for every screen size.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                  <span class="text-ink/70 text-sm leading-relaxed">Booking should feel simple.</span>
                </li>
              </ul>
            </div>

            <div class="bg-ink text-cream p-6 sm:p-8 rounded-sm">
              <div class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold mb-3">
                What’s next?
              </div>
              <p class="text-sm text-cream/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In the real app, this area
                could explain real booking confirmations, user accounts, and calendar views.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

