import React from "react";
import { PhrAssets } from "../../assets/PHR/assets";
function User() {
  return (
    <>
      <div className="flex flex-row justify-between text-center self-stretch gap-1 py-4 px-12">
        <div className="flex items-baseline">
          <h6 className="font-Reddit Sans text-2xl font-semibold landing-8">Personal Health Record</h6>
          <p className="text-[#6B7280] text-xs font-normal landing-4">Last Updated: 23/4/90</p>
        </div>

        {/* <div className="flex items-center justify-center gap-2">
            <button className="flex gap-2 md:py-2.5 p-1.5 sm:py-2 sm:px-6 border border-[#001940] rounded-full hover:text-blue-500 hover:border-blue-500 active:text-black active:border-black active:bg-green-300"><img className="hover:text-blue-500" src={PhrAssets.Share_icon} alt="share_icon"/><span className="hidden sm:block">Share</span></button> */}
          
          
          {/* <button className="flex md:py-2.5 p-1.5 sm:py-2 sm:px-6 items-center bg-[#37c717]  text-white  gap-2 border rounded-full font-medium
            "><img src={PhrAssets.Download_icon} alt="" /><span className="text-md font-medium landing-6 hidden sm:block">Download Report</span></button>  */}
            
          
       

        {/* </div> */}
       </div>
    </>
  )
}

export default User;