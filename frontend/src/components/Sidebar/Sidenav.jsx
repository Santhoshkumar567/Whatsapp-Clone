import React from "react";
import { useStateValue } from "../ContextApi/StateProvider";

import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdDonutLarge } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

const Sidenav = () => {
  const [{ user }] = useStateValue();
  return (
    <div>
      <div className="navbar bg-slate-400 ">
        <div className="flex-1">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
        </div>
        <div className="flex-none">
          <ul className="flex  px-1 ">
            <li>
              <HiUserGroup
                size="24"
                className="icon1  mr-4 text-slate-700   "
              />
            </li>
            <li>
              <MdDonutLarge
                size="24"
                className="icon1  mr-4 text-slate-700  "
              />
            </li>
            <li>
              <BsFillChatLeftTextFill
                size="24"
                className="icon1  mr-4  text-slate-700 "
              />
            </li>
            <li>
              <HiOutlineEllipsisVertical
                size="24"
                className="icon1  mr-3 text-slate-700  "
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
