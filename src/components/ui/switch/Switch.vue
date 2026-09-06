<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'reka-ui'

import { cn } from '@/lib/utils'

interface Props {
  class?: string
  checked?: boolean
  disabled?: boolean
  name?: string
  required?: boolean
  'aria-label'?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:checked', value: boolean): void
  (e: 'change', value: boolean): void
}>()

function handleUpdate(value: boolean) {
  emit('update:checked', value)
  emit('change', value)
}
</script>

<template>
  <SwitchRoot
    :model-value="props.checked"
    :disabled="props.disabled"
    :name="props.name"
    :required="props.required"
    :aria-label="props['aria-label']"
    :class="cn(
      'peer focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
    @update:model-value="handleUpdate"
  >
    <SwitchThumb
      :class="cn(
        'bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
      )"
    />
  </SwitchRoot>
</template>
