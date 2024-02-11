"use client";
import {
  selectPlanSelected,
  selectPlanFrequency,
  selectPlanPrice,
  selectAddonSelected,
} from "@/app/features/plans/planSlice";
import Link from "next/link";
import { useSelector } from "react-redux";

const Page4 = () => {
  const viewPlan = useSelector(selectPlanSelected);
  const checked = useSelector(selectPlanFrequency);
  const mainPrice = useSelector(selectPlanPrice);
  const addonsSelect = useSelector(selectAddonSelected);

  return (
    <div className="w-[343px] h-[475px] bg-white pt-10 px-5  flex flex-col space-y-5 rounded-[10px] ]">
      <div className="w-[297px] h-[87px] flex flex-col ">
        <h1 className=" text-[24px] font-bold text-denim">Finishing up</h1>
        <p className="text-[gray] text-[16px]">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="planContainer flex flex-col space-y-5 w-[295px] h-[auto] bg-[#D6D9E6] pl-2 md:pb-[10px]">
        <div className="flex flex-row justify-between">
          <p className="text-black m-[5px] w-[200px] ">
            {" "}
            {viewPlan}
            <span className="text-[12px]">
              {" "}
              {checked === true ? "(Yearly)" : "(Monthly)"}{" "}
            </span>{" "}
            <br />{" "}
            <Link
              href="http://localhost:3000/pages/page2"
              className="underline underline-[2px] underline-black text-[14px] "
            >
              Change
            </Link>
          </p>
          <p className="text-cpurple font-bold mt-[5px] padding-[-2px]">{`$${mainPrice} ${ checked  ? "/yr" : "/mo"}`}</p>
          <br />
        </div>
        <hr className="bg-gray-500  w-[280px] h-[2px] mx-auto" />
        <ul className="text-black w-[295px] ">
          {addonsSelect.map((elem, index) => {
            return (
              <li key={index} className="flex flex-row justify-between  px-5">
                <span className="pr-[4px]">{elem.addon}</span>
                <span className="pr-[4px]  text-cpurple">+${elem.price}{checked === true ? "/yr" : "/mo"}</span>
              </li>
            );
          })}
        </ul>
        <div className="w-[290px] flex flex-row justify-between text-black mr-[10px]">
          <p className="text-black">
            Total {checked === true ? "(per year)" : "(per month)"}
          </p>
          <p className="mr-[15px] text-cpurple">
            {addonsSelect.reduce((acc, currentV) => {
              return acc + currentV.price;
            }, mainPrice)}{checked === true ? "/yr" : "/mo"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
