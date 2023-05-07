import User from '../models/User'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import { Response, Request } from 'express'

type UserType = {
  id: string;
  username: string;
  email: string;
  roles: string[];
  active: boolean;
  password: string;
}

type UpdateUserType = {
  id?: string;
  username?: string;
  email?: string;
  roles?: string[];
  active?: boolean;
  password?: string;
}

// @desc Get all users
// @route GET /users
// @access Private
export const getAllUsers = asyncHandler(async (req:  Request, res: Response):  Promise<string | any> => {
  const users = await User.find().select('-password').lean() // to give just json with lean
  if (!users?.length) {
    return res.status(400).json({ message: 'No users found'})
  }
  res.json(users)
})

// @desc Create new user
// @route POST /users
// @access Private
export const createUser = asyncHandler(async(req:  Request, res: Response): Promise<string | any> => {
  const { username, email, password, roles }: UserType = req.body

  // Confirm data
  if (!username  || !email || !password ) {
    console.log(username, email, password);
    
    return res.status(400).json({ message: 'All fields are required'})
  }
  // Check for duplicate
  const duplicate = await User.findOne({ $or: [{ email }, { username }] }).lean().exec() // to get error reporting the exec() is needed to run the query and return the result with a promise
  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate email or username'})
  }
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12) // salt rounds 

  const userObject: UpdateUserType = { username, email, "password": hashedPassword, roles }

  // Create and store user
  const user = await User.create(userObject)

  if (user) {
    res.status(201).json({ message: `New user ${username} created`})
  } else {
    res.status(400).json({ message: 'Invalid user data received'})
  }

})

// @desc Update an user
// @route PATCH  /users
// @access Private
export const updateUser = asyncHandler(async(req:  Request, res: Response):  Promise<string | any> => {
  const { id, username, email, roles, active, password }: UserType = req.body
  if (!id || !username || !email || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
    return res.status(400).json({ message: 'All fields are required'})
  }
  const user: any = await User.findById(id).exec()
  if (!user) {
    return res.status(400).json({ message: 'User not found'})
  }

  // Check for duplicate
  const duplicate = await User.findOne({username}).lean().exec() 
  // allow updates to the original user 
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate username'})
  }
  user.username = username 
  user.email = email
  user.roles = roles
  user.active = active

  if (password) {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12) // salt rounds 
    user.password = hashedPassword
  }

  const updatedUser = await user.save()
  res.json({ message: `${updatedUser.username} updated`})
})

// @desc Delete an user
// @route DELETE  /users
// @access Private
export const deleteUser = asyncHandler(async(req:  Request, res: Response): Promise<string | any>  => {
  const { id } = req.body
  if (!id) {
    return res.status(400).json({ message: 'User ID required'})
  }
  const user: any = await User.findById(id).exec()
  if (!user) {
    return res.status(400).json({ message: 'User not found'})
  }
  const result = await user.deleteOne()

  const reply = `User ${result.username} with ID ${result._id} deleted`

  res.json(reply)
})