import React from "react";
import Image from "next/image";

function AboutUsMain() {
  return (
    <div className="container mx-auto px-8">
      <div className="flex flex-col h-screen justify-between items-center lg:h-[75vh] xl:h-[60vh] lg:flex-row">
        {/* Image Mobile View */}
        <div className="lg:hidden w-full flex-1 relative">
          <Image
            src="/images/aboutus-image.png"
            fill
            alt=""
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col w-full flex-1 text-center text-black lg:h-full lg:justify-center lg:px-6 lg:text-left">
          <p className="text-xs md:text-sm lg:text-base font-bold uppercase mb-1 text-gray-500">
            Who we are
          </p>
          <p className="text-gray-600 mb-3 md:mb-4 lg:mb-6 md:text-lg xl:text-xl">
            TechWize provides comprehensive IT consulting, technology
            implementation, and software development services to organizations
            across the globe.
          </p>
          <p className="text-gray-600 md:text-lg xl:text-xl">
            TechWize is a strategic business unit of Mangalam Information
            Technologies Pvt Ltd (MITPL). The company was established in the
            year 2000 and serves clients in the Healthcare, Legal, and IT
            sectors. The company has a team of 600+ qualified professionals and
            industry experts with offices in the US, UK, and India.
          </p>
        </div>

        {/* Image Big Screen */}
        <div className="hidden w-full lg:block flex-1 relative lg:h-full">
          <Image
            src="/images/aboutus-image.png"
            fill
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsMain;
