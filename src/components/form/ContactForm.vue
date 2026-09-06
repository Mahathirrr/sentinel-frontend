<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Check } from 'lucide-vue-next'
import { Motion } from 'motion-v'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { formSchema } from '@/lib/form-schema'
import { useContactStore } from '@/stores/contact'

const schema = toTypedSchema(formSchema)

const contactStore = useContactStore()
const { isSubmitting, hasSucceeded } = storeToRefs(contactStore)

const formRef = ref<{ resetForm: () => void } | null>(null)

const employeesOptions = [
  { value: '1', label: '1' },
  { value: '2-10', label: '2-10' },
  { value: '11-50', label: '11-50' },
  { value: '51-500', label: '51-500' },
]

async function onSubmit(values: unknown) {
  await contactStore.submit(values as never)
  formRef.value?.resetForm()
}
</script>

<template>
  <div v-if="hasSucceeded" class="w-full gap-2 rounded-md border p-2 sm:p-5 md:p-8">
    <Motion
      :initial="{ opacity: 0, y: -16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4, stiffness: 300, damping: 25 }"
      class="h-full px-3 py-6"
    >
      <Motion
        :initial="{ scale: 0.5 }"
        :animate="{ scale: 1 }"
        :transition="{ delay: 0.3, type: 'spring', stiffness: 500, damping: 15 }"
        class="mx-auto mb-4 flex w-fit justify-center rounded-full border p-2"
      >
        <Check class="size-8" />
      </Motion>
      <h2 class="mb-2 text-center text-2xl font-bold text-pretty">Thank you</h2>
      <p class="text-muted-foreground text-center text-lg text-pretty">
        Form submitted successfully, we will get back to you soon
      </p>
    </Motion>
  </div>

  <Form
    v-else
    ref="formRef"
    :validation-schema="schema"
    class="flex w-full flex-col gap-2 space-y-4 rounded-md"
    @submit="onSubmit"
  >
    <FormField v-slot="{ componentField }" name="name">
      <FormItem class="w-full">
        <FormLabel>Full name * </FormLabel>
        <FormControl>
          <Input
            type="text"
            v-bind="componentField"
            placeholder="First and last name"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="email">
      <FormItem class="w-full">
        <FormLabel>Email address * </FormLabel>
        <FormControl>
          <Input
            type="text"
            v-bind="componentField"
            placeholder="me@company.com"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="company">
      <FormItem class="w-full">
        <FormLabel>Company name </FormLabel>
        <FormControl>
          <Input
            type="text"
            v-bind="componentField"
            placeholder="Company name"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ field }" name="employees">
      <FormItem class="w-full">
        <FormLabel>Number of employees </FormLabel>
        <Select
          :model-value="field.value"
          @update:model-value="field.onChange"
        >
          <FormControl>
            <SelectTrigger class="w-full">
              <SelectValue placeholder="e.g. 11-50" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem
              v-for="{ label, value } in employeesOptions"
              :key="value"
              :value="value"
            >
              {{ label }}
            </SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="message">
      <FormItem>
        <FormLabel>Your message * </FormLabel>
        <FormControl>
          <Textarea
            v-bind="componentField"
            placeholder="Write your message"
            class="resize-none"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ field }" name="agree">
      <FormItem class="flex flex-row items-start space-y-0 space-x-1">
        <FormControl>
          <Checkbox
            :checked="field.checked"
            required
            @update:checked="field.onChange"
          />
        </FormControl>
        <div class="space-y-1 leading-none">
          <FormLabel>I agree to the terms and conditions</FormLabel>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>

    <div class="flex w-full items-center justify-end pt-3">
      <Button class="rounded-lg" size="sm" type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Submitting...' : 'Submit' }}
      </Button>
    </div>
  </Form>
</template>
