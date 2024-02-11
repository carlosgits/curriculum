"use client"
import Link from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPhone } from '@/app/features/plans/userSlice'; 
import { selectName,selectEmail,selectPhone,validEmail,validName,validPhone } from "@/app/features/plans/userSlice";


const Page1 = () => {

  const nameS = useSelector(selectName);
const emailS = useSelector(selectEmail);
const phoneS = useSelector(selectPhone);

const emailBool = useSelector(validEmail);
const nameBool = useSelector(validName);
const phoneBool = useSelector(validPhone);


  const dispatch = useDispatch();
  

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePhoneChange = (e) => {
    dispatch(setPhone(e.target.value));
  };

  return (
    <div className="w-[343px] h-[376px] bg-white pt-10 px-5 flex flex-col space-y-5 rounded-[25px]">
      {/* ...other code remains the same... */}

      <form action="" className="text-denim">
        {/* Name input */}
        <div className="form-group flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={nameS}
            onChange={handleNameChange}
            placeholder="e.g. Stephen King"
            className={`w-[295px] h-[40px] border-[1.5px] px-2 ${nameBool || nameS === '' ? 'border-green-500' :   'border-red-500'}`}
          />
{nameS !== '' && !nameBool && <p className="text-red-500 text-xs">Invalid name format.</p>}
        </div>

        {/* Email input */}
        <div className="form-group flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={emailS}
            onChange={handleEmailChange}
            placeholder="e.g. stephenking@lorem.com"
            className={`w-[295px] h-[40px] border-[1.5px] px-2 ${emailBool || emailS === '' ? 'border-green-500' : 'border-red-500'}`}
          />
{emailS !== '' && !emailBool && <p className="text-red-500 text-xs">Invalid email format.</p>}
        </div>

        {/* Phone input */}
        <div className="form-group flex flex-col">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phoneS}
            onChange={handlePhoneChange}
            placeholder="e.g. +1 234 567 890"
            className={`w-[295px] h-[40px] border-[1.5px] px-2 ${phoneBool || phoneS === '' ? 'border-green-500' : 'border-red-500'}`}
          />
{phoneS !== '' && !phoneBool ? <p className="text-red-500 text-xs">Invalid phone format.</p> : ""}
        </div>
      </form>
    </div>
  );
};

export default Page1;

