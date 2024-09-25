"use client";

import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Our Mission",
    headingContent:
      "At Closeloop, our mission is to innovate and evolve, crafting digital solutions that withstand the test of time.",
    paragraphContent:
      "We're dedicated to fostering honest client relationships, providing tailored strategies and cutting-edge technology solutions across diverse domains. From mobile development to AI integration and beyond, we collaborate with businesses worldwide, ensuring their success in an ever-changing landscape. With our group of developers and innovative thinkers, we turn ideas into digital solutions that exceed expectations and make a mark in the industry. Come aboard as we shape the tech landscape, making strides, one breakthrough at a time.",
  },
  {
    id: 2,
    title: "Our Vision",
    headingContent:
      "At Closeloop, we dream of a future where innovation knows no bounds.",
    paragraphContent:
      "Our vision is to take the lead in shaping a digital landscape that's both revolutionary and inclusive. With a passion for excellence and commitment to creativity, we aim to develop digital solutions that empower businesses and individuals alike.",
  },
  {
    id: 3,
    title: "Our Values",
    headingContent: "Grounded in Integrity, Driven by Excellence",
    paragraphContent:
      "At Closeloop, our commitment transcends mere technology; it's rooted in the values that shape every decision we make. Innovation is our lifeblood, driving us to explore new ideas and craft solutions that break boundaries. Customer Satisfaction is our cornerstone, not just a goal but a way of life, where we strive not only to meet but exceed your expectations. Reliability is our promise, ensuring we deliver on our commitments and meet deadlines without fail, empowering your operations with seamless solutions.",
  },
];

export default function OurMethodlogyAboutUs() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="flex items-center gap-x-5 sm:gap-x-8 border-b-[1px] border-gray-300 border-solid">
        {/* Buttons */}
        {data.map((item, index) => (
          <button
            key={item.id}
            className={`pb-2 pr-4 sm:pr-9 md:text-xl ${
              selected === index ? "text-[#134A67]" : "text-[#666666]"
            } ${
              selected === index &&
              "border-b-2 border-b-teal-500 border-transparent border-solid"
            } transition duration-300`}
            onClick={() => setSelected(index)}
          >
            {item.title}
            {/* {selected === index && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-500"></span>
            )} */}
          </button>
        ))}
      </div>

      {/* Text */}
      <div className="mt-8 xl:mt-10">
        <h2 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-[#134A67] mb-5">
          {data[selected].headingContent}
        </h2>
        <p className="text-gray-700 lg:text-lg xl:text-xl ">
          {data[selected].paragraphContent}
        </p>
      </div>
    </>
  );
}
