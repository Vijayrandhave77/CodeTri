import React from "react";

function Blog() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-[#F5F9FF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest <span className="text-blue-600">Blogs</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Insights, tips, and updates from KodeTri Technologies
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-52 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526378722484-c942c8fbd98d"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Web Development
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mt-3">
                Why MERN Stack is the Future of Web Development
              </h3>

              <p className="text-gray-600 mt-2">
                Discover why modern companies prefer MERN stack for building
                high-performance and scalable applications...
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">By Admin • Jan 2025</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
          </div>

          {/* 2nd Blog */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-52 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                Mobile Apps
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mt-3">
                Why Every Business Needs a Mobile App in 2025
              </h3>

              <p className="text-gray-600 mt-2">
                Mobile apps increase user trust, engagement, and take your
                customer experience to the next level...
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  By Team KodeTri • Feb 2025
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
          </div>

          {/* 3rd Blog */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-52 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                UI/UX Design
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mt-3">
                Secrets of Modern UI/UX — Make Users Love Your Product
              </h3>

              <p className="text-gray-600 mt-2">
                A beautiful design increases brand value. Learn how UI/UX
                impacts user behaviour and conversions...
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  By Designer • March 2025
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
