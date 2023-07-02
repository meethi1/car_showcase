import React, { useState } from 'react'
import Modal from 'react-modal'
interface LogginDetail{
   isClicked:boolean
   changeLoggin:()=>void;
   closeModal:()=>void;

}
const Loggin = ({isClicked,closeModal,changeLoggin}:LogginDetail) => {
    {console.log("bubyubuybuyby")}
   
    const sign=()=>{
        isClicked=false;
        changeLoggin();
        
        closeModal();
       return 
    }
  return (
    <Modal isOpen={true} >
    <div className="flex  flex-col justify-center flex-row px-6  lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      {/* <Image className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h1>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" 
                    name="email" 
                    type="email" 
                    placeholder='Enter the email Id'
                    required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div className="mt-2">
            <input id="password"
             name="password"
              type="password"
              placeholder='  Enter The Password'
               autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={sign}  >Sign in</button>
        </div>
      </form>
  
      <p className="mt-10 text-center text-sm text-gray-500">
        Don't Have account?
        <a href="#" className="font-semibold leading-6 mb-0 text-indigo-600 hover:text-indigo-500"> Sign Up</a> 
      </p>
    </div>
  </div>
  </Modal>
  )
}

export default Loggin