import { z } from 'zod'

export const formValidator = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  phone: z.string().optional(),
  message: z.string().nonempty().min(10, "")
})
