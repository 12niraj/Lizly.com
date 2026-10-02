import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";
import { QrCode, Trash2 } from "lucide-react";
import { Link2, ChartNoAxesColumn } from "lucide-react";


const UserDashboard = () => {
  const {
    qrcount,
    total_link,
    totalclicks,
    allusermap,
    setallusermap,
    name,
    email,
  } = useOutletContext();

  // console.log( "count is " ,qrcount, allusermap);

  const [succesdelete, setsuccesdelete] = useState("");
  const [selectedLink, setSelectedLink] = useState(null);

  const deletelinkhandle = (id) => {
    console.log("button click");

    axios
      .delete(`${import.meta.env.VITE_API_URL}deletelink/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.message);

        setsuccesdelete(response.data.message);

        setallusermap((prev) => prev.filter((link) => link._id !== id));
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="min-h-screen bg-[#061a33] p-5 my-0 text-white">
      {/* Welcome */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Welcome back, {name}👋</h1>

        <p className="mt-1 text-lg text-gray-300">
          Here's an overview of your links and performance.
        </p>
      </div>

      {/* Stats + Create Button */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Total Links */}
        <div className="flex items-center gap-6 rounded-2xl border border-blue-500/30 bg-[#0b2b50] p-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/20 text-2xl">
<Link2
  size={32}
  strokeWidth={2}
  className="text-blue-300"
/>
          </div>

          <div>
            <h2 className="text-3xl font-bold">{total_link}</h2>
            <p className="mt-1 text-lg text-gray-300">Total Links</p>
          </div>
        </div>

        {/* Total Clicks */}
        <div className="flex items-center gap-6 rounded-2xl border border-blue-500/30 bg-[#0b2b50] p-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/20 text-3xl">
              <ChartNoAxesColumn size={32} strokeWidth={2} className="text-blue-300" />

          </div>

          <div>
            <h2 className="text-4xl font-bold">{totalclicks}</h2>
            <p className="mt-1 text-lg text-gray-300">Total Clicks</p>
          </div>
        </div>

        {/* QR Codes */}
        <div className="flex items-center gap-6 rounded-2xl border border-blue-500/30 bg-[#0b2b50] p-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/20 text-4xl">
            <QrCode size={30} strokeWidth={2} />
          </div>

          <div>
            <h2 className="text-4xl font-bold">{qrcount}</h2>
            <p className="mt-1 text-lg text-gray-300">QR Codes</p>
          </div>
        </div>
      </div>

      {/* Create Short Link */}
      <div className="mt-6 flex justify-end">
        <Link
          to="/"
          className="rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600"
        >
          + Create New Link{" "}
        </Link>
      </div>

      {/* Recent Links */}

      <div className="mt-5 overflow-hidden rounded-2xl border border-blue-500/30 bg-[#0b2b50]">
        {/* Table Header */}
        <div className="flex items-center justify-between border-b border-blue-400/20 px-7 py-5">
          <h2 className="text-2xl font-bold">Recent Links</h2>

          <button className="text-lg font-semibold text-blue-400 hover:text-blue-300">
            View all →
          </button>
        </div>

        {/* Column Header */}
        <div className="grid grid-cols-[1.2fr_2.5fr_0.7fr_1.3fr_2fr] items-center gap-8 px-7 py-4">
          <p className="text-center">Short URL</p>
          <p className="text-center">Original URL</p>
          <p className="text-center">Clicks</p>
          <p className="text-center">Created At</p>
          <p className="text-center">Actions</p>
        </div>

        {/* -------------------------USER MAP FOR LINK---------------- */}

        {allusermap.map((link) => (
          <div
            key={link._id}
            className="grid grid-cols-[1.2fr_2.5fr_0.7fr_1.3fr_2fr] items-center gap-8 border-b border-blue-400/10 px-7 py-4"
          >
            <p className="font-semibold text-blue-400">
              {`${import.meta.env.VITE_API_URL}/${link.short_url}`}
            </p>

            <p className="truncate text-gray-300">{link.full_url}</p>

            <p className="text-center">{link.click}</p>
            <p className="text-gray-300 text-center  ">
              {new Date(link.createdAt).toLocaleDateString()}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedLink(link)}
                className="rounded-xl bg-blue-500/20 px-4 py-3 text-xl hover:bg-blue-500/30"
              >
                <QrCode size={25} strokeWidth={2} />
              </button>

              <button
                onClick={() => deletelinkhandle(link._id)}
                className="rounded-xl bg-red-500/10 px-4 py-3 text-xl text-red-400 hover:bg-red-500/20"
              >
                  <Trash2 size={25} strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}

        {selectedLink && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
            <div className="w-80 rounded-2xl border border-blue-400/20 bg-[#10284a] p-6 text-center shadow-2xl">
              <h2 className="text-xl font-bold text-white">QR Code</h2>

              <div className="mt-5 flex justify-center rounded-xl bg-white p-4">
                <QRCodeCanvas
                  value={`${import.meta.env.VITE_API_URL}/${selectedLink.short_url}`}
                  size={180}
                />
              </div>

              <p className="mt-4 truncate text-sm text-gray-400">
                {`${import.meta.env.VITE_API_URL}/${selectedLink.short_url}`}
              </p>

              <button
                onClick={() => setSelectedLink(null)}
                className="mt-5 rounded-xl bg-blue-500 px-5 py-2 font-semibold text-white hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
