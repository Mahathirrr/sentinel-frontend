<script setup lang="ts">
import Marquee from '@/components/Marquee.vue'
import { cn } from '@/lib/utils'

interface Company {
  name: string
  logo: string
  width: number
  height: number
  href: string
}

interface Props {
  companies: Company[]
  gridClassName: string
  direction?: 'left' | 'right'
}

defineProps<Props>()
</script>

<template>
  <!-- Desktop static version -->
  <div class="hidden md:block">
    <div
      :class="cn(
        'grid items-center justify-items-center gap-x-20 lg:gap-x-28',
        gridClassName,
      )"
    >
      <a
        v-for="(company, index) in companies"
        :key="index"
        :href="company.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :src="company.logo"
          :alt="`${company.name} logo`"
          :width="company.width"
          :height="company.height"
          class="dark:opacity/100 object-contain opacity-50 transition-opacity hover:opacity-70 dark:invert"
        />
      </a>
    </div>
  </div>

  <!-- Mobile marquee version -->
  <div class="md:hidden">
    <Marquee :direction="direction">
      <a
        v-for="(company, index) in companies"
        :key="index"
        :href="company.href"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-8 inline-block transition-opacity hover:opacity-70"
      >
        <img
          :src="company.logo"
          :alt="`${company.name} logo`"
          :width="company.width"
          :height="company.height"
          class="object-contain"
        />
      </a>
    </Marquee>
  </div>
</template>
