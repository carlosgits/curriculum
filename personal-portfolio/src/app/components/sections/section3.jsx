import Image from "next/image";
import Project from "../Projects";

const Section3 = () => {
  return (
    <div className="w-[375px] h-[auto] flex flex-col space-y-5 mx-auto font-Grotesk font-bold mb-10 p-5 |tablet->| md:w-[730px] lg:w-[1400px]">

      <div className="flex flex-row w-[343px] h-[40px] justify-between items-end lg:ml-[100px]">
        <div  className="">
          <span className="my-5 text-[35px] w-[55px]">PROJECTS</span>
            </div>
          
          <span className="underline underline-offset-8 decoration-portfolio-green mb-0 text-[16px] h-[40px] hover:text-portfolio-green">
             <a href="#contact-section"  >CONTACT ME</a>
          </span>
     
      </div>
      <div className="project-container grid grid-cols-1 | tablet->| md:grid md:grid-cols-2 md:w-[725px] md:h-[auto] md:gap-5 |PC->| lg:w-[1200px] lg:grid-cols-3 lg:mx-auto">

      <Project
  imageSrc="/project-images/password-generator.png"
  projectName="Password Generator"
  projectLink="https://password-generator-flame-eight.vercel.app/"
  codeLink="https://github.com/carlosgits/curriculum/tree/5e4583e2a269326889116d3d8877063173065799/password-generator"
  lang1="Next Js"
  lang2="Tailwind"
  lang3="Typescript"


/>
   
      <Project
  imageSrc="/project-images/criptopage-img.png"
  projectName="Kripto Landing Page"
  projectLink="https://github.com/carlosgits/curriculum/tree/main/Landing-pages/cryptopage#:~:text=Landing-,%2D,-pages/cryptopage"
  codeLink="https://github.com/carlosgits/curriculum/tree/main/Landing-pages/cryptopage#:~:text=Landing-,%2D,-pages/cryptopage"
  lang1="React"
  lang2="Redux"
  lang3="Axios"
  lang4="Bootstrap"

/>
   
<Project
  imageSrc="/project-images/searchapp.png"
  projectName="Search App"
  projectLink="https://github.com/carlosgits/curriculum/tree/main/useOfAPIs/searchapp"
  codeLink="https://github.com/carlosgits/curriculum/tree/main/useOfAPIs/searchapp"
  lang1="React"
  lang2="Redux"
  lang3="Bootstrap"
/>

<Project
  imageSrc="/project-images/honorpage.png"
  projectName="Tribute Page"
  projectLink="https://github.com/carlosgits/curriculum/tree/main/tribute-pages/vicente-garcia-tribute-page"
  codeLink="https://github.com/carlosgits/curriculum/tree/main/tribute-pages/vicente-garcia-tribute-page"
  lang1="Html"
  lang2="Css"
/>

<Project
  imageSrc="/project-images/registrationform.png"
  projectName="Registration Form"
  projectLink="https://github.com/carlosgits/curriculum/tree/main/Forms/registration-forms"
  codeLink="https://github.com/carlosgits/curriculum/tree/main/Forms/registration-forms"
  lang1="Html"
  lang2="Css"
/>




      </div>
    </div>
  );
};

export default Section3;
