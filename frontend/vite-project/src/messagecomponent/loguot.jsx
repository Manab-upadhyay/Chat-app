import { CiLogout } from "react-icons/ci";
import { useAuthContext } from "../context/authcontext";

export default function Logout(){
const {authUser, setAuthUser}= useAuthContext()
    function handdlelogout(){
const token = localStorage.getItem('chat-app')
if(token){
    localStorage.removeItem('chat-app',token)
    setAuthUser("")
    
   
}
    }
 return(
    <>
    <div className="cursor-pointer">
    <CiLogout onClick={handdlelogout}/>
    </div>
    
    </>
 )
}