<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from 'reka-ui'

import { cn } from '@/lib/utils'

type AccordionItemProps$ = AccordionItemProps & { class?: string }

const props = defineProps<AccordionItemProps$>()
</script>

<template>
  <AccordionItem v-bind="props" :class="cn('border-b', props.class)">
    <slot />
  </AccordionItem>
</template>
