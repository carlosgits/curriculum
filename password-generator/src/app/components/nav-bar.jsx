import Image from "next/image";
import Toast from "@/app/components/toast"

const NavBar = ({ name }) => {
  return (
    <nav className="w-[350px] |tablet| md:w-[730px] md:h-[40px] md:mt-8 |pc| lg:w-[1350px] lg:h-[40px] flex flex-row justify-between items-center relative mx-auto ">
      <div className="flex flex-col items-center justify-center w-[125px] h-[125px] relative">
        <div className="rounded-full w-[40px] h-[40px] overflow-hidden flex justify-center items-center mb-2">
          <Image
            src="/profile-pic.png"
            alt="profile-pic"
            width={50}
            height={50}
            objectFit="cover"
          />
        </div>
        <p className="text-center">{`Welcome ${name}`}</p>
      </div>
      <Toast/>
      <div className="menu-container">
        <Image
          src="/utilities/menu-icon.svg"
          alt="Logo"
          width={40}
          height={40}
          objectFit="cover"
        />
      </div>
     
    </nav>
  );
};

export default NavBar;
