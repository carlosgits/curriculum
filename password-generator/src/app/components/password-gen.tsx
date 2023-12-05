"use client";
import Image from "next/image";
import "@/app/styles/password-gen.css";
import { useState } from "react";
import { useEffect } from "react";
import copyToClipboard from "./clipboard";
import Toast from "./toast";

const PasswordGenerator = () => {


  const [result, setResult] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSliderValue(value);
  };
  useEffect(() => {
    setSliderValue(5);
  }, []);
  const handleAction = () => {
    setShowToast(true); // Mostrar el Toast
  };


  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  const handleLowercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeLowercase(e.target.checked);
  };

  const handleUppercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeUppercase(e.target.checked);
  };

  const handleNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeNumbers(e.target.checked);

  };

  const handleSymbolsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeSymbols(e.target.checked);
  };


  function getRandomLowercaseLetter(): string {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUppercaseLetter(): string {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber(): string {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol(): string {
    const symbols: string = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  // Type for character generation functions
  type GeneratorFunction = () => string;

  // Function to create a password
  function createPassword(
    length: number,
    includeLowercase: boolean,
    includeUppercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean
  ): string {
    let availableFunctions: GeneratorFunction[] = [];
    let password: string = "";

    // Add functions to the array based on the selected options
    if (includeLowercase) availableFunctions.push(getRandomLowercaseLetter);
    if (includeUppercase) availableFunctions.push(getRandomUppercaseLetter);
    if (includeNumbers) availableFunctions.push(getRandomNumber);
    if (includeSymbols) availableFunctions.push(getRandomSymbol);

    // Check if at least one option is selected
    if (availableFunctions.length === 0) return "";

    // Generate the password
    for (let i = 0; i < length; i++) {
      const randomFunction: GeneratorFunction = availableFunctions[Math.floor(Math.random() * availableFunctions.length)];
      password += randomFunction();
      setResult(password)
    }
    setResult(password);
   


    return password


  }
  let password: string = "";
   //verify password has amount of arguments to create
  const isButtonActive:boolean = sliderValue >= 4 && (includeLowercase || includeUppercase || includeNumbers || includeSymbols);

  // strength checker 

  function getPasswordStrength(password: string): string {
    const length: number = password.length;
    const hasUpperCase: boolean = /[A-Z]/.test(password);
    const hasLowerCase: boolean = /[a-z]/.test(password);
    const hasNumbers: boolean = /\d/.test(password);
    const hasSymbols: boolean = /[\s~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]/.test(password);

    const typesCount: number = [hasUpperCase, hasLowerCase, hasNumbers, hasSymbols].filter(Boolean).length;

    if (length >= 9 && typesCount >= 3) {
      return "Hard";
    } else if (length >= 6 && typesCount >= 2) {
      return "Medium";
    } else {
      return "Easy";
    }
  }

  const passwordStrength: string = getPasswordStrength(result);


  return (

    <div className="generator-container w-[323px] h-[423px] flex flex-col justify-between relative left-[auto]  mx-[auto] mt-10">
<Toast value={showToast} closeToast={() => setShowToast(false)} />

      <div className="generator-header w-[323px] h-[104px] bg-[#24232B]">
        <div className="title-container">
          <p className="title text-center p-2">Password Generator</p>
        </div>

        <div className="generated-pwsd flex flex-row justify-between align-middle w-[320px] h-[47px] flex-nowrap items-center px-2 m-2 mx-auto">
          <div className="pwsd-container">
            <p className="pwsd text-center  h-[20px] text-middle">{result}</p>
          </div>

          <div className="copy-container w-[40px] h-[20px] " onClick={() => {
  copyToClipboard(result);
  setShowToast(false); 
  handleAction(); // Esto establece showToast en true inmediatamente
}}>

            <Image
              src="/utilities/icon-copy.svg"
              alt="copy-icon"
              width={20}
              height={20}
              className="ease-in-out duration-150 active:scale-125 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="generator-body w-[323px] h-[301px] bg-[#24232B]">
        <div className="pwsd-length w-[297px] h-[23px] m-2 mx-auto flex flex-row justify-between">
          <div className="pwsd-length-text w-[150px]">
            <p className="text-white ">Password Length</p>
          </div>

          <div className="pwsd-number w-[40px] text-[#C4F2C9]">
            <p>{sliderValue}</p>
          </div>
        </div>

        <div className="pwd-range  w-[297px] h-[40px] mx-auto">
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            id="myRange"
            className=" pwd-slide appearance-none "
            onChange={handleSliderChange}
          />
        </div>

        <div className="options-container w-[323px] flex flex-col px-4">
          <label className="option">
            <input
              type="checkbox"
              name="uppercase"
              checked={includeUppercase}
              onChange={handleUppercaseChange}
              className="mr-2"
            />
            <span>Include Uppercase Letters</span>
          </label>

          <label className="option">
            <input
              type="checkbox"
              name="lowercase"
              checked={includeLowercase}
              onChange={handleLowercaseChange}
              className="mr-2"
            />
            <span>Include Lowercase Letters</span>
          </label>

          <label className="option ">
            <input
              type="checkbox"
              name="numbers"
              checked={includeNumbers}
              onChange={handleNumbersChange}
              className="mr-2"
            />
            <span>Include Numbers</span>
          </label>

          <label className="option ">
            <input
              type="checkbox"
              name="symbols"
              checked={includeSymbols}
              onChange={handleSymbolsChange}
              className="mr-2"
            />
            <span>Include Symbols</span>
          </label>
        </div>

        <div className="strength-container w-[283px] h-[45px] mx-auto mt-4 bg-[#18171F] flex flex-row ">
          <div className="w-[210px] h-[31px] my-auto ml-2 flex flex-row justify-between items-center">
            <span className="text-[#84828F]">STRENGTH</span>
            <span className="text-[#FDFDFD]">{passwordStrength}</span>
          </div>

          <div className="bars-container w-[49px] h-[31px] flex flex-row  mx-auto space-x-[1.5px] items-end ">
          <div className={`w-[8px] h-[18px] bar ${passwordStrength === "Easy" || passwordStrength ==="Hard" || passwordStrength === "Medium" ? "visible" : "opaque"}`}></div>
          <div className={`w-[8px] h-[18px] bar ${passwordStrength === "Medium" || passwordStrength === "Hard" ? "visible" : "opaque"}`}></div>
            <div className={`w-[8px] h-[18px] bar ${passwordStrength === "Medium" || passwordStrength === "Hard" ? "visible" : "opaque"}`}></div>
            <div className={`w-[8px] h-[18px] bar ${passwordStrength === "Hard" ? "visible" : "opaque"}`}></div>
        
           
          </div>
        </div>

        <div className={`generate-btn w-[283px] h-[37px] ${isButtonActive ? "bg-[#A4FFAF] active:bg-[#73dc80]" : "inactive-button"} mx-auto mt-4 flex flex-row items-center justify-center`} onClick={() => {
         if (isButtonActive) {
          password += createPassword(sliderValue, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
        }
        }}>
          <span className="text-[#24232B] text-center">GENERATE</span><Image src="/utilities/arrow.svg" alt="generate-icon" width={20} height={20} className="mx-2" />
        </div>
      </div>
      
    </div>
  );
};
export default PasswordGenerator;
///