import { PhrAssets } from "../../../../../../assets/PHR/assets";
import { useNavigate } from "react-router-dom";
import AllergiesAndDrugs from "./AllergiesAndDrugs";
import CurrentHealthStatus from "./CurrentHealthStatus";
import DistinguishingMarks from "./DistinguishingMarks";
import Ethnicity from "./Ethnicity";
import InfantHistory from "./InfantHistory";
import { useState } from "react";
import SocialHistory from "./SocialHistory";

const OverviewPhrUpdate = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();  
 
  const closePage = () => {
    navigate("/phr");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <AllergiesAndDrugs />;
      case 1:
        return <CurrentHealthStatus />;
      case 2:
        return <DistinguishingMarks />;
      case 3:
        return <Ethnicity />;
      case 4:
        return <InfantHistory />;
      case 5:
        return <SocialHistory />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 sm:px-6 md:px-4 lg:px-12 bg-[#001940] shadow-md w-full">
          <div className="flex items-center space-x-3">
            <img src={PhrAssets.PhrIcon} alt="Logo" className="w-8 h-8" />
            <p className="border border-r-0 h-6 border-white"></p>
            <h2 className="md:text-3xl text-xl font-semibold text-white">
              Edit Personal Health Record
            </h2>
          </div>

          <button
            onClick={closePage}
            className="text-white text-xl font-semibold tracking-wide"
          >
            X <span className="hidden md:inline">Close</span>
          </button>
        </header>

        {/* Main Section */}
        <div className="px-2 md:p-5 xl:px-10 lg:px-4 sm:px-4 w-full">
          {/* Medical & Surgery */}
          <div className="pt-3 sm:pt-0 flex flex-col sm:flex-row sm:justify-between sm:mx-3 sm:items-center gap-3">
            <div className="flex flex-row sm:justify-between items-center gap-2">
              <img
                onClick={closePage}
                className="text-black sm:w-6 cursor-pointer"
                src={PhrAssets.ArrowLeft}
                alt=""
              />
              <p className="border h-5 sm:h-6 sm:border-l-0 border-l-0 border-gray-400"></p>
              <h2 className="md:text-xl text-base lg:text-2xl leading-5 font-semibold">
                Other Details
              </h2>
              <img
                className="lg:mt-1 h-5 w-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6"
                src={PhrAssets.InfoCircle}
                alt=""
              />
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 lg:gap-5">
              <div className="flex items-center">
                <input
                  className="mr-1 lg:mr-2 border-none checked:bg-[#001940]"
                  type="checkbox"
                />
                <label className="text-[#001940] font-medium">
                  Protect with password
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="mr-1 lg:mr-2 border-none checked:bg-[#001940]"
                  type="checkbox"
                />
                <label className="text-[#001940] font-medium">
                  Display under summary page
                </label>
              </div>
            </div>
          </div>
          <p className="mx-2 border-b-2 border-gray-100 mt-4"></p>

           {/* Tabs and Content */}
           <div className="flex flex-col lg:flex-row">
  {/* Button Tabs */}
  <div className="w-full sm:w-full lg:w-[30%] flex flex-row lg:flex-col overflow-x-auto lg:overflow-hidden gap-2 px-2 pt-10">
    {[
      "Allergies and Drugs Sensitivity",
      "Current Health Status",
      "Distinguishing Marks",
      "Ethnicity",
      "Infant History",
      "Social History",
      
               
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
};

export default OverviewPhrUpdate;


