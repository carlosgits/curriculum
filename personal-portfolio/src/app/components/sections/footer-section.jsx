import Image from "next/image";

const Section4 = () => {
  return (
    <footer
      id="contact-section"
      className="relative mx-auto w-[390px] mt-10 md:w-[850px] md:h-[auto] |PC->| lg:h-[450px] lg:w-[1450px]"
    >
      <div className="absolute w-[390px] h-[auto] flex flex-col space-y-5 mx-auto  bg-[#6a65654c] font-Grotesk font-bold  mb-10 |tablet->| md:w-[850px]  md:mb-0 bottom-[-600px] md:top-[-20px] md:h-[auto] |PC->| lg:h-[450px] lg:w-[1450px] lg:top-[0px] lg:bg-[#00000000]">
        {/*Utility image */}
        <Image
          src="/utilitiy-images/bigoval2.svg"
          className=" ml-[-69vw] mt-[245px] w-[200px] h-[164px] scale-[300%] z-0 absolute overflow-hidden md:ml-[-25vw] lg:h-[100px]"
          width={200}
          alt="oval"
          height={200}
        />
        <div className="presentation&form flex flex-col lg:flex-row justify-between lg:w-[1110px] mx-auto lg:h-auto md:space-y-10">
          <div className="contact-container w-[340px] h-[138px] mx-auto mb:10 md:w-[445px] lg:ml-[0px]">
            <div className="text-[24px] md:text-L text-center md:m-0">
              Contact
            </div>
            <div className="text-normal text-center text-portfolio-gray mb-10 md:w-[445px] mx-auto lg:text-start">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </div>
          </div>
          <form className="relative flex flex-col space-y-5 w-[340px] h-[330px] mx-auto mt-[5px]">
            <div className="flex flex-col space-y-5 mx-auto">
              <input
                className="w-[340px] h-[40px]  border-b-2 border-gray-400 bg-[#0000] pl-4 pb-4 focus:outline-none focus:border-portfolio-green"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-[340px] h-[40px] border-b-2 border-gray-400 bg-[#0000] pl-4 pb-4 focus:outline-none focus:border-portfolio-green"
                type="text"
                placeholder="Email"
              />
              <textarea
                className="w-[340px] h-[auto] border-b-2 border-gray-400 bg-[#0000] pl-4 pb-4 focus:outline-none focus:border-portfolio-green "
                type="text-area"
                placeholder="Message"
                rows="4"
              />
            </div>
            <button
              className="text-end  w-[340px] h-[40px] bg-green-400/75 text-white font-bold text-[16px] mx-auto"
              type="submit"
              value="SEND MESSAGE"
            >
              <span className="border-b-2 border-b-portfolio-green hover:text-portfolio-green">
                SEND MESSAGE
              </span>
            </button>
          </form>
        </div>
        <div className="w-[250px] h-[72px]  mx-auto flex flex-col justify-around my-[5px] |tablet->| md:w-[710px] md:h-[40px] md:flex-row md:justify-between md:mx-[auto]">
          <div className="font-Grotesk font-[16px] text-gray-400  mx-auto md:mx-0">
            CARLOS FAMILIA
          </div>
          <div className="flex flex-row justify-around mb-[20px] md:space-x-2">
            <a href="https://instagram.com/carlosj_dev?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr">
            <Image
              src="/social-media-icons/instagram-icon.svg"
              className="hover:w-[30px] hover:h-[30px]"
             
              alt="instagram icon"
              width={24}
              height={24}
            />
            </a>
            <a href="https://github.com/carlosgits">
              <Image
                src="/social-media-icons/github-icon.svg"
                className="over:w-[30px] hover:h-[30px]"
                alt="github-icon"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.linkedin.com/in/carlos-julio-familia-fulcar-b68915190">
              <Image
              className="hover:w-[30px] hover:h-[30px]"
                alt="linkedin-icon"
                src="/social-media-icons/linkedin-icon.svg"
                width={24}
                height={24}
              />
            </a>
            <a href="https://twitter.com/carlosjdev">
              <Image
              className="hover:w-[30px] hover:h-[30px]"
                alt="twitter-icon"
                src="/social-media-icons/twitter-icon.svg"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Section4;
