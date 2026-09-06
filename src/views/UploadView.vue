<script setup lang="ts">
import {
  CheckCircle2,
  ImagePlus,
  Loader2,
  Upload,
  XCircle,
} from 'lucide-vue-next'
import { computed, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

import Background from '@/components/Background.vue'
import SentinelIcon from '@/components/icons/SentinelIcon.vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  moderateImage,
  type ModerationModel,
  type ModerationResponse,
  type ModerationResult,
} from '@/lib/moderation-api'

const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const selectedModel = ref<ModerationModel>('convnext')
const previewUrl = ref<string | null>(null)
const isDragging = ref(false)
const isUploading = ref(false)
const response = ref<ModerationResponse | null>(null)
const result = ref<ModerationResult | null>(null)

const acceptedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const maxSizeMB = 8

const scorePercent = computed(() =>
  result.value ? Math.round(result.value.score * 100) : 0,
)

const statusTone = computed(() => {
  if (!response.value) return 'idle'
  if (response.value.success) return 'success'
  if (result.value) return 'blocked'
  return 'error'
})

const modelOptions: { value: ModerationModel; title: string; description: string }[] = [
  {
    value: 'convnext',
    title: 'ConvNeXt-Large',
    description: 'Deteksi visual: banner, layout, dan elemen promosi judi dari gambar.',
  },
  {
    value: 'xlmr',
    title: 'XLM-RoBERTa',
    description: 'Analisis teks: OCR mengekstrak teks dari gambar, lalu diklasifikasi langsung.',
  },
]

const activeSignal = computed(() =>
  selectedModel.value === 'xlmr' ? result.value?.text : result.value?.visual,
)

function revokePreview() {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = null
  }
}

function setFile(file: File | null) {
  revokePreview()
  selectedFile.value = file
  response.value = null
  result.value = null
  if (file) previewUrl.value = URL.createObjectURL(file)
}

function pickFile() {
  fileInput.value?.click()
}

function onFileChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) handleIncomingFile(file)
}

function handleIncomingFile(file: File) {
  if (!acceptedTypes.includes(file.type)) {
    response.value = {
      success: false,
      message: 'Format tidak didukung. Gunakan JPG, PNG, WEBP, atau GIF.',
    }
    return
  }
  if (file.size > maxSizeMB * 1024 * 1024) {
    response.value = {
      success: false,
      message: `File terlalu besar. Maksimum ${maxSizeMB} MB.`,
    }
    return
  }
  setFile(file)
}

function onDrop(event: DragEvent) {
  event.preventDefault()
  isDragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file) handleIncomingFile(file)
}

function reset() {
  setFile(null)
  if (fileInput.value) fileInput.value.value = ''
}

async function upload() {
  if (!selectedFile.value || isUploading.value) return
  isUploading.value = true
  response.value = null
  result.value = null
  try {
    const payload = await moderateImage(selectedFile.value, selectedModel.value)
    response.value = payload
    result.value = payload.data ?? null
  } catch {
    response.value = {
      success: false,
      message: 'Tidak dapat terhubung ke layanan moderasi. Silakan coba lagi.',
    }
  } finally {
    isUploading.value = false
  }
}

onUnmounted(revokePreview)
</script>

<template>
  <Background class="via-muted to-muted/80 min-h-[calc(100vh-8rem)]">
    <section class="container py-28 lg:py-36 lg:pt-44">
      <div class="mx-auto max-w-3xl text-center">
        <div class="mb-6 inline-flex items-center gap-2.5 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-100">
          <SentinelIcon :size="22" />
          Sentinel Upload
        </div>
        <h1 class="text-foreground text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Upload dengan moderasi otomatis
        </h1>
        <p class="text-foreground/75 mx-auto mt-5 max-w-2xl text-lg md:text-xl">
          Pilih model deteksi, unggah gambar, dan dapatkan keputusan moderasi sebelum file disimpan.
        </p>
      </div>

      <div class="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card class="overflow-hidden shadow-sm">
          <CardHeader>
            <CardTitle>Unggah gambar</CardTitle>
            <CardDescription>Drag & drop atau pilih file, maks {{ maxSizeMB }} MB</CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/webp,image/gif" class="hidden" @change="onFileChange" />

            <div class="space-y-3">
              <p class="text-sm font-medium">Pilih model deteksi</p>
              <div class="grid gap-3 sm:grid-cols-2">
                <label
                  v-for="option in modelOptions"
                  :key="option.value"
                  :class="cn(
                    'cursor-pointer rounded-xl border p-4 transition-colors',
                    selectedModel === option.value
                      ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/30'
                      : 'border-border bg-background/60 hover:bg-muted/40',
                  )"
                >
                  <input
                    v-model="selectedModel"
                    type="radio"
                    class="sr-only"
                    name="model"
                    :value="option.value"
                    :disabled="isUploading"
                  />
                  <p class="font-medium">{{ option.title }}</p>
                  <p class="text-muted-foreground mt-1 text-xs leading-relaxed">{{ option.description }}</p>
                </label>
              </div>
            </div>

            <button
              type="button"
              :class="cn(
                'border-border bg-muted/30 hover:bg-muted/50 relative flex min-h-72 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all',
                isDragging && 'border-primary bg-primary/5 scale-[1.01]',
              )"
              @click="pickFile"
              @drop="onDrop"
              @dragover.prevent="isDragging = true"
              @dragleave="isDragging = false"
            >
              <template v-if="previewUrl">
                <img :src="previewUrl" alt="Preview" class="max-h-64 max-w-full rounded-xl object-contain shadow-sm" loading="lazy" />
                <p class="text-muted-foreground mt-4 text-sm">{{ selectedFile?.name }}</p>
              </template>
              <template v-else>
                <div class="bg-background flex size-16 items-center justify-center rounded-2xl border shadow-sm">
                  <ImagePlus class="text-muted-foreground size-8" />
                </div>
                <p class="text-foreground mt-5 text-lg font-medium">Tarik gambar ke sini</p>
                <p class="text-muted-foreground mt-2 text-sm">atau klik untuk memilih file</p>
              </template>
            </button>

            <div class="flex flex-wrap gap-3">
              <Button class="min-w-40" :disabled="!selectedFile || isUploading" @click="upload">
                <Loader2 v-if="isUploading" class="mr-2 size-4 animate-spin" />
                <Upload v-else class="mr-2 size-4" />
                {{ isUploading ? 'Menganalisis...' : 'Upload & Scan' }}
              </Button>
              <Button variant="outline" :disabled="!selectedFile || isUploading" @click="reset">Reset</Button>
            </div>
          </CardContent>
        </Card>

        <div class="space-y-6">
          <Card v-if="response" :class="cn('border-2', statusTone === 'success' ? 'border-emerald-500/40 bg-emerald-500/5' : statusTone === 'error' ? 'border-amber-500/40 bg-amber-500/5' : 'border-destructive/40 bg-destructive/5')">
            <CardHeader>
              <div class="flex items-start gap-3">
                <CheckCircle2 v-if="statusTone === 'success'" class="mt-0.5 size-6 text-emerald-600" />
                <XCircle v-else class="text-destructive mt-0.5 size-6" />
                <div>
                  <CardTitle>
                    {{
                      statusTone === 'success'
                        ? 'Upload berhasil'
                        : statusTone === 'error'
                          ? 'Gagal terhubung'
                          : 'Upload ditolak'
                    }}
                  </CardTitle>
                  <CardDescription class="mt-1 text-base">{{ response.message }}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent v-if="result" class="space-y-4">
              <div class="flex items-end justify-between gap-4">
                <div>
                  <p class="text-muted-foreground text-sm">Skor risiko</p>
                  <p class="text-3xl font-semibold">{{ scorePercent }}%</p>
                </div>
                <span :class="cn('rounded-full px-3 py-1 text-sm font-medium', result.allowed ? 'bg-emerald-500/15 text-emerald-700' : 'bg-destructive/15 text-destructive')">
                  {{ result.label }}
                </span>
              </div>

              <div v-if="activeSignal" class="rounded-xl border bg-background/80 p-3 text-sm">
                <p class="font-medium">
                  {{ selectedModel === 'xlmr' ? 'Analisis teks (XLM-RoBERTa)' : 'Deteksi visual (ConvNeXt)' }}
                </p>
                <p class="text-muted-foreground mt-1">
                  {{ activeSignal.label }}, {{ Math.round(activeSignal.score * 100) }}%
                </p>
                <p
                  v-if="selectedModel === 'xlmr' && result.ocr_raw"
                  class="text-muted-foreground mt-2 line-clamp-3 text-xs"
                >
                  Teks OCR: {{ result.ocr_raw }}
                </p>
              </div>

              <p v-if="result.model" class="text-muted-foreground text-xs">
                Model: {{ result.model }}
              </p>

              <p v-if="result.inference_ms" class="text-muted-foreground text-xs">
                Diproses dalam {{ result.inference_ms }} ms
              </p>
            </CardContent>
          </Card>

          <Card v-else>
            <CardHeader><CardTitle>Apa yang terjadi?</CardTitle></CardHeader>
            <CardContent class="text-foreground/75 space-y-3 text-sm">
              <p>1. Gambar divalidasi. Format dan ukuran dicek.</p>
              <p>2. Pilih ConvNeXt untuk deteksi visual, atau XLM-RoBERTa untuk analisis teks dari gambar.</p>
              <p>3. Jika terdeteksi promosi judol, upload ditolak sebelum disimpan.</p>
              <RouterLink
                to="/#edukasi"
                class="text-indigo-700 hover:text-indigo-800 mt-2 inline-flex text-sm font-medium dark:text-indigo-300"
              >
                Pelajari ciri iklan judol →
              </RouterLink>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </Background>
</template>
