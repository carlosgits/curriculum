import Image from "next/image";

const Section1 = () => {
  return (
    <div className="section1 relative mx-auto mb-10 w-[375px] lg:w-[1110px] left-0  ">
      {/*Utility images */}
      <Image
        src="/utilitiy-images/oval.svg"
        className="w-[300px] h-[250px] ml-[-140px] mt-[50px] absolute scale-[150%] |tablet->| md:scale-[100%] md:ml-[-390px] md:scale-y-[200%] md:mt-[50px] |PC->| lg:ml-[-165px]"
        width={300}
        height={250}
      />

      <Image
        src="/utilitiy-images/circle.svg"
        className="w-[100px] h-[100px] ml-[80vw] mt-[35vh] overflow-hidden absolute"
        width={100}
        height={100}
      />
        {/*Utility images */}

      {/* carlos image">*/}
      <div className=" w-[250px] h-[350px] mx-auto mt-[0px] |tablet->| relative md:w-[441px] md-h-[600px] md:left-[200px] ">
        <Image
          src="/profile-pics/carlos-profile.png"
          className="dark:bg-slate-800/50 w-[250px] h-[344px] z-40 absolute |tablet->| md:w-[441px] md:h-[600px] md:z-[0] |PC->| lg:left-[250px]"
          width={200}
          height={150}
        />
      </div>

      {/* presentation container">*/}

      <div className=" flex flex-col  space-y-5  w-[355px] |tablet->| md:relative md:right-[170px]   md:top-[-200px] md:w-[490px] |PC->| lg:left-[215px] lg:top-[-175px] lg:w-[650px] ">
        <div className="font-Grotesk font-bold text-center text-[40px] |tablet->| md:text-[50px] lg:text-[60px]">
          Nice to meet you! I’m{" "}
          <span className="underline underline-offset-8 decoration-green-400">
            Carlos Familia
          </span>
          .
        </div>
        <div className="font-Grotesk font-semibold text-[16px] text-gray-500 p-4 |tablet->| text-start">
          Based in the DR, I’m a full-stack developer passionate about building
          accessible web apps that users love.{" "}
        </div>
        <div className="font-Grotesk text-[16px] font-bold  underline underline-offset-4 decoration-green-400 mx-auto decoration-4 md:text-[]">
          {" "}
          <a href="#contact-section">CONTACT ME</a>
        </div>
      </div>
    

    </div>
  );
};

export default Section1;
