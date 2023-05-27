import mongoose from 'mongoose'

export default  async () => {
  try {
    mongoose.connect(process.env.DATABASE_URI as string) 
  } catch (err) {
    console.log(err);
  }
}