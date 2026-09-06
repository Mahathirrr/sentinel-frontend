<script setup lang="ts">
import { CollapsibleContent } from 'reka-ui'

import { cn } from '@/lib/utils'

export interface CollapsibleContentProps {
  class?: string
}

const props = withDefaults(defineProps<CollapsibleContentProps>(), {
  class: '',
})
</script>

<template>
  <CollapsibleContent
    v-bind="$attrs"
    :class="cn('overflow-hidden transition-all', props.class, $attrs.class)"
  >
    <slot />
  </CollapsibleContent>
</template>
