import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import Ip from '../models/Ip'
import geoip from 'geoip-lite'

export const getAllIp = async () => {
  const allIp = await Ip.find().select(' -_id -__v').lean() 
  return allIp
}

export const addIp = asyncHandler(async (req:  Request, res: Response) => {
  let ipAddress = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress || '' 
  if (typeof ipAddress === 'string' && ipAddress.substring(0,7) == '::ffff:') { 
    ipAddress = ipAddress.substring(7);
  }
  const dublicate = await Ip.findOne({ipAddress}).lean().exec() // to give just json with lean
  if (dublicate) {
    return
  }
  
  const geo = geoip.lookup(ipAddress as string)  
  const ipObject = { ipAddress, city: geo? geo.city? geo!.city  : ' - ' : ' - ', country: geo ? geo!.country ? geo!.country : ' - ' : ' - ' }
  await Ip.create(ipObject)
})

export const deleteAllIp = async() => {
  await Ip.deleteMany({}).lean()
}