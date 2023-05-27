import { Router } from 'express'
import { submitForm } from '../controllers/contactController'

const router = Router()

router.post('/', submitForm)

export default router