import NavSection from "@/app/components/nav-section";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="relative mx-auto">
      <Image
        src="/utilitiy-images/oval.svg"
        className="w-[] h-[] ml-[-140px] mt-[170px] absolute scale-[150%]"
        width={300}
        height={250}
      />

      <NavSection />
      <Image
        src="/utilitiy-images/circle.svg"
        className="w-[100px] h-[100px] ml-[80vw] mt-[35vh] overflow-hidden absolute"
        width={100}
        height={100}
      />

      <div className="z-30 w-[250px] h-[350px] mx-auto">
        <Image
          src="/profile-pics/carlos-profile.png"
          className="dark:bg-slate-800/50 w-[250px] h-[320px] z-40 absolute"
          width={125}
          height={150}
        />
      </div>

      {/* presentation container">*/}

      <div className="flex flex-col space-y-5 text-[40px] w-[355px]">
        <div className="font-Grotesk font-bold text-center">
          Nice to meet you! I’m{" "}
          <span className="underline underline-offset-8 decoration-green-400">
        Carlos Familia
          </span>
          .
        </div>
        <div className="font-Grotesk font-semibold text-[16px] text-gray-500 p-2">
          Based in the DR, I’m a full-stack developer passionate about building
          accessible web apps that users love.{" "}
        </div>
        <div className="font-Grotesk text-[16px] font-bold  underline underline-offset-4 decoration-green-400 mx-auto decoration-4">
          {" "}
          <a href="#">CONTACT ME</a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
