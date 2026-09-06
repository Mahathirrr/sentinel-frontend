<script setup lang="ts">
import { AccordionHeader, AccordionTrigger } from 'reka-ui'

import { ChevronDown } from 'lucide-vue-next'

import { accordionTriggerVariants } from '.'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="props"
      :class="cn(accordionTriggerVariants(), props.class)"
    >
      <slot />
      <ChevronDown
        class="text-muted-foreground size-4 shrink-0 transition-transform duration-200"
      />
    </AccordionTrigger>
  </AccordionHeader>
</template>
