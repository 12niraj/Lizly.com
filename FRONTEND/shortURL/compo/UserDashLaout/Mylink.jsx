import React from "react";
import Sidebar from "./Sidebar";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { QrCode, Trash2 } from "lucide-react";
import { Link2, ChartNoAxesColumn } from "lucide-react";
const Mylink = () => {
  const { qrcount, total_link, totalclicks, allusermap, setallusermap } =
    useOutletContext();

  const [currentPage, setCurrentPage] = useState(1);
  const linksPerPage = 4;
  const totalPages = Math.ceil(allusermap.length / linksPerPage);
  const startIndex = (currentPage - 1) * linksPerPage;
  const endIndex = startIndex + linksPerPage;
  const currentLinks = allusermap.slice(startIndex, endIndex);
  const [succesdelete, setsuccesdelete] = useState("");

  const [selectedLink, setSelectedLink] = useState(null);
  const deletelinkhandle = (id) => {
    console.log("button click");

    axios
      .delete(`http://localhost:3001/deletelink/${id}`, {
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
    <div>
      <div className="min-h-screen bg-[#061a33] p-8 text-white">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Links</h1>

            <p className="mt-2 text-gray-400">
              Manage all your shortened links in one place.
            </p>
          </div>

          <Link
            to="/"
            className="rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600"
          >
            + Create New Link{" "}
          </Link>
        </div>

        {/* Main Links Box */}
        <div className="overflow-hidden rounded-2xl border border-blue-400/20 bg-[#10284a] shadow-lg">
          {/* Search + Filters */}
          <div className="flex items-center gap-4 border-b border-blue-400/10 p-5">
            <div className="flex flex-1 items-center rounded-xl border border-blue-400/20 bg-[#0d2342] px-4 py-3">
              <span className="mr-3 text-xl text-gray-400">🔍</span>

              <input
                type="text"
                placeholder="Search by title, URL or short link..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </div>

            <button className="rounded-xl border border-blue-400/20 bg-[#0d2342] px-5 py-3 text-sm text-gray-300">
              📅 All Time
            </button>

            <button className="rounded-xl border border-blue-400/20 bg-[#0d2342] px-5 py-3 text-sm text-gray-300">
              ⚱ All Links
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[1.2fr_2.5fr_0.7fr_1.3fr_2fr] items-center gap-8 border-b border-blue-400/10 bg-[#0d2342] px-5 py-4 text-sm font-medium text-gray-400">
            <p className="text-center">Short Link</p>
            <p className="text-center">Original URL</p>
            <p className="text-center">Clicks</p>
            <p className="text-center">Created At</p>
            <p className="text-center">Actions</p>
          </div>

          {/* Row 1 */}
          {currentLinks.map((link) => (
            <div
              key={link._id}
              className="grid grid-cols-[1.2fr_2.5fr_0.7fr_1.3fr_2fr] items-center gap-8 border-b border-blue-400/10 bg-[#0d2342] px-5 py-4 text-sm font-medium text-gray-400"
            >
              <p className="text-blue-400">
                {`http://localhost:3001/${link.short_url}`}
              </p>

              <p className="truncate text-gray-400">{link.full_url}</p>

              <p className="text-gray-300 text-center">{link.click}</p>

              <p className="text-gray-400  text-center">
                {new Date(link.createdAt).toLocaleDateString()}
              </p>

              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setSelectedLink(link)}
                  className="rounded-lg bg-blue-500/10 px-3 py-2 text-blue-400"
                >
                  <QrCode size={23} strokeWidth={2} />
                </button>

                <button
                  onClick={() => deletelinkhandle(link._id)}
                  className="rounded-lg bg-red-500/10 px-3 py-2 text-red-400"
                >
                  <Trash2 size={23} strokeWidth={2} />
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
                    value={`http://localhost:3001/${selectedLink.short_url}`}
                    size={180}
                  />
                </div>

                <p className="mt-4 truncate text-sm text-gray-400">
                  {`http://localhost:3001/${selectedLink.short_url}`}
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

          {/* Pagination */}

          <div className="flex items-center justify-between px-5 py-5">
            <p className="text-sm text-gray-400">
              Showing {startIndex + 1}–{Math.min(endIndex, allusermap.length)}{" "}
              of {allusermap.length} links
            </p>

            <div className="flex gap-2">
              {/* Previous */}
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg bg-[#0d2342] px-4 py-2 text-gray-400 disabled:opacity-40"
              >
                ←
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`rounded-lg px-4 py-2 ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-[#0d2342] text-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg bg-[#0d2342] px-4 py-2 text-gray-400 disabled:opacity-40"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mylink;
