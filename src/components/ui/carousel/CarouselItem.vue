<script setup lang="ts">
import { computed } from 'vue'

import { cn } from '@/lib/utils'

import { injectCarouselContext } from './context'

const props = defineProps<{ class?: string }>()

const carousel = injectCarouselContext()

const paddingClass = computed(() =>
  carousel.orientation.value === 'horizontal' ? 'pl-4' : 'pt-4',
)
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cn('min-w-0 shrink-0 grow-0 basis-full', paddingClass, props.class)"
  >
    <slot />
  </div>
</template>
