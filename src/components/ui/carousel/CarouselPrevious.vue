<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import { computed } from 'vue'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { injectCarouselContext } from './context'

const props = defineProps<{ class?: string }>()

const carousel = injectCarouselContext()

const positionClass = computed(() =>
  carousel.orientation.value === 'horizontal'
    ? 'top-1/2 -left-12 -translate-y-1/2'
    : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
)
</script>

<template>
  <Button
    variant="outline"
    size="icon"
    :disabled="!carousel.canScrollPrev.value"
    :class="cn('absolute h-8 w-8 rounded-full', positionClass, props.class)"
    @click="carousel.scrollPrev()"
  >
    <ChevronLeft class="size-6 lg:size-9" />
    <span class="sr-only">Previous slide</span>
  </Button>
</template>
