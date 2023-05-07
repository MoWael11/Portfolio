import mongoose from 'mongoose'

export default  async () => {
  try {
    console.log(process.env.DATABASE_URI);
    mongoose.connect(process.env.DATABASE_URI as string) 
  } catch (err) {
    console.log(err);
  }
}