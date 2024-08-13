import { Link } from "react-router-dom"
import { useState } from "react"
import {  useAuthContext } from "../context/authcontext";
import { ToastContainer, toast } from 'react-toastify';

export default function Login(){
  const [input, setinput]= useState({
    fullname:'',
    password:'',
    
   
  })
  const { setAuthUser}=useAuthContext()
  async function hanndleClick(){
const data= {username:input.fullname, password:input.password}
const res= await fetch('/api/login',{
  method:"POST",
  body:JSON.stringify(data),
  headers:{
    "content-type":"application/json"

  }

})
const result= await res.json()
console.log(result.user)
if(result.message=='Success'){

  localStorage.setItem("chat-app", JSON.stringify(result.user))
  
  setAuthUser(result.user)
}
else{
  toast.error("error occured")
}

  }
    return (
        <>
        <div className="w-full flex justify-center h-72 ">
        <div className="w-72 bg-gray-200 rounded-md bg-clip-padding text-center backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
       <h1 className="my-4">Login <span className="text-blue-600">Chat-app</span></h1> 
       <div className="my-2">
        <input type="text" placeholder="Username" className="input input-bordered  max-w-xs"
        value={input.fullname}
        onChange={(e)=>setinput({...input, fullname: e.target.value})}
        
        />
        </div>
        <div>
        <input type="text" placeholder="Password" className="input input-bordered  max-w-xs"
        value={input.password}
        onChange={(e)=>setinput({...input, password:e.target.value})}
        />
        </div>
        Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link>
        <button className="btn btn-wide my-4" onClick={hanndleClick}>Login</button>
      </div>
      <ToastContainer />
        </div>
       
        </>
    )
}