<script setup lang="ts">
import { ArrowLeft, Upload } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import Background from '@/components/Background.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Background>
    <div
      class="container flex min-h-[70vh] flex-col items-center justify-center py-28 text-center lg:min-h-[80vh] lg:py-32"
    >
      <div class="relative z-10 max-w-2xl">
        <h1 class="text-foreground mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
          404
        </h1>
        <p class="text-muted-foreground mb-10 text-xl">
          Halaman tidak ditemukan. Kembali ke beranda atau coba halaman upload.
        </p>
        <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button as-child size="lg" class="group min-w-[200px] gap-2">
            <RouterLink to="/">
              <ArrowLeft class="size-5 transition-transform group-hover:-translate-x-1" />
              Beranda
            </RouterLink>
          </Button>
          <Button as-child variant="outline" size="lg" class="min-w-[200px] gap-2">
            <RouterLink to="/upload">
              <Upload class="size-4" />
              Upload
            </RouterLink>
          </Button>
        </div>
      </div>
    </div>
  </Background>
</template>
