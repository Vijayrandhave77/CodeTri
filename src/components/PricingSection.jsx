import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "1999",
      button: "Get Started",
      features: [
        "5 Websites",
        "Basic Mobile App Support",
        "Basic SEO Optimization",
        "1 Developer",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "3999",
      button: "Get Started",
      features: [
        "20 Websites",
        "Full Mobile App Development",
        "Advanced SEO",
        "3 Developers",
        "Custom UI/UX Design",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "7999",
      button: "Contact Us",
      features: [
        "Unlimited Websites",
        "24/7 Support Team",
        "All Features",
        "Unlimited Developers",
        "Dedicated Project Manager",
        "Enterprise API Access",
      ],
      popular: false,
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Corporate Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#EAF3FA] to-white"></div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#093A66] mb-4">
            Our Pricing Plans
          </h2>
          <p className="text-[#093A66]/80 max-w-2xl mx-auto text-lg">
            Choose the perfect plan designed to scale with your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-10 shadow-[0_4px_16px_rgba(0,0,0,0.06)] 
            hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] transition-all duration-300 border
            ${
              plan.popular
                ? "border-[#093A66] bg-gradient-to-b from-[#093A66]/10 to-white scale-105"
                : "border-gray-200 bg-white"
            }
          `}
            >
              {/* Badge */}
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-[#093A66] text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#093A66] mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-5xl font-extrabold text-[#093A66] mb-8">
                <span className="text-gray-600 text-3xl">₹</span>
                {plan.price}
                <span className="text-gray-600 text-lg">/mo</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-[#093A66]/80">
                    <svg
                      className="w-5 h-5 text-green-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-xl text-white font-semibold transition-all
              ${
                plan.popular
                  ? "bg-[#093A66] hover:bg-[#072a4a]"
                  : "bg-[#093A66] hover:bg-[#072a4a]"
              }
            `}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
