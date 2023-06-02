import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  games: {
    type: Object,
    default: {
      'naval-battles': 0,
      'simon-game': 0
    },
  },
})

export default mongoose.model('User', userSchema)
