import { cva, type VariantProps } from 'class-variance-authority'

export { default as Accordion } from './AccordionRoot.vue'
export { default as AccordionItem } from './AccordionItem.vue'
export { default as AccordionTrigger } from './AccordionTrigger.vue'
export { default as AccordionContent } from './AccordionContent.vue'

export const accordionTriggerVariants = cva(
  'flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
)

export type AccordionTriggerVariants = VariantProps<
  typeof accordionTriggerVariants
>
