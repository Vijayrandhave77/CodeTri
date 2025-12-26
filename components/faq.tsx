"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from "react-icons/fi";

const faqs = [
  {
    q: "What services does Kodetri Technologies provide?",
    a: "Kodetri Technologies specializes in web development, mobile app development, UI/UX design, and scalable software solutions tailored for modern businesses.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes, we collaborate with startups, SMEs, and enterprise-level clients, offering customized solutions based on business goals and scale.",
  },
  {
    q: "Which technologies does your team use?",
    a: "Our team works with modern technologies including React, Next.js, Node.js, Laravel, Flutter, cloud platforms, and scalable databases.",
  },
  {
    q: "How do you ensure project quality and security?",
    a: "We follow industry best practices, secure coding standards, code reviews, and thorough testing to ensure high-quality and secure deliverables.",
  },
  {
    q: "How can I get in touch with Kodetri Technologies?",
    a: "You can contact us through our website, email, or by clicking the Connect Us button to discuss your project requirements.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative min-h-screen overflow-hidden mb-15">
      {/* Professional Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000')",
        }}
      />

      {/* Dark professional overlay */}
      <div className="absolute inset-0 bg-slate-900/60" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 flex justify-end">
        {/* FAQ CARD */}
        <div className="w-full max-w-xl rounded-2xl p-10 text-white
          bg-gradient-to-br from-[#0A3D91] via-[#0F6CBD] to-[#1FB6C9]">
          
          <h2 className="text-3xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-white/30">
            {faqs.map((item, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left text-base font-medium"
                >
                  {item.q}
                  {activeIndex === index ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>

                {activeIndex === index && (
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex items-center justify-between">
            <span className="text-sm text-white/80">
              Have more questions?
            </span>

            <button className="bg-white text-[#0A3D91] px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-gray-100 transition">
              CONNECT US <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
