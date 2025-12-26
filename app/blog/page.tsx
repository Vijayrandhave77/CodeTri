

import CommonBanner from "@/components/about-us/CommonBanner";
import Blogcard from "@/components/Blog/Blogcard";


export default function page() {
  return (
    <div>
      <CommonBanner 
        title="Blog's" 
        imageUrl="/img/aboutbanner.png" 
        lineColor="border-green-500"
        height="h-[400px]"
        subtitle=" We are dedicated to providing the best service with our professional team."
      />
      <Blogcard/>
    </div>
  );
}
