import React from "react";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
    author: "Olivia Rhye",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "20 Jan 2022",
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
    author: "Phoenix Baker",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    date: "18 Jan 2022",
  },
  {
    category: "Software Engineering",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    author: "Lana Steiner",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    date: "18 Jan 2022",
  },
   {
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
    author: "Olivia Rhye",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "20 Jan 2022",
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
    author: "Phoenix Baker",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    date: "18 Jan 2022",
  },
  {
    category: "Software Engineering",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    author: "Lana Steiner",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    date: "18 Jan 2022",
  },
  
];

const Blogcard = () => {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Image */}
              <div className="p-4 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    h-44 w-full object-cover
                    transition-all duration-500 ease-out
                    group-hover:scale-105
                    group-hover:rounded-sm
                  "
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                {/* Category */}
                <span className="text-sm font-semibold text-[#0B5ED7]">
                  {blog.category}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-lg font-semibold text-gray-900 flex justify-between items-start gap-2 group-hover:text-[#0B5ED7] transition">
                  {blog.title}
                  <ArrowUpRight className="w-5 h-5 text-[#2EC4E6] mt-1" />
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {blog.description}
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={blog.avatar}
                    alt={blog.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {blog.author}
                    </p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogcard;
