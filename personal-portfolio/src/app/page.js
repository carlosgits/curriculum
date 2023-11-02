
import Section1 from "@/app/components/sections/section1";
import Section2 from "@/app/components/sections/section2";
import  Section3  from "@/app/components/sections/section3";
import Section4 from "@/app/components/sections/section4";
import NavSection from "@/app/components/nav-section";
const Home = () => {
  return (
    <div className="home overflow-hidden flex flex-col w-[100vw] h-[800px] mx-auto relative  || md:w-[815px] md:h-[auto] md:mx-auto lg:w-[1440px] lg:h-[auto] ">
      <NavSection />
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4/>
    </div>
  );
};

export default Home;
