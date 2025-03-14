import { PhrAssets } from "../../../../assets/PHR/assets";

const SocialHistoryDash = () => {
  return (
    <>
      <div className="my-4 bg-[#EAF7FF] rounded-lg py-3 px-4">
        <div className="flex gap-5 items-center">
          <img src={PhrAssets.SocialHistory_icon} alt="Icon" />
          <h2 className="font-medium">Social History</h2>
        </div>
        <p className="border border-gray-200 px-2 my-3"></p>

         
        <div className="py-2 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col">
          <div className="flex gap-3 pb-2">
          <img src={PhrAssets.Exercise_icon} alt="" />
            <p className="font-medium landing-5">Exercise</p>
            </div>
            <div className="flex flex-row gap-3 py-1 ">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>7 days per week</p>
            </div>

            <div className="flex flex-row gap-3 py-1 ">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>1hr per session</p>
            </div>
 
            <div className="flex flex-row gap-3 py-1 ">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Type of excercise:Yoga</p> 
            </div>
            

            
            
          </div>
  
          <div className="flex flex-col">
          <div className="flex gap-3 pb-2">
          <img src={PhrAssets.Sleep_icon} alt="" />
            <p className="font-medium landing-5">Sleep</p>
            </div>
            <div className="flex flex-row gap-3 py-1  px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>8 per night</p>
            </div>

            <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Sometimes during sleeping</p>
            </div>
           
          </div>


          <div className="flex flex-col">
          <div className="flex gap-3 pb-2">
          <img src={PhrAssets.Smoking_icon} alt="" />
            <p className="font-medium landing-5">Smoking</p> 
            </div>
            <div className="flex flex-row gap-3 py-1  px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Never Smoke</p>
            </div>

            <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>No one else in your home smoke</p>
            </div>           
          </div>

          <div className="flex flex-col">
          <div className="flex gap-3 pb-2">
          <img src={PhrAssets.Drinking_icon} alt="" />
            <p className="font-medium landing-5">Drinking</p> 
            </div>
            <div className="flex flex-row gap-3 py-1 items-baseline  px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>8-13 Alcoholic beverages do you drink per week</p>
            </div>  
          </div>
            
        </div>


        <div className="flex gap-3 py-4">
          <div className="flex flex-col">
        <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Current living with Family</p>
          </div> 
          
          <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Collage Degree Highest education level</p>
          </div> 
          
          <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Very LittleStress affected your health</p>
          </div> 
          
          <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Mostly satisfied are you with your life</p>
            </div> 
          </div>
          
          <div className="flex flex-col">
        <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Have you been exposed to any toxic or hazardous substances ?</p>
          </div> 
          
          <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Do you have any dietary restrictions ? Please describe. (ex: low salt, vegetarian, no sugar, etc.)</p>
          </div> 
          
          <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Do you have any religious, spiritual, philosphical or personal convictins that may affect how you should be treated medically ? Please describe.</p>
          </div> 
          
          <div className="flex flex-row gap-3 py-1 px-2">
                <img src={PhrAssets.Blackbar_icon} alt="" />
                <p>Are you now or have you previously been in an abusive relationship (verbally, emotionally, physically, or sexually) ?</p>
            </div> 
          </div>
       </div>    
        </div>
     
    </>
  );
};

export default SocialHistoryDash;
