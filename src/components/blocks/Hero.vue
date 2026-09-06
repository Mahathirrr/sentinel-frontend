<script setup lang="ts">
import {
  ArrowRight,
  BrainCircuit,
  FileImage,
  ScanLine,
  ShieldCheck,
  Type,
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import DashedLine from '@/components/DashedLine.vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const highlights = [
  {
    title: 'Tangkap banner & visual promosi',
    description: 'Deteksi elemen iklan judol dari tampilan gambar, termasuk layout, ikon, dan pola banner.',
    icon: BrainCircuit,
  },
  {
    title: 'Baca teks tersembunyi di gambar',
    description: 'Keyword seperti depo, gacor, atau link alternatif diekstrak lewat OCR dan NLP.',
    icon: Type,
  },
  {
    title: 'Tolak sebelum konten tersebar',
    description: 'Upload berisiko ditolak langsung. Pengguna mendapat keputusan tanpa menunggu moderasi manual.',
    icon: ShieldCheck,
  },
]

const pipelineSteps = [
  { label: 'Upload', active: true },
  { label: 'ConvNeXt', active: true },
  { label: 'OCR', active: true },
  { label: 'XLM-R', active: false },
  { label: 'Verdict', active: false },
]
</script>

<template>
  <section class="py-28 lg:py-32 lg:pt-44">
    <div class="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
      <div class="flex-1">
        <p class="mb-4 text-sm font-semibold tracking-wide text-indigo-700 uppercase dark:text-indigo-300">
          Moderasi konten gambar
        </p>
        <h1 class="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Blokir iklan judol sebelum konten masuk
        </h1>
        <p class="text-foreground/75 mt-5 max-w-xl text-lg md:text-xl">
          Sentinel memindai setiap gambar yang di-upload, dari banner visual sampai teks promosi
          di dalam gambar, lalu memberi keputusan izinkan atau tolak secara otomatis.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <Button as-child size="lg">
            <RouterLink to="/upload" class="inline-flex items-center gap-2">
              Coba upload
              <ArrowRight class="size-4" />
            </RouterLink>
          </Button>
          <Button variant="outline" size="lg" as-child>
            <a href="#edukasi">Pelajari ciri judol</a>
          </Button>
        </div>
      </div>

      <div class="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-6 lg:pl-10">
        <DashedLine orientation="vertical" class="absolute top-0 left-0 max-lg:hidden" />
        <DashedLine orientation="horizontal" class="absolute top-0 lg:hidden" />
        <div v-for="item in highlights" :key="item.title" class="flex gap-2.5 lg:gap-5">
          <component :is="item.icon" class="text-indigo-600 mt-1 size-4 shrink-0 lg:size-5 dark:text-indigo-400" />
          <div>
            <h2 class="font-text text-foreground font-semibold">{{ item.title }}</h2>
            <p class="text-foreground/70 max-w-76 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-16 lg:mt-24">
      <div class="border-border bg-card relative overflow-hidden rounded-2xl border shadow-lg">
        <div class="border-border flex items-center gap-2 border-b px-4 py-3">
          <span class="size-2.5 rounded-full bg-red-400" />
          <span class="size-2.5 rounded-full bg-amber-400" />
          <span class="size-2.5 rounded-full bg-emerald-400" />
          <span class="text-muted-foreground ml-2 text-xs font-mono">contoh hasil pemindaian</span>
        </div>

        <div class="grid gap-6 p-6 md:grid-cols-2 md:p-8">
          <div class="space-y-4">
            <div class="bg-muted/50 flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed p-6">
              <FileImage class="text-muted-foreground size-10" />
              <p class="text-muted-foreground mt-3 text-sm">Pratinjau gambar</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(step, i) in pipelineSteps"
                :key="step.label"
                :class="cn(
                  'rounded-md px-2.5 py-1 font-mono text-xs',
                  step.active
                    ? 'border border-indigo-200 bg-indigo-50 text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-100'
                    : 'bg-muted text-foreground/60',
                )"
              >
                {{ i + 1 }}. {{ step.label }}
              </span>
            </div>
          </div>

          <div class="space-y-3 text-sm">
            <div class="rounded-lg border bg-destructive/5 p-4">
              <div class="flex items-center gap-2 text-destructive">
                <ScanLine class="size-4" />
                <span class="font-semibold">Ditolak: iklan judol terdeteksi</span>
              </div>
              <p class="text-muted-foreground mt-2 text-xs leading-relaxed">
                Skor risiko tinggi dari visual banner dan teks promosi.<br />
                Upload tidak disimpan ke sistem.
              </p>
            </div>
            <div class="rounded-lg border bg-emerald-500/5 p-4">
              <div class="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                <ShieldCheck class="size-4" />
                <span class="font-semibold">Diizinkan: konten aman</span>
              </div>
              <p class="text-muted-foreground mt-2 text-xs leading-relaxed">
                Tidak ditemukan elemen promosi judi.<br />
                Upload dapat dilanjutkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
