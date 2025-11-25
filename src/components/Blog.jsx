import { motion } from "framer-motion";

const Blog = () => {
  const blogs = [
    {
      title: "Why MERN Stack is the Future of Web Development",
      category: "Web Development",
      categoryColor: "from-blue-400 to-blue-600",
      description:
        "Discover why modern companies prefer MERN stack for building high-performance and scalable applications...",
      author: "Admin",
      date: "Jan 2025",
      image: "https://images.unsplash.com/photo-1526378722484-c942c8fbd98d",
    },
    {
      title: "Why Every Business Needs a Mobile App in 2025",
      category: "Mobile Apps",
      categoryColor: "from-purple-400 to-purple-600",
      description:
        "Mobile apps increase user trust, engagement, and take your customer experience to the next level...",
      author: "Team KodeTri",
      date: "Feb 2025",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    },
    {
      title: "Secrets of Modern UI/UX — Make Users Love Your Product",
      category: "UI/UX Design",
      categoryColor: "from-green-400 to-green-600",
      description:
        "A beautiful design increases brand value. Learn how UI/UX impacts user behaviour and conversions...",
      author: "Designer",
      date: "March 2025",
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-[#EAF3FA] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#093A66] mb-16">
            Latest Blogs
          </h2>
          <p className="text-gray-600 mt-2">
            Insights, tips, and updates from KodeTri Technologies
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span
                  className={`text-xs bg-gradient-to-r ${blog.categoryColor} text-white px-3 py-1 rounded-full shadow-sm`}
                >
                  {blog.category}
                </span>

                <h3 className="text-xl font-semibold text-gray-900 mt-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                  {blog.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    By {blog.author} • {blog.date}
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
