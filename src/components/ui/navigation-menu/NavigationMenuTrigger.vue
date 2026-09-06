<script setup lang="ts">
import { NavigationMenuTrigger, type NavigationMenuTriggerProps } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'

import { navigationMenuTriggerStyle } from '.'
import { cn } from '@/lib/utils'

type Props = NavigationMenuTriggerProps & { class?: string }

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuTrigger
    v-bind="props"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <ChevronDown
      class="relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
