import Dental from "./Dental";
import Hearing from "./Hearing";
import Immunization from "./Immunization";
import Optical from "./Optical";
import Prosthesis from "./Prosthesis";
import Vaccination from "./Vaccination";
import FamilyMedicalHistory from "./familyMedicalHistory";
import { PhrAssets } from "../../../../assets/PHR/assets";
import { useState } from "react";

const OtherHistory = () => {

  const [activeTab, setActiveTab] = useState(0)

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Dental/>;
      case 1:
        return <Hearing/>;
      case 2:
        return <Immunization/>;
      case 3:
        return <Optical/>;
      case 4:
        return <Prosthesis/>;
      case 5:
        return <Vaccination />;
        case 6:
          return <FamilyMedicalHistory/>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">

        {/* Main Section */}
        <div className="px-2 md:p-5 xl:px-10 lg:px-4 sm:px-4 w-full">
      
           <div className="flex flex-col lg:flex-row">
  {/* Button Tabs */}
  <div className="w-full sm:w-full lg:w-[30%] flex flex-row lg:flex-col overflow-x-auto lg:overflow-hidden gap-2 px-2 pt-10">
    {[
      "Dental",
      "Hearing",
      "Immunization",
      "Optical",
      "Prosthesis",
      "Vaccination",
      "FamilyMedicalHistory",
    ].map((label, index) => (
      <button
        key={index}
        onClick={() => setActiveTab(index)}
        className={`flex-shrink-0 whitespace-nowrap px-2 lg:px-3 py-3 text-sm lg:text-base text-left font-semibold transition duration-300 ease-in-out ${
          activeTab === index
            ? "bg-[#EBF8FF] text-black hover:bg-[#1C9401] hover:text-white rounded-lg"
            : "text-gray-500 hover:bg-[#F9FAFB] hover:rounded-se-full hover:rounded-ee-full"
        }`}
      >
        {label}
      </button>
    ))}
  </div>



            {/* Content */}
            <div className="overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:w-[85%]  bg-[#F9FAFB] px-4 py-3 mt-6 mb-16 h-auto rounded-lg ">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative">
        <p className="mx-14 border-b-2 border-gray-100 my-5"></p>
        <button
          
          className="bg-[#1C9401] text-white font-medium tracking-wide text-lg py-3 px-8 rounded-full absolute -bottom-20 right-8 mb-0 mr-4"
        >
          Update Details 
        </button>   
      </div>
    </>
  );
}

export default OtherHistory;