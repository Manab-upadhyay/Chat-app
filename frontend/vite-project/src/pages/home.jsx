import Search from "../components/search";
import Sidecart from "../components/sidebar";
import Logout from "../messagecomponent/loguot";
import MessageComponent from "../messagecomponent/messagecontainer";

export default function Home() {
    return (
        <div className="flex  justify-center h-full w-full p-4 ml-32">
            {/* Sidecart Section */}
            
            <div className="w-1/4 overflow-hidden bg-gray-200 rounded-md bg-clip-padding text-center backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
                <Sidecart />
                <div className="p-4">
            <Logout />
          </div>
            
                
            </div>
           
          
            {/* MessageComponent Section */}
            <div className="flex-1 ml-1  ">
                <MessageComponent />
            </div>
        </div>
    );
}
