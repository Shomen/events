<template>
  <div class="min-h-screen flex flex-col bg-paper text-ink font-sans antialiased">
    <CustomCursor />
    <AppHeader />
    <main class="flex-1 w-full pt-[7rem] sm:pt-[5.25rem]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
