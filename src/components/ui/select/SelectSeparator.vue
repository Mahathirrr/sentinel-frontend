<script setup lang="ts">
import { SelectSeparator } from 'reka-ui'

import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <SelectSeparator
    v-bind="$attrs"
    :class="cn('bg-border pointer-events-none -mx-1 my-1 h-px', props.class)"
  />
</template>
