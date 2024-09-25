import React from "react";
import OurMethodlogyAboutUs from "./OurMethodlogyAboutUs";

function OurMethodology() {
  return (
    <div className="container mx-auto px-6">
      {/* Our Methodlogy Title */}
      <div className="w-full mb-8 md:mb-10 xl:mb-14">
        <p className="text-xs md:text-sm lg:text-base font-bold uppercase mb-1 text-gray-500">
          Our Methodology
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Our systematic approach blends innovation with tried-and-tested
          strategies to deliver tailored solutions that exceed expectations.
        </h2>
      </div>

      {/* Our Methodlogy About Us */}
      <OurMethodlogyAboutUs />
    </div>
  );
}

export default OurMethodology;