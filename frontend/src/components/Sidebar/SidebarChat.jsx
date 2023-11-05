import React, { useEffect, useState } from "react";
import axios from "../../axios";
import {Link} from "react-router-dom"
const SidebarChat = ({ addNewChat, name, id }) => {
  const [seed, setSeed] = useState("");


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

 
  const createGroup = async () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      try {
        await axios.post("/group/create", {
          name: roomName,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="flex bg-base-200 hover:bg-slate-200">
        <div className="avatar m-2">
          <div className="w-10 rounded-full">
            <img src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          </div>
        </div>
        <h2 className="my-4 ms-2">{name}</h2>
      </div>
    </Link>
  ) : (
    <div>
      <h2 className="text-xl font-bold text-center py-2" onClick={createGroup}>
        Add new Chat
      </h2>
    </div>
  );
};
export default SidebarChat;
