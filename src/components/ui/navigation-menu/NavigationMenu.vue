<script setup lang="ts">
import { NavigationMenuRoot, type NavigationMenuRootProps } from 'reka-ui'
import NavigationMenuViewport from './NavigationMenuViewport.vue'

import { cn } from '@/lib/utils'

type Props = NavigationMenuRootProps & { class?: string }

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuRoot
    v-bind="props"
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)"
  >
    <slot />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
