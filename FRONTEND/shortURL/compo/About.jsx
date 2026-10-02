const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#eaf3ff] px-6 py-24"
    >
      {/* Decorative background shapes */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            About Lizyl
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#0b1f3a] md:text-5xl">
            More than just
            <span className="text-blue-600"> short links.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#60799b]">
            Lizyl makes it simple to shorten, share and manage
            your links — all in one place.
          </p>

        </div>


        {/* Main Content */}
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">

          {/* LEFT — Illustration */}
          <div className="relative flex min-h-[380px] items-center justify-center">

            {/* Background circle */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-200/50" />

            {/* Floating card */}
            <div className="relative w-full max-w-md rotate-[-3deg] rounded-3xl border border-blue-100 bg-white p-7 shadow-2xl">

              {/* Top */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-medium text-gray-400">
                    Your link
                  </p>

                  <p className="mt-1 font-semibold text-[#0b1f3a]">
                    Long URL
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                  🔗
                </div>

              </div>


              {/* Long URL */}
              <div className="mt-6 rounded-xl border border-blue-100 bg-[#f5f9ff] px-4 py-3 text-sm text-gray-500">
                https://example.com/very/long/url
              </div>


              {/* Arrow */}
              <div className="my-5 text-center text-2xl text-blue-500">
                ↓
              </div>


              {/* Short URL */}
              <div className="flex items-center justify-between rounded-xl bg-blue-100 px-5 py-4">

                <div>
                  <p className="text-xs text-blue-500">
                    Short URL
                  </p>

                  <p className="mt-1 font-bold text-blue-600">
                    Lizyl/Ab3Xk
                  </p>
                </div>

                <span className="text-xl text-blue-600">
                  ▣
                </span>

              </div>


              {/* Bottom stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">

                <div className="rounded-xl bg-blue-50 p-3 text-center">
                  <p className="text-lg font-bold text-blue-600">
                    1.2K
                  </p>

                  <p className="text-xs text-gray-500">
                    Clicks
                  </p>
                </div>

                <div className="rounded-xl bg-purple-50 p-3 text-center">
                  <p className="text-lg font-bold text-purple-600">
                    24
                  </p>

                  <p className="text-xs text-gray-500">
                    Links
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-3 text-center">
                  <p className="text-lg font-bold text-emerald-600">
                    99%
                  </p>

                  <p className="text-xs text-gray-500">
                    Simple
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT — Content */}
          <div>

            <h3 className="text-3xl font-bold leading-tight text-[#0b1f3a]">
              Built to make the web
              <span className="text-blue-600"> a little simpler.</span>
            </h3>

            <p className="mt-6 leading-7 text-[#60799b]">
              Long URLs can be difficult to share, remember and manage.
              Lizyl turns them into clean, compact links that are
              easier to use and share anywhere.
            </p>

            <p className="mt-4 leading-7 text-[#60799b]">
              But shortening a link is just the beginning. Lizyl
              is designed to give you a simple place to create, manage
              and understand your links.
            </p>


            {/* Highlights */}
            <div className="mt-8 space-y-5">

              {/* Item */}
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  ⚡
                </div>

                <div>
                  <h4 className="font-semibold text-[#0b1f3a]">
                    Simple & Fast
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#60799b]">
                    Create a short link in seconds without unnecessary
                    steps.
                  </p>
                </div>

              </div>


              {/* Item */}
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  📊
                </div>

                <div>
                  <h4 className="font-semibold text-[#0b1f3a]">
                    Understand Your Links
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#60799b]">
                    Keep track of how your links are being used.
                  </p>
                </div>

              </div>


              {/* Item */}
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  ✨
                </div>

                <div>
                  <h4 className="font-semibold text-[#0b1f3a]">
                    Made for Everyone
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#60799b]">
                    Clean, straightforward and easy to use.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom Statement */}
        <div className="mt-20 rounded-3xl border border-blue-200/60 bg-white/60 px-8 py-10 text-center shadow-sm backdrop-blur-sm">

          <p className="text-2xl font-semibold text-[#0b1f3a] md:text-3xl">
            Shorter links.
            <span className="text-blue-600"> Bigger possibilities.</span>
          </p>

          <p className="mt-3 text-[#60799b]">
            Built with simplicity in mind. ♡
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;