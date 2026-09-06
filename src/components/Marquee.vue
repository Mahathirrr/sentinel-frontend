<script setup lang="ts">
interface Props {
  direction?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'left',
})
</script>

<template>
  <div class="overflow-hidden">
    <div
      class="flex w-max"
      :class="props.direction === 'right' ? 'marquee-reverse' : 'marquee'"
    >
      <div class="flex shrink-0 items-center">
        <slot />
      </div>
      <div class="flex shrink-0 items-center" aria-hidden="true">
        <slot />
      </div>
    </div>
  </div>
</template>
