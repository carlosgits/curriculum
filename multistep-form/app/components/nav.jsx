"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Nav() {
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
    }
  }, []);
  return (
    <div
      className=" w-[175px] h-[33px] absolute top-[29px] flex flex-row items-center justify-middle ml-[25%]
    || md:h-[228px] md:w-[200px] md:ml-[-20px]
    "
    >
      <div
        className="pageNumbCont w-[180px] h-[33px] relative flex flex-row  
      ||  md:h-[228px] md:w-[200px] md:flex-col md:space-y-[15px] md:top-[43px]  md:left-[30%]
      md:align-start
      "
      >
        <div className="flex flex-row w-[175px] ">
          <div
            className={`w-[33px] h-[33px] border-[1px] border-sky-blue rounded-full flex items-center justify-center text-center text-base ${
              pathname === "/pages/page1"
                ? "bg-sky-blue text-[black]"
                : "text-[white]"
            }`}
          >
            1
          </div>
          <div className="flex flex-col ml-2">
            <span className="hidden md:inline md:text-white">STEP 1 </span>
            <span className="hidden md:inline md:text-white">YOUR INFO</span>
          </div>
        </div>

        <div className="flex flex-row md:w-[225px] ">
        <div
          className={`w-[33px] h-[33px]  border-[1px] border-sky-blue rounded-full flex items-center justify-center text-center text-base ${
            pathname === "/pages/page2"
              ? "bg-sky-blue text-[black]"
              : "text-[white]"
          } md:w-[33px] md:h-[33px] md:rounded-full`}
        >
          2
        </div>
        <div className="flex flex-col ml-2 md:w-[200px] overflow-hidden md:text-white">
            <span className="hidden md:inline">STEP 2 </span>
            <span className="hidden md:inline">SELECT YOUR PLAN</span>
          </div>
        </div>

        <div className="flex flex-row md:w-[175px]">
        <div
          className={`w-[33px] h-[33px] border-[1px] border-sky-blue rounded-full flex items-center justify-center text-center text-base ${
            pathname === "/pages/page3"
              ? "bg-sky-blue text-[black]"
              : "text-[white]"
          }`}
        >
          3
        </div>
        <div className="flex flex-col ml-2 md:text-white">
            <span className="hidden md:inline">STEP 3 </span>
            <span className="hidden md:inline">ADD-ONS</span>
          </div>
        
        </div>
        <div className="flex flex-row w-[175px]">

        <div
          className={`w-[33px] h-[33px] border-[1px] border-sky-blue rounded-full flex items-center justify-center text-center text-base ${
            pathname === "/pages/page4" || pathname === "/pages/page5"
              ? "bg-sky-blue text-[black]"
              : "text-[white]"
          }`}
        >
          4
        </div>
        <div className="flex flex-col ml-2 md:text-white">
            <span className="hidden md:inline">STEP 4 </span>
            <span className="hidden md:inline">SUMMARY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
