import React, { useState, useEffect } from "react";

import { BiSearch } from "react-icons/bi";
import { BsCameraVideoFill } from "react-icons/bs";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import "../../index.css";
import { useParams } from "react-router-dom";
import axios from "../../axios";

const Chatnav = () => {
  const [roomName, setRoomName] = useState();
  const [updatedAt, setUpdatedAt] = useState();
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      axios.get(`/rooms/${roomId}`).then((response) => {
        setRoomName(response.data.name);
        setUpdatedAt(response.data.updatedAt);
      });
    }
  }, [roomId]);
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="navbar bg-base-100 h-[3rem] w-full">
      <div className="flex-1">
        <div className="avatar m-2">
          <div className="w-10 rounded-full">
            <img src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          </div>
        </div>
        <div>
          <h2 className="text-sm">
            {roomName ? roomName : "welcome to the whatsapp"}
          </h2>
          <p className="text-xs">
            {updatedAt
              ? `  Last updated at ${new Date().toString().slice(0, 25)}`
              : "welcome to the whatsapp"}
          </p>
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end  ">
          <label tabIndex={0} className=" m-5">
            <button>
              <BsCameraVideoFill size="24" className="mt-1 mr-3" />
            </button>
          </label>
          <div className=" card shadow dropdown-content z-[1] bg-neutral-300 rounded-box w-[31rem] h-24 mt-5">
            <div className="card-body grid ">
              <div className="col-start-1 col-end-9">
                <h2 className="card-title text-lg  -mt-5">
                  Calling is only available on the app
                </h2>
                <p className="text-sm">
                  Download WhatsApp for Windows to start Making calls
                </p>
              </div>
              <div className="card-actions col-start-11 col-end-13">
                <button className="btn -mt-2 b1 bg-green-700 text-slate-50 hover:text-black">
                  Get the App
                </button>
              </div>
            </div>
          </div>
        </div>

        <BiSearch size="24" className="mt-1 mr-5" />
        <div className="dropdown dropdown-end  ">
          <label tabIndex={0} className=" m-1">
            <button>
              <HiOutlineEllipsisVertical size="24" className="mt-1 mr-3" />
            </button>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 mt-5 me-3  w-52"
          >
            <li>
              <a>Contact info</a>
            </li>
            <li>
              <a>Select messages</a>
            </li>
            <li>
              <a>Close Chat</a>
            </li>
            <li>
              <a>Mute notifications</a>
            </li>
            <li>
              <a>Disappearing messages</a>
            </li>
            <li>
              <a>Clear chat</a>
            </li>
            <li>
              <a>Delete chat</a>
            </li>
            <li>
              <a>Report</a>
            </li>
            <li>
              <a>Block</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chatnav;
