import Image from "next/image";
import TextComponent from "../textComponent";
import SplineDesign from "../spline";

const Section1 = () => {
  return (
    <div className="section1 relative mx-auto mb-10 w-[375px] lg:w-[1110px] left-0  ">
      {/*Utility images */}
      <Image
        src="/utilitiy-images/oval.svg"
        alt="oval"
        className="w-[300px] h-[250px] ml-[-140px] mt-[50px] absolute scale-[150%] |tablet->| md:scale-[100%] md:ml-[-390px] md:scale-y-[200%] md:mt-[50px] |PC->| lg:ml-[-34px]"
        width={300}
        height={250}
      />

      <Image
        src="/utilitiy-images/circle.svg"
        alt="circle"
        className="w-[100px] h-[100px] ml-[80vw] mt-[272px] overflow-hidden absolute lg:mt-[42vw] lg:ml-[57vw]"
        width={100}
        height={100}
      />
        {/*Utility images */}



      {/* carlos image">*/}
      <div className=" w-[250px] h-[350px] mx-auto mt-[0px] |tablet->| relative md:w-[441px] md-h-[600px] md:left-[200px] ">
        <Image
          src="/profile-pics/carlos-profile.png"
          className="bg-[#6a65654c] w-[250px] h-[344px] |tablet->| md:w-[441px] md:h-[600px] md:z-[0] |PC->| lg:left-[250px] relative"
          alt="carlos-profile"
          width={200}
          height={150}
        />
      </div>

      {/* presentation container">*/}

      <div className=" flex flex-col  space-y-5  w-[355px] |tablet->| md:relative md:right-[170px]   md:top-[-200px] md:w-[490px] |PC->| lg:left-[215px] lg:top-[-175px] lg:w-[650px] ">
       
        <div className="text-L font-Grotesk font-bold text-center |tablet->| md:text-L  |PC->|lg:text-XL   ">
          <TextComponent text="Nice to meet you I'm "/>{" "}
          <span className="underline underline-offset-8  decoration-portfolio-green ">
            <TextComponent text="Carlos Familia" />
          </span>
          
        </div>
        
        <div className="w-[400px]       font-Grotesk-medium font-medium text-normal text-portfolio-gray p-5 |tablet->| text-start md:w-[514px]  |PC->| lg:w-[560px]  ">
          Based in the DR, I’m a full-stack developer passionate about building
          accessible web apps that users love.{" "}
        </div>
        <div className="font-Grotesk text-[16px] font-bold  underline underline-offset-4 decoration-portfolio-green mx-auto decoration-4 md:text-[] hover:text-portfolio-green">
          {" "}
          <a href="#contact-section">CONTACT ME</a>

          
        </div>

<SplineDesign />

    

      </div>
    

    </div>
  );
};

export default Section1;
