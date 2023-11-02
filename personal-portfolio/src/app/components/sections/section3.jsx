import Image from "next/image";

const Section3 = () => {
  return (
    <div className="w-[375px] h-[auto] flex flex-col space-y-5 mx-auto font-Grotesk font-bold mb-10  |tablet->| md:w-[700px]">
      <div className="flex flex-row w-[343px] h-[40px] justify-between items-end ">
        <div >
          <span className="my-5 text-[35px] w-[55px]">PROJECTS</span>
            </div>
          
          <span className="underline underline-offset-8 decoration-green-400 mb-0 text-[16px] h-[40px]">
             <a href="#contact-section"  >CONTACT ME</a>
          </span>
     
      </div>
      <div className="project-container grid grid-cols-1 | tablet->| md:grid md:grid-cols-2 md:w-[725px] md:h-[auto] md:gap-5">
        {/* project 1 */}
        <div className="flex flex-col my-5 md:w-[343px]">
          <Image
            src="/project-pics/image-example.png"
            width={343}
            height={253}
            className=""
          />
          <div className="mt-2">
            <span>PROJECT NAME</span>
          </div>

          <div className="code-languages flex flex-row space-x-5">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="view-options flex flex-row space-x-5">
            <span className="underline underline-offset-8 decoration-green-400"><a href="#"  >VIEW PROJECT</a></span>
            <span className="underline underline-offset-8 decoration-green-400"> <a href="#"  >VIEW CODE</a></span>
          </div>
        </div>
        {/* end project 1 */}
   
  {/* project 1 */}
  <div className="flex flex-col my-5 md:w-[343px]">
          <Image
            src="/project-pics/image-example.png"
            width={343}
            height={253}
            className=""
          />
          <div className="mt-2">
            <span>PROJECT NAME</span>
          </div>

          <div className="code-languages flex flex-row space-x-5">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="view-options flex flex-row space-x-5">
            <span className="underline underline-offset-8 decoration-green-400"><a href="#"  >VIEW PROJECT</a></span>
            <span className="underline underline-offset-8 decoration-green-400"> <a href="#"  >VIEW CODE</a></span>
          </div>
        </div>
        {/* end project 1 */}

        {/* project 1 */}
  <div className="flex flex-col my-5 md:w-[343px]">
          <Image
            src="/project-pics/image-example.png"
            width={343}
            height={253}
            className=""
          />
          <div className="mt-2">
            <span>PROJECT NAME</span>
          </div>

          <div className="code-languages flex flex-row space-x-5">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="view-options flex flex-row space-x-5">
            <span className="underline underline-offset-8 decoration-green-400"><a href="#"  >VIEW PROJECT</a></span>
            <span className="underline underline-offset-8 decoration-green-400"> <a href="#"  >VIEW CODE</a></span>
          </div>
        </div>
        {/* end project 1 */}

        {/* project 1 */}
  <div className="flex flex-col my-5 md:w-[343px]">
          <Image
            src="/project-pics/image-example.png"
            width={343}
            height={253}
            className=""
          />
          <div className="mt-2">
            <span>PROJECT NAME</span>
          </div>

          <div className="code-languages flex flex-row space-x-5">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="view-options flex flex-row space-x-5">
            <span className="underline underline-offset-8 decoration-green-400"><a href="#"  >VIEW PROJECT</a></span>
            <span className="underline underline-offset-8 decoration-green-400"> <a href="#"  >VIEW CODE</a></span>
          </div>
        </div>
        {/* end project 1 */}

        {/* project 1 */}
  <div className="flex flex-col my-5 md:w-[343px]">
          <Image
            src="/project-pics/image-example.png"
            width={343}
            height={253}
            className=""
          />
          <div className="mt-2">
            <span>PROJECT NAME</span>
          </div>

          <div className="code-languages flex flex-row space-x-5">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="view-options flex flex-row space-x-5">
            <span className="underline underline-offset-8 decoration-green-400"><a href="#"  >VIEW PROJECT</a></span>
            <span className="underline underline-offset-8 decoration-green-400"> <a href="#"  >VIEW CODE</a></span>
          </div>
        </div>
        {/* end project 1 */}
        
         {/* project 1 */}
  <div className="flex flex-col my-5 md:w-[343px]">
          <Image
            src="/project-pics/image-example.png"
            width={343}
            height={253}
            className=""
          />
          <div className="mt-2">
            <span>PROJECT NAME</span>
          </div>

          <div className="code-languages flex flex-row space-x-5">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="view-options flex flex-row space-x-5">
            <span className="underline underline-offset-8 decoration-green-400"><a href="#"  >VIEW PROJECT</a></span>
            <span className="underline underline-offset-8 decoration-green-400"> <a href="#"  >VIEW CODE</a></span>
          </div>
        </div>
        {/* end project 1 */}

         {/* project 1 */}
  <div className="flex flex-col my-5 md:w-[343px]">
          <Image
            src="/project-pics/image-example.png"
            width={343}
            height={253}
            className=""
          />
          <div className="mt-2">
            <span>PROJECT NAME</span>
          </div>

          <div className="code-languages flex flex-row space-x-5">
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="view-options flex flex-row space-x-5">
            <span className="underline underline-offset-8 decoration-green-400"><a href="#"  >VIEW PROJECT</a></span>
            <span className="underline underline-offset-8 decoration-green-400"> <a href="#"  >VIEW CODE</a></span>
          </div>
        </div>
        {/* end project 1 */}

        
      </div>
    </div>
  );
};

export default Section3;
