import { CarProps } from '@/types';
import React,{Fragment} from 'react'
import Image from 'next/image';
import {Dialog,Transition} from '@headlessui/react'
interface CarDetailsProps{
    isOpen:boolean;
    closeModal:()=>void;
    car:CarProps;
}
const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
  return (
    <>
    {/* <Transition appear show={isOpen} as */}
    </>
  )
}

export default CarDetails