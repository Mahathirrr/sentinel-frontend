<script setup lang="ts">
import { RouterLink } from 'vue-router'

import SentinelIcon from '@/components/icons/SentinelIcon.vue'

const links = [
  { name: 'Beranda', href: '/' },
  { name: 'Kenapa perlu', href: '/#kenapa' },
  { name: 'Edukasi', href: '/#edukasi' },
  { name: 'Alur', href: '/#pipeline' },
  { name: 'Upload', href: '/upload' },
]
</script>

<template>
  <footer class="border-border border-t pt-16 pb-10">
    <div class="container flex flex-col items-center gap-8 text-center">
      <div>
        <p class="text-foreground flex items-center justify-center gap-2 font-semibold">
          <SentinelIcon :size="24" />
          Sentinel
        </p>
        <p class="text-foreground/70 mt-2 max-w-md text-sm">
          Platform moderasi gambar untuk mendeteksi dan memblokir konten promosi judi online
          sebelum disimpan ke sistem.
        </p>
      </div>

      <nav>
        <ul class="flex flex-wrap items-center justify-center gap-6">
          <li v-for="item in links" :key="item.name">
            <RouterLink
              :to="item.href"
              class="text-foreground/70 hover:text-foreground text-sm transition-colors"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
