"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Jim Corner",
    role: "CEO, Victionary Co.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    text:
      "I would like to say a big Thank you for your immense effort and support. In addition, I have feeling that our further events are going to be great as well, good luck to the team.",
  },
  {
    name: "Anna Smith",
    role: "Marketing Head",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    text: "Amazing support and professional work. Highly recommended.",
  },
  {
    name: "John Wick",
    role: "Product Designer",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    text: "Outstanding experience working with this team.",
  },
  {
    name: "David Lee",
    role: "CTO",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    text: "They delivered exactly what we needed.",
  },
  {
    name: "Sarah Kim",
    role: "Founder",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    text: "Very professional and creative people.",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  return (
    <section className="py-17 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* ARROWS */}
        <div className="flex gap-3 mb-12">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-[#EEE9FF] flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-gradient-to-r from-[#61b7c7] to-[#043a63] text-white flex items-center justify-center"
          >
            →
          </button>
        </div>

        {/* MAIN ROW */}
        <div className="flex items-start gap-28">

          {/* LEFT – IMAGE CARD */}
          <div className="relative">
            <div className="bg-gradient-to-b from-[#E3F0FF] via-[#CFE6FF] to-[#B8DCFF]
rounded-2xl p-4 shadow-xl">
              <div className="bg-white p-3 rounded-xl">
                <img
                  src={testimonials[active].image}
                  className="w-[260px] h-[300px] object-cover rounded-lg"
                  alt=""
                />
              </div>

              <div className="text-center mt-3">
                <h4 className="font-semibold text-gray-900">
                  {testimonials[active].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[active].role}
                </p>
              </div>
            </div>

            {/* TEXT BUBBLE */}
            <div className="absolute left-full -top-10 -ml-10 w-[400px]">
              <div className="relative bg-[#ffffff00] border border-gray-200 rounded-xl p-6 shadow-md">
                <p className="text-gray-700 leading-relaxed">
                  “{testimonials[active].text}”
                </p>
              
              </div>
            </div>
          </div>

          {/* RIGHT – THUMBNAILS (BOTTOM ALIGNED) */}
          <div className="flex flex-col justify-end h-[360px]">

            {/* PAGINATION */}
            <span className="mb-6 self-center px-4 py-1 border border-violet-500 rounded-full text-sm text-violet-600">
              {active + 1} / {testimonials.length}
            </span>

            {/* THUMB LIST */}
            <div className="flex gap-6">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer w-20 h-20 rounded-xl overflow-hidden border transition-all
                    ${
                      active === index
                        ? "border-violet-500 scale-105"
                        : "border-gray-200 grayscale opacity-70"
                    }`}
                >
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
