import Image from "next/image";

const NavSection = () => {
  return (
    <nav className="Nav z-[50] w-[250px] h-[72px]  mx-auto flex flex-col justify-around absolute left-0 right-0 |tablet->| md:w-[710px] md:h-[40px] md:flex-row md:justify-between md:z-50 md:top-4 |PC->| lg:w-[1200px] lg:mx-auto">


      <div className="font-Grotesk font-[16px] text-gray-400  mx-auto |tablet->| md:mx-0    md:text-white">
        CARLOS FAMILIA
      </div>
      <div className="relative flex flex-row justify-around |tablet->| md:w-[170px] md:h-25px md:right-10">
        
      <a href="https://instagram.com/carlosj_dev?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr">
            <Image
              src="/social-media-icons/instagram-icon.svg"
              className="hover:w-[30px] hover:h-[30px] hover:box-content text-portfolio-green "
            
              alt="instagram icon"
              width={24}
              height={24}
            />
            </a>
            <a href="https://github.com/carlosgits">
              <Image
                src="/social-media-icons/github-icon.svg"
                className="hover:w-[30px] hover:h-[30px] caret-portfolio-gray"
                alt="github-icon"
                width={24}
                height={24}
                color="gray"
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
    </nav>
  );
};

export default NavSection;
