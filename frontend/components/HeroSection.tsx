import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import AnimateImage from "./animation/AnimateImage";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#E8F4FA] to-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

      <div className="absolute top-[-150px] right-[-100px] w-[450px] h-[450px] bg-[#0D6EFD] opacity-30 rounded-full blur-[160px] animate-pulse"></div>
      <div className="absolute bottom-[-180px] left-[-120px] w-[420px] h-[420px] bg-[#4DB7FF] opacity-30 rounded-full blur-[180px] animate-pulse"></div>

      <div className="absolute top-[40%] left-[45%] w-40 h-40 bg-[#064268] opacity-20 rounded-full blur-[100px]"></div>

      <FaReact className="absolute top-32 left-20 text-[#0D6EFD] opacity-70 animate-float text-5xl" />
      <FaNodeJs className="absolute bottom-32 right-24 text-green-600 opacity-70 animate-float-slow text-5xl" />
      <SiMongodb className="absolute top-1/2 right-10 text-green-700 opacity-70 animate-float text-4xl" />
      <SiNextdotjs className="absolute top-1/3 left-[55%] text-gray-800 opacity-70 animate-float text-5xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-[#064268] leading-tight drop-shadow-sm">
            Modern. Scalable. Clean-Code
            <span className="text-[#0D6EFD]"> Digital Solutions.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            Build enterprise-grade applications with top-tier performance,
            secure architecture and elegant UI/UX — trusted by startups and
            enterprises globally.
          </p>

          <div className="mt-10 flex gap-6">
            <button className="px-8 py-3 rounded-xl font-semibold text-white bg-[#064268] hover:bg-[#032A43] transition shadow-lg shadow-[#06426833]">
              Get a Quote
            </button>

            <button className="px-8 py-3 rounded-xl font-semibold text-[#064268] border border-[#064268] hover:bg-[#064268] hover:text-white transition shadow-md">
              Our Work
            </button>
          </div>
        </div>

        <div className="relative z-20 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full bg-[#0D6EFD33] blur-[90px] rounded-full"></div>
            <AnimateImage />
          </div>
        </div>
      </div>
    </section>
  );
}
