<script setup lang="ts">
import { NavigationMenuList, type NavigationMenuListProps } from 'reka-ui'

import { cn } from '@/lib/utils'

type Props = NavigationMenuListProps & { class?: string }

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuList
    v-bind="props"
    :class="cn(
      'group flex flex-1 list-none items-center justify-center space-x-1',
      props.class,
    )"
  >
    <slot />
  </NavigationMenuList>
</template>
