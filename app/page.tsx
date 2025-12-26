import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
import Service from "@/components/Service";
import Package from "@/components/Package";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Counter from "@/components/counter";
import Portfolio from "@/components/portfolio";
import Faq from "@/components/faq";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Service/>
      <Package/>
      <About/>
            <Portfolio/>

      <Testimonial/>
      <Technology/>

      <Counter/>
      <Faq/>
      <Blog />
    </div>
  );
}
