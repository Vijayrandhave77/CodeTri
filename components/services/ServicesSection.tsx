import React from 'react';
const services = [
  {
    title: "Web Designing",
    description: "Our whole soul aim is to design visually attractive websites to grab the attention of your customers.",
    icon: "🎨"
  },
  {
    title: "Web Development",
    description: "Apart from creating visually attractive websites, we are also experts in web development.",
    icon: "💻"
  },
  {
    title: "Mobile App Development",
    description: "We create streamlined mobile applications to fit your requirements in order to serve every area.",
    icon: "📱"
  },
  {
    title: "Logo Designing",
    description: "We help many large and small businesses present their stories with a highly attractive logo.",
    icon: "🖋️"
  },
  {
    title: "Graphic Designing",
    description: "Graphics deliver stronger than words; that's why we are here to showcase your ideas and elements.",
    icon: "📐"
  },
  {
    title: "Digital Marketing",
    description: "Online presence is not fruitful if it is not done in a proper manner. We deliver your business to your target audience.",
    icon: "🚀"
  }
];
const ServicesSection = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            What do we do?
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-[#0d6efd] mx-auto rounded-full shadow-[0_0_10px_rgba(13,110,253,0.5)]"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-[2rem] p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_30px_60px_-15px_rgba(13,110,253,0.12)] hover:-translate-y-3 border border-transparent hover:border-blue-50"
            >
              {/* Soft Glow Background Decor */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#0d6efd]/5 rounded-full blur-2xl group-hover:bg-[#0d6efd]/10 transition-colors"></div>

              {/* Icon Circle */}
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center text-3xl bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm group-hover:shadow-blue-100">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#0d6efd] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-lg font-light">
                {service.description}
              </p>

              {/* Soft Link UI */}
              <div className="mt-8 flex items-center gap-3 text-[#0d6efd] font-bold group-hover:gap-5 transition-all duration-300">
                <span className="text-sm tracking-wide uppercase">Read More</span>
                <span className="w-8 h-[2px] bg-[#0d6efd] rounded-full origin-left group-hover:scale-x-125 transition-transform"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;