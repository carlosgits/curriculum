import Image from "next/image";
import ContactForm from "@/app/components/formComponent";

const Section4 = () => {
  return (
    <footer
      id="contact-section"
      className="relative mx-auto w-[400px] mt-20 md:w-[895px] md:h-[690px] md:left-[-35px]|PC->| lg:h-[450px] lg:w-[1450px]"
    >
      <div className="absolute w-[400px] h-[auto] flex flex-col space-y-5 mx-auto  bg-[#6a65654c] font-Grotesk font-bold  mb-10 |tablet->| md:w-[895px]  md:mb-0 bottom-[-600px] md:top-[0px] md:h-[690px] md:left-[-30px] |PC->| lg:h-[450px] lg:w-[1450px] lg:top-[0px] lg:bg-[#00000000]">
        {/*Utility image */}
        <Image
          src="/utilitiy-images/bigoval2.svg"
          className=" ml-[-69vw] mt-[245px] w-[200px] h-[164px] scale-[300%] z-[-40] absolute overflow-hidden md:ml-[-25vw] lg:h-[100px]"
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
          <ContactForm />
        </div>
        <div className="w-[250px] h-[72px]  mx-auto flex flex-col justify-around my-[5px] |tablet->| md:w-[665px] md:h-[40px] md:flex-row md:justify-between md:mx-[auto]">
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
