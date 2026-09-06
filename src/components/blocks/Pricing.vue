<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { ref } from 'vue'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const plans = [
  {
    name: 'Free',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    description: 'Free for everyone',
    features: [
      'Unlimited members',
      '2 teams',
      '500 issues',
      'Slack and Github integrations',
    ],
  },
  {
    name: 'Startup',
    monthlyPrice: '$8',
    yearlyPrice: '$6',
    features: [
      'All free plan features and...',
      'Mainline AI',
      'Unlimited teams',
      'Unlimited issues and file uploads',
      'Mainline Insights',
      'Admin roles',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$8',
    yearlyPrice: '$6',
    features: [
      'All free plan features and...',
      'Mainline AI',
      'Supermainline AGI',
      'Free daily catered lunch',
      'random HIPPA audits',
    ],
  },
]

const isAnnual = ref(true)
</script>

<template>
  <section :class="cn('py-28 lg:py-32', props.class)">
    <div class="container max-w-5xl">
      <div class="space-y-4 text-center">
        <h2 class="text-2xl tracking-tight md:text-4xl lg:text-5xl">Pricing</h2>
        <p class="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Use Mainline for free with your whole team. Upgrade to enable
          unlimited issues, enhanced security controls, and additional features.
        </p>
      </div>

      <div class="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
        <Card
          v-for="plan in plans"
          :key="plan.name"
          :class="plan.name === 'Startup' ? 'outline-primary origin-top outline-4' : ''"
        >
          <CardContent class="flex flex-col gap-7 px-6 py-5">
            <div class="space-y-2">
              <h3 class="text-foreground font-semibold">{{ plan.name }}</h3>
              <div class="space-y-1">
                <div class="text-muted-foreground text-lg font-medium">
                  {{ isAnnual ? plan.yearlyPrice : plan.monthlyPrice }}
                  <template v-if="plan.name !== 'Free'">
                    <span class="text-muted-foreground">
                      per user/{{ isAnnual ? 'year' : 'month' }}
                    </span>
                  </template>
                </div>
              </div>
            </div>

            <div v-if="plan.name !== 'Free'" class="flex items-center gap-2">
              <Switch
                :checked="isAnnual"
                aria-label="Toggle annual billing"
                @update:checked="isAnnual = !isAnnual"
              />
              <span class="text-sm font-medium">Billed annually</span>
            </div>
            <span v-else class="text-muted-foreground text-sm">
              {{ plan.description }}
            </span>

            <div class="space-y-3">
              <div
                v-for="feature in plan.features"
                :key="feature"
                class="text-muted-foreground flex items-center gap-1.5"
              >
                <Check class="size-5 shrink-0" />
                <span class="text-sm">{{ feature }}</span>
              </div>
            </div>

            <Button
              class="w-fit"
              :variant="plan.name === 'Startup' ? 'default' : 'outline'"
            >
              Get started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
