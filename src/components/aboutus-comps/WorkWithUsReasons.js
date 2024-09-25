import Image from "next/image";
import React from "react";

function WorkWithUsReasons({ className, icon, title, description }) {
  return (
    <div
      className={`w-full border-gray-300 border-solid sm:w-1/2 lg:w-1/3 ${className}`}
    >
      {/* Icon */}
      <div className="mb-4">
        <Image src={icon} height={36} width={36} alt="" />
      </div>

      {/* Text */}
      <div>
        <h2 className="text-xl md:text-2xl mb-4 font-medium">{title}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default WorkWithUsReasons;