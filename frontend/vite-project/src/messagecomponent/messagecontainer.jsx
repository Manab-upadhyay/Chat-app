import Message from "./message"
import Msginput from "./messageinput"
import useConversation from "../zustand/useconversation";
import { useEffect } from "react";
import { useAuthContext } from "../context/authcontext";
export default function MessageComponent(){
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  useEffect(()=>{
    return()=>  setSelectedConversation(null)
    
  },[setSelectedConversation])

return (
    <>
    {!selectedConversation ?(
        <div className="flex flex-col justify-center w-1/2 h-full bg-gray-200 rounded-md bg-clip-padding text-center backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
      <NochatSelected></NochatSelected>
      </div>
    ):(
    <>
    <div className="flex flex-col w-1/2 h-full bg-gray-200 rounded-md bg-clip-padding text-center backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
     <span>{selectedConversation?.username}</span>
      <div className=" flex-1 overflow-y-auto">
        <Message />
       
       
      </div>
      <div >
        <Msginput />
      </div>
    </div>
    </>)}
    
    </>
)
}
const NochatSelected=()=>{
  const{authUser}= useAuthContext()
 
 
return (
  <>
  <div className="flex justify-center">
  <div className="p-6 ">
    <p className="text-2xl font-bold mb-4">Hey, {authUser?.username}! 👋</p>
    <p className="text-lg mb-2">Welcome to Chat-App!</p>
    <p className="text-md">Start messaging and have fun! 😊</p>
    <div className="mt-4 flex justify-center space-x-4">
      <span role="img" aria-label="party" className="text-3xl">🎉</span>
      <span role="img" aria-label="chat" className="text-3xl">💬</span>
      <span role="img" aria-label="rocket" className="text-3xl">🚀</span>
      <span role="img" aria-label="thumbs up" className="text-3xl">👍</span>
    </div>
  </div>
</div>
</>
)
}