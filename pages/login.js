import { useState } from "react"
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router"
import Router from "next/router"
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verified, setVerified] = useState(false);
  const router = useRouter()
  const userLogin = async (e) => {
      e.preventDefault()
      console.log(email,password)
      const dataResponse = await signIn('credentials', { redirect: false, email, password })
      if (dataResponse.ok) {
          setVerified(true)
          alert("successfully login")
          Router.push({
            pathname: '/dashboard',
            query: {
              email
            } // the data
          })
          localStorage.setItem('email',email)
      }
      else if(!dataResponse.ok){
          alert("Email or password is incorrect")
      }
    }
  return (
    <div className="container card signupcard center-align">
      <h1 className="font">Login</h1>
      <form onSubmit={(e) => userLogin(e)}>
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn-large #1565c0 blue darken-3" type="submit" >Login
          <i className="material-icons right">forward</i>
        </button>

        <Link href="/signup"><h2 className="loginfont">Don't have an account?</h2></Link>
      </form>


    </div>
  )
}
