import { allowedOrigins } from './allowedOrigins'

export default {
  origin: (origin: any, callback: any) => {
    if(allowedOrigins.indexOf(origin) == -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
