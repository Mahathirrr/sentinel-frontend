<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import { computed } from 'vue'

import { cn } from '@/lib/utils'

import { injectCarouselContext } from './context'

const props = defineProps<{ class?: string }>()

const carousel = injectCarouselContext()

const orientationClass = computed(() =>
  carousel.orientation.value === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
)

function setEmblaRef(ref: Element | ComponentPublicInstance | null) {
  if (ref) {
    carousel.carouselRef.value = ref as HTMLElement
  }
}
</script>

<template>
  <div :ref="setEmblaRef" class="overflow-hidden">
    <div :class="cn('flex', orientationClass, props.class)">
      <slot />
    </div>
  </div>
</template>
