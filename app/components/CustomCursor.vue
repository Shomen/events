<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

let rafId = 0
let cleanup: (() => void) | null = null

onMounted(() => {
  // Only enable the custom cursor for mouse/trackpad-like pointers.
  if (!window.matchMedia('(pointer: fine)').matches) return

  const cursorEl = document.getElementById('cursor')
  const ringEl = document.getElementById('cursorRing')
  if (!cursorEl || !ringEl) return

  let mx = 0
  let my = 0
  let rx = 0
  let ry = 0

  const GOLD = '#c9a84c'
  const GOLD_LIGHT = '#e8c96a'
  const CREAM = '#f5f0e8'

  // Toggle cursor color based on the approximate background luminance under the cursor.
  // This makes it readable both on light and dark sections.
  let lastThemeCheck = 0
  let currentIsDark = false

  function setCursorTheme(isDark: boolean) {
    if (currentIsDark === isDark) return
    currentIsDark = isDark

    const dot = isDark ? CREAM : GOLD
    const ring = isDark ? CREAM : GOLD_LIGHT

    cursorEl.style.backgroundColor = dot
    ringEl.style.borderColor = ring
  }

  function parseRgb(
    rgb: string,
  ): { r: number; g: number; b: number; a: number } | null {
    // Handles: rgb(r,g,b) and rgba(r,g,b,a)
    const m = rgb.match(
      /rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(?:\s*,\s*([0-9]*\.?[0-9]+))?\s*\)/i,
    )
    if (!m) return null
    const r = Number(m[1])
    const g = Number(m[2])
    const b = Number(m[3])
    const a = m[4] === undefined ? 1 : Number(m[4])
    return { r, g, b, a }
  }

  function isDarkBackgroundAtPoint(x: number, y: number) {
    let el = document.elementFromPoint(x, y) as HTMLElement | null
    if (!el) return false

    // Walk up until we find a non-transparent background color.
    // Many elements use `transparent` background, and using those would
    // incorrectly mark the cursor as "dark" all the time.
    while (el && el !== document.body) {
      const bg = getComputedStyle(el).backgroundColor
      const rgb = parseRgb(bg)
      if (rgb && rgb.a > 0.05) {
        // Relative luminance (sRGB).
        const luminance =
          (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255
        return luminance < 0.35
      }
      el = el.parentElement
    }

    // Fallback: body background.
    const bodyBg = getComputedStyle(document.body).backgroundColor
    const bodyRgb = parseRgb(bodyBg)
    if (!bodyRgb || bodyRgb.a <= 0.05) return false
    const luminance =
      (0.2126 * bodyRgb.r + 0.7152 * bodyRgb.g + 0.0722 * bodyRgb.b) / 255
    return luminance < 0.35
  }

  const moveHandler = (e: MouseEvent) => {
    mx = e.clientX
    my = e.clientY

    cursorEl.style.left = `${mx - 5}px`
    cursorEl.style.top = `${my - 5}px`
  }

  document.addEventListener('mousemove', moveHandler)

  const animate = () => {
    // Smooth ring following.
    rx += (mx - rx - 18) * 0.15
    ry += (my - ry - 18) * 0.15
    ringEl.style.left = `${rx}px`
    ringEl.style.top = `${ry}px`

    // Theme detection at a low frequency (cheap-ish, but not every frame).
    const now = performance.now()
    if (now - lastThemeCheck > 100) {
      lastThemeCheck = now
      setCursorTheme(isDarkBackgroundAtPoint(mx, my))
    }

    rafId = requestAnimationFrame(animate)
  }

  rafId = requestAnimationFrame(animate)

  cleanup = () => {
    document.removeEventListener('mousemove', moveHandler)
    cancelAnimationFrame(rafId)
  }
})

onBeforeUnmount(() => {
  cleanup?.()
})
</script>

<template>
  <!-- Custom Cursor -->
  <div class="cursor" id="cursor" />
  <div class="cursor-ring" id="cursorRing" />
</template>

<style>
:global(body) {
  cursor: none;
}

.cursor {
  width: 10px;
  height: 10px;
  background: #c9a84c;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease;
  mix-blend-mode: normal;
  opacity: 0;
}

body:hover .cursor {
  opacity: 1;
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1.5px solid #c9a84c;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9998;
  transition: all 0.25s ease;
  mix-blend-mode: normal;
  opacity: 0.6;
}

/* Hide custom cursor on touch/coarse pointers */
@media (pointer: coarse) {
  :global(body) {
    cursor: auto;
  }
  .cursor,
  .cursor-ring {
    display: none;
  }
}
</style>

