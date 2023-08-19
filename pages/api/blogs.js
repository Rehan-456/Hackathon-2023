import { save,getAll } from "@/services/blogs"
import { getByEmail } from "@/services/blogs"


export default function handler(req, res) {
  if(req.method === 'POST'){
    const {email,title,description} = req.body
    save(email,title,description)
    res.status(201).send()
  }
  if (req.method === 'GET'){
    const {requestType} = req.query
    if(requestType === 'Home'){
      const blogsData = getAll()
      console.log(blogsData)
      return res.status(200).json(blogsData)
    }
    else{
      
      const blogsData = getAll()
      console.log(blogsData)
      return res.status(200).json(blogsData)
    }
    
   }
}