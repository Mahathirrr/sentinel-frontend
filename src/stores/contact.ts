import { defineStore } from 'pinia'

import type { FormSchema } from '@/lib/form-schema'

/**
 * Simulates the server action used by the original Next.js template
 * (next-safe-action). In a Vue + Pinia SPA the submission is handled
 * client-side, but the behaviour (validate -> submit -> success state)
 * is kept identical.
 */
export const useContactStore = defineStore('contact', {
  state: () => ({
    isSubmitting: false,
    hasSucceeded: false,
  }),
  actions: {
    reset() {
      this.isSubmitting = false
      this.hasSucceeded = false
    },
    async submit(payload: FormSchema) {
      this.isSubmitting = true
      try {
        // Simulated async round-trip
        await new Promise((resolve) => setTimeout(resolve, 900))
        // eslint-disable-next-line no-console
        console.log(payload)
        this.hasSucceeded = true
        return { success: true, message: 'Form submitted successfully' }
      } finally {
        this.isSubmitting = false
      }
    },
  },
})
