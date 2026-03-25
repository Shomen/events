<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'light' | 'dark'
  }>(),
  { variant: 'light' },
)
</script>

<template>
  <span
    class="font-display inline-flex items-center gap-0.5 sm:gap-1 select-none"
    aria-label="Sparkle"
  >
    <span
      class="font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-base sm:text-xl transition-colors"
      :class="variant === 'dark' ? 'text-cream' : 'text-ink'"
    >
      Spark
    </span>
    <span
      class="text-gold text-[1.1rem] sm:text-2xl font-light leading-none drop-shadow-[0_0_14px_rgba(201,168,76,0.45)] motion-safe:animate-float inline-block"
      aria-hidden="true"
    >
      ✦
    </span>
    <span
      class="font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-base sm:text-xl transition-colors"
      :class="variant === 'dark' ? 'text-cream' : 'text-ink'"
    >
      le
    </span>
  </span>
</template>
