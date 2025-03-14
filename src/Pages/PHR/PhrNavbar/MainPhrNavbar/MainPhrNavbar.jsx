import React, { useState } from "react";

import Summary from "../Summary/Summary";
import MainPersonalDetails from "../PersonalDetails/MainPersonalDetails";
// import Allergies from "../PersonalDetails/OtherDetails/Allergies";
import MedicalAndSurgery from "../MedicalSurgery/MedicalAndSurgery";
import OtherHistory from "../OtherHistory/OtherHistory";
import MainLifeStyle from "../LifeStyle/MainLifeStyle";

const MainPhrNavbar = () => {
  const [activeTab, setActiveTab] = useState("Personal Details");

  const renderContent = () => {
    switch (activeTab) {
      // case "overview":
      //   return <Allergies/>;
      case "Personal Details":
        return <MainPersonalDetails/>;
      case "Life Style":
        return <MainLifeStyle/>;
      case "Medical Surgery":
        return <MedicalAndSurgery />;
        case "Other History":
          return <OtherHistory/>;
      case "Summary": 
        return <Summary/>
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto">        
      {/* Tabs Navigation (At the Top) */}
      <div className="flex mt-2 mx-10">
        {["Personal Details", "Life Style", "Medical Surgery", "Other History", "Summary", "Trending", "reports"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-3 text-lg font-medium capitalize ${
              activeTab === tab
                ? "border-b-4 border-[#EF5728] text-black" 
                : "border-transparent text-gray-500 hover:border-b-4 hover:border-[#EF5728] hover:text-black"}
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "Personal Details" ? "personal Details" :tab === "Life Style" ? "Life Style" : tab === "Medical Surgery" ? "Medical Surgery" :  tab === "Other History" ? "Other History" :  tab === "Summary" ? "Summary" :  tab === "Trending" ? "Trending" : tab === "reports" ? "Reports" :  tab === "Suggestions" ? "Suggestions" : "Summary"}
          </button>
        
        ))}
      </div>

      {/* Content Below Tabs */}
      <p className="border border-b-0 border-gray-200 mx-10"></p>
      <div className="rounded-lg">    
        {renderContent()}
      </div>
    </div>
  );
};

export default MainPhrNavbar;


