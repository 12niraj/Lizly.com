import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({setcheckloggedin}) => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [terms, setterms] = useState(false);

  const [successmsg, setsuccessmsg] = useState("");
  const [passerror, setpasserror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [termsmsg, settermsmsg] = useState("")
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("click");

    const data = {
      fullname: fullname,
      email: email,
      password: password,
      confirmpassword: confirmPass,
      terms:terms
    };

    axios.post(`${import.meta.env.VITE_API_URL}/signup`, data,{
    withCredentials: true,
  })
      .then((response) => {
        console.log(response.data);

        setsuccessmsg(response.data.message);
       setcheckloggedin(true)
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR RESPONSE:", error.response?.data);

        const field = error.response?.data?.field;

        if (field === "password") {
          setpasserror(error.response.data.message);
        }

        if (field === "email") {
          setemailerror(error.response.data.message);
        }

        settermsmsg(error.response.data.message)
      });
  };

  return (
    <div className="min-h-screen bg-[#eaf3ff] px-6 py-20 my-15 text-[#0b1f3a] ">
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
              <p className="font-handwriting text-lg">
                Short links.
              </p>

              <p className="font-handwriting text-lg">
                Big possibilities. ♡
              </p>

              <div className="mx-auto mt-1 h-1 w-24 rotate-[-8deg] rounded-full bg-blue-300/70" />
            </div>

            {/* Hero heading */}

            <div className="mt-20">
              <h2 className="text-6xl font-extrabold leading-[0.95] tracking-tight">
                Shorten.
                <br />
                Share.
                <br />
                <span className="text-blue-600">Track.</span>
              </h2>

              <div className="mt-3 h-1 w-40 rotate-[-3deg] rounded-full bg-blue-400/50" />
            </div>

            {/* Floating URL Illustration */}

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

                <div className="py-3 text-center text-2xl text-blue-500">
                  ↓
                </div>

                {/* Short URL */}

                <div className="flex items-center justify-between rounded-xl bg-blue-100 px-4 py-3">
                  <span className="font-bold text-blue-600">
                    Lizly/Ab3Xk
                  </span>

                  <span className="text-lg text-blue-600">
                    ▣
                  </span>
                </div>
              </div>
            </div>

            {/* ================= FEATURES ================= */}

            <div className="mt-12 space-y-6">

              {/* Feature 1 */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600">
                  🔗
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Shorten URLs
                  </h3>

                  <p className="text-sm text-[#60799b]">
                    Make long links short and simple
                  </p>
                </div>
              </div>

              {/* Feature 2 */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-purple-600">
                  📊
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Track Performance
                  </h3>

                  <p className="text-sm text-[#60799b]">
                    See how your links are doing
                  </p>
                </div>
              </div>

              {/* Feature 3 */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600">
                  🛡️
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Your Links, Your Space
                  </h3>

                  <p className="text-sm text-[#60799b]">
                    Save and manage your links securely
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom tagline */}

            <div className="mt-14 text-blue-600">
              <p className="text-lg italic">
                A shorter
                <br />
                web for a brighter you ♡
              </p>
            </div>

            {/* Bottom decorative wave */}

            <div className="absolute -bottom-24 -left-20 h-44 w-[700px] rotate-[-5deg] rounded-[50%] bg-blue-300/50" />
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative rounded-[2rem] bg-white/80 px-8 py-10 shadow-xl backdrop-blur-sm sm:px-10 lg:px-12">

            {/* Login */}

            <div className="text-right text-sm text-[#60799b]">
              Already have an account?

              
              <a className="ml-2 cursor-pointer font-semibold text-blue-600" href="/login">  Log in </a>
            </div>

            {/* Heading */}

            <div className="mt-8">
              <h2 className="text-4xl font-bold tracking-tight">
                Create your account
              </h2>

              <p className="mt-3 text-[#6b82a0]">
                Join Lizly and start shortening today!
              </p>
            </div>

            {/* ================= SIGNUP FORM ================= */}

            <form onSubmit={submitHandler}>

              {/* Full Name */}

              <div className="mt-8">
                <label className="mb-2 block font-semibold">
                  Full Name
                </label>

                <input
                  onChange={(e) => {
                    setfullname(e.target.value);
                  }}
                  type="text"
                  value={fullname}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-blue-200 bg-white px-5 py-4 text-[#0b1f3a] outline-none placeholder:text-[#9aabc0] focus:border-blue-500"
                />
              </div>

              {/* Email */}

              <div className="mt-5">
                <label className="mb-2 block font-semibold">
                  Email Address
                </label>

                <input
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-blue-200 bg-white px-5 py-4 text-[#0b1f3a] outline-none placeholder:text-[#9aabc0] focus:border-blue-500"
                />

                {/* Email error */}

                {emailerror && (
                  <p className="mt-1 text-sm text-red-700">
                    {emailerror}
                  </p>
                )}
              </div>

              {/* Password */}

              <div className="mt-5">
                <label className="mb-2 block font-semibold">
                  Password
                </label>

                <input
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  type="password"
                  value={password}
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-blue-200 bg-white px-5 py-4 text-[#0b1f3a] outline-none placeholder:text-[#9aabc0] focus:border-blue-500"
                />
              </div>

              {/* Confirm Password */}

              <div className="mt-5">
                <label className="mb-2 block font-semibold">
                  Confirm Password
                </label>

                <input
                  onChange={(e) => {
                    setconfirmPass(e.target.value);
                  }}
                  type="password"
                  value={confirmPass}
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-blue-200 bg-white px-5 py-4 text-[#0b1f3a] outline-none placeholder:text-[#9aabc0] focus:border-blue-500"
                />

                {/* Password error */}

                {passerror && (
                  <p className="mt-1 text-sm text-red-700">
                    {passerror}
                  </p>
                )}
              </div>

              {/* Terms */}

              <div className="mt-5 flex items-start gap-3">
                <input
                  onChange={(e) => setterms(e.target.checked)}
                  type="checkbox"
                  checked={terms}
                  className="mt-1 h-5 w-5 accent-blue-600"
                />

                <p className="text-sm text-[#60799b]">
                  I agree to the{" "}
                  <span className="text-blue-600">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600">
                    Privacy Policy
                  </span>
                </p>
                
              </div>
              <br /> 
              {termsmsg && (
                <p className="mt-4 text-center text-sm text-red-700">
                  {termsmsg}
                </p>
              )}
    

              {/* Success message */}

              {successmsg && (
                <p className="mt-4 text-center text-sm text-green-600">
                  {successmsg}
                </p>
              )}

              {/* Create Account Button */}

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Create Account
                <span className="text-xl">→</span>
              </button>

            </form>

            {/* Divider */}

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-blue-200" />

              <span className="text-sm text-[#7c8fa8]">
                or sign up with
              </span>

              <div className="h-px flex-1 bg-blue-200" />
            </div>

            {/* Google + Github */}

            {/* <div className="grid gap-4 sm:grid-cols-2">

              <button
                type="button"
                className="rounded-xl border border-blue-200 bg-white py-3.5 font-medium text-[#243957] transition hover:bg-blue-50"
              >
                🌐 &nbsp; Continue with Google
              </button>

              <button
                type="button"
                className="rounded-xl border border-blue-200 bg-white py-3.5 font-medium text-[#243957] transition hover:bg-blue-50"
              >
                🐙 &nbsp; Continue with GitHub
              </button>

            </div> */}

            {/* Bottom text */}

            <p className="mt-8 text-center text-sm text-[#6b82a0]">
              Start small. Share big. ♡
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;