<script setup lang="ts">
import { AccordionRoot, type AccordionRootProps } from 'reka-ui'

import { cn } from '@/lib/utils'

type AccordionProps = AccordionRootProps & { class?: string }

const props = defineProps<AccordionProps>()
</script>

<template>
  <AccordionRoot v-bind="props" :class="cn('w-full', props.class)">
    <slot />
  </AccordionRoot>
</template>
