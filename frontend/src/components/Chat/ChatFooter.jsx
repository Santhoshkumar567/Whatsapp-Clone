import React, { useState } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import "../../index.css";
import axios from "../../axios";
import { useStateValue } from "../ContextApi/StateProvider";
import { useParams } from "react-router-dom";
const ChatFooter = () => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const { roomId } = useParams();
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }

    await axios.post(`/messages/room/${roomId}`, {
      messages: input,
      name: user.displayName,
      timestamp: new Date(),
      uid: user.uid,
      roomId: roomId,
    });
    setInput("");
  };

  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral-300 text-neutral-content">
        <aside className="items-center grid-flow-col">
          <MdOutlineEmojiEmotions size="28" className="mx-3 text-slate-700" />
          <IoMdAttach size="28" className="mx-3 text-slate-700 " />
        </aside>
        <nav>
          <form className="w-full flex">
            <input
              type="text"
              placeholder="Type here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="input input-bordered input-sm max-w-xs w-[20rem] text-slate-900 flex-1"
            />
            <button onClick={sendMessage}>
              <RiSendPlaneFill
                size="26"
                className="mx-10 text-slate-900 flex-none"
              />
            </button>
          </form>
        </nav>
      </footer>
    </div>
  );
};

export default ChatFooter;
