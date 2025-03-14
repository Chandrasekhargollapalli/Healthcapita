import React from 'react'
// import { HraAssets } from '../../assets/Hra/assets'
import { HraAssets } from '../../../../assets/Hra/assets'

const HabitsHraData = ({habits}) => {
  const {
    alcohol='N',
    bowelMovements='N',
    bowelMovementsDuration='0',
    cigaretsPerDay = "0",
    drinkDuration = "0",
    drinksPerSitting = "0",
    sittingsPerWeek = "0",
    smokeDuration = "",
    smokeHistory = "N",
    tobacoChewing = "N",
    tobacoDuration='0'
  } = habits || {};
  return (
    <div className="p-5 rounded-t-xl  bg-[#F9FAFB]">
        <p className="py-3">Habits</p>
        <p className="border border-gray-200 px-4"></p>
      
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
        <div className="bg-[#FFFBED] my-2 rounded-md py-3 px-3">
        <div className="flex gap-12 py-4 px-4 justify-between space-y-10"> 
        <div className="flex  gap-3 items-center justify-center  ">
          <img className="w-10 " src={HraAssets.SmokeIcon} alt="" />
          <p className='font-bold'>Smoking</p>
          </div>
        </div>
        

          <div className='flex flex-col gap-3'>
           <p>History: <span className='font-semibold'>{smokeHistory==='Y'? 'Currently Smoking' : 'No'}</span></p>
           <p>Smoking Since: <span className='font-semibold'>{smokeDuration} Years</span></p>
           <p>On Average: <span className='font-semibold'>More Than {cigaretsPerDay} Cigarettes, P/D</span></p>
          
          </div>
        </div>
        

        <div className="bg-[#FFF5F5] my-2 rounded-md py-3 px-3">
        <div className="flex gap-12 py-4 px-4 justify-between"> 
        <div className="flex  gap-3 items-center justify-center">
          <img className="w-10" src={HraAssets.TobaccoIcon} alt="" />
          <p className='font-bold' >Tobacco Chewing</p>
          </div>
        </div>
        

          <div className='flex flex-col gap-3'>
           <p>History: <span className='font-semibold'>{tobacoChewing==='Y'? 'Yes' : 'No'}</span></p>
           <p>Since: <span className='font-semibold'>{tobacoDuration} Years</span></p>
          </div>
        </div>
        


        <div className="bg-[#F1F0FF] my-2 rounded-md py-3 px-3">
        <div className="flex gap-12 py-4 px-4 justify-between"> 
        <div className="flex  gap-3 items-center justify-center">
          <img className="w-10" src={HraAssets.AlcohoIcon} alt="" />
          <p className='font-bold' >Alcohol</p>
          </div>
        </div>
        

          <div className='flex flex-col gap-3'>
           <p>History: <span className='font-semibold'>{alcohol==='Y'? 'Yes' : 'No'}</span></p>
           <p>Since: <span className='font-semibold'> {drinkDuration} Years</span></p>
           <p>Drinks Per Sitting: <span className='font-semibold'>More Than {drinksPerSitting} Drinks </span></p>
           <p>Alcohol Per Week: <span className='font-semibold'>More Than {sittingsPerWeek} Drinks </span></p>
          
          </div>
        </div>
        


        <div className="bg-[#EFFEFF] my-2 rounded-md py-3 px-3">
        <div className="flex gap-12 py-4 px-4 justify-between"> 
        <div className="flex  gap-3 items-center justify-center">
          <img className="w-10" src={HraAssets.BowelIcon} alt="" />
          <p className='font-bold' >Bowel</p>
          </div>
        </div>
        

          <div className='flex flex-col gap-3'>
           <p>History: <span className='font-semibold'>{bowelMovements==='Y'? 'Regular' : 'Irregular'}</span></p>
           <p>Since: <span className='font-semibold'>{bowelMovementsDuration} Years</span></p>
          </div>
          </div>
          
        </div>
        </div>
  )
}

export default HabitsHraData