import { useSocketContext } from "../context/socketcontext";
import useConversation from "../zustand/useconversation";
import emoji from "../emojies/emojie";
export default function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
 
  const {onlineUsers}= useSocketContext()
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline= onlineUsers.includes(conversation.username)
 

  

 
  return (
    <>
      <div
        className={`flex gap-10 cursor-pointer h-max hover:bg-blue-200 ${
          isSelected ? "bg-blue-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline?"online":" "} cursor-pointer`} >
          <div className="w-10 rounded-full flex-col justify-start">
            <img src={conversation.profilepic} className="w-24" alt="Profile" />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <p>{conversation.username}</p>
          <span>{emoji[Math.floor(Math.random() * emoji.length)]}</span>
        </div>
      </div>
    </>
  );
}
