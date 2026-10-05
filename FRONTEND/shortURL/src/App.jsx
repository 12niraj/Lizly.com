import React from "react";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../compo/Navbar";
import Hero from "../compo/Hero";
import Signup from "../compo/Signup";
import Login from "../compo/Login";
import About from "../compo/About";

import DashLayout from "../compo/DashLayout";
import UserDashboard from "../compo/UserDashLaout/UserDashboard";
import Mylink from "../compo/UserDashLaout/Mylink";
import Analyses from "../compo/UserDashLaout/Analyses";
import Profile from "../compo/UserDashLaout/Profile";



const App = () => {

  const [checkloggedin, setcheckloggedin] = useState(false);


  return (
    <div>
      <Navbar checkloggedin={checkloggedin}
              setcheckloggedin={setcheckloggedin} />


      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup setcheckloggedin={setcheckloggedin} />} />
        <Route path="/login" element={<Login setcheckloggedin={setcheckloggedin}/>} />
        <Route path="/about" element={<About/>} />

        <Route element={<DashLayout/>}>
         <Route path="/dashboard" element={<UserDashboard />} />
         <Route path="/my-link" element={<Mylink/>} />
         <Route path="/analysis" element={<Analyses/>} />  
         <Route path="/my-profile" element={<Profile/>} /> 
        </Route>
        

      </Routes>
    </div>
  );
};

export default App;
