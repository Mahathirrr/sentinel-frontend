<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

import DashedLine from '@/components/DashedLine.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
  dashedLineClassName?: string
}

const props = defineProps<Props>()

const items = [
  {
    quote: "We're misusing Mainline as a CRM and it still works!",
    author: 'Amy Chase',
    role: 'PM',
    company: 'Mercury Finance',
    image: '/testimonials/amy-chase.webp',
  },
  {
    quote: 'I was able to replace 80% of my team with Mainline bots.',
    author: 'Jonas Kotara',
    role: 'Lead Engineer',
    company: 'Mercury Finance',
    image: '/testimonials/jonas-kotara.webp',
  },
  {
    quote: 'Founder Mode is hard enough without having a really nice PM app.',
    author: 'Kevin Yam',
    role: 'Founder',
    company: 'Mercury Finance',
    image: '/testimonials/kevin-yam.webp',
  },
  {
    quote: 'I can use the tool as a substitute from my PM.',
    author: 'Kundo Marta',
    role: 'Founder',
    company: 'Mercury Finance',
    image: '/testimonials/kundo-marta.webp',
  },
  {
    quote: "We're misusing Mainline as a CRM and it still works!",
    author: 'Amy Chase',
    role: 'PM',
    company: 'Mercury Finance',
    image: '/testimonials/amy-chase.webp',
  },
  {
    quote: 'I was able to replace 80% of my team with Mainline bots.',
    author: 'Jonas Kotara',
    role: 'Lead Engineer',
    company: 'Mercury Finance',
    image: '/testimonials/jonas-kotara.webp',
  },
  {
    quote: 'Founder Mode is hard enough without having a really nice PM app.',
    author: 'Kevin Yam',
    role: 'Founder',
    company: 'Mercury Finance',
    image: '/testimonials/kevin-yam.webp',
  },
  {
    quote: 'I can use the tool as a substitute from my PM.',
    author: 'Kundo Marta',
    role: 'Founder',
    company: 'Mercury Finance',
    image: '/testimonials/kundo-marta.webp',
  },
]
</script>

<template>
  <section :class="cn('overflow-hidden py-28 lg:py-32', props.class)">
    <div class="container">
      <div class="space-y-4">
        <h2 class="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Trusted by product builders
        </h2>
        <p class="text-muted-foreground max-w-md leading-snug">
          Mainline is built on the habits that make the best product teams
          successful: staying focused, moving quickly, and always aiming for
          high-quality work.
        </p>
        <Button variant="outline" class="shadow-md">
          Read our Customer Stories <ArrowRight class="size-4" />
        </Button>
      </div>

      <div class="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
        <Carousel
          :opts="{ align: 'start', loop: true }"
          class="w-full"
        >
          <CarouselContent class="">
            <CarouselItem
              v-for="(testimonial, index) in items"
              :key="index"
              class="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
            >
              <Card class="bg-muted h-full overflow-hidden border-none">
                <CardContent class="flex h-full flex-col p-0">
                  <div class="relative h-[288px] lg:h-[328px]">
                    <img
                      :src="testimonial.image"
                      :alt="testimonial.author"
                      class="object-cover object-top h-full w-full"
                    />
                  </div>
                  <div class="flex flex-1 flex-col justify-between gap-10 p-6">
                    <blockquote class="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                      {{ testimonial.quote }}
                    </blockquote>
                    <div class="space-y-0.5">
                      <div class="text-primary font-semibold">
                        {{ testimonial.author }}, {{ testimonial.role }}
                      </div>
                      <div class="text-muted-foreground text-sm">
                        {{ testimonial.company }}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div class="mt-8 flex gap-3">
            <CarouselPrevious class="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
            <CarouselNext class="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
          </div>
        </Carousel>
      </div>
    </div>
  </section>
  <DashedLine
    orientation="horizontal"
    :class="cn('mx-auto max-w-[80%]', props.dashedLineClassName)"
  />
</template>
