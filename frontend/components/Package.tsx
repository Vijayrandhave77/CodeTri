import React from "react";

export default function Package() {
  return (
    <section className="pb-10 ">
      <div className="max-w-7xl mx-auto px-4">
      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-[#0A1A4F]">Starter</h3>
            <p className="text-gray-500 mb-4 text-sm">Great for individuals starting out.</p>

            <div className="text-4xl font-bold mb-6 text-[#0F4C81]">
              $12<span className="text-lg text-gray-500">/mo</span>
            </div>

            <button className="w-full bg-[#0A1A4F] hover:bg-[#0F4C81] text-white py-3 rounded-lg font-semibold">
              Get started
            </button>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Basic features</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Basic integrations</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> 10GB data storage</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Limited analytics</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> 2 workspaces</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Chat support</li>
            </ul>
          </div>

          {/* Business */}
          <div className="bg-[#E0F7FA] rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-[#0A1A4F]">Business</h3>
            <p className="text-gray-600 mb-4 text-sm">Perfect for professionals growing fast.</p>

            <div className="text-4xl font-bold mb-6 text-[#0F4C81]">
              $48<span className="text-lg text-gray-600">/mo</span>
            </div>

            <button className="w-full bg-[#26C6DA] hover:bg-[#0F4C81] text-white py-3 rounded-lg font-semibold">
              Get started
            </button>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2"><span className="text-[#0A1A4F]">✔</span> Business features</li>
              <li className="flex items-center gap-2"><span className="text-[#0A1A4F]">✔</span> Business integrations</li>
              <li className="flex items-center gap-2"><span className="text-[#0A1A4F]">✔</span> 15GB data storage</li>
              <li className="flex items-center gap-2"><span className="text-[#0A1A4F]">✔</span> Enhanced analytics</li>
              <li className="flex items-center gap-2"><span className="text-[#0A1A4F]">✔</span> 5 workspaces</li>
              <li className="flex items-center gap-2"><span className="text-[#0A1A4F]">✔</span> Priority support</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-[#0A1A4F]">Enterprise</h3>
            <p className="text-gray-500 mb-4 text-sm">For companies needing advanced features.</p>

            <div className="text-4xl font-bold mb-6 text-[#0F4C81]">
              $96<span className="text-lg text-gray-500">/mo</span>
            </div>

            <button className="w-full bg-[#0A1A4F] hover:bg-[#0F4C81] text-white py-3 rounded-lg font-semibold">
              Get started
            </button>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Advanced features</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Enterprise integrations</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> 50GB data storage</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Unlimited analytics</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Unlimited workspaces</li>
            </ul>
          </div>

          {/* Ultimate */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-[#0A1A4F]">Ultimate</h3>
            <p className="text-gray-500 mb-4 text-sm">Best for large teams needing full control.</p>

            <div className="text-4xl font-bold mb-6 text-[#0F4C81]">
              $149<span className="text-lg text-gray-500">/mo</span>
            </div>

            <button className="w-full bg-[#0A1A4F] hover:bg-[#0F4C81] text-white py-3 rounded-lg font-semibold">
              Get started
            </button>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> All Enterprise features</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Unlimited storage</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Custom integrations</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> Dedicated manager</li>
              <li className="flex items-center gap-2"><span className="text-[#26C6DA]">✔</span> 24/7 Support</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
