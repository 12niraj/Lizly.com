import React from 'react'
import { useOutletContext } from "react-router-dom";
const Profile = () => {

const { name,email}= useOutletContext();

  return (
    <div className="min-h-screen bg-[#061a33] p-8 text-white">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="mt-2 text-gray-400">
          Manage your account information.
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-3xl rounded-2xl border border-blue-500/20 bg-[#0b2b50] p-8">

        {/* Avatar + Name */}
        <div className="flex items-center gap-5 border-b border-blue-400/10 pb-7">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 text-3xl font-bold text-blue-400">
            N
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              {name}
            </h2>

            <p className="mt-1 text-gray-400">
              Lizyl User
            </p>
          </div>

        </div>


        {/* Details */}
        <div className="mt-7 space-y-6">

          <div>
            <p className="mb-2 text-sm text-gray-400">
              Full Name
            </p>

            <div className="rounded-xl border border-blue-400/20 bg-[#082340] px-4 py-3">
              {name}
            </div>
          </div>


          <div>
            <p className="mb-2 text-sm text-gray-400">
              Email
            </p>

            <div className="rounded-xl border border-blue-400/20 bg-[#082340] px-4 py-3">
              {email}
            </div>
          </div>


          <div>
            <p className="mb-2 text-sm text-gray-400">
              Account
            </p>

            <div className="flex items-center justify-between rounded-xl border border-blue-400/20 bg-[#082340] px-4 py-3">

              <span>Account Status</span>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                Active
              </span>

            </div>
          </div>

        </div>


        {/* Edit Button */}
        {/* <div className="mt-8">

          <button className="rounded-xl bg-blue-500 px-6 py-3 font-medium transition hover:bg-blue-600">
            Edit Profile
          </button>

        </div> */}

      </div>

    </div>
  )
}

export default Profile
