import React from 'react'
import { PhrAssets } from '../../../../assets/PHR/assets'
import MedicalContacts from './MedicalContacts'
import EmployerInfo from './EmployerInfo'
import EmergencyContactInfo from './EmergencyContactInfo'
import PhrProfile from '../../PhrProfile'

const PersonalDetailsHeader = () => {
  return (
    <>
     
   <p className='px-8 font-semibold landing-5 text-2xl'>Other Details</p>   
      <div className='flex justify-between px-8 py-6'>
      <div className="relative flex  w-1/2">
         <img className='absolute top-3 left-2 px-2'  src={PhrAssets.Search} alt="" />
         <input className='py-2 px-11 sm:w-3/4 w-full rounded-3xl border border-[#E5E7EB] placeholder-[#bfc0c1] bg-[#F9FAFB] outline-none' type="text" placeholder='Search for Reports'/>
        </div> 
      <button className="flex md:py-2.5 p-1.5 sm:py-2 sm:px-6 items-center bg-[#1c9401]  text-white  gap-2 border rounded-full font-medium"><img src={PhrAssets.Upload} alt="" /><span className="text-md font-medium landing-6 hidden sm:block">Update Details</span>
      </button>
      </div>
      <PhrProfile/>
      <EmergencyContactInfo/>
      <MedicalContacts />
      <EmployerInfo/>
      </>
  )
}

export default PersonalDetailsHeader   
