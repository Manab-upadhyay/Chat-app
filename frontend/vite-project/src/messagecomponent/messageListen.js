import { useEffect } from "react"
import { useSocketContext } from "../context/socketcontext"
import useConversation from "../zustand/useconversation"

const useMsgListen=()=>{
    const {socket}= useSocketContext()
    const {messages, setMessages}=useConversation() 
    useEffect(()=>{
        
        socket?.on("newmsg",(newmsg)=>{
            setMessages([...messages, newmsg])
            console.log("socket msg ", messages)
        })
        return ()=>socket?.off("newmsg")
    },[socket, messages, setMessages])

}
export default useMsgListen