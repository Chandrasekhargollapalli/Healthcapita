import React from "react";
import { PhrAssets } from "../../assets/PHR/assets";
function Update({onClick}) {
  return (

    <div>
      {
        
          <button onClick={onClick} className="flex justify-center items-center gap-2 outline-none border-none">
          <img src={PhrAssets.Edit_icon} alt="update-icon" />
          <p className="text-sm font-medium landing-5 text-[#007183] hidden sm:block">Update</p>
        </button>
        
      }
        
    </div>
    
  )
}

export default Update;