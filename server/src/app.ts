import { config } from 'dotenv'
import express, {Express, Request, Response} from 'express'
import root from './routes/root'
import userRoutes from './routes/userRoutes'
import authRoutes from './routes/authRoutes'
import contactRoutes from './routes/contactRoutes'
import ipRoutes from './routes/ipRoutes'
import path from 'path'
import { logger, logEvents } from './middleware/logger'
import { errorHandler } from './middleware/errorHandler'
import cookieparser from 'cookie-parser'
import cors from 'cors'
import corsOptions from './config/corsOptions'
import connectDB from './config/dbConn'
import mongoose from 'mongoose'
import report from './config/report'
import {getAllIp} from './controllers/ipController'
const PORT = process.env.PORT || 4000
const app: Express = express()
config()

console.log(process.env.NODE_ENV);
connectDB()
report()
// to truest proxy so it able to identify the client's IP address
app.set('trust proxy', true)

app.use(logger)

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieparser())

// serve the static files from the public directory
app.use('/', express.static(path.join(__dirname, '..', 'public')))

app.use('/', root)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/contact', contactRoutes)
app.use('/ip', ipRoutes)

app.all('*', (req: Request, res: Response) => {
  res.status(404)
  if (req.accepts('html')) { // header of a http request is text/html
    res.sendFile(path.join(__dirname, '..', 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({error: '404 Not Found'})
  } else {
    res.type('txt').send('404 Not Found')
  }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
  console.log('connected to MongoDB')
  app.listen(PORT, () => console.log(`server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
  console.log(err)
  logEvents(`${err.name}: ${err.message}\t${err.syscall}\t${err.hostname}`, 'mongoErr.log')
})

