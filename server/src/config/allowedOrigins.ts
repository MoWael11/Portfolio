import { config } from "dotenv"
config()

export const allowedOrigins = [
  process.env.app_URL
]
