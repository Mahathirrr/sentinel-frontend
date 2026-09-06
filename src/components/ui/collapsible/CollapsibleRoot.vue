<script setup lang="ts">
import { CollapsibleRoot } from 'reka-ui'

interface Props {
  class?: string
  disabled?: boolean
  open?: boolean
  defaultOpen?: boolean
}

defineProps<Props>()

defineEmits<{
  (e: 'update:open', value: boolean): void
  (e: 'openChange', value: boolean): void
}>()
</script>

<template>
  <CollapsibleRoot v-bind="$attrs" :class="$attrs.class as string">
    <slot />
  </CollapsibleRoot>
</template>
