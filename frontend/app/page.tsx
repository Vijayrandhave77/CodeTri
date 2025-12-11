import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
import Service from "@/components/Service";
import Package from "@/components/Package";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Service/>
      <Package/>
      <Blog />
    </div>
  );
}
