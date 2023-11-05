import React, { useEffect, useState } from "react";
import "../../index.css";
import { useStateValue } from "../ContextApi/StateProvider";
import axios from "../../axios";
import { useParams } from "react-router-dom";
import Pusher from "pusher-js";
const Chatbody = () => {
  const [msgs, setMsgs] = useState([]);
  const [{ user }] = useStateValue();
  const { roomId } = useParams();
  useEffect(() => {
    const pusher = new Pusher("01c0a67ab217893ca935", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", function (message) {
      setMsgs((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);
  useEffect(() => {
    axios.get(`/messages/room/${roomId}`).then((response) => {
      setMsgs(response.data);
    });
  }, [roomId]);

  return (
    <div className="chat_body custom-scrollbar overflow-y-scroll">
      {msgs.map((msg) => {
        return msg.uid === user.uid ? ( // Use curly braces here
          <div className="chat chat-end mb-2" key={msg._id}>
            <div className="chat-header text-black text-sm">{msg.name}</div>
            <div className="chat-bubble bg-green-300 text-black">
              {msg.messages}
            </div>
            <time className="chat-footer  text-xs text-black">
              {new Date(msg.timestamp).toString().slice(0, 25)}
            </time>
          </div>
        ) : (
          <div className="chat chat-start" key={msg._id}>
            <div className="chat-header text-black text-sm">{msg.name}</div>
            <div className="chat-bubble">{msg.messages}</div>
            <time className="chat-footer text-xs text-black">
              {new Date(msg.timestamp).toString().slice(0, 25)}
            </time>
          </div>
        );
      })}
    </div>
  );
};

export default Chatbody;
