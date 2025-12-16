import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
import Service from "@/components/Service";
import Package from "@/components/Package";
import Testimonial from "@/components/Testimonial";
import AboutCompany from "@/components/about-us/AboutCompany";
import MissionVission from "@/components/about-us/MissionVission";


export default function page() {
  return (
    <div>
      <HeroSection />
        <AboutCompany />
        <MissionVission />
    </div>
  );
}
