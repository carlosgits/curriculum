import Image from "next/image";

const Section2 = () => {
  return (
    <div className="relative w-[375px] h-[auto] flex flex-col mx-auto font-Grotesk border-y-4 border-slate-50 py-8 font-bold mb-10 |tablet->| md:w-[710px] md:h-[auto]">



      {/*YEARS  OF EXPERIENCE SECTION */}
      <div className="flex flex-col h-[auto] w-15 space-y-8 mb-[20px] mt-8 ml-4 relative md:flex-row w-[300px] |tablet->| md:space-y-0 md:justify-between md:w-[700px] md:mb-[20px] lg:w-[700px]">
        {/*    */}
        {/*  Utility image  */}
       

        <div className="flex flex-row">
          <Image
            src="/programming-icons/html-icon.svg"
            className="md:w-[50px] md:h-[50px] top-0"
            width={35}
            height={35}
          />
          <div className="flex flex-col">
            <div className="text-white w-[150px] ml-2 text-start">HTML</div>
            <div className="text-white w-[150px] ml-2 text-start ">
              1 Years Experience
            </div>
          </div>
        </div>

        {/*    */}

        <div className="relative flex flex-row ">
          <Image
            src="/programming-icons/css-icon.svg"
            className="md:w-[50px] md:h-[50px] top-0"
            width={35}
            height={35}
          />
          <div className="flex flex-col  ">
            <div className="text-white w-[150px] ml-2 text-start">CSS</div>
            <div className="text-white w-[150px] ml-2 text-start">
              1 Years Experience
            </div>
          </div>
        </div>

        {/*    */}

        <div className="flex flex-row">
          <Image
            src="/programming-icons/jsicon.svg"
            className="md:w-[50px] md:h-[50px]"
            width={35}
            height={35}
          />
          <div className="flex flex-col  ">
            <div className="text-white w-[150px] ml-2 text-start">
              Javascript
            </div>
            <div className="text-white w-[150px] ml-2 text-start">
              1 Years Experience
            </div>
          </div>
        </div>

        {/*    */}
      </div>
      {/*END YEARS  OF EXPERIENCE SECTION */}

      <div className="text-center text-[24px] md:text-[28px] md:my-[20px]">
        Frameworks and libraries I manage.
      </div>

      {/*    */}
      <div className="grid grid-cols-4 grid-rows-4 gap-4 mt-5 ">
        {/* Fila 1 */}
        <div className="text-center">
          <Image
            src="/programming-icons/react-icon.svg"
            className="mx-auto |tablet->| md:w-[50px] md:h-[50px]"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/redux-icon.svg"
            className="mx-auto |tablet->| md:w-[50px] md:h-[50px]"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/next-icon.svg"
            className="mx-auto |tablet->| md:w-[50px] md:h-[50px]"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/nodejs-icon.svg"
            className="mx-auto |tablet->| md:w-[50px] md:h-[50px]"
            width={35}
            height={35}
          />
        </div>

        {/* Fila 2 */}
        <div className="text-center md:text-[18px]">React</div>
        <div className="text-center md:text-[18px]">Redux</div>
        <div className="text-center md:text-[18px]">Next Js</div>
        <div className="text-center md:text-[18px]">Node Js</div>

        {/* Fila 3 */}
        <div className="text-center">
          <Image
            src="/programming-icons/bootstrap-icon.svg"
            className="mx-auto |tablet->| md:w-[50px] md:h-[50px]"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/prisma-icon.svg"
            className="mx-auto |tablet->| md:w-[50px] md:h-[50px]"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/mongo-icon.svg"
            className="mx-auto |tablet->| md:w-[50px] md:h-[50px]"
            width={20}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/tailwind-icon.svg"
            className="mx-auto relative top-[15px] |tablet->| md:w-[50px] md:h-[50px]"
            width={35}
            height={35}
          />
        </div>

        {/* Fila 4 */}
        <div className="text-center md:text-[18px]">Bootstrap</div>
        <div className="text-center md:text-[18px]">Prisma</div>
        <div className="text-center md:text-[18px]">Mongo db</div>
        <div className="text-center md:text-[18px]">Tailwind</div>
      </div>
    </div>
  );
};

export default Section2;
