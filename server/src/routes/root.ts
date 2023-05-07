import { Router, Response, Request } from 'express'
import path from 'path'

const router = Router()

router.get('^/$|/index(.html)?', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'views', 'index.html'))
})

export default router