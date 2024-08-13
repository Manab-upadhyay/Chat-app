import { IoIosSend } from "react-icons/io";
import useConversation from "../zustand/useconversation";
import { useEffect, useState } from "react";
import { useSocketContext } from "../context/socketcontext";

export default function Msginput() {
    const { messages, setMessages, selectedConversation } = useConversation();
    const [Messages, setInputMessage] = useState('');
  
    useEffect(() => {
        console.log("messages updated", messages);
    }, [messages]);
   
  

    async function handleClick() {
        if (!Messages.trim()) {
            return;
        }

        
      
        try {
            const res = await fetch(`/api/send/${selectedConversation._id}`, {
                method: "POST",
           
                body: JSON.stringify({ Messages }),
                headers: {
                    "Content-Type": "application/json"
                },
            });

       

            const result = await res.json();
        

            // Add the new message to the state
        
            setMessages([  ...messages, result]);
           
           
        } catch (error) {
            console.log(error)
            console.error('There was a problem with the fetch operation:', error);
        }

        setInputMessage('');
    }

    return (
        <div className="flex flex-1 justify-end z-10">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Type Message"
                    className="input input-bordered w-full pr-10"
                    value={Messages}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <IoIosSend
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}
