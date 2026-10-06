import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; //locator

const Login = ({ setcheckloggedin }) => {
  const location = useLocation(); //locator

  console.log(location.state?.message);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [success, setsuccess] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passerror, setpasserror] = useState("");

  const logindata = {
    email: email,
    password: password,
  };

  const navigate = useNavigate();

  const submitLogin = () => {
    console.log("click login");

    axios.post(`${import.meta.env.VITE_API_URL}/login`, logindata, {
        withCredentials: true,
      })
      .then((response) => {
        setsuccess(response.data.message);
        console.log("login successful");
        setcheckloggedin(true);
        navigate("/");
      })
      .catch((error) => {
        setemailerror(" ");
        setpasserror(" ");
        const field = error.response.data.field;

        if (field === "email") {
          setemailerror(error.response.data.message);
        }
        if (field === "password") {
          setpasserror(error.response.data.message);
        }
      });
  };
  return (
    <div className="min-h-screen bg-[#eaf3ff] px-6 my-15 py-20 text-[#0b1f3a]">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] bg-[#eaf3ff] md:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative overflow-hidden px-8 py-10 md:px-12 lg:px-16">
            {/* Logo */}
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-blue-600">Lizly</span>ShortURL
            </h1>

            {/* Small tagline */}
            <div className="absolute right-16 top-10 hidden text-center text-blue-500 md:block">
              <p className="text-lg">Welcome back.</p>

              <p className="text-lg">Your links missed you. ♡</p>

              <div className="mx-auto mt-1 h-1 w-28 rounded-full bg-blue-300/70 rotate-[-8deg]" />
            </div>

            {/* Hero */}
            <div className="mt-20">
              <h2 className="text-6xl font-extrabold leading-[0.95] tracking-tight">
                Shorten.
                <br />
                Share.
                <br />
                <span className="text-blue-600">Track.</span>
              </h2>

              <div className="mt-3 h-1 w-40 rounded-full bg-blue-400/50 rotate-[-3deg]" />
            </div>

            {/* ================= CUTE URL CARD ================= */}

            <div className="absolute right-4 top-64 hidden h-72 w-72 rotate-[-8deg] rounded-full bg-blue-200/40 md:block">
              <div className="absolute left-10 top-10 w-64 rounded-2xl bg-white p-5 shadow-xl">
                {/* Browser dots */}
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                {/* Long URL */}
                <div className="rounded-xl border border-blue-100 bg-white px-3 py-3 text-xs text-[#60799b]">
                  https://example.com/very/long/link
                </div>

                {/* Arrow */}
                <div className="py-3 text-center text-2xl text-blue-500">↓</div>

                {/* Short URL */}
                <div className="flex items-center justify-between rounded-xl bg-blue-100 px-4 py-3">
                  <span className="font-bold text-blue-600">Lizly/Ab3Xk</span>

                  <span className="text-lg text-blue-600">▣</span>
                </div>
              </div>
            </div>

            {/* ================= FEATURES ================= */}

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600">
                  🔗
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Your Short Links</h3>

                  <p className="text-sm text-[#60799b]">
                    Access all your links in one place
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-purple-600">
                  📊
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Track Performance</h3>

                  <p className="text-sm text-[#60799b]">
                    Keep an eye on your link activity
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600">
                  🛡️
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Secure & Simple</h3>

                  <p className="text-sm text-[#60799b]">
                    Your links stay organized and secure
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom tagline */}
            <div className="mt-14 text-blue-600">
              <p className="text-lg italic">Good to have you back. ♡</p>
            </div>

            {/* Bottom wave */}
            <div className="absolute -bottom-24 -left-20 h-44 w-[700px] rounded-[50%] bg-blue-300/50 rotate-[-5deg]" />
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative flex flex-col justify-center rounded-[2rem] bg-white/80 px-8 py-10 shadow-xl backdrop-blur-sm sm:px-10 lg:px-14">
            {/* Signup */}
            <div className="text-right text-sm text-[#60799b]">
              Don't have an account?
              {/* <span className="ml-2 cursor-pointer font-semibold text-blue-600">
                Sign up
              </span> */}
              <a
                className="ml-2 cursor-pointer font-semibold text-blue-600"
                href="/signup"
              >
                Sign up
              </a>
            </div>

            {/* Heading */}
            <div className="mt-10">
              {/* {location.state?.message && (                                           
  <h3 className='text-red-700 font-semibold'>{location.state.message}</h3>
)}
                */}

              {/* locator--------------------------------- */}
              {location.state?.message ? (
                <h3 className="text-red-700 font-semibold">
                  {location.state.message}
                </h3>
              ) : (
                <h2 className="text-4xl font-bold tracking-tight">
                  Welcome back!
                </h2>
              )}

              {/* <h2 className="text-4xl font-bold tracking-tight">
                Welcome back!
              </h2> */}

              <p className="mt-3 text-[#6b82a0]">
                Sign in to continue managing your short links.
              </p>
            </div>

            {/* Email */}
            <div className="mt-9">
              <label className="mb-2 block font-semibold">Email Address</label>

              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                value={email}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-blue-200 bg-white px-5 py-4 text-[#0b1f3a] outline-none placeholder:text-[#9aabc0] focus:border-blue-500"
              />
              {emailerror && <p className="text-red-700">{emailerror}</p>}
            </div>

            {/* Password */}
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <label className="font-semibold">Password</label>

                <span className="cursor-pointer text-sm font-medium text-blue-600">
                  Forgot password?
                </span>
              </div>

              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                value={password}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-blue-200 bg-white px-5 py-4 text-[#0b1f3a] outline-none placeholder:text-[#9aabc0] focus:border-blue-500"
              />
              {passerror && <p className="text-red-700">{passerror}</p>}
            </div>

            {/* Remember me */}
            {/* <div className="mt-5 flex items-center gap-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-blue-600"
              />

              <span className="text-sm text-[#60799b]">
                Remember me
              </span>
            </div> */}

            {/* Sign In */}
            <button
              onClick={submitLogin}
              type="button"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Sign In
              <span className="text-xl">→</span>
            </button>
            <h4>{success}</h4>

            {/* Divider */}
            {/* <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-blue-200" />

              <span className="text-sm text-[#7c8fa8]">
                or continue with
              </span>

              <div className="h-px flex-1 bg-blue-200" />
            </div> */}

            {/* Social Login */}
            {/* <div className="grid gap-4 sm:grid-cols-2">

              <button
                type="button"
                className="rounded-xl border border-blue-200 bg-white py-3.5 font-medium text-[#243957] transition hover:bg-blue-50"
              >
                🌐  Google
              </button>

              <button
                type="button"
                className="rounded-xl border border-blue-200 bg-white py-3.5 font-medium text-[#243957] transition hover:bg-blue-50"
              > 🐙  GitHub </button> </div> */}

            {/* Bottom */}
            <p className="mt-8 text-center text-sm text-[#6b82a0]">
              Welcome back to Lizly. ♡
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
