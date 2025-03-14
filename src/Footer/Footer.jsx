
import React from "react";
import { HomeAssets } from "../assets/Home/HomeAssets";

function Footer() {

  return (
    <>
    <div className=" w-full gap-1 py-4 px-14 bg-[#E7ECF1] mt-28 mb-5">
    <div className="flex items-center justify-center gap-8">
          <img src={HomeAssets.FacebookIcon} alt="Fb_icon" />
          <img src={HomeAssets.TwitterIcon} alt="Twitter_icon" />
           <img src={HomeAssets.LinkdinIcon} alt="LinkedIn_icon" />
        </div>
    </div> 
    <div className="text-center">
    <p className='mb-5 text-sm font-medium'>Copyright © 2017- 2023 Capita Technologies WLL, All rights reserved</p>
      </div>
      </>
   )
}

export default Footer;


 