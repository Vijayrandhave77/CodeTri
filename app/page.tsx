import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
import Service from "@/components/Service";
import Package from "@/components/Package";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Technology from "@/components/Technology";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Service/>
      <Package/>
      <About/>
      <Testimonial/>
      <Technology/>
      <Blog />
    </div>
  );
}
