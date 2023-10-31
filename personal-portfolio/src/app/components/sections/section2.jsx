import Image from "next/image";

const Section2 = () => {
  return (
    <div className="w-[345px] h-[auto] flex flex-col mx-auto font-Grotesk border-y-4 border-slate-50 py-8 font-bold ">
      <div className="flex flex-col h-[auto] w-15 space-y-8 mt-8 ml-4 relative">
        {/*    */}

        <div className="flex flex-row">
          <Image
            src="/programming-icons/html-icon.svg"
            className=""
            width={35}
            height={35}
          />
          <div className="flex flex-col">
            <div className="text-white w-[150px] ml-2 text-start">HTML</div>
            <div className="text-white w-[150px] ml-2 text-start">
              1 Years Experience
            </div>
          </div>
        </div>

        {/*    */}

        <div className="flex flex-row">
          <Image
            src="/programming-icons/css-icon.svg"
            className=""
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
            className=""
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

        <div className="text-center text-[24px]">
          Frameworks and libraries I manage.
        </div>
      </div>
      <Image
          src="/utilitiy-images/bigoval.svg"
          className=" ml-[80vw] mt-[50vh] overflow-hidden absolute"
          width={1500}
          height={500}
        />
      {/*    */}
      <div className="grid grid-cols-4 grid-rows-4 gap-4 mt-5">
        {/* Fila 1 */}
        <div className="text-center">
          <Image
            src="/programming-icons/react-icon.svg"
            className="mx-auto"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/redux-icon.svg"
            className="mx-auto"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/next-icon.svg"
            className="mx-auto"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/nodejs-icon.svg"
            className="mx-auto"
            width={35}
            height={35}
          />
        </div>

        {/* Fila 2 */}
        <div className="text-center">React</div>
        <div className="text-center">Redux</div>
        <div className="text-center">Next Js</div>
        <div className="text-center">Node Js</div>

        {/* Fila 3 */}
        <div className="text-center">
          <Image
            src="/programming-icons/bootstrap-icon.svg"
            className="mx-auto"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/prisma-icon.svg"
            className="mx-auto"
            width={35}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/mongo-icon.svg"
            className="mx-auto"
            width={20}
            height={35}
          />
        </div>
        <div className="text-center">
          <Image
            src="/programming-icons/tailwind-icon.svg"
            className="mx-auto relative top-[15px]"
            width={35}
            height={35}
          />
        </div>

        {/* Fila 4 */}
        <div className="text-center">Bootstrap</div>
        <div className="text-center">Prisma</div>
        <div className="text-center">Mongo db</div>
        <div className="text-center">Tailwind</div>
      </div>
    </div>
  );
};

export default Section2;
