import rateLimit from 'express-rate-limit'
import { logEvents } from './logger'

const loginLimiter = rateLimit({
  windowMs: 120 * 1000, // 2 minutes 
  max: 5, // limit each IP to 5 requests per windowMs
  message:
  {message:'Too many login attempts. Please try again after a 2 minutes'},
  handler: (req, res, next, options) => {
    logEvents(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    res.status(options.statusCode).send(options.message)
  },

  //are just reccomentded for production
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers 
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers 
})

export default loginLimiter