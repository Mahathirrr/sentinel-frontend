<script setup lang="ts">
import Background from '@/components/Background.vue'
import AboutBlock from '@/components/blocks/AboutBlock.vue'
import AboutHero from '@/components/blocks/AboutHero.vue'
import Investors from '@/components/blocks/Investors.vue'
import DashedLine from '@/components/DashedLine.vue'
</script>

<template>
  <Background>
    <div class="py-28 lg:py-32 lg:pt-44">
      <AboutHero />

      <AboutBlock />
      <div class="pt-28 lg:pt-32">
        <DashedLine class="container max-w-5xl scale-x-115" />
        <Investors />
      </div>
    </div>
  </Background>
</template>
