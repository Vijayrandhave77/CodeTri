"use client";
import Lottie from "lottie-react";
import heroAnimation from "../../public/img/business-salesman.json";

function AnimateImage() {
  return (
    <div className="flex justify-center md:justify-end">
      <Lottie
        animationData={heroAnimation}
        loop={true}
        className="w-[350px] md:w-[450px]"
      />
    </div>
  );
}

export default AnimateImage;
