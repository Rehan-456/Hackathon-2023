import Card from "@/component/card";
import Router from "next/router"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard({blogs}){
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [data, setBlogs] = useState();
   const router = useRouter()
   const{email} = router.query
   
   const userBlog = async (e) =>{
      e.preventDefault()
        try{
          console.log(email,title,description)
          const res = await fetch("/api/blogs", {
           method : "POST",
           body : JSON.stringify({email,title,description}),
           headers :{
               "Content-type" : "application/json"
           }
       }) 
       if (res.ok){
           alert("Blog Published Successfully")
         //   router.push('/login')
       }
       }catch(err){
           
           console.error(err)
       }
      } 
   return(
    
    <div>
      <h1 className="font">Dashboard</h1>
      <div className = "font1">
         Welcome, {email}
        
      </div>
      <div className="container card signupcard center-align">
      <form onSubmit={(e)=> userBlog(e)}>
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <button className="btn-large #1565c0 blue darken-3" type="submit" >Publish Blog
          <i className="material-icons right">forward</i>
        </button>
      </form>
      
      


    </div>
    <h1>My Blogs</h1>
   <div>
    <Card blogs = {blogs}/>
   
   </div>
    </div>
    
   ) 
}
export async function getStaticProps() {
   
    const res = await fetch("http://localhost:3000/api/blogs?requestType=dashboard")
   const data = await res.json()
 
   return {
     props: {
       blogs: data
     }
   }
 }
