import Chatbody from "./Chatbody";
import Chatnav from "./Chatnav";
import ChatFooter from "./ChatFooter";

const Chat = () => {


  return (
    <>
    
      <Chatnav />
      <div className="overflow-y-scroll">
        <Chatbody />
      </div>
      <ChatFooter />
     
    </>
  );
};

export default Chat;
