import React from "react";
import { useState } from "react";

import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";

const Qrcode = ({ shortUrl, }) => {
  const [Qrgenerated, setQrgenerated] = useState(false);
  const [lastQrLink, setLastQrLink] = useState("");
  const [notlogged, setnotlogged] = useState("")

  const shortLink = `${import.meta.env.VITE_API_URL}/${shortUrl}`;
  // `${import.meta.env.VITE_API_URL}/dashboard`
  console.log("short url is ", shortUrl);

  //QR generate BTN---------------------------->

  const QrgenerateBtn = () => {

    axios.patch(`${import.meta.env.VITE_API_URL}/countqr`,{}, {
    withCredentials: true,
  })
  .then((response)=>{
    console.log("qr is", response.data.message);

  })
  .catch((error)=>{
  console.log("qr is", error.response.data.message);
  setnotlogged(error.response.data.message)
  
  })
  
    setQrgenerated(true);
    setLastQrLink(shortUrl.trim());

  
  };

  

  const Qrdownload = () => {
    const canvas = document.getElementById("generated-qr");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.href = url;
    link.download = "NiaShortURL-QR.png";
    link.click();
  };

  return (
    <div id="qr-code">
      {/* QR Section Divider */}
      <div className="my-16 text-center">
        <div className="flex items-center justify-center gap-5">
          <div className="h-px w-24 bg-blue-400/40"></div>

          <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
            ✦ Do more with your links✦
          </span>

          <div className="h-px w-24 bg-blue-400/40"></div>
        </div>

        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Turn Your Short Link into a{" "}
          <span className="text-blue-400">QR Code</span>
        </h2>

        <p className="mt-3 text-gray-400">Same link. More possibilities.</p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-blue-400/20 bg-[#10284a] p-8 shadow-xl md:p-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* QR Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-2xl">
              ▦
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-white">
              Generate a QR Code
            </h2>

            {/* Description */}
            <p className="mt-3 text-gray-400">
              Turn your short link into a QR code and share it anywhere.
            </p>

            {/* Short URL */}
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-blue-400/20 bg-[#0d2342] p-3">
              <span className="flex-1 truncate text-blue-400">
                {shortUrl ? shortLink : "Your short URL will appear here"}
              </span>

              {/* Copy Button */}
              <button className="rounded-lg bg-white/5 px-3 py-2 text-lg transition hover:bg-white/10">
                📋
              </button>
            </div>
           {notlogged && (<p className="text-red-700">Please login to continue</p>)}
            {/* Generate Button */}
            <button
              disabled={
                shortUrl.trim() === "" || shortUrl.trim() === lastQrLink
              }
              onClick={QrgenerateBtn}
              className="mt-4 w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition
               hover:bg-blue-600 disabled:cursor-not-allowed
    disabled:bg-blue-500/40 
    disabled:text-white/50"
            >
              ▦ Generate QR Code
            </button>

            {/* ================= FEATURES ================= */}
            <div className="mt-7 grid grid-cols-3 gap-3">
              {/* Scan */}
              <div className="flex items-start gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/80 text-sm">
                  📱
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">Scan</p>

                  <p className="text-xs leading-4 text-gray-400">
                    Open on any device
                  </p>
                </div>
              </div>

              {/* Share */}
              <button
                // onClick={handleShare}
                className="group flex items-start gap-2 rounded-xl p-2 text-left transition hover:bg-white/5"
              >
                {/* Purple Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500/80 text-sm transition group-hover:bg-purple-400">
                  ↗
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-semibold text-white transition group-hover:text-purple-300">
                    Share
                  </p>

                  <p className="text-xs leading-4 text-gray-400 transition group-hover:text-gray-300">
                    Instantly
                  </p>
                </div>
              </button>

              {/* Download */}
              <button
                onClick={Qrdownload}
                className="group flex items-start gap-2 rounded-xl p-2 text-left transition hover:bg-white/5"
              >
                {/* Pink Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-500/80 text-sm transition group-hover:bg-pink-400">
                  ⇣
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-semibold text-white transition group-hover:text-pink-300">
                    Download
                  </p>

                  <p className="text-xs leading-4 text-gray-400 transition group-hover:text-gray-300">
                    Save and use anywhere
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex min-h-[320px] items-center justify-center rounded-2xl border border-blue-400/10 bg-[#0d2342] p-8">
            {/* QR Placeholder */}
            <div className="text-center">
              <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-2xl bg-white shadow-xl">
                {/* Temporary QR placeholder */}
                


{notlogged ? (
  <img
    src="/qr.png"
    alt="Scan me"
    className="h-48 w-48 object-contain"
  />
) : Qrgenerated ? (
  <div className="text-7xl">
    <QRCodeCanvas
      id="generated-qr"
      size={190}
      value={shortLink}
    />
  </div>
) : (
  <img
    src="/qr.png"
    alt="Scan me"
    className="h-48 w-48 object-contain"
  />
)}

                
                

                {/* <QRCodeCanvas value={shortLink} /> */}
              </div>

              <p className="mt-5 text-sm text-gray-400">
                Your QR code will appear here
              </p>

              {/* Scan hint */}
              <p className="mt-2 text-xs italic text-blue-400">Scan me!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qrcode;
