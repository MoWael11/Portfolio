import { allowedOrigins } from './allowedOrigins'
import { logEvents } from '../middleware/logger'

export default {
  origin: (origin: any, callback: any) => {
    try {
     if(allowedOrigins.indexOf(origin) !== -1) { // remeber to delete !origin when deploying
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    } catch(err: any) {
      logEvents(`${err.name}: ${err.message}`, 'errLog.txt')
    }
  }  
  ,
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}