

import CommonBanner from "@/components/about-us/CommonBanner";
import ContactUs from "@/components/contact/contactus";


export default function page() {
  return (
    <div>
      <CommonBanner 
        title="Contact Us" 
        imageUrl="/img/aboutbanner.png" 
        lineColor="border-green-500"
        height="h-[400px]"
        subtitle=" We are dedicated to providing the best service with our professional team."
      />
      <ContactUs/>
    </div>
  );
}
