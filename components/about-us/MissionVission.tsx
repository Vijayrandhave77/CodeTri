import { Eye, Rocket } from 'lucide-react';

const ACADEMIC_CONTENT = {
  vision: {
    title: "Our Vision",
    description: "To become a trusted technology partner by delivering innovative digital solutions that help businesses grow and succeed in the digital era.",
    icon: <Eye size={48} />,
    accentColor: "border-[#003366]", // Kodetri Dark Blue
    bgColor: "bg-cyan-100",
  },
  mission: {
    title: "Our Mission",
    description: "To empower businesses with cutting-edge technology by building reliable, scalable, and user-centric digital products.",
    icon: <Rocket size={48} />,
    accentColor: "border-cyan-400", // Kodetri Cyan
    bgColor: "bg-blue-100",
  }
};

export default function MissionVision() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center -mx-4">
          
          {/* Mapping the content object */}
          {Object.entries(ACADEMIC_CONTENT).map(([key, item]) => (
            <div key={key} className="w-full md:w-1/2 p-4">
              <div className={`group h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border-t-4 ${item.accentColor} transition-all duration-300 hover:-translate-y-2`}>
                
                <div className="relative mb-6 inline-block">
                  {/* Icon with 3D Rotate Animation */}
                  <div className="relative z-10 text-[#003366] transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]">
                    {item.icon}
                  </div>
                  
                  {/* Decorative Background Shape */}
                  <div className={`absolute -top-2 -left-2 w-12 h-12 ${item.bgColor} rounded-lg -z-0`}></div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#003366] mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.description}
                </p>
                
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}