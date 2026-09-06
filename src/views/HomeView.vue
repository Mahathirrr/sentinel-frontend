<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import Background from '@/components/Background.vue'
import Hero from '@/components/blocks/Hero.vue'
import EduSection from '@/components/blocks/EduSection.vue'
import PipelineSection from '@/components/blocks/PipelineSection.vue'
import WhySection from '@/components/blocks/WhySection.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Background class="via-muted to-muted/80">
    <Hero />
    <WhySection />
    <EduSection />
    <PipelineSection />
  </Background>

  <section class="container py-20 text-center lg:py-28">
    <h2 class="text-foreground text-2xl tracking-tight md:text-3xl">
      Lihat moderasi bekerja langsung
    </h2>
    <p class="text-foreground/75 mx-auto mt-4 max-w-lg">
      Upload gambar dan dapatkan keputusan izinkan atau tolak dalam hitungan detik.
      Sistem menilai visual dan teks di dalam gambar sekaligus.
    </p>
    <Button as-child size="lg" class="mt-8">
      <RouterLink to="/upload" class="inline-flex items-center gap-2">
        Mulai upload
        <ArrowRight class="size-4" />
      </RouterLink>
    </Button>
  </section>
</template>
