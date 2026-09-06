<script setup lang="ts">
import { Check, ChevronsUpDown, X } from 'lucide-vue-next'
import { h, ref } from 'vue'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface PlanFeature {
  name: string
  free: true | false | null | string
  startup: true | false | null | string
  enterprise: true | false | null | string
}

interface FeatureSection {
  category: string
  features: PlanFeature[]
}

const pricingPlans = [
  { name: 'Free', button: { text: 'Get started', variant: 'outline' as const } },
  {
    name: 'Startup',
    button: { text: 'Get started', variant: 'outline' as const },
  },
  {
    name: 'Enterprise',
    button: { text: 'Get a demo', variant: 'outline' as const },
  },
]

const comparisonFeatures: FeatureSection[] = [
  {
    category: 'Usage',
    features: [
      {
        name: 'Members',
        free: 'Unlimited',
        startup: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        name: 'Transactions',
        free: '250',
        startup: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        name: 'Teams',
        free: '2',
        startup: 'Unlimited',
        enterprise: 'Unlimited',
      },
    ],
  },
  {
    category: 'Features',
    features: [
      { name: 'Reporting', free: true, startup: true, enterprise: true },
      { name: 'Analytics', free: true, startup: true, enterprise: true },
      {
        name: 'Import and export',
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: 'Integrations',
        free: true,
        startup: true,
        enterprise: true,
      },
      { name: 'Mainline AI', free: null, startup: true, enterprise: true },
      { name: 'Admin roles', free: null, startup: null, enterprise: true },
      { name: 'Audit log', free: null, startup: null, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      {
        name: 'Priority Support',
        free: true,
        startup: true,
        enterprise: true,
      },
      { name: 'Account Manager', free: null, startup: null, enterprise: true },
      { name: 'Uptime SLA', free: null, startup: null, enterprise: true },
    ],
  },
]

function renderFeatureValue(value: true | false | null | string) {
  if (value === true) {
    return h(Check, { class: 'size-5' })
  }
  if (value === false) {
    return h(X, { class: 'size-5' })
  }
  if (value === null) {
    return null
  }
  return h('div', { class: 'flex items-center gap-2' }, [
    h(Check, { class: 'size-4' }),
    h('span', { class: 'text-muted-foreground' }, value),
  ])
}

const selectedPlan = ref(1) // Default to Startup plan
const isOpen = ref(false)
</script>

<template>
  <section class="pb-28 lg:py-32">
    <div class="container">
      <!-- Mobile View -->
      <div class="md:hidden">
        <Collapsible :open="isOpen" @update:open="isOpen = $event">
          <div class="flex items-center justify-between border-b py-4">
            <CollapsibleTrigger class="flex items-center gap-2">
              <h3 class="text-2xl font-semibold">
                {{ pricingPlans[selectedPlan].name }}
              </h3>
              <ChevronsUpDown
                :class="`size-5 transition-transform ${isOpen ? 'rotate-180' : ''}`"
              />
            </CollapsibleTrigger>
            <Button
              :variant="pricingPlans[selectedPlan].button.variant"
              class="w-fit"
            >
              {{ pricingPlans[selectedPlan].button.text }}
            </Button>
          </div>
          <CollapsibleContent class="flex flex-col space-y-2 p-2">
            <template v-for="(plan, index) in pricingPlans" :key="index">
              <Button
                v-if="index !== selectedPlan"
                size="lg"
                variant="secondary"
                @click="selectedPlan = index; isOpen = false"
              >
                {{ plan.name }}
              </Button>
            </template>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <!-- Desktop View -->
      <div class="grid grid-cols-4 gap-4 max-md:hidden">
        <div class="col-span-1 max-md:hidden"></div>

        <div v-for="(plan, index) in pricingPlans" :key="index" class="">
          <h3 class="mb-3 text-2xl font-semibold">{{ plan.name }}</h3>
          <Button :variant="plan.button.variant" class="">
            {{ plan.button.text }}
          </Button>
        </div>
      </div>

      <!-- Feature Sections -->
      <template v-for="section in comparisonFeatures" :key="section.category">
        <div class="">
          <div class="border-primary/40 border-b py-4">
            <h3 class="text-lg font-semibold">{{ section.category }}</h3>
          </div>
          <div
            v-for="(feature, featureIndex) in section.features"
            :key="featureIndex"
            class="text-foreground grid grid-cols-2 font-medium max-md:border-b md:grid-cols-4"
          >
            <span class="inline-flex items-center py-4">{{ feature.name }}</span>
            <!-- Mobile View - Only Selected Plan -->
            <div class="md:hidden">
              <div class="flex items-center gap-1 py-4 md:border-b">
                <component
                  :is="renderFeatureValue([feature.free, feature.startup, feature.enterprise][selectedPlan])"
                />
              </div>
            </div>
            <!-- Desktop View - All Plans -->
            <div class="hidden md:col-span-3 md:grid md:grid-cols-3 md:gap-4">
              <div
                v-for="(value, i) in [feature.free, feature.startup, feature.enterprise]"
                :key="i"
                class="flex items-center gap-1 border-b py-4"
              >
                <component :is="renderFeatureValue(value)" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
