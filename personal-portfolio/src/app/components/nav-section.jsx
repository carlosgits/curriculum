import Image from "next/image"

const NavSection = () => {  return(
    <nav className="w-[250px] h-[72px] bg-gray-700/50 mx-auto flex flex-col justify-around">
<div className="font-Grotesk font-[16px] text-gray-400  mx-auto ">CARLOS FAMILIA</div>
<div className="flex flex-row justify-around">
     <Image src="/social-media-icons/github-icon.svg" width={24} height={24} />
    <Image src="/social-media-icons/linkedin-icon.svg" width={24} height={24} />
    <Image src="/social-media-icons/twitter-icon.svg" width={24} height={24} />
</div>
    </nav>
)       }

export default NavSection