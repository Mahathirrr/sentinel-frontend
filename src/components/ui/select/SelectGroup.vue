<script setup lang="ts">
import { SelectGroup } from 'reka-ui'

interface Props {
  class?: string
}

defineProps<Props>()
</script>

<template>
  <SelectGroup v-bind="$attrs" data-slot="select-group" :class="$attrs.class">
    <slot />
  </SelectGroup>
</template>
