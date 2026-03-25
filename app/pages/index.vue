<template>
  <div class="space-y-16 sm:space-y-20">
    <section class="space-y-4">
      <p class="text-sm font-medium text-sky-600 uppercase tracking-wide">
        Welcome
      </p>
      <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
        Discover events worth your time
      </h1>
      <p class="max-w-2xl text-lg text-slate-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
    </section>

    <section class="grid gap-8 sm:grid-cols-2">
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Why Events</h2>
        <p class="text-slate-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Integer posuere erat a ante venenatis dapibus posuere
          velit aliquet.
        </p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Simple booking</h2>
        <p class="text-slate-600 leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>

    <section class="space-y-4 max-w-3xl">
      <h2 class="text-2xl font-semibold text-slate-900">How it works</h2>
      <p class="text-slate-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        blandit tempus porttitor. Maecenas faucibus mollis interdum. Cras mattis
        consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed
        consectetur.
      </p>
      <p class="text-slate-600 leading-relaxed">
        Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta
        gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu
        leo.
      </p>
    </section>

    <section
      class="rounded-2xl bg-slate-900 text-slate-100 px-6 py-10 sm:px-10 sm:py-12"
    >
      <h2 class="text-2xl font-semibold mb-3">Ready to browse?</h2>
      <p class="text-slate-300 leading-relaxed max-w-2xl mb-6">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
        mollis euismod.
      </p>
      <NuxtLink
        to="/events"
        class="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        View events
      </NuxtLink>
    </section>
  </div>
</template>
