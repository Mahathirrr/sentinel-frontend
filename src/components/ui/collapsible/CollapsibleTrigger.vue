<script setup lang="ts">
import { CollapsibleTrigger } from 'reka-ui'

defineProps<{ class?: string }>()
</script>

<template>
  <CollapsibleTrigger v-bind="$attrs" :class="$attrs.class as string">
    <slot />
  </CollapsibleTrigger>
</template>
