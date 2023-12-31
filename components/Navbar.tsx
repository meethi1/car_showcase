"use client";
import Link from "next/link"
import Image from "next/image"

import CustomButton from "./CustomButton"
import {motion,AnimatePresence} from 'framer-motion'
import { slideAnimation } from '../config/motion';
import { useRef, useState } from "react";
import Loggin from "./Loggin";
import { truncate } from "fs";
const Navbar = () => {
  const [isClicked,setIsClicked]=useState(false);
   const [isLoggin,setIsLoggin]=useState(false);
  
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center 
        sm:px-16 px-6 py-4">
            
        <Link href="/" className="flex justify-center items-center"
         {...slideAnimation('left')}>
            <Image src="/logo.svg"
            alt="car hub "
            width={118}
            height={18}
            className="object-contain"
           
            />
        </Link>
        { !isLoggin&&  <CustomButton
        title="Sign In"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        handleClick={() => setIsClicked(true)}
        />}
     { isLoggin&& <div className="text-primary-black font-bold bg-white min-w-[130px]">
      Hello! Yukta...
      </div>}

        {isClicked&&!isLoggin&&<Loggin
        isClicked
        closeModal={()=>setIsClicked(false)}
         changeLoggin={()=>setIsLoggin(true)}    />}

       </nav>
    </header>
  )
}

export default Navbar