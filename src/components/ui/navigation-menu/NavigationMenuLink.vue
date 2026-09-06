<script setup lang="ts">
import { NavigationMenuLink, type NavigationMenuLinkProps } from 'reka-ui'

type Props = NavigationMenuLinkProps & { class?: string }

defineProps<Props>()
</script>

<template>
  <NavigationMenuLink v-bind="$attrs" :class="$attrs.class as string">
    <slot />
  </NavigationMenuLink>
</template>
