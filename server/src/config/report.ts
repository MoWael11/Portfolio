import cron from 'node-cron'
import {sendReport} from '../lib/mailer'

export default () => {
   cron.schedule('0 0 * * *', () => {
    console.log('running a task every 5 minutes')
    sendReport()
    }, {
    scheduled: true,
    timezone: 'Europe/Rome'
  })
}
