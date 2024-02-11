"use client";

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { Switch } from "@nextui-org/react";
import { useState } from "react";
import {
  setPlan,
  planFrequency,
  selectPlanFrequency,
  selectPlanSelected,
  selectAddonSelected,
  setAddon
} from "@/app/features/plans/planSlice";

const Page2 = () => {
  const [planNumber, setPlanNumber] = useState(0);
  const dispatch = useDispatch();
  const isMonthly = useSelector(selectPlanFrequency);
  const usedPlan = useSelector(selectPlanSelected)

  return (
    <div className="w-[343px] h-[475px] bg-white pt-10 px-5  flex flex-col space-y-5 rounded-[10px]">
      <div className="w-[297px] h-[87px] flex flex-col ">
        <h1 className=" text-[24px] font-bold text-denim">Select your plan</h1>
        <p className="text-[gray] text-[16px]">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="planContainer flex flex-col space-y-5">
        {/** PLAN1 */}
        <div
          className={`w-[295px] h-[70px] border-[1px]  rounded-[8px] ${
            usedPlan === "Arcade" ? "border-cpurple border-[2px]" : "border-gray-500"
          }`}
          onClick={() => 
            dispatch(setPlan("Arcade"))
            
          }
        >
          <div className="w-[107px] h-[45px] flex flex-row ml-2 mt-2">
            <Image src="/media/arcade.svg" width={40} height={40} />
            <div className="flex flex-col ml-2">
              <h3 className="text-denim font-semibold">Arcade</h3>
              <p className="text-[gray]">
                {isMonthly === false ? "$9/mo" : "90/yr"}
              </p>
            </div>
          </div>
        </div>
        {/** PLAN2 */}
        <div
          className={`w-[295px] h-[70px] border-[1px] rounded-[8px] ${
            usedPlan === "Advanced" ? "border-[2px] border-cpurple " : "border-gray-500"
          }`}
          onClick={() => {
            setPlanNumber(2);
            dispatch(setPlan("Advanced"));
           
          }}
        >
          <div className="w-[107px] h-[45px] flex flex-row ml-2 mt-2">
            <Image src="/media/advanced.svg" width={40} height={40} />
            <div className="flex flex-col ml-2">
              <h3 className="text-denim font-semibold">Advanced</h3>
              <p className="text-[gray]">
                {isMonthly === false ? "$12/mo" : "120/yr"}
              </p>
            </div>
          </div>
        </div>
        {/** PLAN3 */}
        <div
          className={`w-[295px] h-[70px] border-[1px]  rounded-[8px] ${
            usedPlan === "Pro" ? "border-cpurple border-[2px]" : "border-gray-500"
          }`}
          onClick={() => {
            setPlanNumber(3);
            dispatch(setPlan("Pro"));
         
          }}
        >
          <div className="w-[107px] h-[45px] flex flex-row ml-2 mt-2">
            <Image src="/media/pro.svg" width={40} height={40} />
            <div className="flex flex-col ml-2">
              <h3 className="text-denim font-semibold">Pro</h3>
              <p className="text-[gray]">
                {isMonthly === false ? "$15/mo" : "150/yr"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/** SWITCH */}
      <div className="w-[295px] h-[48px] bg-[#F8F9FF] rounded-[10px]">
        <div className="frequency w-[183px] h-[21px] text-denim flex flex-row justify-between mx-auto font-semibold text-[14px]">
          <p>Monthly</p>
          <Switch
          defaultChecked={isMonthly}
            aria-label="Automatic updates"
            className="ml-2"
            isSelected={isMonthly === true ?  true : false}
            onChange={() =>{
              dispatch(planFrequency())
              dispatch(setPlan(""))
              dispatch(setAddon([]) )
            } }
          />
          <p>Yearly</p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
