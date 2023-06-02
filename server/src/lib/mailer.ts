import transporter, { mailGenerator } from '../config/mailerConfig'
import { config } from 'dotenv'
import { Response} from 'express'
import {format} from 'date-fns'
import { getAllIp, deleteAllIp } from '../controllers/ipController'
config()

export const sendContactForm = async (res: Response, name: string, email: string, message: string, phone: string | undefined) => {
  const mail = {
    body: {
      intro: 'A new message has been sent from your website',
      name: 'Mohamed',
      table: {
        data: [
          {
            title: 'Name',
            content: name,
          },
          {
            title: 'Email',
            content: email,
          },
          {
            title: 'Phone',
            content: phone,
          },
          {
            title: 'Message',
            content: message,
          }
        ],
        columns: {
          // Optionally, customize the column widths
          customWidth: {
            title: '20%',
          },
        }
      },
    },
  }

  const messageForMail = {
    from: process.env.EMAIL,
    to: process.env.MY_EMAIL,
    subject: 'New contact form submission from MoWael.com',
    html: mailGenerator.generate(mail)
  }

  try {
    await transporter.sendMail(messageForMail)
    res.status(200).json("Thank you for reaching out! I'll get back to you as soon as possible.")
  } catch (err) {
    console.error('Error while sending email:', err)
    res.status(500).json('An error occurred while sending the message, please try later.')
  }

}

export const sendReport = async () => {

  const ips = await getAllIp()
  if (!ips.length) return

  const date = new Date()
  const fomrattedDate = format(date, 'dd/MM/yyyy')

  const ipsObject = ips.map(ip => {
    return {
      country: ip.country,
      city: ip.city,
      ip: ip.ipAddress
    }
  })
  
  const mail = {
    body: {
      intro: `it's ${fomrattedDate} and you have ${ips.length} visitors on your website`,
      name: 'Mohamed',
      table: {
        data: ipsObject, 
        columns: {
          customWidth: {
            country: '20%',
            city: '20%',
          },
        }
      },
    },
  }

  const messageForMail = {
    from: process.env.EMAIL,
    to: process.env.MY_EMAIL,
    subject: 'New report has been sent from your website',
    html: mailGenerator.generate(mail)
  }

  try {
    await transporter.sendMail(messageForMail)
    deleteAllIp()
    console.log('email sent successfully')
    
  } catch (err) {
    console.error('Error while sending email:', err)
  }
}
