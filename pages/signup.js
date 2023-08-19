import { useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

export default function Signup() {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setrepeatPassword] = useState("")
  const [isValidRepeatPassword, setisValidRepeatPassword] = useState(false)
  const router = useRouter()
 
  useEffect(() => {
    validateRepeatPassword();
  }, [password, repeatPassword]);

  const validateRepeatPassword= () =>{
    if(password === repeatPassword){
      setisValidRepeatPassword(true)
    }
    return isValidRepeatPassword
    
  }
  const userSignup = async (e) =>{
    e.preventDefault()
    const isValid = validateRepeatPassword()
    console.log(isValid)
    if (!isValid){
      alert('Repeat Password is incorrect')
    }
    else{
      try{
        console.log(firstName,lastName,email,password)
        const res = await fetch("/api/signup", {
         method : "POST",
         body : JSON.stringify({firstName,lastName,email,password}),
         headers :{
             "Content-type" : "application/json"
         }
     }) 
     if (res.ok){
         alert("Signup SuccessFul")
         router.push('/login')
     }
     }catch(err){
         
         console.error(err)
     }
    }
    
  }
  return (
    <div className="container card signupcard center-align">
      <h1 className="font">Signup</h1>

      <form onSubmit={(e)=> userSignup(e)}>
      <input type="text" pattern=".{3,20}" title="Mninmum 3 characters required" required value={firstName} placeholder="firstName" onChange={(e) => setfirstName(e.target.value)} />
        <input type="text" pattern=".{1,20}" title="Mninmum 1 characters required" required value={lastName} placeholder="lastName" onChange={(e) => setlastName(e.target.value)} />
        <input type="text" value={email} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={password} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$" title="atleast 8 char and must have small and capital letters" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input type="text" value={repeatPassword} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$" title="atleast 8 char and must have small and capital letters" placeholder="Repeat Password" onChange={(e) => setrepeatPassword(e.target.value)} />
        
        <button className="btn-large #1565c0 blue darken-3" type="submit" >Signup
          <i className="material-icons right">forward</i>
        </button>

        <Link href="/login"><h2 className="loginfont">Already have an account ?</h2></Link>

      </form>


    </div>
  )
}
