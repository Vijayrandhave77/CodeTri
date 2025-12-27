import React from "react";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogs = [
  {
    tag: "Teach",
    title: "How to Avoid the Biggest College Admission Mistakes",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
    author: "Roboth smith",
    date: "Oct, 23, 2025",
  },
  {
    tag: "Learn",
    title: "How Digital Platforms Are Shaping Business Schools",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
    author: "Roboth smith",
    date: "Oct, 23, 2025",
  },
  {
    tag: "Study",
    title: "Why Business Students Need Tech Skills for the Future",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    author: "Roboth smith",
    date: "Oct, 23, 2025",
  },
];

const Blogcard = () => {
  return (
    <section className="py-16 bg-[#f2f7ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-[#e1edff] overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative p-5">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                />

                {/* Badge */}
                <span className="absolute top-8 left-8 bg-[#0B5ED7] text-white text-sm font-medium px-5 py-2 rounded-lg">
                  {blog.tag}
                </span>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                {/* Meta */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#0B5ED7]" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User size={16} className="text-[#2EC4E6]" />
                    {blog.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3>

                {/* Link */}
                <a
                  href="blog/[slug]"
                  className="mt-6 inline-flex items-center gap-2 text-gray-700 font-medium hover:text-[#0B5ED7] transition"
                >
                  More Details <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogcard;
