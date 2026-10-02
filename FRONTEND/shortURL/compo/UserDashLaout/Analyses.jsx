import React from 'react'
import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Analyses = () => {
  

    const { qrcount ,total_link , totalclicks,allusermap ,allclickdate} = useOutletContext();

  const toplink=[...allusermap].sort((a,b)=> b.click-a.click)

  const [checkviewall, setcheckviewall] = useState(false)

  //-----------------------7days
const last7Days = [];

for (let i = 6; i >= 0; i--) {
  const date = new Date();

  date.setDate(date.getDate() - i);

  const dateString = date.toISOString().split("T")[0];

  const count = allclickdate.filter((click) => {
    const clickDate = new Date(click.date)
      .toISOString()
      .split("T")[0];

    return clickDate === dateString;
  }).length;

  last7Days.push({
    date: dateString,
    clicks: count
  });
}
  
  const viewallhandle=()=>{
  setcheckviewall(true)
  }
  
  return (

    <div>
      <div className="min-h-screen bg-[#061a33] p-8 text-white">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="mt-2 text-lg text-gray-400">
          Track the performance of your short links.
        </p>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Total Links */}
        <div className="flex items-center gap-6 rounded-2xl border border-blue-500/30 bg-[#0b2b50] p-6">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/20 text-4xl">
            🔗
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              {total_link}
            </h2>

            <p className="mt-1 text-lg text-gray-300">
              Total Links
            </p>
          </div>

        </div>


        {/* Total Clicks */}
        <div className="flex items-center gap-6 rounded-2xl border border-blue-500/30 bg-[#0b2b50] p-6">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/20 text-4xl">
            📊
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              {totalclicks}
            </h2>

            <p className="mt-1 text-lg text-gray-300">
              Total Clicks
            </p>
          </div>

        </div>

      </div>


      {/* Clicks Overview */}
      <div className="mt-8 rounded-2xl border border-blue-500/30 bg-[#0b2b50] p-6">

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              Clicks Overview
            </h2>

            <p className="mt-1 text-gray-400">
              Track clicks on your short links.
            </p>
          </div>
<div className="rounded-xl border border-blue-400/30 bg-[#12375f] px-4 py-2 text-gray-200">
  Last 7 Days
</div>

        </div>


       
        {/* Real chart */}
<div className="h-64 rounded-xl border border-blue-400/10 bg-[#082340] p-4">

  <ResponsiveContainer width="100%" height="100%">
  <BarChart data={last7Days}>

    <CartesianGrid
      strokeDasharray="3 3"
      vertical={false}
      stroke="rgba(255,255,255,0.15)"
    />

    <XAxis
      dataKey="date"
      tickFormatter={(date) => {
        const d = new Date(date);

        return d.toLocaleDateString("en-US", {
          weekday: "short"
        });
      }}
    />

    <YAxis allowDecimals={false} />

    

    <Bar
  dataKey="clicks"
  fill="white"
  radius={[6, 6, 0, 0]}
/>
  </BarChart>
</ResponsiveContainer>

</div>

        <div className="mt-3 flex justify-between text-sm text-gray-500">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>

      </div>


      {/* Top Performing Links */}
      <div className="mt-8 rounded-2xl border border-blue-500/30 bg-[#0b2b50]">

        <div className="flex items-center justify-between border-b border-blue-400/20 px-6 py-5">

          <div>
            <h2 className="text-2xl font-bold">
              Top Performing Links
            </h2>

            <p className="mt-1 text-gray-400">
              Your most clicked short links.
            </p>
          </div>

          <button onClick={viewallhandle}  className="text-blue-400 hover:text-blue-300">
            View All →
          </button>

        </div>


        {/* Link 1 */} ${link.short_url}

      { checkviewall ? (  toplink.map((link,index)=>(
        
        <div key={index} className="flex items-center justify-between border-b border-blue-400/10 px-6 py-5">

        <div>
            <p className="font-semibold text-blue-400">
              {`${import.meta.env.VITE_API_URL}/${link.short_url}`}
            </p>

            <p className="mt-1 text-sm text-gray-400">
              {link.full_url}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold">
             {link.click}
            </p>

            <p className="text-sm text-gray-400">
              clicks
            </p>
          </div>

          </div>
        ))):( toplink.slice(0, 5).map((link,index)=>(
        
        <div key={index} className="flex items-center justify-between border-b border-blue-400/10 px-6 py-5">

        <div>
            <p className="font-semibold text-blue-400">
              {`${import.meta.env.VITE_API_URL}/${link.short_url}`}
            </p>

            <p className="mt-1 text-sm text-gray-400">
              {link.full_url}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold">
             {link.click}
            </p>

            <p className="text-sm text-gray-400">
              clicks
            </p>
          </div>

          </div>
        )))  }

       
        

      </div>

    </div>
    </div>
  )
}

export default Analyses
