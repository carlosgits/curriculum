import Image from "next/image";

const Section4 = () => {
  return (
    <footer id="contact-section" className="w-[375px] h-[auto] flex flex-col space-y-5 mx-auto  bg-gray-700/50 font-Grotesk font-bold relative mb-10 |tablet->| md:w-[800px]  md:mb-0">
      {/*Utility image */}
      <Image
        src="/utilitiy-images/bigoval2.svg"
        className=" ml-[-69vw] mt-[245px] w-[200px] h-[177px] scale-[300%] z-0 absolute overflow-hidden"
        width={200}
        height={200}
      />

      <div className="contact-container w-[340px] h-[138px] mx-auto">
        <div className="text-[40px] text-center">Contact</div>
        <div className="text-[16px] text-center">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </div>
      </div>
      <form className="flex flex-col space-y-5 w-[340px] h-[330px] mx-auto">
        <div className="flex flex-col space-y-5 mx-auto">
          <input
            className="w-[340px] h-[40px]  border-b-2 border-gray-400 bg-transparent pl-4 pb-4 focus:outline-none focus:border-green-400"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-[340px] h-[40px] border-b-2 border-gray-400 bg-transparent pl-4 pb-4 focus:outline-none focus:border-green-400"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="w-[340px] h-[auto] border-b-2 border-gray-400 bg-transparent pl-4 pb-4 focus:outline-none focus:border-green-400 "
            type="text-area"
            placeholder="Message"
            rows="4"
          />
        </div>
        <input
          className="w-[340px] h-[40px] bg-green-400/75 text-white font-bold text-[16px] mx-auto"
          type="submit"
          value="SEND MESSAGE"
        />
      </form>

      <div className="w-[250px] h-[72px]  mx-auto flex flex-col justify-around my-[5px] |tablet->| md:w-[710px] md:h-[40px] md:flex-row md:justify-between md:mx-[auto]">

        <div className="font-Grotesk font-[16px] text-gray-400  mx-auto md:mx-0">
          CARLOS FAMILIA
        </div>
        <div className="flex flex-row justify-around mb-[20px] md:space-x-2">
          <Image
            src="/social-media-icons/github-icon.svg"
            width={24}
            height={24}
          />
          <Image
            src="/social-media-icons/linkedin-icon.svg"
            width={24}
            height={24}
          />
          <Image
            src="/social-media-icons/twitter-icon.svg"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
};

export default Section4;
