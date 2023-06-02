import { Response, Request, response } from 'express'
import { formValidator } from '../lib/validations/contact-forms'
import { sendContactForm } from '../lib/mailer'
import {z} from  'zod'

type FormData = z.infer<typeof formValidator>;

export const submitForm = async (req: Request, res: Response): Promise<any> => {
  const {name, email, message, phone}: FormData = req.body
  try {
    formValidator.parse({name, email, message, phone})
  } catch (error) {
    return res.status(400).json("Invalid form")
  }
  sendContactForm(res, name, email, message, phone)
}