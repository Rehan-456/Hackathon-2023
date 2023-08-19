import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function NavBar(){
    const router = useRouter()
    const router1 = useRouter()
    function isActive(route){
      if (route == router.pathname){
        return "active"
      } 
      else ""

    }
    const handleLogout = async () => {
      // Perform any logout-related actions here
      await signOut(); 
     
      router1.push("/login");
    };
    return(
        <nav>
        <div class="nav-wrapper #1565c0 blue darken-3">
          <Link class="brand-logo" href="/">Personalized Blogging App</Link>
          <ul id="nav-mobile" class="right">
            <li className={isActive("/login")}><Link href="/login">Login</Link></li>
            <li className={isActive("/signup")}><Link href="/signup">Signup</Link></li>
            <li><button onClick = {handleLogout}  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log out</button></li>              
          </ul> 
        </div>
      </nav>
    )
}