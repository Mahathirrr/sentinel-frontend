<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  variant?: 'top' | 'bottom'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'top',
})
</script>

<template>
  <div
    :class="cn(
      'relative mx-2.5 mt-2.5 lg:mx-4',
      props.variant === 'top' &&
        'from-primary/50 via-background to-background/80 rounded-t-4xl rounded-b-2xl bg-linear-to-b via-20%',
      props.variant === 'bottom' &&
        'from-background via-background to-primary/50 rounded-t-2xl rounded-b-4xl bg-linear-to-b',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
