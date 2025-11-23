const PricingPage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Pricing Plans
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Choose the perfect plan for your business
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
            <p className="text-4xl font-bold text-blue-700 mb-6">
              ₹1999 <span className="text-lg text-gray-600">/mo</span>
            </p>

            <ul className="text-gray-600 space-y-3 mb-8">
              <li>✔ 5 Websites</li>
              <li>✔ Basic Mobile App Support</li>
              <li>✔ Basic SEO Optimization</li>
              <li>✔ 1 Developer</li>
            </ul>

            <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Select Plan
            </button>
          </div>

          {/* Professional */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-md hover:shadow-lg p-8 transition-all relative">
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Professional
            </h3>
            <p className="text-4xl font-bold text-blue-700 mb-6">
              ₹3999 <span className="text-lg text-gray-600">/mo</span>
            </p>

            <ul className="text-gray-700 space-y-3 mb-8">
              <li>✔ 20 Websites</li>
              <li>✔ Full Mobile App Development</li>
              <li>✔ Advanced SEO</li>
              <li>✔ 3 Developers</li>
              <li>✔ Custom UI/UX Design</li>
            </ul>

            <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Select Plan
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Enterprise
            </h3>
            <p className="text-4xl font-bold text-blue-700 mb-6">
              ₹7999 <span className="text-lg text-gray-600">/mo</span>
            </p>

            <ul className="text-gray-600 space-y-3 mb-8">
              <li>✔ Unlimited Websites</li>
              <li>✔ 24/7 Support Team</li>
              <li>✔ All Features</li>
              <li>✔ Unlimited Developers</li>
              <li>✔ Dedicated Project Manager</li>
              <li>✔ Enterprise API Access</li>
            </ul>

            <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
