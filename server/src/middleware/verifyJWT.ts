import jwt, { VerifyErrors } from 'jsonwebtoken'
import { Response, NextFunction} from "express"

export default (req: any, res:  Response, next:  NextFunction) => {
  const authHeader: any = req.headers.authorization || req.headers.Authorization

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]
  
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: (VerifyErrors | null|any), decoded: any) => {
      if (err) return res.status(403).json({ message: 'Forbidden' })
      req.user = decoded.UserInfo.username
      
      next()
    }
  )
}