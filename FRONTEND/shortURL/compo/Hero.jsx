import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Qrcode from "./Qrcode";
import Feature from "./Feature";
const Hero = () => {

  
  const [fullUrl, setfullUrl] = useState("");
  const [shortUrl, setshortUrl] = useState("");

  const [copied, setcopied] = useState(false);
  const [lasturl, setlasturl] = useState("");
  console.log("full url is", fullUrl);

  const shortenBtn = async () => {
    console.log("Btn click");

    const data = {
      full_url: fullUrl,
    };
    await axios
      .post(`${import.meta.env.VITE_API_URL}/`, data, {
        withCredentials: true,
      })
      .then((response) => {
        setshortUrl(response.data);
        setlasturl(fullUrl);
        console.log("short url is", shortUrl);
      })
      .catch((error) => {
        const message = error.response.data.message;
      });
  };

  const copyurl = async () => {
    const url = `${import.meta.env.VITE_API_URL}/${shortUrl}`;

    await navigator.clipboard.writeText(url);
    console.log("URL copied!");
    setcopied(true);

    setTimeout(() => {
      setcopied(false);
    }, 2000);
  };

  return (
    <div>
      <section className="min-h-screenpt-28 pt-28  bg-[#071a35] px-6 py-16 text-white ">
        {/* Small badge */}
        <div className="  mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-5 py-2 text-sm text-gray-300">
          <span>✦</span>
          <span>Fast</span>
          <span>+</span>
          <span>Simple</span>
          <span>+</span>
          <span>Reliable</span>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-6xl font-extrabold leading-tight">
            Shorten Your Links
            <br />
            with <span className="text-blue-400">Lizyl</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Turn long, messy URLs into short, clean and shareable links.
            <br />
            Simple. Fast. Yours.
          </p>
        </div>

        {/* URL Input */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-3 rounded-2xl border border-blue-400/40 bg-[#10284a] p-2 md:flex-row">
          <div className="flex flex-1 items-center gap-3 px-4">
            <span className="text-2xl text-gray-400">🔗</span>

            <input
              onChange={(e) => {
                setfullUrl(e.target.value);
                console.log(fullUrl);
              }}
              type="text"
              value={fullUrl}
              placeholder="Paste your long URL here..."
              className="w-full bg-transparent py-4 text-lg text-white outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            onClick={shortenBtn}
            disabled={fullUrl.trim() === "" || fullUrl === lasturl}
            className="
    rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white
    hover:bg-blue-600
    disabled:cursor-not-allowed
    disabled:bg-blue-500/40 
    disabled:text-white/50
  "
          >
            Shorten →
          </button>
        </div>

        {/* Example Result */}
        <div className="mx-auto mt-5 flex max-w-4xl flex-col justify-between gap-5 rounded-2xl border border-blue-400/20 bg-[#10284a] p-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-gray-400">Your short URL</p>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-xl font-semibold text-blue-400">
                {`${import.meta.env.VITE_API_URL}/${shortUrl}`}
              </span>

              <button
                onClick={copyurl}
                className="rounded-lg bg-white/5 px-3 py-2 text-xl hover:bg-white/10"
              >
                {copied ? "✅ Copied!" : "📋"}
              </button>
            </div>
          </div>

          <button className="rounded-xl bg-white/5 px-6 py-3 text-gray-200 transition hover:bg-white/10">
            🔗 Share
          </button>
        </div>

        <Qrcode shortUrl={shortUrl} />

        {/* Feature Cards */}
        <Feature />
      </section>
    </div>
  );
};

export default Hero;
