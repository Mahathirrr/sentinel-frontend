<script setup lang="ts">
import {
  Eye,
  Globe,
  Image,
  Link2,
  MessageSquare,
  Palette,
  ScanText,
  Share2,
  Type,
} from 'lucide-vue-next'
import { ref } from 'vue'

type EduTab = 'domain' | 'visual' | 'teks' | 'penyebaran'

const activeTab = ref<EduTab>('domain')

const tabs: { id: EduTab; label: string; icon: typeof Globe }[] = [
  { id: 'domain', label: 'Pola domain', icon: Globe },
  { id: 'visual', label: 'Ciri visual', icon: Eye },
  { id: 'teks', label: 'Pola teks', icon: Type },
  { id: 'penyebaran', label: 'Penyebaran', icon: Share2 },
]

const domainComponents = [
  {
    title: 'Prefiks tema',
    desc: 'Kata yang mengaitkan kemewahan, keberuntungan, atau permainan.',
    tags: ['raja', 'sultan', 'dewa', 'dewi', 'naga', 'zeus', 'hoki', 'slot', 'gacor', 'olympus'],
  },
  {
    title: 'Angka keberuntungan',
    desc: 'Angka numerik yang konsisten muncul pada domain judol.',
    tags: ['88', '77', '99', '138', '777', '888', '168', '303'],
  },
  {
    title: 'Sufiks promosi',
    desc: 'Penanda jenis permainan atau kata promosi (opsional).',
    tags: ['slot', 'gacor', 'bet', 'maxwin', 'poker', 'toto', 'togel', 'win'],
  },
  {
    title: 'TLD umum',
    desc: 'Ekstensi domain yang sering dipakai situs judol.',
    tags: ['.com', '.net', '.org', '.info', '.site', '.online', '.live'],
  },
]

const domainPatterns = [
  { pattern: 'kata + angka + TLD', example: 'dewi88.net' },
  { pattern: 'angka + kata + TLD', example: '88slot.org' },
  { pattern: 'kata + kata + TLD', example: 'rajagacor.net' },
  { pattern: 'kata-kata + TLD', example: 'dewa-slot.com' },
  { pattern: 'kata + angka + kata + TLD', example: 'slot77gacor.com' },
]

const visualTraits = [
  {
    title: 'Karakter fantasy & taruhan',
    desc: 'Banner sering menampilkan karakter mitologi, slot machine, atau elemen olahraga taruhan.',
    icon: Image,
  },
  {
    title: 'Skema warna mencolok',
    desc: 'Dominasi neon, emas, merah, dan kontras tinggi agar menarik perhatian di feed.',
    icon: Palette,
  },
  {
    title: 'Layout promosi padat',
    desc: 'Teks bonus, jackpot, dan CTA dipadatkan dalam satu banner slider atau poster.',
    icon: ScanText,
  },
  {
    title: 'Bukan sekadar logo situs',
    desc: 'Yang dicari adalah banner promosi di slider, bukan tombol navigasi atau logo kecil.',
    icon: Eye,
  },
]

const textPatterns = [
  {
    category: 'Promosi deposit',
    examples: ['depo 50k dapat bonus', 'deposit 10rb', 'bonus new member', 'cashback'],
  },
  {
    category: 'Janji kemenangan',
    examples: ['slot gacor', 'maxwin', 'jackpot', 'rtp tinggi', 'freespin', 'hoki'],
  },
  {
    category: 'Campuran ID + EN',
    examples: ['slot gacor maxwin 2024', 'free spin', 'withdraw / wd', 'main sekarang'],
  },
  {
    category: 'Provider & permainan',
    examples: ['pragmatic', 'pgsoft', 'habanero', 'playtech', 'poker', 'togel'],
  },
]

const channels = [
  {
    title: 'Banner & slider situs',
    desc: 'Gambar promosi di halaman landing domain judol, sering diunduh otomatis saat crawling.',
    icon: Globe,
  },
  {
    title: 'Screenshot & poster chat',
    desc: 'Capture promosi dari grup Telegram, WhatsApp, atau DM yang dibagikan ulang sebagai gambar.',
    icon: MessageSquare,
  },
  {
    title: 'Unggahan media sosial',
    desc: 'Story, feed, dan iklan berbayar yang menyisipkan link alternatif di visual.',
    icon: Share2,
  },
  {
    title: 'Link alternatif tersembunyi',
    desc: 'Domain berganti cepat; teks dan URL disembunyikan di dalam gambar agar lolos moderasi teks.',
    icon: Link2,
  },
]
</script>

<template>
  <section id="edukasi" class="container py-20 lg:py-28">
    <div class="relative overflow-hidden rounded-3xl border bg-linear-to-br from-indigo-500/10 via-background to-violet-500/5 p-8 md:p-12 lg:p-14">
      <div class="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-indigo-500/10 blur-3xl" />
      <div class="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div class="relative mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold tracking-wide text-indigo-700 uppercase dark:text-indigo-300">
          Panduan edukasi
        </p>
        <h2 class="text-foreground mt-3 text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Kenali ciri iklan judol sebelum menyebar
        </h2>
        <p class="text-foreground/75 mx-auto mt-4 max-w-2xl text-lg">
          Ringkasan pola domain, visual, dan teks promosi dari observasi dan pengumpulan data
          iklan judi online di Indonesia. Sentinel dirancang menangkap sinyal-sinyal ini.
        </p>
      </div>

      <div class="relative mt-10 flex flex-wrap justify-center gap-2">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          :class="[
            'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all',
            activeTab === tab.id
              ? 'border-indigo-300 bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
              : 'border-border bg-background/80 text-foreground/70 hover:border-indigo-200 hover:text-foreground',
          ]"
          @click="activeTab = tab.id"
        >
          <component :is="tab.icon" class="size-4" />
          {{ tab.label }}
        </button>
      </div>

      <!-- Domain -->
      <div v-if="activeTab === 'domain'" class="relative mt-10 grid gap-5 lg:grid-cols-2">
        <div
          v-for="item in domainComponents"
          :key="item.title"
          class="border-border bg-card/90 rounded-2xl border p-6 shadow-sm backdrop-blur-sm"
        >
          <h3 class="text-foreground font-semibold">{{ item.title }}</h3>
          <p class="text-foreground/70 mt-1 text-sm">{{ item.desc }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tag in item.tags"
              :key="tag"
              class="rounded-md border border-indigo-200/80 bg-indigo-50 px-2.5 py-1 font-mono text-xs text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-100"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="border-border bg-card/90 rounded-2xl border p-6 shadow-sm backdrop-blur-sm lg:col-span-2">
          <h3 class="text-foreground font-semibold">Pola konstruksi domain</h3>
          <p class="text-foreground/70 mt-1 text-sm">
            Nama domain judol di Indonesia cenderung mengikuti kombinasi berulang yang dapat diidentifikasi.
          </p>
          <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="item in domainPatterns"
              :key="item.pattern"
              class="rounded-xl border bg-muted/40 p-4"
            >
              <p class="text-foreground/55 text-xs font-medium uppercase tracking-wide">Pola</p>
              <p class="text-foreground mt-1 text-sm font-medium">{{ item.pattern }}</p>
              <p class="text-foreground/55 mt-3 text-xs font-medium uppercase tracking-wide">Contoh</p>
              <p class="text-indigo-700 mt-1 font-mono text-sm dark:text-indigo-300">{{ item.example }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Visual -->
      <div v-else-if="activeTab === 'visual'" class="relative mt-10 grid gap-5 sm:grid-cols-2">
        <article
          v-for="(item, index) in visualTraits"
          :key="item.title"
          :class="[
            'border-border bg-card/90 group relative overflow-hidden rounded-2xl border p-6 shadow-sm backdrop-blur-sm',
            index === 0 && 'sm:col-span-2 lg:col-span-1',
          ]"
        >
          <div class="bg-primary/10 text-primary mb-4 inline-flex size-10 items-center justify-center rounded-xl">
            <component :is="item.icon" class="size-5" />
          </div>
          <h3 class="text-foreground text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-foreground/75 mt-2 text-sm leading-relaxed">{{ item.desc }}</p>
        </article>

        <div class="border-border bg-card/90 rounded-2xl border p-6 shadow-sm backdrop-blur-sm sm:col-span-2">
          <p class="text-foreground text-sm font-medium">Temuan penelitian</p>
          <p class="text-foreground/75 mt-2 leading-relaxed">
            Citra iklan judol umumnya didominasi karakter fantasy atau elemen taruhan olahraga,
            dengan teks promosi seperti slot, gacor, dan maxwin. Iklan komersial legal bisa
            terlihat mencolok, tetapi judol cenderung mengulang motif permainan dan janji kemenangan
            dalam satu layout banner.
          </p>
        </div>
      </div>

      <!-- Teks -->
      <div v-else-if="activeTab === 'teks'" class="relative mt-10 grid gap-5 md:grid-cols-2">
        <article
          v-for="item in textPatterns"
          :key="item.category"
          class="border-border bg-card/90 rounded-2xl border p-6 shadow-sm backdrop-blur-sm"
        >
          <h3 class="text-foreground font-semibold">{{ item.category }}</h3>
          <ul class="mt-4 space-y-2">
            <li
              v-for="ex in item.examples"
              :key="ex"
              class="text-foreground/80 flex items-center gap-2 text-sm"
            >
              <span class="bg-primary size-1.5 shrink-0 rounded-full" />
              <span class="font-mono">{{ ex }}</span>
            </li>
          </ul>
        </article>

        <div class="border-indigo-200 bg-indigo-50/80 rounded-2xl border p-6 dark:border-indigo-800 dark:bg-indigo-950/30 md:col-span-2">
          <p class="text-foreground text-sm font-medium">Mengapa teks di gambar penting?</p>
          <p class="text-foreground/75 mt-2 text-sm leading-relaxed">
            Iklan judol Indonesia sering mencampur bahasa Indonesia dan Inggris dalam satu banner.
            OCR mengekstrak teks dari gambar, lalu analisis NLP menilai frasa promosi seperti
            deposit, bonus, gacor, dan maxwin. Tanpa teks yang cukup, deteksi hanya visual saja
            bisa melewatkan screenshot chat atau poster minimalis.
          </p>
        </div>
      </div>

      <!-- Penyebaran -->
      <div v-else class="relative mt-10 grid gap-5 sm:grid-cols-2">
        <article
          v-for="item in channels"
          :key="item.title"
          class="border-border bg-card/90 flex gap-4 rounded-2xl border p-6 shadow-sm backdrop-blur-sm"
        >
          <div class="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
            <component :is="item.icon" class="size-5" />
          </div>
          <div>
            <h3 class="text-foreground font-semibold">{{ item.title }}</h3>
            <p class="text-foreground/75 mt-1 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </article>

        <div class="border-border bg-card/90 rounded-2xl border p-6 shadow-sm backdrop-blur-sm sm:col-span-2">
          <p class="text-foreground font-medium">Catatan untuk moderasi platform</p>
          <p class="text-foreground/75 mt-2 text-sm leading-relaxed">
            Domain judol berganti cepat untuk menghindari pemblokiran. Promosi sering dipindah
            ke gambar agar lolos filter teks. Sentinel memindai upload gambar dari sisi visual
            dan teks sekaligus, karena kedua sinyal saling melengkapi saat salah satu saja tidak cukup.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
