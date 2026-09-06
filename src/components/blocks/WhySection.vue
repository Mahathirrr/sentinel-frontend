<script setup lang="ts">
import { AlertTriangle, Ban, Clock, Layers, Scale, Users } from 'lucide-vue-next'

const reasons = [
  {
    title: 'Iklan judol menyebar lewat gambar',
    description:
      'Promosi slot, deposit, dan link alternatif sering disisipkan dalam banner, screenshot chat, atau poster, bukan hanya teks biasa di feed.',
    icon: AlertTriangle,
  },
  {
    title: 'Moderasi manual tidak skala',
    description:
      'Tim review tidak mampu memeriksa ribuan upload per hari. Satu konten terlewat bisa langsung tampil ke pengguna.',
    icon: Clock,
  },
  {
    title: 'Satu jenis deteksi saja kurang',
    description:
      'Banner visual bisa lolos tanpa OCR, sementara teks promosi bisa disembunyikan di gambar tanpa elemen visual jelas. Keduanya perlu dicek.',
    icon: Layers,
  },
  {
    title: 'Blokir sebelum disimpan',
    description:
      'Lebih aman menolak upload di pintu masuk daripada membersihkan konten setelah sudah tersebar ke pengguna lain.',
    icon: Ban,
  },
  {
    title: 'Keputusan harus konsisten',
    description:
      'Skor risiko dan label yang sama diterapkan ke setiap file, tanpa bergantung pada kelelahan atau subjektivitas moderator.',
    icon: Scale,
  },
  {
    title: 'Melindungi ekosistem platform',
    description:
      'Platform UGC, marketplace, dan forum chat butuh lapisan keamanan agar pengguna tidak terpapar promosi ilegal.',
    icon: Users,
  },
]
</script>

<template>
  <section id="kenapa" class="container py-20 lg:py-28">
    <div class="mx-auto max-w-2xl text-center">
      <p class="text-sm font-semibold tracking-wide text-indigo-700 uppercase dark:text-indigo-300">
        Kenapa perlu
      </p>
      <h2 class="text-foreground mt-3 text-3xl tracking-tight md:text-4xl">
        Moderasi gambar bukan opsional
      </h2>
      <p class="text-foreground/75 mt-4 text-lg">
        Sentinel hadir untuk menangkap konten promosi judi online sebelum masuk ke sistem,
        bukan setelah sudah diakses ribuan pengguna.
      </p>
    </div>

    <div class="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="item in reasons"
        :key="item.title"
        class="border-border bg-card rounded-2xl border p-6 shadow-sm"
      >
        <div class="text-indigo-600 dark:text-indigo-400">
          <component :is="item.icon" class="size-5" />
        </div>
        <h3 class="text-foreground mt-4 font-semibold">{{ item.title }}</h3>
        <p class="text-foreground/75 mt-2 text-sm leading-relaxed">{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>
