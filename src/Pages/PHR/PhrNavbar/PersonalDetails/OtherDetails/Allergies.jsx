import React from 'react'
import Update from '../../../../../CommonComponents/Update/Update'
import TextTitle from '../../../../../CommonComponents/TextTitle/TextTitle'
import { PhrAssets } from '../../../../../assets/PHR/assets'
import Separator from '../../../../../CommonComponents/Separator'


import { useNavigate } from 'react-router-dom'
import SocialHistoryDash from '../SocialHistoryDash'



const Allergies = ({showUpdateButton = true}) => {
  
  const navigate = useNavigate();
 
  const openPhrUpdatePage = () => {
   
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/OverviewPhrUpdate");  
  };

  return (
    <>
      <div className='py-3 px-8 bg-[#F9FAFB] my-5 rounded-md'>
        <div className='flex justify-between'>
          <TextTitle text={"Other Details"} />
         {showUpdateButton && <Update onClick={openPhrUpdatePage} />}  
        </div>
        <p className="border border-gray-200 px-2 my-3"></p>

        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3'>
          <div className='py-2 bg-[#FFF5F5] rounded-md'>
            <div className='flex gap-4 items-center px-4'>
              <img className='p-2 rounded-full bg-[#FFF1F1]' src={PhrAssets.Allergies_icon} alt="allergy" />
              <p className='font-semibold text-md landing-5'>Allergies and Drugs Sensitivity</p>
            </div>
            <p className="border border-gray-200 my-3"></p>

            <div className='flex flex-col gap-4 px-4 min-h-60'>
              <p className='font-semibold text-md landing-5'>Life Threatening</p>
              <div className='flex gap-3'>
                <img src={PhrAssets.RedBar_icon} alt="" />
                <p className='text-[#111928]'>Avocados</p>
              </div>

              <div className='flex gap-3'>
                <img src={PhrAssets.RedBar_icon} alt="" />
                <p className='text-[#111928]'>Season Seeds</p>
              </div>

              <div className='flex gap-3'>
                <img src={PhrAssets.RedBar_icon} alt="" />
                <p className='text-[#111928]'>Tree Nuts</p>
              </div>
            </div>
          </div>

          <div className='py-2 bg-[#F5FFF2] rounded-md'>
            <div className='flex gap-4 items-center px-4 py-2'>
              <img className='p-2 rounded-full ' src={PhrAssets.HealthStatus_icon} alt="allergy" />
              <p className='font-semibold text-lg landing-5'>Current Health Status</p>
            </div>
            <p className="border border-gray-200"></p>

            <div className='flex flex-col gap-4 px-4 pt-4 min-h-64'>
              <p className='font-semibold text-base landing-5 text-[#111928]'>Currently suffering from:</p>
              <div className='flex gap-3'>
                <img src={PhrAssets.GreenBar_icon} alt="" />
                <p className='text-[#111928]'>Fever</p>
              </div>

              <p className='font-semibold text-base landing-5 text-[#111928]'>Currently taking any treatment</p>

              <div className='flex gap-3'>
                <img src={PhrAssets.GreenBar_icon} alt="" />
                <p className='text-[#111928]'>Yes</p>
              </div>
            </div>
          </div>

  <div className='py-2 bg-[#F1F0FF] rounded-md max-h-80'>

  <div className='flex gap-4 items-center px-4'>
    <img className='p-2 rounded-full' src={PhrAssets.DistinguishMark_icon} alt="allergy" />
    <p className='font-semibold text-md leading-5'>Distinguishing Marks</p>
  </div>
  <p className="border border-gray-200 mb-4"></p>

  <div className='flex flex-col gap-4 px-4 overflow-y-auto max-h-52 scrollbar-hide'>
    <p className='font-semibold text-md leading-5'>Birth Mark</p>
    <div className='flex gap-3'>
      <img src={PhrAssets.BlueBar_icon} alt="bar" />
      <p className='text-[#111928]'>Left arm</p>
    </div>

    <p className='font-semibold text-md leading-5'>Tattoo</p>
    <div className='flex gap-3'>
      <img src={PhrAssets.BlueBar_icon} alt="bar" />
      <p className='text-[#111928]'>Yes</p>
    </div>

    <p className='font-semibold text-md leading-5'>Hair Color</p> 
    <div className='flex gap-3'>
      <img src={PhrAssets.BlueBar_icon} alt="bar" />
      <p className='text-[#111928]'>Brown</p>
    </div>

    <p className='font-semibold text-md leading-5'>Eye Color</p> 
    <div className='flex gap-3'>
      <img src={PhrAssets.BlueBar_icon} alt="bar" />
      <p className='text-[#111928]'>Blue</p>
    </div>  
  </div>
</div>


          <div className='py-2 bg-[#EFFEFF] rounded-md'>
            <div className='flex gap-4 items-center px-4 py-2'>
              <img className='p-2 rounded-full' src={PhrAssets.Infant_icon} alt="allergy" />
              <p className='font-semibold text-lg landing-5'>Infant History</p>
            </div>
            <p className="border border-gray-200 my-1"></p>

            <div className='pt-2 flex flex-col gap-4 px-4 min-h-64'>
              <div className='flex gap-3'>
                <img src={PhrAssets.SkyBlueBar_icon} alt="" />
                <p className='text-[#111928]'>Child Underweight at Birth</p>
              </div>

              <div className='flex gap-3 items-baseline'>
                <img src={PhrAssets.SkyBlueBar_icon} alt="" />
                <p className='text-[#111928]'>Child suffered from Jaundice after birth</p>
              </div>

              <p className='pt-4 font-semibold text-md landing-5'>Detected congenital Internal / External Defect</p>

              <div className='flex gap-3'>
                <img src={PhrAssets.SkyBlueBar_icon} alt="" />
                <p className='text-[#111928]'>No</p> 
              </div>
            </div>
          </div>
        </div> 
        
  <SocialHistoryDash/>

      </div>
      <Separator />

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6'>
        
      </div>

     
    </>
  );
}

export default Allergies;
