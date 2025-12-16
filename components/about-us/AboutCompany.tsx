import Image from 'next/image';
import Link from 'next/link';

const AboutCompany = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-6">
         
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] tracking-tight">
            About Kodetri
          </h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              <span className="font-bold text-[#003366]">Kodetri</span> is a modern IT services company established in 2025, 
              dedicated to building innovative and reliable digital solutions for businesses of all sizes. 
              We specialize in website development, mobile app development, and custom software solutions 
              using modern technologies.
            </p>
            <p>
              At Kodetri, we transform ideas into high-quality digital products that are fast, scalable, 
              and user-friendly. Our goal is to help startups and businesses strengthen their digital 
              presence and achieve long-term growth through technology.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/contact">
              <button className="bg-[#003366] text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image Composition */}
        <div className="relative">
          {/* Main Large Image */}
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-l-8 border-[#003366]">
            <Image 
              src="/img/aboutus.jpg" // Add a high-quality office/team photo here
              alt="Kodetri Team Working" 
              width={600} 
              height={400}
              className="object-cover"
            />
          </div>
          
          {/* Secondary Overlay Image (Optional decorative touch) */}
          <div className="absolute -bottom-10 -left-10 z-20 hidden md:block w-64 h-48 rounded-lg overflow-hidden border-4 border-white shadow-xl">
             <Image 
              src="/img/about us.png" // Add a second tech-focused photo here
              alt="Software Development" 
              width={300} 
              height={200}
              className="object-cover h-full w-full"
            />
          </div>

          {/* Background Decorative Element */}
          <div className="absolute top-10 right-10 -z-10 w-full h-full border-2 border-cyan-100 rounded-xl translate-x-4 translate-y-4"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutCompany;