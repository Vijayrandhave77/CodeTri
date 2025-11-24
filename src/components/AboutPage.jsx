import { Helmet } from "react-helmet";
import {
  Globe,
  Smartphone,
  Server,
  Lightbulb,
  ShieldCheck,
  Users,
  Handshake,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-[#EAF3FA] to-white text-gray-800 min-h-screen">
      {/* ---------------- META TAGS FOR SEO ---------------- */}
      <Helmet>
        <title>
          About Us | CodeTri Technologies - Software & IT Development Company
        </title>
        <meta
          name="description"
          content="CodeTri Technologies is a modern IT company providing full-stack development, mobile applications, UI/UX, backend architecture, and automation solutions. Learn our journey and core values."
        />
        <meta
          name="keywords"
          content="CodeTri Technologies, IT company India, software development, mobile apps, web development, backend development, full stack agency"
        />
      </Helmet>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full py-24 md:py-32 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#093A66] leading-snug">
          About <span className="text-[#0A4B78]">CodeTri Technologies</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#093A66]/80 max-w-2xl mx-auto">
          Three Minds. One Vision. Creating Digital Solutions That Scale.
        </p>
      </section>

      {/* ---------------- OUR STORY ---------------- */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Every great idea starts with a single thought —
              <span className="font-semibold"> “Can this be done better?”</span>
              CodeTri Technologies emerged from the same spark.
              <br />
              <br />
              After working in the industry, we realized that true innovation
              happens when you build something of your own — something driven by
              passion instead of limitations. That’s where CodeTri was born.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Creativity thrives when the vision is yours</li>
              <li>✔ Big ideas need direction, ownership, and leadership</li>
              <li>✔ A passionate team builds extraordinary products</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Built by three friends with one mission, the name
              <span className="font-semibold"> CodeTri = Code + Tri</span>
              represents unity, innovation, and purpose.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              alt="CodeTri Technologies team collaboration"
              className="rounded-2xl shadow-xl border"
            />
          </div>
        </div>
      </section>

      {/* ---------------- WHO WE ARE ---------------- */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-700">
            CodeTri Technologies is an innovative IT company that builds
            scalable digital products. We specialize in full-stack development,
            mobile apps, UI/UX design, backend engineering, and automation —
            helping businesses transform through modern technology.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Web Development",
                desc: "High-performance, scalable, and responsive web applications.",
                icon: Globe,
              },
              {
                title: "Mobile Applications",
                desc: "Seamless, fast, and modern mobile experiences.",
                icon: Smartphone,
              },
              {
                title: "Backend Architecture",
                desc: "Secure, optimized, and scalable backend systems.",
                icon: Server,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white bg-opacity-70 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Icon className="w-10 h-10 text-[#0A4B78] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CORE VALUES ---------------- */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: "Innovation",
                desc: "We constantly explore new ideas and emerging technologies.",
                icon: Lightbulb,
              },
              {
                title: "Quality",
                desc: "Every project is delivered with precision and excellence.",
                icon: ShieldCheck,
              },
              {
                title: "Transparency",
                desc: "We believe in honest and open communication.",
                icon: Users,
              },
              {
                title: "Long-Term Partnership",
                desc: "We build strong, lasting relationships.",
                icon: Handshake,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white bg-opacity-70 p-6 rounded-xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Icon className="w-10 h-10 text-[#0A4B78] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
