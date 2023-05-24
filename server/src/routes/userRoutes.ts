import { Router} from 'express'
import {getAllUsers, createUser, updateUser} from '../controllers/usersController'
import verifyJWT from '../middleware/verifyJWT'

const router = Router()

router.route('/')
  .get(getAllUsers)
  .post(createUser)
router.route('/:id')
  .get(verifyJWT, getAllUsers)
  .patch(verifyJWT, updateUser)

export default router