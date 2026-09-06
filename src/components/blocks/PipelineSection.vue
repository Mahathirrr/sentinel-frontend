<script setup lang="ts">
import { ArrowDown, Cpu, Eye, FileCheck, Server } from 'lucide-vue-next'

const stages = [
  {
    step: '01',
    title: 'Validasi setiap upload',
    why: 'Mencegah file rusak, format tidak didukung, atau payload berlebihan masuk ke pipeline deteksi.',
    action: 'Cek tipe MIME, ukuran file, dan struktur request sebelum analisis dimulai.',
    icon: FileCheck,
  },
  {
    step: '02',
    title: 'Pilih model deteksi',
    why: 'Visual dan teks punya pola berbeda. ConvNeXt fokus layout banner; XLM-RoBERTa fokus copy promosi dari teks di gambar.',
    action: 'Pengguna memilih ConvNeXt-Large atau XLM-RoBERTa sebelum upload.',
    icon: Eye,
  },
  {
    step: '03',
    title: 'Analisis dengan model terpilih',
    why: 'Satu model dijalankan per request — tidak ada pipeline gabungan visual + teks sekaligus.',
    action: 'ConvNeXt menilai elemen visual. XLM-RoBERTa mengekstrak teks via OCR lalu mengklasifikasi langsung.',
    icon: Cpu,
  },
  {
    step: '04',
    title: 'Tolak atau izinkan',
    why: 'Platform perlu respons cepat: pengguna langsung tahu upload diterima atau ditolak, tanpa menunggu review manual.',
    action: 'Skor dari model terpilih menentukan keputusan. Risiko tinggi berarti upload ditolak.',
    icon: Server,
  },
]
</script>

<template>
  <section id="pipeline" class="container py-20 lg:py-28">
    <div class="mx-auto max-w-2xl text-center">
      <p class="text-sm font-semibold tracking-wide text-indigo-700 uppercase dark:text-indigo-300">
        Cara kerja
      </p>
      <h2 class="text-foreground mt-3 text-3xl tracking-tight md:text-4xl">
        Dari upload sampai keputusan
      </h2>
      <p class="text-foreground/75 mt-4 text-lg">
        Setiap langkah punya alasan: validasi upload, pilih model yang sesuai,
        lalu dapat keputusan yang jelas sebelum file disimpan.
      </p>
    </div>

    <div class="mx-auto mt-14 max-w-3xl space-y-0">
      <template v-for="(stage, index) in stages" :key="stage.step">
        <article class="border-border bg-card relative rounded-2xl border p-6 shadow-sm md:p-8">
          <div class="flex gap-5">
            <div class="text-indigo-600 mt-1 shrink-0 dark:text-indigo-400">
              <component :is="stage.icon" class="size-6" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-foreground/55 font-mono text-xs">{{ stage.step }}</p>
              <h3 class="text-foreground mt-1 text-xl font-semibold">{{ stage.title }}</h3>
              <p class="text-foreground mt-3 text-sm font-medium">Kenapa langkah ini?</p>
              <p class="text-foreground/75 mt-1 leading-relaxed">{{ stage.why }}</p>
              <p class="text-foreground mt-3 text-sm font-medium">Apa yang dilakukan?</p>
              <p class="text-foreground/75 mt-1 leading-relaxed">{{ stage.action }}</p>
            </div>
          </div>
        </article>
        <div v-if="index < stages.length - 1" class="flex justify-center py-3">
          <ArrowDown class="text-muted-foreground size-5" />
        </div>
      </template>
    </div>
  </section>
</template>
