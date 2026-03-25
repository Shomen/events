<template>
    <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <AppHeader />
        <main class="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>