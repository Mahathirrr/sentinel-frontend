<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { injectCarouselContext } from './context'

const props = defineProps<{ class?: string }>()

const carousel = injectCarouselContext()

const positionClass = computed(() =>
  carousel.orientation.value === 'horizontal'
    ? 'top-1/2 -right-12 -translate-y-1/2'
    : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
)
</script>

<template>
  <Button
    variant="outline"
    size="icon"
    :disabled="!carousel.canScrollNext.value"
    :class="cn('absolute h-8 w-8 rounded-full', positionClass, props.class)"
    @click="carousel.scrollNext()"
  >
    <ChevronRight class="size-4" />
    <span class="sr-only">Next slide</span>
  </Button>
</template>
