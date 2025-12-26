import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
import Service from "@/components/Service";
import Package from "@/components/Package";
import Testimonial from "@/components/Testimonial";
import AboutCompany from "@/components/about-us/AboutCompany";
import MissionVission from "@/components/about-us/MissionVission";
import CommonBanner from "@/components/about-us/CommonBanner";
import ServicesSection from "@/components/services/ServicesSection";
import GetInTouch from "@/components/about-us/GetInTouch";


export default function page() {
  return (
    <div>
      <CommonBanner 
        title="About Us" 
        imageUrl="/img/aboutbanner.png" 
        lineColor="border-green-500"
        height="h-[400px]"
        subtitle=" We are dedicated to providing the best service with our professional team."
      />
        <AboutCompany />
        <MissionVission />
         <ServicesSection />
         <GetInTouch/>
    </div>
  );
}
