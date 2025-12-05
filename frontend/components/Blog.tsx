import React from "react";

export default function Blog() {
  const blogs = [
    {
      image: "/img/teamwork-making-online-blog.jpg",
      category: "TRAVEL",
      date: "January 21, 2015",
      title: "Love Writing And Sharing",
      desc: "Dignissimos ducimus qui blanditiis praesentium voluptatum modi tempora incidunt ut labore et dolore deleniti atque corrupti lorem ipsum.",
    },
    {
      image: "/img/media-journalism-global-daily-news-content-concept.jpg",
      category: "MAGAZINE",
      date: "January 21, 2015",
      title: "The Ultimate Consumers",
      desc: "Reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat lorem ipsum sit modi tempora incidunt ut labore.",
    },
    {
      image: "/img/blogging-gone-viral-camera-concept.jpg",
      category: "TECH, TRAVEL",
      date: "December 25, 2014",
      title: "It Is Beyond Blogging",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium sunt in culpa qui officia deserunt.",
    },
  ];

  return (
    <div className="bg-gray-200 p-10">
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:-translate-y-1 transition blog"
          >
            <img
              src={blog.image}
              alt="blog"
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between text-gray-500 text-xs mb-2">
                <span className="uppercase tracking-wide font-semibold">
                  {blog.category}
                </span>
                <span>{blog.date}</span>
              </div>

              <h3 className="text-xl font-bold text-black mb-2">
                {blog.title}
              </h3>

              <p className="text-[#555555] text-md mb-5">{blog.desc}</p>

              {/* Updated Read More Button with Arrow */}
              <a
                href="#"
                className="flex items-center text-[#064268] gap-2 font-medium hover:gap-3 transition-all"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 12H6m11.25 0l-4.5-4.5m4.5 4.5l-4.5 4.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
