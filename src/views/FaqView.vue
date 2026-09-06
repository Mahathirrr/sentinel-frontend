<script setup lang="ts">
import Background from '@/components/Background.vue'
import Faq from '@/components/blocks/Faq.vue'
import Testimonials from '@/components/blocks/Testimonials.vue'
import DashedLine from '@/components/DashedLine.vue'
</script>

<template>
  <Background>
    <Faq
      class="py-28 text-center lg:pt-44 lg:pb-32"
      className2="max-w-xl lg:grid-cols-1"
      header-tag="h1"
    />
    <DashedLine class="mx-auto max-w-xl" />
    <Testimonials dashed-line-class-name="hidden" />
  </Background>
</template>
