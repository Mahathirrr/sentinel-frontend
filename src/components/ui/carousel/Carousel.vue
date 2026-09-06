<script setup lang="ts">
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-vue'

import { computed, watch } from 'vue'

import { cn } from '@/lib/utils'

import { provideCarouselContext, type CarouselApi, type CarouselPlugin } from './context'

interface Props {
  class?: string
  orientation?: 'horizontal' | 'vertical'
  opts?: EmblaOptionsType
  plugins?: CarouselPlugin[]
  setApi?: (api: CarouselApi) => void
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
})

const [emblaNode, emblaApi] = useEmblaCarousel(
  {
    ...(props.opts ?? {}),
    axis: props.orientation === 'horizontal' ? 'x' : 'y',
  },
  props.plugins,
)

const orientation = computed<'horizontal' | 'vertical'>(() => props.orientation)
const canScrollPrev = computed(() => emblaApi.value?.canScrollPrev() ?? false)
const canScrollNext = computed(() => emblaApi.value?.canScrollNext() ?? false)

const scrollPrev = () => {
  emblaApi.value?.scrollPrev()
}
const scrollNext = () => {
  emblaApi.value?.scrollNext()
}

provideCarouselContext({
  carouselRef: emblaNode,
  api: emblaApi,
  scrollPrev,
  scrollNext,
  canScrollPrev,
  canScrollNext,
  orientation,
})

watch(emblaApi, (api, _oldValue, onCleanup) => {
  if (!api || !props.setApi) return
  props.setApi(api)
  onCleanup(() => {
    props.setApi?.(undefined as never)
  })
})

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    scrollPrev()
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    scrollNext()
  }
}
</script>

<template>
  <div
    role="region"
    aria-roledescription="carousel"
    :class="cn('relative', props.class)"
    @keydown.capture="handleKeydown"
  >
    <slot />
  </div>
</template>
