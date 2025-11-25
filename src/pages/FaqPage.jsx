import React, { useState } from "react";
import { Link } from "react-router-dom";

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs = [
    {
      q: "KodeTri Technologies kya services provide karta hai?",
      a: "Hum Web Development, Mobile App Development, Custom Software, UI/UX Design, Branding, Maintenance & IT Consulting services provide karte hain.",
    },
    {
      q: "Project complete hone ka time kitna hota hai?",
      a: "Timeline project ki complexity par depend karti hai. Normally projects 1–8 weeks me deliver ho jate hain.",
    },
    {
      q: "Kya aap maintenance provide karte ho?",
      a: "Haan, hum long-term support & maintenance provide karte hain.",
    },
    {
      q: "Payment process kya hota hai?",
      a: "Payment milestone-based hota hai. Start me advance required hota hai.",
    },
  ];

  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* ---- FIXED HEADER GAP SAME AS TERMS PAGE ---- */}
      <div className="pt-16"></div>

      {/* PAGE HERO */}
      <div className="w-full bg-[#0B2A45] py-12 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-white">FAQs</h1>

          {/* Breadcrumb */}
          <div className="flex items-center text-sm mt-4 md:mt-0">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-orange-400 font-medium">FAQs</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-500 text-sm mb-8">Frequently Asked Questions</p>

        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              {/* QUESTION */}
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left"
                onClick={() => toggleFAQ(i)}
              >
                <span className="text-xl font-semibold text-[#0B2A45]">
                  {item.q}
                </span>

                <span className="text-orange-500 text-3xl font-bold">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-700 text-lg leading-relaxed border-t border-gray-200">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
