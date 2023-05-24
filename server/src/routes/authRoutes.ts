import { Router} from 'express'
import loginLimiter from '../middleware/loginLimiter'
import { login, refresh, logout} from '../controllers/authController'
const router = Router()

router.route('/')
  .post(loginLimiter, login)

router.route('/refresh')
  .get(loginLimiter, refresh)

router.route('/logout')
  .post(loginLimiter, logout)

export default router