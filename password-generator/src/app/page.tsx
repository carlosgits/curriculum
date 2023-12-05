import "@/app/styles/blureffect.css"
import NavBar from "@/app/components/nav-bar"
import PasswordGenerator from "@/app/components/password-gen"
import Image from "next/image"

const HomePage= () => {

  return(
    <div className="w-[390px] h-[640px] |tablet| md:w-[748px] md:h-[1024px] |pc|  lg:w-[1366px] lg:h-[768px] font-mono">
      <Image src="/images/white-bg.png" alt="background" className="blured-light" width={20} height={20}/>
     
     <NavBar name="Zack"/>
     <PasswordGenerator/>

    </div>
  )
}

export default HomePage
