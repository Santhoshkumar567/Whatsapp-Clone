import React from "react";
import Login from "./components/login/Login";
import { useStateValue } from "./components/ContextApi/StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [{ user }] = useStateValue();
  return (
    
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="mockup-window border bg-neutral-500 m-5  ">
          <div className="bg-slate-200 h-[40rem] grid grid-cols-12 ">
            <Router>
              <div className="col-start-1 col-end-4 ">
                <Sidebar />
              </div>
              <div className="col-start-4 col-end-13 ">
                <Routes>
                  <Route path="/" element={<Chat />} />
                  <Route path="/rooms/:roomId" element={<Chat />} />
                </Routes>
              </div>
            </Router>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;