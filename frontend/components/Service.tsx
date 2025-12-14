import React from "react";

export default function ServicesUI() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "We're wildly passionate about our purpose, and it has us transforming everything.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-7 h-7">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Business Planning",
      description:
        "Our customers get solutions and business opportunities instead of just projects.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-20 h-20">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v8m4-4H8"
          ></path>
        </svg>
      ),
    },
    {
      title: "Project Management",
      description:
        "Our global community of about 5,000 people can be found working from corporate.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-20 h-20
        
        ">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6M9 16h6M9 8h6"
          ></path>
        </svg>
      ),
    },
    {
      title: "Cyber Security",
      description:
        "We know our people are our greatest asset, and we are putting our money.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-7 h-7">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l7 4v6c0 5-3.5 9-7 9s-7-4-7-9V6l7-4z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-4">

 

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-10 gap-6">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl pt-7 pb-6 px-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-[36px] border-t-transparent rounded-tl-[36px]"
          >
            {/* Icon Box */}
           <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#0A2A6B] to-[#19C6E6] rounded-xl  rotate-45 flex items-center justify-center">
  <div className="-rotate-45">{s.icon}</div>
</div>


            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 pb-3 text-center relative">
              {s.title}
              <span className="absolute left-1/2 -bottom-[2px] -translate-x-1/2 w-20 h-[3px] bg-gradient-to-br from-[#0A2A6B] to-[#19C6E6] rounded-md"></span>
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mt-3 text-center">
              {s.description}
            </p>
          </div>
        ))}
      </div>

     
    </section>
  );
}
