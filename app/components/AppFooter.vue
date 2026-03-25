<template>
  <div>
    <footer
      class="bg-ink px-6 py-12 sm:px-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 border-t border-cream/[0.06]"
    >
      <div class="sm:col-span-2 lg:col-span-1">
        <div class="mb-4">
          <SparkleLogo variant="dark" />
        </div>
        <p class="text-[0.82rem] leading-relaxed text-cream/30 font-light max-w-xs">
          Connecting people with extraordinary live experiences since 2018. Curated, crafted,
          unforgettable.
        </p>
      </div>
      <div>
        <div class="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold mb-5">
          Explore
        </div>
        <ul class="flex flex-col gap-2.5 list-none p-0 m-0">
          <li>
            <NuxtLink to="/" class="text-sm text-cream/40 hover:text-cream transition-colors">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events" class="text-sm text-cream/40 hover:text-cream transition-colors">
              All Events
            </NuxtLink>
          </li>
          <li>
            <span class="text-sm text-cream/25 cursor-default">Jazz & Blues</span>
          </li>
          <li>
            <span class="text-sm text-cream/25 cursor-default">Theatre</span>
          </li>
          <li>
            <span class="text-sm text-cream/25 cursor-default">Galas</span>
          </li>
        </ul>
      </div>
      <div>
        <div class="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold mb-5">
          Company
        </div>
        <ul class="flex flex-col gap-2.5 list-none p-0 m-0">
          <li>
            <NuxtLink to="/about" class="text-sm text-cream/40 hover:text-cream transition-colors">
              About Us
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="text-sm text-cream/40 hover:text-cream transition-colors">
              Contact
            </NuxtLink>
          </li>
          <li>
            <span class="text-sm text-cream/25 cursor-default">Press</span>
          </li>
          <li>
            <span class="text-sm text-cream/25 cursor-default">Careers</span>
          </li>
        </ul>
      </div>
      <div>
        <div class="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold mb-5">
          Support
        </div>
        <ul class="flex flex-col gap-2.5 list-none p-0 m-0">
          <li>
            <span class="text-sm text-cream/25 cursor-default">FAQ</span>
          </li>
          <li>
            <span class="text-sm text-cream/25 cursor-default">Refund Policy</span>
          </li>
          <li>
            <span class="text-sm text-cream/25 cursor-default">Accessibility</span>
          </li>
          <li>
            <span class="text-sm text-cream/25 cursor-default">Privacy Policy</span>
          </li>
        </ul>
      </div>
    </footer>
    <div
      class="bg-ink px-6 sm:px-10 py-5 border-t border-cream/[0.06] flex flex-col sm:flex-row justify-between gap-3 font-mono text-[0.65rem] tracking-[0.08em] text-cream/20"
    >
      <span>© {{ year }} Sparkle. All rights reserved.</span>
      <span>Crafted with care · Berlin, Germany</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
