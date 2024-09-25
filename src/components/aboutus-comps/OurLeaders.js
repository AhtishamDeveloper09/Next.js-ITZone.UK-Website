import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    image: "/images/memberimage.png",
    name: "John Doe",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/johndoe",
    description:
      "An innovative leader with over 20 years of diverse industry experience, our CEO has a proven track record of success. Having honed his expertise at esteemed organizations such as Google, Facebook, and Microsoft, he founded Closeloop, headquartered in California, to revolutionize the IT landscape. ",
  },
  {
    id: 2,
    image: "/images/memberimage.png",
    name: "Jane Doe",
    role: "CTO",
    linkedin: "https://www.linkedin.com/in/janedoe",
    description:
      "An innovative leader with over 20 years of diverse industry experience, our CEO has a proven track record of success. Having honed his expertise at esteemed organizations such as Google, Facebook, and Microsoft, he founded Closeloop, headquartered in California, to revolutionize the IT landscape. ",
  },
  {
    id: 3,
    image: "/images/memberimage.png",
    name: "Bob Smith",
    role: "Designer",
    linkedin: "https://www.linkedin.com/in/bobsmith",
    description:
      "An innovative leader with over 20 years of diverse industry experience, our CEO has a proven track record of success. Having honed his expertise at esteemed organizations such as Google, Facebook, and Microsoft, he founded Closeloop, headquartered in California, to revolutionize the IT landscape. ",
  },
  //   {
  //     id: 4,
  //     image: "/images/memberimage.png",
  //     name: "Alice Johnson",
  //     role: "Developer",
  //     linkedin: "https://www.linkedin.com/in/alicejohnson",
  //     description:
  //       "An innovative leader with over 20 years of diverse industry experience, our CEO has a proven track record of success. Having honed his expertise at esteemed organizations such as Google, Facebook, and Microsoft, he founded Closeloop, headquartered in California, to revolutionize the IT landscape. ",
  //   },
];

function OurLeaders() {
  return (
    <div className="container mx-auto px-8">
      {/* Our Experts Title */}
      <div className="text-center mb-8 md:mb-10 xl:mb-14">
        <span className="font-bold text-xs md:text-sm text-gray-500 inline-block uppercase mb-1 lg:text-base">
          Meet Our Leadership Team
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Meet the Visionaries Driving Closeloop's Success
        </h2>
        <p className="text-gray-500 mt-2 lg:text-xl xl:mt-5">
          Our team embodies diversity, expertise, and a shared commitment to
          excellence.
        </p>
      </div>

      {/* Leader Cards  */}
      <div className="flex flex-wrap justify-center gap-y-6">
        {/* Single Leader Card */}
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col justify-between w-full h-[65vh] px-2 lg:px-3 xl:px-5 md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            {/* Leader Image */}
            <div className="bg-white h-[80%] px-5 md:px-8 pt-5 md:pt-8 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Leader Description */}
            <div className="mt-4 h-[20%] mb-4 xl:mt-6">
              <h3 className="text-xl sm:text-2xl font-semibold">{member.name}</h3>
              <p className="mt-2 xl:text-lg">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurLeaders;
