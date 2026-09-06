<script setup lang="ts">
import { Facebook, Linkedin, Twitter } from 'lucide-vue-next'

import ContactForm from '@/components/form/ContactForm.vue'
import DashedLine from '@/components/DashedLine.vue'
</script>

<template>
  <section class="py-28 lg:py-32 lg:pt-44">
    <div class="container max-w-2xl">
      <h1 class="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
        Contact us
      </h1>
      <p class="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
        Hopefully this form gets through our spam filters.
      </p>

      <div class="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
        <!-- Corporate office -->
        <div>
          <h2 class="font-medium">Corporate office</h2>
          <p class="text-muted-foreground mt-3">
            1 Carlsberg Close
            <br />
            1260 Hillview, Australia
          </p>
        </div>

        <!-- Email us -->
        <div>
          <h2 class="font-medium">Email us</h2>
          <div class="mt-3">
            <div>
              <p class="">Careers</p>
              <a
                href="mailto:careers@example.com"
                class="text-muted-foreground hover:text-foreground"
              >
                careers@example.com
              </a>
            </div>
            <div class="mt-1">
              <p class="">Press</p>
              <a
                href="mailto:press@example.com"
                class="text-muted-foreground hover:text-foreground"
              >
                press@example.com
              </a>
            </div>
          </div>
        </div>

        <!-- Follow us -->
        <div>
          <h2 class="font-medium">Follow us</h2>
          <div class="mt-3 flex gap-6 lg:gap-10">
            <a href="#" class="text-muted-foreground hover:text-foreground">
              <Facebook class="size-5" />
            </a>
            <a
              href="https://x.com/ausrobdev"
              class="text-muted-foreground hover:text-foreground"
            >
              <Twitter class="size-5" />
            </a>
            <a href="#" class="text-muted-foreground hover:text-foreground">
              <Linkedin class="size-5" />
            </a>
          </div>
        </div>
      </div>

      <DashedLine class="my-12" />

      <!-- Inquiry Form -->
      <div class="mx-auto">
        <h2 class="mb-4 text-lg font-semibold">Inquiries</h2>
        <ContactForm />
      </div>
    </div>
  </section>
</template>
