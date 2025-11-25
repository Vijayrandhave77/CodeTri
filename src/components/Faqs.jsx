import { useState } from "react";

const faqs = [
  {
    question: "What services does KodeTri Technologies provide?",
    answer:
      "We offer Web Development, Mobile App Development, UI/UX Design, SEO, Branding, and Custom Software Solutions.",
  },
  {
    question: "How long does it take to deliver a project?",
    answer:
      "It depends on the project size and complexity. Small projects usually take 2–4 weeks, while larger products take 1–3 months.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer: "Yes! We offer both monthly and yearly maintenance plans.",
  },
  {
    question: "Do you work with MERN / Next.js / React Native?",
    answer:
      "Yes! Our team is highly skilled in MERN, Next.js, React Native, Node.js, and all modern tech stacks.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-[#F3F8FF] to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#093A66] mb-16">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2">
            Have questions in mind? Here are the answers you need.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-2xl text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-gray-600 mt-4 transition-all">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
