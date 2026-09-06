<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

import DashedLine from '@/components/DashedLine.vue'
import { Card, CardContent } from '@/components/ui/card'

const items = [
  {
    title: 'Purpose-built for product development',
    image: '/features/triage-card.svg',
  },
  {
    title: 'Manage projects end-to-end',
    image: '/features/cycle-card.svg',
  },
  {
    title: 'Build momentum and healthy habits',
    image: '/features/overview-card.svg',
  },
]
</script>

<template>
  <section id="feature-modern-teams" class="pb-28 lg:pb-32">
    <div class="container">
      <!-- Top dashed line with text -->
      <div class="relative flex items-center justify-center">
        <DashedLine class="text-muted-foreground" />
        <span
          class="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden"
        >
          MEASURE TWICE. CUT ONCE.
        </span>
      </div>

      <!-- Content -->
      <div
        class="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2"
      >
        <h2 class="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Made for modern product teams
        </h2>
        <p class="text-muted-foreground leading-snug">
          Mainline is built on the habits that make the best product teams
          successful: staying focused, moving quickly, and always aiming for
          high-quality work.
        </p>
      </div>

      <!-- Features Card -->
      <Card class="mt-8 rounded-3xl md:mt-12 lg:mt-20">
        <CardContent class="flex p-0 max-md:flex-col">
          <template v-for="(item, i) in items" :key="i">
            <div class="flex flex-1 max-md:flex-col">
              <div class="flex-1 p-4 pe-0! md:p-6">
                <div class="relative aspect-[1.28/1] overflow-hidden">
                  <img
                    :src="item.image"
                    :alt="`${item.title} interface`"
                    class="object-cover object-left-top ps-4 pt-2 h-full w-full"
                  />
                  <div
                    class="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent"
                  />
                </div>

                <a
                  href="#"
                  class="group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                >
                  <h3
                    class="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight"
                  >
                    {{ item.title }}
                  </h3>
                  <div class="rounded-full border p-2">
                    <ChevronRight
                      class="size-6 transition-transform group-hover:translate-x-1 lg:size-9"
                    />
                  </div>
                </a>
              </div>
              <div
                v-if="i < items.length - 1"
                class="relative hidden md:block"
              >
                <DashedLine orientation="vertical" />
              </div>
              <div
                v-if="i < items.length - 1"
                class="relative block md:hidden"
              >
                <DashedLine orientation="horizontal" />
              </div>
            </div>
          </template>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
