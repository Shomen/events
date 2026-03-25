<template>
  <div class="space-y-10 max-w-3xl">
    <header class="space-y-3">
      <p class="text-sm font-medium text-sky-600 uppercase tracking-wide">
        Get in touch
      </p>
      <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
        Contact us
      </h1>
      <p class="text-slate-600 leading-relaxed text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. For this demo,
        messages are not sent anywhere — a real form handler or API would go
        here later.
      </p>
    </header>

    <div class="grid gap-8 sm:grid-cols-2">
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">
          Office hours
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          Mon–Fri, 9:00–17:00<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weekends by
          appointment only.
        </p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">
          Reach us
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          <span class="block">hello@events.example</span>
          <span class="block mt-1">+1 (555) 010–2030</span>
        </p>
      </div>
    </div>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
      <h2 class="text-xl font-semibold text-slate-900">Send a message</h2>
      <p class="text-slate-600 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. The fields below
        are placeholders; wiring validation and submit will come in a follow-up
        step.
      </p>
      <form class="space-y-4" @submit.prevent>
        <div>
          <label for="contact-name" class="block text-sm font-medium text-slate-700 mb-1">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autocomplete="name"
            placeholder="Jane Doe"
            class="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
        <div>
          <label for="contact-email" class="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="jane@example.com"
            class="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
        <div>
          <label for="contact-message" class="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            placeholder="How can we help?"
            class="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-y min-h-[120px]"
          />
        </div>
        <button
          type="submit"
          class="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          Send (demo)
        </button>
      </form>
    </section>
  </div>
</template>
