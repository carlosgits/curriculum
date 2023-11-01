import Image from "next/image";

const NavSection = () => {
  return (
    <nav className="w-[250px] h-[72px]  mx-auto flex flex-col justify-around absolute left-0 right-0 |tablet->| md:w-[710px] md:h-[40px] md:flex-row md:justify-between md:z-50 md:top-4">
      <div className="font-Grotesk font-[16px] text-gray-400  mx-auto |tablet->| md:mx-0    md:text-white">
        CARLOS FAMILIA
      </div>
      <div className="relative flex flex-row justify-around |tablet->| md:w-[170px] md:h-25px md:right-10">
        <Image
          src="/social-media-icons/github-icon.svg"
          className="  |tablet->| "
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
    </nav>
  );
};

export default NavSection;
