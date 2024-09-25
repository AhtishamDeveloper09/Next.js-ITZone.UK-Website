import AboutUsMain from "@/components/aboutus-comps/AboutUsMain";
import HeroSection from "@/components/aboutus-comps/HeroSection";
import OurTeam from "@/components/aboutus-comps/OurTeam";
import OurMethodology from "@/components/aboutus-comps/OurMethodology";
import OurLeaders from "@/components/aboutus-comps/OurLeaders";
import WhyWorkWithUs from "@/components/aboutus-comps/WhyWorkWithUs";

function AboutUs() {
  return (
    <div>
      {/* About Us Hero Section */}
      <section className="h-[50vh] xl:h-[60vh] w-full bg-black py-10 flex flex-wrap items-center md:items-end md:py-14 md:pb-24">
        <HeroSection />
      </section>

      {/* About Us Text and Image Section */}
      <section className="w-full py-12 md:py-14 lg:py-20">
        <AboutUsMain />
      </section>

      {/* Our Leaders Section */}
      <section className="w-full py-12 md:py-14 lg:py-20 bg-[#f3f8ff]">
        <OurLeaders />
      </section>

      {/* Why Work With Us Section */}
      <section className="w-full py-12 md:py-14 lg:py-20">
        <WhyWorkWithUs />
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-14 lg:py-20 bg-[#f3f8ff]">
        <OurTeam />
      </section>

      {/* Our Methodology Section */}
      <section className="w-full py-12 md:py-14 lg:py-20">
        <OurMethodology />
      </section>
    </div>
  );
}

export default AboutUs;
