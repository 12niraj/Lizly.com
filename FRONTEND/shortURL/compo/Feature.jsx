import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        rounded-2xl
        border border-blue-300/20
        bg-[#10284a]
        p-7
        text-center
        shadow-lg
        transition
        duration-300
        hover:-translate-y-1
        hover:border-blue-300/50
        hover:bg-[#15345d]
      "
    >
      {/* Icon */}
      <div
        className="
          mx-auto
          mb-5
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-blue-200/15
          text-2xl
          shadow-inner
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-blue-100/60">
        {description}
      </p>
    </div>
  );
};


const Feature = () => {
  return (
    <section
      id="feature"
      className="bg-[#081d38] px-6 py-20 text-white"
    >

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
          ✦ Features ✦
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Everything you need for
          <span className="text-blue-400"> better links.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Simple tools to shorten, manage, track and share your links
          without unnecessary complexity.
        </p>

      </div>


      {/* Feature Cards */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

        <FeatureCard
          icon="⚡"
          title="Super Fast"
          description="Shorten links in seconds."
        />

        <FeatureCard
          icon="🛡️"
          title="Reliable"
          description="Your links are safe with us."
        />

        <FeatureCard
          icon="📊"
          title="Track Clicks"
          description="See how your links perform."
        />

        <FeatureCard
          icon="▦"
          title="QR Code"
          description="Generate QR codes instantly."
        />

      </div>


      {/* Bottom Tagline */}
      <div className="mt-16 text-center">

        <div className="mx-auto flex max-w-md items-center justify-center gap-5 text-gray-400">

          <span className="h-px w-12 bg-blue-400/40"></span>

          <span className="text-sm">
            More than just short links.
          </span>

          <span className="h-px w-12 bg-blue-400/40"></span>

        </div>

        <p className="mt-3 text-lg italic text-blue-200/70">
          Built for what's next. ♡
        </p>

      </div>

    </section>
  );
};

export default Feature;