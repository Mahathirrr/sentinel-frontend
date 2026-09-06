import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, 'This field is required'),
  email: z.string().min(1, 'This field is required'),
  company: z.string().optional(),
  employees: z.string().optional(),
  message: z.string().min(1, 'This field is required'),
  agree: z.literal(true, {
    errorMap: () => ({ message: 'This field is required' }),
  }),
})

export type FormSchema = z.infer<typeof formSchema>

export interface ActionResponse<T = unknown> {
  success: boolean
  message: string
  errors?: {
    [K in keyof T]?: string[]
  }
  inputs?: T
}
