import { createContext } from 'reka-ui'

import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import type { Ref } from 'vue'

export type CarouselApi = EmblaCarouselType
export type CarouselOptions = EmblaOptionsType
export type CarouselPlugin = EmblaPluginType

export type CarouselContextValue = {
  carouselRef: Ref<HTMLElement | undefined>
  api: Ref<CarouselApi | undefined>
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: Ref<boolean>
  canScrollNext: Ref<boolean>
  orientation: Ref<'horizontal' | 'vertical'>
}

export const [injectCarouselContext, provideCarouselContext] =
  createContext<CarouselContextValue>('Carousel')
