import CommonBanner from "@/components/about-us/CommonBanner";
import React from "react";

const projects = [
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, et..",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nit sci at..",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero de.",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed, aix..",
    image: "https://picsum.photos/600/400?random=4",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nit sci at..",
    image: "https://picsum.photos/600/400?random=5",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero de.",
    image: "https://picsum.photos/600/400?random=6",
  },
];

const PortfolioSection = () => {
  return (
    <>
    <CommonBanner 
        title="Portfolio" 
        imageUrl="/img/aboutbanner.png" 
        lineColor="border-green-500"
        height="h-[400px]"
        subtitle=" We are dedicated to providing the best service with our professional team."
      />
    <section className="relative py-20 overflow-hidden bg-[#f4f9ff]">
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,139,253,0.18),_transparent_60%)]" />

      {/* Dotted texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 60C120 90 240 120 360 110C480 100 600 50 720 40C840 30 960 60 1080 70C1200 80 1320 70 1440 60V120H0V60Z"
          fill="#ffffff"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Our Portfolio
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-5">
                  {item.desc}
                </p>

                <button className="px-6 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-14 text-center">
          <button className="px-10 py-3 rounded-lg border border-blue-300 text-blue-800 font-medium bg-white/80 hover:bg-blue-100 transition">
            View More Projects
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default PortfolioSection;
