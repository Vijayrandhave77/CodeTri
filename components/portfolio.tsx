import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
  },
  {
    title: "Mobile App Design",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200",
  },
  {
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-[#0B5ED7]">
            My Projects
          </h2>
          <p className="text-gray-600 mt-2">
            Some of My Recent Work
          </p>
          <div className="mt-4 h-[2px] w-24 bg-[#17C3B2]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transform
                    transition-transform duration-500 ease-in-out
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>

                <button
                  className="
                    px-6 py-2 rounded-full
                    bg-gradient-to-r from-[#0B5ED7] to-[#17C3B2]
                    text-white font-medium
                    cursor-pointer
                    hover:opacity-90
                    transition
                  "
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
