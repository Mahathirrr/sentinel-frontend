<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { Button } from '@/components/ui/button'

interface Props {
  title?: string
  paragraphs: string[]
  ctaButton?: {
    href: string
    text: string
  }
}

const props = defineProps<Props>()
</script>

<template>
  <section class="flex-1 space-y-4 text-lg md:space-y-6">
    <h2 v-if="props.title" class="text-foreground text-4xl">{{ props.title }}</h2>
    <div class="text-muted-foreground max-w-xl space-y-6">
      <p v-for="(paragraph, index) in props.paragraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>
    <div v-if="props.ctaButton" class="mt-8">
      <RouterLink :to="props.ctaButton.href">
        <Button size="lg">{{ props.ctaButton.text }}</Button>
      </RouterLink>
    </div>
  </section>
</template>
