import Link from "next/link";

const GetInTouch = () =>{
    return(
        <>
        {/* Bottom CTA Section with Background Image */}
<div className="relative  w-full min-h-[400px] flex items-center justify-center overflow-hidden">
  {/* Background Image Container */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{ 
      backgroundImage: `url('/img/getintouch2.webp')` 
    }}
  >
    {/* Dark Overlay (Adjust opacity here) */}
    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
  </div>

  {/* Content Wrapper */}
  <div className="relative z-10 text-center px-6 max-w-3xl">
    <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-[0.25em] mb-6">
      Want to see us in action?
    </h2>
    
    <div className="w-20 h-1 bg-[#064268] mx-auto mb-8"></div>

    <p className="text-gray-200 text-sm md:text-base mb-10 leading-relaxed font-light tracking-wide">
      Get in touch with us today and discover the significant impact our customized, 
      cutting-edge IT solutions can have on your business growth and efficiency.
    </p>

    <Link href="/contact" className="group relative overflow-hidden bg-[#0d6efd] text-white px-12 py-4 rounded-sm font-bold text-xs uppercase
     tracking-[0.2em] transition-all hover:bg-[#064268] ">
      <span className="relative z-10">Get in touch now</span>
      {/* Subtle hover shine effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
    </Link>
  </div>
</div>
        </>
    )
}
export default GetInTouch;