import { Router } from 'express'
const router = Router()
import {addIp} from '../controllers/ipController'

router.route('/')
  .post(addIp)

export default router