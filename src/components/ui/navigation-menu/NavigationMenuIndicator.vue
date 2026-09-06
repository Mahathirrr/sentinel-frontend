<script setup lang="ts">
import { NavigationMenuIndicator, type NavigationMenuIndicatorProps } from 'reka-ui'

import { cn } from '@/lib/utils'

type Props = NavigationMenuIndicatorProps & { class?: string }

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuIndicator
    v-bind="props"
    :class="cn(
      'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-1 flex h-1.5 items-end justify-center overflow-hidden',
      props.class,
    )"
  >
    <div class="bg-border relative top-[60%] size-2 rotate-45 rounded-tl-sm shadow-md" />
  </NavigationMenuIndicator>
</template>
