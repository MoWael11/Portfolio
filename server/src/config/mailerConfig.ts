import {config} from  'dotenv'
import nodemailer from 'nodemailer'
import Mailgen from 'mailgen'
config()

const mailConfig = {
  port: 465,
  service: 'gmail',
  secure: true,
  auth : {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  }
}

export const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'MoWael',
    link: process.env.app_URL as string,
    logo: 'https://raw.githubusercontent.com/MoWael11/cv/main/images/logo.png',
  }
})

export default nodemailer.createTransport(mailConfig)