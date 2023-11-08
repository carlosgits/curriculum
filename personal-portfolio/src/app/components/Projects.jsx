import React from "react";
import Image from "next/image";

const Project = ({ imageSrc, projectName, projectLink, codeLink,lang1,lang2,lang3,lang4 }) => {
  return (
    <div className="flex flex-col my-5 md:w-[343px] bottom-0 align-middle justify-end">
      <Image src={imageSrc} alt="project-pic"  width={343} height={253} className="" />
     
      <div className="mt-2">
        <span>{projectName}</span>
      </div>

      <div className="code-languages flex flex-row space-x-5">
        <span>{lang1}</span>
        <span>{lang2}</span>
        <span>{lang3}</span>
        <span>{lang4}</span>
      </div>
      <div className="view-options flex flex-row space-x-5">
        <span className="underline underline-offset-8 decoration-portfolio-green">
          <a href={projectLink}>VIEW PROJECT</a>
        </span>
        <span className="underline underline-offset-8 decoration-portfolio-green">
          <a href={codeLink}>VIEW CODE</a>
        </span>
      </div>
    </div>
  );
};


export default Project;
