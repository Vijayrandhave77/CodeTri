import { useState } from "react";

const faqs = [
  {
    question: "KodeTri Technologies किस तरह की services प्रदान करता है?",
    answer:
      "हम Web Development, Mobile App Development, UI/UX Design, SEO, Branding और Custom Software Solutions provide करते हैं।",
  },
  {
    question: "Project deliver करने में कितना time लगता है?",
    answer:
      "ये project के size और complexity पर depend करता है। आमतौर पर छोटे projects 2-4 हफ्तों में और बड़े products 1-3 महीनों में deliver होते हैं।",
  },
  {
    question: "क्या आप maintenance और support भी provide करते हैं?",
    answer:
      "हाँ! हम monthly और yearly दोनों तरह के maintenance plans provide करते हैं।",
  },
  {
    question: "क्या आप MERN / Next.js / React Native में काम करते हैं?",
    answer:
      "हाँ! हमारी team MERN, Next.js, React Native, Node.js और modern tech stack में expert है।",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-[#F3F8FF] to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 mt-2">
            आपके मन में कोई सवाल है? नीचे आपके सारे doubts clear मिल जाएंगे।
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
