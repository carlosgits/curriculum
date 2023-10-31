import Image from "next/image";
import Section1 from "@/app/components/sections/section1";
import Section2 from "@/app/components/sections/section2";
import  Section3  from "@/app/components/sections/section3";
import Section4 from "@/app/components/sections/section4";

const Home = () => {
  return (
    <div className="home flex flex-col w-[350px] h-[800px] space-y-5 mx-auto">
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4/>
    </div>
  );
};

export default Home;
