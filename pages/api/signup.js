// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { save } from "@/services/users"

export default function handler(req, res) {
  if(req.method !== 'POST'){
    res.status(404).send()
  }
  const {firstName,lastName,email,password} = req.body
  save(firstName,lastName,email,password)
  res.status(201).send()
//   try{
//     save(firstName,lastName,email,password)
//     res.status(201).send()
// }catch(err){
 
//   res.status(400).json({message : err})
// }
  }
  
