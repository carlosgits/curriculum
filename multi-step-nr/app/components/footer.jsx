"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter } from "../features/plans/userSlice";
import {
  selectPlanSelected,
  selectAddonSelected,
} from "../features/plans/planSlice";
import { resetPersonalInfo } from "../features/plans/userSlice";
import { resetPlans } from "../features/plans/planSlice";

function Footer() {
  const counterS = useSelector(selectCounter);
  const planS = useSelector(selectPlanSelected);
  const addonS = useSelector(selectAddonSelected);
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const dispatch = useDispatch();
  const userResetS = useSelector(resetPersonalInfo);
  const planResetS = useSelector(resetPlans);

  useEffect(() => {
    // Al montar el componente, navega al primer paso
    router.push("/pages/page1");
  }, [router]);

  const handleNext = () => {
    if ((currentStep === 1) & (counterS === 3)) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      router.push(`/pages/page${newStep}`);
      // Dispara un evento personalizado para el siguiente paso
    }
    if ((currentStep === 2) & (planS !== "none")) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      router.push(`/pages/page${newStep}`);
      // Dispara un evento personalizado para el siguiente paso
    }
    if ((currentStep === 3) & (addonS.length !== 0)) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      router.push(`/pages/page${newStep}`);
      // Dispara un evento personalizado para el siguiente paso
    }
    if (currentStep === 4) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      router.push(`/pages/page${newStep}`);
      // Dispara un evento personalizado para el siguiente paso
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      router.push(`/pages/page${newStep}`);
    }
  };

  const handleReset = () => {
    dispatch(userResetS);
    dispatch(planResetS);
    router.push("/pages/page1");
    setCurrentStep(1);
  };

  return (
    <div className="w-[375px] h-[72px] flex flex-row justify-between absolute bottom-0 bg-white right-[0.2px] || md:w-[500px] md:h-[55px] md:right-[10px] md:bottom-[10px]  md:pb-[10px] md:rounded-[10px] ">
      <button
        className={`button w-[93px] h-[38px] ml-2 mt-2 pt-2 text-center ${
          currentStep === 1
            ? "text-gray-300"
            : currentStep === 5
            ? "text-white"
            : "text-gray-500"
        }`}
        onClick={handleBack}
        disabled={currentStep === 1 || currentStep === 5}
      >
        Go back
      </button>
      <button
        className={`button w-[93px] h-[38px] bg-[#001C4A] mr-2 mt-2 pt-2 text-center rounded-md text-white ${
          currentStep === 4 ? "bg-blue-800 text-white" : ""
        }`}
        onClick={currentStep === 5 ? handleReset : handleNext}
      >
        {currentStep === 4
          ? "Confirm"
          : currentStep === 5
          ? "Start Over"
          : "Next Step"}
      </button>
    </div>
  );
}

export default Footer;
