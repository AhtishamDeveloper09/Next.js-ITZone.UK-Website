import React from "react";
import WorkWithUsReasons from "./WorkWithUsReasons";

const data = {
  revenue: {
    icon: "/aboutus-icons/revenue-icon.webp",
    title: "Revenue",
    description:
      "Fully functional and tailored solutions help you generate more revenue.",
  },
  team: {
    icon: "/aboutus-icons/team-icon.webp",
    title: "Team",
    description:
      "Our experts are continuously growing and expanding their expertise.",
  },
  satisfaction: {
    icon: "/aboutus-icons/satisfaction-icon.webp",
    title: "Satisfaction",
    description:
      "95% of our clients come back to work with us again on new projects.",
  },
  experience: {
    icon: "/aboutus-icons/experience-icon.webp",
    title: "Experience",
    description:
      "Over a decade of proven track record of successful completed projects.",
  },
  dataDriven: {
    icon: "/aboutus-icons/datadriven-icon.webp",
    title: "Data-driven",
    description:
      "Every development decision is based on facts and analysis to guarantee benefits.",
  },
  support: {
    icon: "/aboutus-icons/support-icon.webp",
    title: "Support",
    description:
      "We support and maintain your project after the initial launch to keep it afloat.",
  },
};

function WhyWorkWithUs() {
  return (
    <div className="container mx-auto px-8">
      {/* Why Work With Us Title */}
      <div className="w-full mb-8 md:mb-10 xl:mb-14">
        <p className="text-xs md:text-sm lg:text-base font-bold uppercase mb-1 text-gray-500">
          Why Work With Us
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Our systematic approach blends innovation with tried-and-tested
          strategies to deliver tailored solutions that exceed expectations.
        </h2>
      </div>

      {/* Reason Cards */}
      <div className="flex flex-wrap">
        {/* Single Reason Card */}
        <WorkWithUsReasons
          className="pb-8 border-b-[1px] sm:border-r-[1px] sm:pr-10"
          icon={data.revenue.icon}
          title={data.revenue.title}
          description={data.revenue.description}
        />
        <WorkWithUsReasons
          className="py-8 border-b-[1px] sm:pt-0 sm:pl-10 lg:pr-10 lg:border-r-[1px]"
          icon={data.team.icon}
          title={data.team.title}
          description={data.team.description}
        />
        <WorkWithUsReasons
          className="py-8 border-b-[1px] sm:border-r-[1px] sm:pr-10 lg:pt-0 lg:border-r-0 lg:pl-10 lg:pr-0"
          icon={data.satisfaction.icon}
          title={data.satisfaction.title}
          description={data.satisfaction.description}
        />
        <WorkWithUsReasons
          className="py-8 border-b-[1px] sm:pl-10 lg:pb-0 lg:pl-0 lg:pr-10 lg:border-b-0 lg:border-r-[1px]"
          icon={data.experience.icon}
          title={data.experience.title}
          description={data.experience.description}
        />
        <WorkWithUsReasons
          className="py-8 border-b-[1px] sm:pb-0 sm:border-b-0 sm:border-r-[1px] sm:pr-10 lg:pl-10"
          icon={data.dataDriven.icon}
          title={data.dataDriven.title}
          description={data.dataDriven.description}
        />
        <WorkWithUsReasons
          className="pt-8 sm:border-b-0 sm:pl-10"
          icon={data.support.icon}
          title={data.support.title}
          description={data.support.description}
        />
      </div>
    </div>
  );
}

export default WhyWorkWithUs;
