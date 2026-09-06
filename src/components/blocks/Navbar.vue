<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import ThemeToggle from '@/components/ThemeToggle.vue'
import SentinelIcon from '@/components/icons/SentinelIcon.vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ITEMS = [
  { label: 'Beranda', href: '/' },
  { label: 'Kenapa', href: '/#kenapa' },
  { label: 'Edukasi', href: '/#edukasi' },
  { label: 'Alur', href: '/#pipeline' },
  { label: 'Upload', href: '/upload' },
]

const isMenuOpen = ref(false)
const route = useRoute()
const pathname = computed(() => route.path)
</script>

<template>
  <section
    :class="cn(
      'bg-background/70 absolute left-1/2 z-50 w-[min(96%,860px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300',
      'top-5 lg:top-12',
    )"
  >
    <div class="flex items-center justify-between px-6 py-3">
      <RouterLink to="/" class="text-foreground flex shrink-0 items-center gap-2 font-semibold">
        <SentinelIcon :size="28" />
        Sentinel
      </RouterLink>

      <nav class="max-lg:hidden">
        <ul class="flex shrink-0 items-center gap-0.5">
          <li v-for="link in ITEMS" :key="link.label" class="shrink-0">
            <RouterLink
              :to="link.href"
              :class="cn(
                'hover:text-foreground whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors xl:px-3',
                (link.href === '/upload' ? pathname === '/upload' : pathname === '/' && link.href === '/')
                  ? 'text-foreground font-semibold'
                  : 'text-foreground/65 hover:text-foreground',
              )"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <Button as-child size="sm" class="max-lg:hidden">
          <RouterLink to="/upload">Coba upload</RouterLink>
        </Button>

        <button
          class="text-muted-foreground relative flex size-8 lg:hidden"
          aria-label="Buka menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <div class="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              :class="cn(
                'absolute block h-0.5 w-full rounded-full bg-current transition duration-500',
                isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
              )"
            />
            <span
              aria-hidden="true"
              :class="cn(
                'absolute block h-0.5 w-full rounded-full bg-current transition duration-500',
                isMenuOpen ? 'opacity-0' : '',
              )"
            />
            <span
              aria-hidden="true"
              :class="cn(
                'absolute block h-0.5 w-full rounded-full bg-current transition duration-500',
                isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
              )"
            />
          </div>
        </button>
      </div>
    </div>

    <div
      :class="cn(
        'bg-background absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col rounded-2xl border p-4 transition-all duration-300 lg:hidden',
        isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0',
      )"
    >
      <RouterLink
        v-for="link in ITEMS"
        :key="link.label"
        :to="link.href"
        class="text-foreground hover:bg-muted rounded-lg px-3 py-3 text-sm font-medium"
        @click="isMenuOpen = false"
      >
        {{ link.label }}
      </RouterLink>
    </div>
  </section>
</template>
