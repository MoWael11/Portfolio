import { Router} from 'express'
import {getAllUsers, createUser, updateUser, deleteUser} from '../controllers/usersController'

const router = Router()

router.route('/')
  .get(getAllUsers)
  .post(createUser)
  .patch(updateUser)
  .delete(deleteUser)

export default router