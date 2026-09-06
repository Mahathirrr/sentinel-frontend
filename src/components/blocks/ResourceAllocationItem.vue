<script setup lang="ts">
import DashedLine from '@/components/DashedLine.vue'
import { cn } from '@/lib/utils'

import type { ResourceItem } from './resource-types'

interface Props {
  item: ResourceItem
  isLast?: boolean
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="cn(
      'relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8',
      props.class,
      props.item.className,
    )"
  >
    <div class="title-container text-balance">
      <h3 class="inline font-semibold">{{ props.item.title }} </h3>
      <span class="text-muted-foreground"> {{ props.item.description }}</span>
    </div>

    <div
      v-if="props.item.fade.includes('bottom')"
      class="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden"
    />

    <!-- Logo grid layout (>4 images) -->
    <div v-if="props.item.images.length > 4" class="relative overflow-hidden">
      <div class="flex flex-col gap-5">
        <!-- First row - right aligned -->
        <div class="flex translate-x-4 justify-end gap-5">
          <div
            v-for="(image, j) in props.item.images.slice(0, 4)"
            :key="j"
            class="bg-background grid aspect-square size-16 place-items-center rounded-2xl p-2 lg:size-20"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              class="object-contain object-left-top"
            />
            <div class="from-muted/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />
          </div>
        </div>
        <!-- Second row - left aligned -->
        <div class="flex -translate-x-4 gap-5">
          <div
            v-for="(image, j) in props.item.images.slice(4)"
            :key="j"
            class="bg-background grid aspect-square size-16 place-items-center rounded-2xl lg:size-20"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              class="object-contain object-left-top"
            />
            <div class="from-muted absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent" />
          </div>
        </div>
      </div>
    </div>

    <!-- Single/multiple image layout -->
    <div v-else class="image-container grid grid-cols-1 gap-4">
      <img
        v-for="(image, j) in props.item.images"
        :key="j"
        :src="image.src"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        class="object-contain object-left-top"
      />
    </div>

    <template v-if="!props.isLast">
      <DashedLine
        orientation="vertical"
        class="absolute top-0 right-0 max-md:hidden"
      />
      <DashedLine
        orientation="horizontal"
        class="absolute inset-x-0 bottom-0 md:hidden"
      />
    </template>
  </div>
</template>
