import React,{useState,useEffect} from "react";
import '../../index.css'
import Sidenav from "./Sidenav";
import Searchbar from "./Searchbar";
import SidebarChat from "./SidebarChat";

import axios from "../../axios";
import Pusher from "pusher-js"
const Sidebar = () => {
 
  const [rooms,setRooms] = useState([]);
  useEffect(() =>{
    axios.get("/rooms/all").then((response)=>{
      
      setRooms(response.data)
    })
},[])
  useEffect(()=>{
    const pusher = new Pusher('01c0a67ab217893ca935', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('room');
    channel.bind('inserted', function(room) {
      setRooms((prevRooms)=>[...prevRooms, room])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);
  
 
  
  

  return (
    <div  >
    <Sidenav />
    <Searchbar />
    <div className="custom-scrollbar overflow-y-scroll ">
    <SidebarChat addNewChat />
    {
      rooms.map((room)=>(
        <SidebarChat  key={room._id} name={room.name} id={room._id}  />
      ))
    }
    
    
    </div>
  
    </div>
  );
};

export default Sidebar;
