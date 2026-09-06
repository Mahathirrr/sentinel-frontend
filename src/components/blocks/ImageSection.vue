<script setup lang="ts">
import { cn } from '@/lib/utils'

interface ImageItem {
  src: string
  alt: string
}

interface Props {
  images: ImageItem[]
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
    <div
      v-for="(image, index) in props.images"
      :key="index"
      class="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
    >
      <img :src="image.src" :alt="image.alt" class="object-cover h-full w-full" />
    </div>
  </div>
</template>
