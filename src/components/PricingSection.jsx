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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#093A66] mb-3">
            Our Pricing Plans
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Choose the perfect plan designed to scale with your business.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 shadow-lg border transition-all 
                ${
                  plan.popular
                    ? "border-[#093A66] shadow-xl scale-105 bg-gradient-to-b from-[#093A66]/10 to-white"
                    : "border-gray-200 bg-white hover:shadow-xl"
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <p className="text-sm mb-3 inline-block bg-[#093A66] text-white px-4 py-1 rounded-full">
                  Most Popular
                </p>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-5xl font-extrabold text-[#093A66] mb-8">
                <span className="text-gray-600 text-3xl">₹</span>
                {plan.price}
                <span className="text-gray-600 text-lg">/mo</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
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
