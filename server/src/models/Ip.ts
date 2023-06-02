import mongoose from 'mongoose'

const ipSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  }
})

export default mongoose.model('IpAddress', ipSchema)