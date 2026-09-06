<script setup lang="ts">
import DashedLine from '@/components/DashedLine.vue'

const stats = [
  { value: '$150M', label: 'Raised' },
  { value: '20K', label: 'Companies' },
  { value: '1.3B', label: 'Monthly transactions' },
  { value: '1.5K', label: 'Connections per minute' },
]
</script>

<template>
  <section class="">
    <div
      class="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24"
    >
      <div class="flex-[1.5]">
        <h1 class="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Democratising quality software
        </h1>

        <p class="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
          Mainline is bringing modern software to life with AI magic.
        </p>

        <p class="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
          At Mainline, we are dedicated to transforming the way teams plan,
          execute, and deliver projects. Our mission is to provide our
          customers with an unbeatable edge over delays, inefficiencies, and
          disorganisation through actionable insights and seamless
          collaboration. We'll stop at nothing to give you the tools you need
          to get every project across the finish line.
          <br />
          <br />
          We're customer-obsessed, investing the time to understand every
          aspect of your workflow so that we can help you operate better than
          ever before. We're all in this together because your success is our
          success. In our history as a company, we've never lost a customer,
          because when your projects succeed, so do we.
        </p>
      </div>

      <div class="relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10">
        <DashedLine
          orientation="vertical"
          class="absolute top-0 left-0 max-lg:hidden"
        />
        <DashedLine
          orientation="horizontal"
          class="absolute top-0 lg:hidden"
        />
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1">
          <div class="font-display text-4xl tracking-wide md:text-5xl">
            {{ stat.value }}
          </div>
          <div class="text-muted-foreground">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
