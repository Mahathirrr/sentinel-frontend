<script setup lang="ts">
import { NavigationMenuItem, type NavigationMenuItemProps } from 'reka-ui'

type Props = NavigationMenuItemProps & { class?: string }

defineProps<Props>()
</script>

<template>
  <NavigationMenuItem v-bind="$attrs" :class="$attrs.class as string">
    <slot />
  </NavigationMenuItem>
</template>
