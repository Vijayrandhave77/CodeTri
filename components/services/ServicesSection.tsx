"use client"
import React, { useState } from 'react';
// Importing professional, simple stroke icons
import { 
  Monitor, 
  Code2, 
  Smartphone, 
  Handshake, 
  Layers, 
  TrendingUp, 
  BarChart4, 
  ShieldAlert 
} from 'lucide-react';

const services = [
  {
    title: "Web Designing",
    description: "Our whole soul aim is to design visually attractive websites to grab the attention of your customers.",
    icon: <Monitor size={32} strokeWidth={1.5} />
  },
  {
    title: "Web Development",
    description: "Apart from creating visually attractive websites, we are also experts in web development.",
    icon: <Code2 size={32} strokeWidth={1.5} />
  },
  {
    title: "Mobile App Development",
    description: "We create streamlined mobile applications to fit your requirements in order to serve every area.",
    icon: <Smartphone size={32} strokeWidth={1.5} />
  },
  {
    title: "IT Consulting",
    description: "We provide expert advice to help you navigate the complex technology landscape and optimize your operations.",
    icon: <Handshake size={32} strokeWidth={1.5} />
  },
  {
    title: "Graphic Designing",
    description: "Graphics deliver stronger than words; that's why we are here to showcase your ideas and elements.",
    icon: <Layers size={32} strokeWidth={1.5} />
  },
  {
    title: "Digital Marketing",
    description: "Online presence is not fruitful if it is not done in a proper manner. We deliver your business to your audience.",
    icon: <TrendingUp size={32} strokeWidth={1.5} />
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights to drive business growth and make informed strategic decisions.",
    icon: <BarChart4 size={32} strokeWidth={1.5} />
  },
  {
    title: "Cyber Security",
    description: "One of our top priorities is implementing technology solutions which consider the cybersecurity risks.",
    icon: <ShieldAlert size={32} strokeWidth={1.5} />
  }
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(1);

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
           <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
             What we do?
           </h2>
           <div className="mt-4 h-1 w-20 bg-[#0d6efd] mx-auto"></div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20 items-stretch">
          {services.map((service, index) => {
            const isSelected = hoveredIndex === index;
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative flex flex-col items-center text-center p-8 pt-16 transition-all duration-500 cursor-pointer border border-gray-100
                  ${isSelected 
                    ? 'bg-[#064268] text-white shadow-2xl scale-105 z-10' 
                    : 'bg-white text-gray-500 hover:z-20'
                  }`}
              >
                {/* Overlapping Circle Icon */}
                <div className={`absolute -top-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 border-4 
                  ${isSelected 
                    ? 'bg-white text-[#064268] border-[#064268] shadow-lg' 
                    : 'bg-gray-50 text-gray-400 border-white shadow-sm'}`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className={`text-[14px] font-bold mb-4 uppercase tracking-widest transition-colors duration-500
                  ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                  {service.title}
                </h3>
                
                <p className={` mb-8 flex-grow transition-colors duration-500
                  ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>
                  {service.description}
                </p>

                {/* Action Button */}
                <button className={`px-6 py-2 rounded-md font-bold text-[11px] uppercase tracking-tighter transition-all duration-300
                  ${isSelected 
                    ? 'bg-[#26C6DA] text-white hover:bg-white hover:text-[#064268]' 
                    : 'bg-[#0d6efd] text-white hover:bg-[#064268]'}`}>
                  Read More
                </button>
              </div>
            );
          })}
        </div>
      </div>

     
    </section>
  );
};

export default ServicesSection;