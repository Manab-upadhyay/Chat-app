import { useEffect, useRef } from "react";
import useConversation from "../zustand/useconversation";
import { useAuthContext } from "../context/authcontext";
import useMsgListen from "./messageListen";
import { useSocketContext } from "../context/socketcontext";

export default function Message() {
  const { messages, setMessages, selectedConversation } = useConversation();
  const { authUser } = useAuthContext(); // Assuming you have user data here
  useMsgListen();

  

 
 
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    console.log("userid",authUser?._id)
  }, [messages]);

  useEffect(() => {
    async function getMessages() {
      try {
        const res = await fetch(`/api/message/${selectedConversation?._id}`);
        const data = await res.json();
        console.log(data);
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages", error);
      }
    }

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation]);

  if (!messages || messages.length === 0) {
    return (
     <div className="flex flex-1 justify-center my-48">
      <p>Hey start messaging!</p>
     </div>
        
      
    );
  }

  return (
    <>
      {messages?.map((msg, index) => {
        const fromMe = msg.senderid === authUser?._id;
        const chatClass = fromMe ? 'chat-end' : 'chat-start';

        return (
          <div key={index} className={`chat ${chatClass}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="User avatar" src={selectedConversation?.profilepic} />
              </div>
            </div>
            <div className="chat-header">
             
            </div>
            <div className={`chat-bubble ${fromMe ? 'bg-blue-500 text-white' : ''}`}>{msg?.message}</div>
            <div className="chat-footer opacity-50">
              {msg?.senderid === authUser?._id ? "Delivered" : `Seen at ${new Date(msg?.createdAt).toLocaleTimeString()}`}
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </>
  );
}