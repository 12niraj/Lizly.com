import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserRound } from "lucide-react";
import { LogOut } from "lucide-react";

const Navbar = ({checkloggedin, setcheckloggedin}) => {
  // const [first, setfirst] = useState(second)
  const navigate = useNavigate();

  // const [checkloggedin, setcheckloggedin] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [showProfile, setshowProfile] = useState(false)
  const [showlogoutui, setshowlogoutui] = useState(false)
  const [logoutmsg, setlogoutmsg] = useState("")
  
  useEffect(() => {
    console.log("navbar open"); 

    axios.get(`${import.meta.env.VITE_API_URL}/checklogin`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.message);
        setcheckloggedin(true);
        setname(response.data.name);
        setemail(response.data.email)
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
        setcheckloggedin(false);
      });
  }, []);

const logoutHandle =()=>{
  axios.post(`${import.meta.env.VITE_API_URL}/logout` , {}, 
    { withCredentials: true })
    .then((response)=>{
    setlogoutmsg(response.data.message)
    setcheckloggedin(false);
    navigate("/");
    })
    .catch((error)=>{
   setlogoutmsg(error.response.data.message)
    })
}

  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-blue-900/50 bg-[#071b3a] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 ">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-3xl text-blue-400">🔗</div>

            <div>
              <h1 className="text-3xl font-bold">
                {" "}
                Liz<span className="text-blue-400">yl</span>
              </h1>

              <p className="text-xs text-gray-400">
                Short links. Bigger possibilities.
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">

              {/* DASHBORD CREATE WHEN LOGGED IN */}

            {checkloggedin && (
              <Link
                to="/dashboard"
                className="text-xl text-gray-300 transition hover:text-blue-400"
              >
                Dashboard
              </Link>
            )}

            <Link
              to="/"
              className="text-xl text-white transition hover:text-blue-400"
            >
              Home
            </Link>

            <a
              href="/#qr-code"
              className="text-xl text-gray-300 transition hover:text-blue-400"
            >
              QR Code
            </a>

            <a
              href="/#feature"
              className="text-xl text-gray-300 transition hover:text-blue-400"
            >
              Feature
            </a>

            <Link
              to="/about"
              className="text-xl text-gray-300 transition hover:text-blue-400"
            >
              About
            </Link>
          </div>

          {/* Auth buttons */}

          {checkloggedin ? (
            <>
              {/* Navigation */}
              <div className="flex items-center gap-10 text-lg">
                {/* <Link to="/dashboard" className="hover:text-blue-400">
        Dashboard
      </Link> */}
              </div>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => setshowProfile(!showProfile)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-500/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold">
                    {/* {name.charAt(0).toUpperCase()} */}
                  </div>

                  <span className="font-semibold">{name}</span>

                  <span className="text-gray-400">▾</span>
                </button>

                {/* Profile dropdown */}

                {/* Profile dropdown */}

{showProfile && (
  <div className="absolute right-0 top-14 z-50 w-56 rounded-xl border border-blue-400/20 bg-[#10284a] p-3 shadow-xl">

    {/* User Info */}
    <div className="border-b border-blue-400/10 px-3 py-3">
      <p className="font-semibold text-white">
        niraj
      </p>

      <p className="mt-1 break-all text-sm text-gray-400">
        {email}
      </p>
    </div>

    {/* Profile */}

    {/* <button  className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-gray-200 hover:bg-blue-500/10">
      <UserRound
  size={28}
  strokeWidth={2}
  className="text-blue-300"
/>
      <span>Profile</span>
    </button> */}

    <Link to="/my-profile" className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-gray-200 hover:bg-blue-500/10">
    <UserRound
  size={25}
  strokeWidth={2}
  className="text-blue-300"
/> <span>Profile</span>
     </Link>

    {/* Logout */}
    <button onClick={()=>{
    setshowProfile(false)
    setshowlogoutui(true)
    } } 
     className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-red-400 hover:bg-red-500/10">
      <LogOut
  size={20}
  strokeWidth={2}
  className="text-red-400"
/>
      <span>Logout</span>
    </button>

  </div>
)}

              </div>
            </>
          ) : (
            <>
              {/* Not logged in */}
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="rounded-xl border border-blue-400 px-6 py-3 font-semibold"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="rounded-xl bg-blue-500 px-6 py-3 font-semibold"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>

      {/*  PUT LOGOUT POPUP HERE */}
  {showlogoutui && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">

      <div className="w-[380px] rounded-2xl border border-blue-400/20 bg-[#10284a] p-6 text-center shadow-2xl">

        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-2xl">
          <LogOut
  size={20}
  strokeWidth={2}
  className="text-red-400"
/>
        </div>

        <h2 className="text-2xl font-bold text-white">
          Logout?
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Are you sure you want to logout?
        </p>

        <div className="mt-6 flex gap-3">

          {/* Cancel */}
          <button
            onClick={() => setshowlogoutui(false)}
            className="flex-1 rounded-xl border border-blue-400/20 bg-[#173860] px-4 py-3 font-semibold text-gray-300 hover:bg-[#1d416d]"
          >
            Cancel
          </button>

          {/* Confirm Logout */}
          <button
            onClick={()=>{
               logoutHandle() 
               setshowlogoutui(false)
            }}
            className="flex-1 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  )}


      </nav>
    </div>
  );
};

export default Navbar;
