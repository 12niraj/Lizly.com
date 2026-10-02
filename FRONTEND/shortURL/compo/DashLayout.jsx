import React, { useEffect } from "react";
import Sidebar from "./UserDashLaout/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashLayout = () => {
  const navigate = useNavigate();
  const [isopen, setisopen] = useState(true);
  const [qrcount, setqrcount] = useState(0)
  const [total_link, settotal_link] = useState(0)
  const [totalclicks, settotalclicks] = useState(0)
  const [allusermap, setallusermap] = useState([])
  const [allclickdate, setallclickdate] = useState([])
 
  //profile vaariable//
  const [name, setname] = useState("")
  const [email, setemail] = useState("")

  useEffect(() => {


    console.log("eneter in dashlayout");
    
    //----dashbard API----------

    axios.get("http://localhost:3001/dashboard",  {
    withCredentials: true,
  })
  .then((response)=>{
  //  console.log(response.data.message);
    console.log(response.data.qrcount);
    setqrcount(response.data.qrcount)
    settotal_link(response.data.total_link)
    settotalclicks(response.data.totalclicks)
    setallusermap(response.data.allusermap)
    setallclickdate(response.data.allclickdate)
   console.log("login ");
   
   
  })
  .catch((error)=>{
     console.log(error.response.data.message);
     console.log("please login");
         navigate("/login", {
    state: {
      message: "Please log in to continue to dashboard."
    }
  });
     
  })

  //PROFILE API CALL

  axios.get("http://localhost:3001/profile",{
    withCredentials:true,
  })
  .then((response)=>{
  // console.log("profile status", response.data.message);
  // console.log("naame", response.data.name);
  setname(response.data.name)
  setemail(response.data.email)
  })
  .catch((error)=>{
   console.log(error.response.data.message);
  })



  }, [])
  




  return (
    <div className="min-h-screen pt-28  bg-[#061a33] text-white">
      <Sidebar isopen={isopen} setisopen={setisopen} />

      <main className={`min-h-screen pt-5 ${isopen ? "pl-64" : "pl-20"}`}>
<Outlet
  context={{
    qrcount,
    total_link,
    totalclicks,
    name,email,
    allusermap,
    setallusermap,
    allclickdate
  }}
/>
      </main>
    </div>
  );
};

export default DashLayout;
