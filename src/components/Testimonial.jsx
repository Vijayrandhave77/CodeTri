import React from "react";

function Testimonial() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-[#F3F8FF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Trusted by businesses, startups, and entrepreneurs worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-14 h-14 rounded-full object-cover"
                alt="client"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Rahul Verma
                </h3>
                <p className="text-sm text-gray-500">CEO, WebCore Pvt Ltd</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex mt-3 text-yellow-400">{"★★★★★"}</div>

            <p className="text-gray-600 mt-4">
              “KodeTri Technologies ने हमारा पूरा web system redesign किया।
              Performance, UI, और speed सब कुछ next level है. Highly
              recommended!”
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-14 h-14 rounded-full object-cover"
                alt="client"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Priya Sharma
                </h3>
                <p className="text-sm text-gray-500">Founder, FitLife App</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex mt-3 text-yellow-400">{"★★★★★"}</div>

            <p className="text-gray-600 mt-4">
              “Incredible experience! टीम ने हमारा पूरा MERN stack प्रोजेक्ट
              बिलकुल 🔥 तरीके से deliver किया. Communication भी top-notch था!”
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/68.jpg"
                className="w-14 h-14 rounded-full object-cover"
                alt="client"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Amit Kapoor
                </h3>
                <p className="text-sm text-gray-500">CTO, DigitalSpark</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex mt-3 text-yellow-400">{"★★★★★"}</div>

            <p className="text-gray-600 mt-4">
              “Affordable price, premium quality. App speed, optimization, UI —
              सब कुछ professional level का मिला. Will work with them again!”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
