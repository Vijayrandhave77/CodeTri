
import AboutCompany from "@/components/about-us/AboutCompany";
import MissionVission from "@/components/about-us/MissionVission";
import CommonBanner from "@/components/about-us/CommonBanner";
import ServicesSection from "@/components/services/ServicesSection";


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
      
    </div>
  );
}
