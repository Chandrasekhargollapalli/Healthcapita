import React from "react";
import { HraAssets } from "../../../../assets/Hra/assets";



function LifeStyleHraData({ lifeStyle }) {
  const {
    appetite = "",
    blurredVision = "N",
    eyeDistantLeft = "0",
    eyeDistantRight = "0",
    eyeNearLeft = "0",
    eyeNearRight = "0",
    mealsType = "mix",
    sleepIssues = "N",
    sleepingHours = "0",
  } = lifeStyle || {};


  return (
    <>
    <div className="mt-5 p-5 rounded-t-xl  bg-[#F9FAFB]">
        <p className="py-3">Life Style</p>
        <p className="border border-gray-200 px-4"></p>
      
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 ">
        <div className="bg-[#F5FFF2] my-2 rounded-md">
        <div className="flex gap-12 py-2 px-4 justify-between"> 
        <div className="flex flex-col gap-3 items-center justify-center">
          <img className="w-10" src={HraAssets.SleepIcon} alt="" />
          <p>Sleep Habits</p>
          </div>
          
          <img className="min-w-14" src={HraAssets.SleepIconShadow} alt="" />
        </div>
        
        <div className="flex items-start justify-end mt-10">
            <p className="pb-3 font-medium pr-2">{sleepIssues==='Y' ? 'Regular' :'Irregular'} Sleep</p>
            
        </div>
          <div>
          <p className="border border-gray-200 px-4"></p>
        </div>

        <div className="flex items-start justify-end ">
          <p className="pt-3 pb-2 text-gray-500 pr-2 text-sm">{sleepingHours} Hours Per Day</p>
          </div>
          </div>

         
          
          <div className="bg-[#F2FDFF]  my-2 rounded-md">
        <div className="flex gap-12 py-2 px-4 justify-between"> 
        <div className="flex flex-col gap-3 items-center justify-center">
          <img className="w-10" src={HraAssets.MealsIcon} alt="" />
          <p>Meals</p>
          </div>
          
          <img className="min-w-14" src={HraAssets.MealsIconsShadow} alt="" />
        </div>
        
        <div className="flex items-start justify-end mt-10">
            <p className="pb-3 font-medium pr-2">{mealsType}</p>
            
        </div>
          <div>
          <p className="border border-gray-200 px-4"></p>
        </div>

        <div className="flex items-start justify-end">
          <p className="pt-3 pb-2 text-gray-500 pr-2 text-sm">All Types Food</p>
          </div>
          </div>


          <div className="bg-[#FFF9F2] my-2 rounded-md">
        <div className="flex gap-12 py-2 px-4 justify-between"> 
        <div className="flex flex-col gap-3 items-center justify-center">
          <img className="w-10" src={HraAssets.AppetiteIcon} alt="" />
          <p>Appetite</p>
          </div>
          
          <img className="min-w-14" src={HraAssets.AppetiteIconShadow} alt="" />
        </div>
        
        <div className="flex items-start justify-end mt-10">
            <p className="pb-3 font-medium pr-2">{appetite} Appetite</p>
            
        </div>
          <div>
          <p className="border border-gray-200 px-4"></p>
        </div>

        <div className="flex items-start justify-end">
          <p className="pt-3 pb-2 text-gray-500 pr-2 text-sm">Irregular Appetite</p>
          </div>
          </div>


          <div className="bg-[#F2F2FF] my-2 rounded-md">
        <div className="flex gap-12 py-2 px-4 justify-between"> 
        <div className="flex flex-col gap-3 items-center justify-center">
          <img className="w-10" src={HraAssets.EyeIcon} alt="" />
          <p>Vision</p>
          </div>
          
          <img className="min-w-14" src={HraAssets.EyeIconShadow} alt="" />
        </div>
        
        <div className="flex items-start justify-end mt-10">
            <p className="pb-3 font-medium pr-2">{blurredVision==='Y' ? 'Blurred vision' : 'No'}</p>
            
        </div>
          <div>
          <p className="border border-gray-200 px-4"></p>
        </div>

        <div className="flex items-end flex-col justify-end">
          <p className=" pb-2 text-gray-500 pr-2 text-sm">Distant : L-{eyeDistantLeft}, R-{eyeDistantRight}</p>
          <p className=" pb-2 text-gray-500 pr-2 text-sm">Near : L-{eyeNearLeft}, R-{eyeNearRight}</p>
          </div>
          </div>
          
        </div>
        </div></>
  );
}

export default LifeStyleHraData;
