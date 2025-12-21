import React from "react";

export default function About() {
  return (
    <section className="relative py-24  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT IMAGE SECTION ================= */}
        <div className="relative max-w-xl">

          <div className="grid grid-cols-3 gap-6">

            {/* IMAGE 1 – TOP LEFT (WIDE + FRAME) */}
            <div className="relative col-span-2">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#0A2A6B] to-[#19C6E6] rounded-tl-[70px] rounded-br-[30px]"></div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt=""
                className="relative z-10 w-full h-[240px] object-cover
                rounded-tl-[60px] rounded-tr-[20px]
                rounded-br-[30px] rounded-bl-[20px]"
              />
            </div>

            {/* IMAGE 2 – TOP RIGHT */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt=""
              className="w-full h-[240px] object-cover
              rounded-tr-[60px] rounded-tl-[20px]
              rounded-br-[20px] rounded-bl-[20px]"
            />

            {/* IMAGE 3 – BOTTOM LEFT (3 STARS DECORATION) */}
            <div className="relative">
              
              {/* STAR 1 */}
              <div className="absolute -bottom-6 -left-6 rotate-12">
                <svg width="42" height="42" viewBox="0 0 100 100">
                  <path
                    d="M50 0 L62 38 L100 50 L62 62 L50 100 L38 62 L0 50 L38 38 Z"
                    fill="#2563EB"
                  />
                </svg>
              </div>

              {/* STAR 2 */}
              <div className="absolute -bottom-2 -left-12 -rotate-12 opacity-80">
                <svg width="26" height="26" viewBox="0 0 100 100">
                  <path
                    d="M50 0 L62 38 L100 50 L62 62 L50 100 L38 62 L0 50 L38 38 Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>

              {/* STAR 3 */}
              <div className="absolute -bottom-10 left-4 rotate-6 opacity-60">
                <svg width="20" height="20" viewBox="0 0 100 100">
                  <path
                    d="M50 0 L62 38 L100 50 L62 62 L50 100 L38 62 L0 50 L38 38 Z"
                    fill="#60A5FA"
                  />
                </svg>
              </div>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt=""
                className="w-full h-[190px] object-cover
                rounded-bl-[60px] rounded-tl-[20px]
                rounded-tr-[20px] rounded-br-[20px]"
              />
            </div>

            {/* IMAGE 4 – BOTTOM RIGHT (WIDE + FRAME) */}
            <div className="relative col-span-2">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-[#0A2A6B] to-[#19C6E6] rounded-br-[70px] rounded-tl-[30px]"></div>
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                alt=""
                className="relative z-10 w-full h-[190px] object-cover
                rounded-br-[60px] rounded-bl-[20px]
                rounded-tr-[20px] rounded-tl-[20px]"
              />
            </div>
          </div>

          {/* ================= CENTER BADGE ================= */}
        <div className="absolute right-1/5 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
  <div className="relative w-24 h-24 flex items-center justify-center">

    {/* Dotted outer ring */}
    <div className="absolute inset-[-6px] rounded-full border-2 border-dashed border-blue-400"></div>

    {/* Blue Circle */}
    <div className="relative w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">

      {/* SVG Circular Text */}
      <svg
        className="absolute inset-0"
        viewBox="0 0 100 100"
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 50, 50
              m -34, 0
              a 34,34 0 1,1 68,0
              a 34,34 0 1,1 -68,0
            "
          />
        </defs>

        <text
          fill="white"
          fontSize="7"
          fontWeight="600"
          letterSpacing="1"
        >
          <textPath
            href="#circlePath"
            startOffset="50%"
            textAnchor="middle"
          >
            KODETRI TECHNOLOGY
          </textPath>
              <textPath
            href="#circlePath"
            startOffset="50%"
            textAnchor="middle"
          >
            KODETRI TECHNOLOGY
          </textPath>
        </text>
      </svg>

      {/* Center Arrow */}
      <span className="relative z-10 text-white text-lg font-bold">
        →
      </span>
    </div>
  </div>
</div>


        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>
          <p className="text-blue-600 font-semibold mb-3">About Us</p>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Transforming <span className="text-blue-600">Ideas</span> into <br />
            Digital Reality
          </h2>

          <p className="text-gray-600 mb-10 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

     
                  <button className=" bg-[#26C6DA] hover:bg-[#0F4C81] text-white p-3 rounded-lg font-semibold">
             Read More
            </button>
        </div>
      </div>
    </section>
  );
}
