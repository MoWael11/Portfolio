import cron from 'node-cron'
import {sendReport} from '../lib/mailer'

export default () => {
   cron.schedule('0 0 * * *', () => {
    console.log('running a task every day')
    sendReport()
    }, {
    scheduled: true,
    timezone: 'Europe/Rome'
  })
}