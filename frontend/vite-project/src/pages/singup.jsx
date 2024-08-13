import { useState } from "react"
import {  useAuthContext } from "../context/authcontext";
import { ToastContainer, toast } from 'react-toastify';

export default function Singup(){
  const [input, setinput]= useState({
    fullname:'',
    password:'',
    confirmpassword:'',
    gender:''
})
const { setAuthUser}=useAuthContext()
// function hanndleCheckboxSubmit(){
//   setinput(...input, gender:)
// }

  function handleChange(event) {
    const { name, value } = event.target;
   
    setinput(prevInput => ({
      ...prevInput,
      [name]: value,
    }));
  
   
  }

  async function handdlesubmit(e){
    const data = {
      username: input.fullname,
      password: input.password,
      confirmPassword: input.confirmpassword,
      gender: input.gender,
    };
    if(data.username&&data.password&&data.confirmPassword&&data.gender){
const res= await fetch ('/api/singup',{
  method:"POST",
  
  body:JSON.stringify(data),
  headers: {
    'content-type': 'application/json'
  }
} )
const result = await res.json()
console.log(result.newuser)
console.log(result.message)
if(result.message=='Sucess'){
 toast.success("Your account Has been created ")
  localStorage.setItem("chat-app", JSON.stringify(result.newuser))
  setAuthUser(data)
}

    }
else{
 toast.error("Error occured")
}

}
    return (
        <>
        <div className="w-full flex justify-center h-96 ">
        <div className="w-72 bg-gray-200 rounded-md bg-clip-padding text-center backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
       <h1 className="my-4">Singup <span className="text-blue-600">Chat-app</span></h1> 
       <div className="my-2">
        <input type="text" placeholder="Username" className="input input-bordered  max-w-xs"
        value={input.fullname}
        onChange={(e)=>setinput({...input,fullname:e.target.value})}
        
        />
        </div>
        <div>
        <input type="text" placeholder="Password" className="input input-bordered  max-w-xs" 
        value={input.password}
        onChange={(e)=>setinput({...input,password:e.target.value})}
        
        />
        </div>
        <div className="my-2">
        <input type="text" placeholder="confirmPassword" className="input input-bordered  max-w-xs"
        value={input.confirmpassword}
        onChange={(e)=>setinput({...input,confirmpassword:e.target.value})}

        
        />
        </div>
        <div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Male</span>
    <input  type="checkbox"
              name="gender"
              value="male"
              checked={input.gender === 'male'}
              
              onChange={handleChange}
              className="checkbox checkbox-accent"
    />
  </label>
  <label className="cursor-pointer label">
    <span className="label-text">Female</span>
    <input  type="checkbox"
              name="gender"
              value="female"
              checked={input.gender === 'female'}
              onChange={handleChange}
              className="checkbox checkbox-accent" />
  </label>
</div>
       
        <button className="btn btn-wide my-4 " onClick={handdlesubmit}>Singup</button>
      </div>

        </div>
        </>
    )
}