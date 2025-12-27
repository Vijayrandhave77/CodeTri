import CommonBanner from "@/components/about-us/CommonBanner";
import React from "react";

const BlogDetail = () => {
  return (
    <>
       <CommonBanner 
        title="Blog Detail" 
        imageUrl="/img/aboutbanner.png" 
        lineColor="border-green-500"
        height="h-[400px]"
        subtitle=" We are dedicated to providing the best service with our professional team."
      />
    <section className="bg-[#f6f9f8] py-20">
      <div className="max-w-[1180px] mx-auto px-4 flex gap-[40px]">

        {/* ================= MAIN CONTENT ================= */}
        <div className="w-[760px]">

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400"
              alt=""
              className="w-full h-[420px] object-cover rounded-[14px]"
            />
          </div>

          {/* Meta */}
          <div className="flex gap-6 text-[14px] text-gray-500 mb-4">
            <span>📅 27 Dec, 2025</span>
            <span>👤 Admin</span>
            <span>💬 02 Comments</span>
          </div>

          {/* Title */}
          <h1 className="text-[34px] leading-[44px]  text-gray-900 mb-6">
            A Step-by-Step Guide to Building Better User Experiences
          </h1>

          {/* Content */}
          <div className="text-[16px] leading-[28px] text-gray-600 space-y-6">
            <p>
              UX design is the process of creating products that provide
              meaningful and relevant experiences to users.
            </p>

            <p>
              It involves the design of the entire process of acquiring and
              integrating the product, including branding, usability and
              functionality.
            </p>

            <h3 className="text-[22px]  text-gray-900 mt-8">
              What is the UX Design Process?
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Research & Analysis</li>
              <li>Wireframing</li>
              <li>UI Design</li>
              <li>Testing & Iteration</li>
            </ul>
          </div>

       

        
        </div>

        {/* ================= SIDEBAR ================= */}
        <aside className="w-[360px] space-y-8">

       

        
         

          {/* ================= RECENT POST (SCREENSHOT MATCH) ================= */}
          <div className="
  bg-[#f1f6f5]
  rounded-[24px]
  p-8
  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
  ring-1 ring-black/5
">

            <h4 className="text-[26px]  text-gray-900 mb-8">
              Recent Post
            </h4>

            <div className="space-y-10">

              {[1, 2, 3].map((_, index) => (
                <div key={index}>
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                    className="w-full h-[180px] object-cover rounded-[14px]"
                  />

                  <div className="flex items-center gap-2 text-[14px] text-gray-500 mt-4">
                    <span>📅</span>
                    <span>02 June, 2025</span>
                  </div>

                  <h5 className="text-[18px] leading-[26px] text-gray-900 mt-3">
                    Dapibus cras nisi suscipit nibh elite purus condimentum
                  </h5>

                  {index !== 2 && (
                    <div className="h-[1px] bg-gray-300/60 mt-8"></div>
                  )}
                </div>
              ))}

            </div>
          </div>


        

        </aside>
      </div>
    </section>
    </>
  );
};

export default BlogDetail;
