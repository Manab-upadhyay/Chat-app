import Conversation from "./conversation"

import Logout from "../messagecomponent/loguot"
import { useEffect, useState } from "react"
import Search from "./search"

export default function Sidecart(){
    const [conversation , setconversations]= useState()

    useEffect(() => {
        const fetchConversations = async () => {
          try {
            const res = await fetch('/api/users');
            const data = await res.json();
            setconversations(data);
           
            console.log(conversation)
          } catch (error) {
            console.error("Failed to fetch conversations", error);
          }
        };
    
        fetchConversations();
      },[]);
      return (
        <div className="h-screen overflow-y-auto flex flex-col">
          <Search />
          <div className="divide-y-4 my-5 flex-1">
            {conversation?.map((conversation, idx) => (
              <Conversation key={idx} conversation={conversation} />
            ))}
               <div className="p-4 mr-10">
            <Logout />
          </div>
          </div>
       
        </div>
      );
    }
            

          

        
        
  