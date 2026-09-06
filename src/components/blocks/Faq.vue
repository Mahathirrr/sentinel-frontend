<script setup lang="ts">
import { RouterLink } from 'vue-router'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface Props {
  headerTag?: 'h1' | 'h2'
  class?: string
  className2?: string
}

const props = withDefaults(defineProps<Props>(), {
  headerTag: 'h2',
})

const categories = [
  {
    title: 'Support',
    questions: [
      {
        question: 'How do I update my account without breaking my laptop?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.',
      },
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.',
      },
      {
        question: 'Are you going to be subsumed by AI?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.',
      },
    ],
  },
  {
    title: 'Your account',
    questions: [
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.',
      },
      {
        question: 'Are you going to be subsumed by AI?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.',
      },
    ],
  },
  {
    title: 'Other questions',
    questions: [
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.',
      },
      {
        question: 'Are you going to be subsumed by AI?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.',
      },
    ],
  },
]
</script>

<template>
  <section :class="cn('py-28 lg:py-32', props.class)">
    <div class="container max-w-5xl">
      <div :class="cn('mx-auto grid gap-16 lg:grid-cols-2', props.className2)">
        <div class="space-y-4">
          <h1
            v-if="props.headerTag === 'h1'"
            class="text-2xl tracking-tight md:text-4xl lg:text-5xl"
          >
            Got Questions?
          </h1>
          <h2 v-else class="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Got Questions?
          </h2>
          <p class="text-muted-foreground max-w-md leading-snug lg:mx-auto">
            If you can't find what you're looking for,
            <RouterLink to="/contact" class="underline underline-offset-4">
              get in touch
            </RouterLink>
            .
          </p>
        </div>

        <div class="grid gap-6 text-start">
          <div
            v-for="(category, categoryIndex) in categories"
            :key="category.title"
            class=""
          >
            <h3 class="text-muted-foreground border-b py-4">
              {{ category.title }}
            </h3>
            <Accordion type="single" collapsible class="w-full">
              <AccordionItem
                v-for="(item, i) in category.questions"
                :key="i"
                :value="`${categoryIndex}-${i}`"
              >
                <AccordionTrigger>{{ item.question }}</AccordionTrigger>
                <AccordionContent class="text-muted-foreground">
                  {{ item.answer }}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
