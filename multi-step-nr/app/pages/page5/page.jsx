"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const  page5 = () => {

 


    return (
        <div className="w-[343px] h-[475px] bg-white pt-10 px-5  flex flex-col space-y-5 rounded-[10px] text-black">
           <Image
      src="/media/Check.svg"
      width={56}
      height={56}
      alt="Picture of the author"
      className='mx-auto'
    />
    <h1 className='font-bold text-center text-[24px]'>Thank you</h1>
    <p className='text-center text-[gray]'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    );
}

export default page5;