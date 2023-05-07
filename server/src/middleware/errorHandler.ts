import { logEvents } from './logger'
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

export const errorHandler = (err: ErrorRequestHandler | any, req: Request, res: Response, next: NextFunction) => {
  logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
  console.log(err.stack);
  
  const status = res.statusCode ? res.statusCode : 500 // server error
  res.status(status)
  res.json({error: err.message})

}