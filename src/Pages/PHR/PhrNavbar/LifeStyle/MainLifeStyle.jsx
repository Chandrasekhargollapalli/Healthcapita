import { useState } from "react";
import LifeStyle from "./TrackingHealth/LifeStyle/LifeStyle";
import PhrBloodPressure from "./TrackingHealth/PhrBloodPressure/PhrBloodPressure";
import PhrBloodSugar from "./TrackingHealth/BloodSugar/PhrBloodSugar";
import PhrCholestrol from "./TrackingHealth/Cholestrol/PhrCholestrol";
import PhrLdl from "./TrackingHealth/LDL/PhrLdl";
import PhrMoodAndStress from "./TrackingHealth/MoodAndStress/PhrMoodAndStress";
import PhrSgot from "./TrackingHealth/SGOT/PhrSgot";
import PhrSgpt from "./TrackingHealth/SGPT/PhrSgpt";
import PhrTriglycerides from "./TrackingHealth/Triglycerides/PhrTriglycerides";
import PhrWeight from "./TrackingHealth/Weight/PhrWeight";
import PhrBloodTestInfo from "./TrackingHealth/BloodTestInfo/PhrBloodTestInfo";
import PhrHdl from "./TrackingHealth/HDL/PhrHdl";

const MainLifeStyle = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showTrackingHealth, setShowTrackingHealth] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <LifeStyle />;
      case 1:
        return <PhrBloodPressure />;
      case 2:
        return <PhrBloodSugar />;
      case 3:
        return <PhrBloodTestInfo />;
      case 4:
        return <PhrCholestrol />;
      case 5:
        return <PhrHdl />;
      case 6:
        return <PhrLdl />;
      case 7:
        return <PhrMoodAndStress />;
      case 8:
        return <PhrSgot />;
      case 9:
        return <PhrSgpt />;
      case 10:
        return <PhrTriglycerides />;
      case 11:
        return <PhrWeight />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-2 md:p-5 xl:px-10 lg:px-4 sm:px-4 w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Button Tabs */}
          <div className="w-full sm:w-full lg:w-[30%] flex flex-row lg:flex-col overflow-x-auto lg:overflow-hidden gap-2 px-2 pt-8">
            <button
              onClick={() => {
                setActiveTab(0);
                setShowTrackingHealth(false);
              }}
              className={`flex-shrink-0 whitespace-nowrap px-2 lg:px-3 py-3 text-sm lg:text-base text-left font-semibold transition duration-300 ease-in-out ${
                activeTab === 0
                  ? "bg-[#EBF8FF] text-[#007183] rounded-lg"
                  : "text-gray-500 hover:bg-[#F9FAFB] hover:rounded-se-full hover:rounded-ee-full"
              }`}
            >
              LifeStyle
            </button>

            <button
              onClick={() => {
                setShowTrackingHealth(!showTrackingHealth);
                setActiveTab(1);
              }}
              className={`flex-shrink-0 whitespace-nowrap px-2 lg:px-3 py-3 text-sm lg:text-base text-left font-semibold transition duration-300 ease-in-out ${
                showTrackingHealth
                  ? "bg-[#EBF8FF] text-black rounded-lg"
                  : "text-gray-500 hover:bg-[#F9FAFB] hover:rounded-se-full hover:rounded-ee-full"
              }`}
            >
              Tracking Health
            </button>

            {showTrackingHealth &&
              [
                "BloodPressure",
                "BloodSugar",
                "BloodTestInfo",
                "Cholestrol",
                "Hdl",
                "Ldl",
                "MoodAndStress",
                "Sgot",
                "Sgpt",
                "Triglycerides",
                "Weight",
              ].map((label, index) => (
                <button
                  key={index + 1}
                  onClick={() => setActiveTab(index + 1)}
                  className={`flex-shrink-0 whitespace-nowrap px-2 lg:px-3 py-3 text-sm lg:text-base text-left font-semibold transition duration-300 ease-in-out ${
                    activeTab === index + 1
                      ? "bg-gray-100 text-[#007183] rounded-lg"
                      : "text-gray-500 hover:bg-[#F9FAFB] hover:rounded-se-full hover:rounded-ee-full"
                  }`}
                >
                  {label}
                </button>
              ))}
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:w-[85%] bg-[#F9FAFB] px-5 py-2 mt-2 mb-16 h-auto rounded-lg">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLifeStyle;
