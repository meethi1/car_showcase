"use client";
import Image from "next/image"
import CustomButton from "./CustomButton"
import {motion,AnimatePresence} from 'framer-motion'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
  } from '../config/motion';
  
const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div className="hero" >
        <motion.div className="flex-1 pt-36 padding-x" >
            <h1 className="hero__title" {...headContainerAnimation}>
                Find,book, or rent a car  --quickly and easily!

            </h1>
            <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process.
            </p>
            <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </motion.div>
        <motion.div className="hero__image-container" {...slideAnimation('right')}>
            <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill
         
          
            className="object-contain"/>
        </div>

        <div className="hero__image-overlay" />
        </motion.div>
    </div>
  )
}

export default Hero