import { useEffect, useRef, useState } from "react";
import Tab from "../../../CommonComponents/HraTab";
import BloodPressure from "./BloodPressure";
import BloodSugar from "./BloodSugar";
import BloodCholestrol from "./BloodCholestrol";
import FamilyHistory from "./FamilyHistory";
import { HraAssets } from "../../../assets/Hra/assets";
import BodyStructure from "./BodyStructure";

const PersonalandFamily = ({ onNextStep, scrollToTop }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // const [maxStepUnlocked, setMaxStepUnlocked] = useState(0);
  const [progressSaved, setProgressSaved] = useState(false)
  
  const showProgressSaved = (isSuccess) => {
    setProgressSaved(true);
    
    // Hide message after 3 seconds (or 2 seconds if true is passed)
    setTimeout(() => {
      setProgressSaved(false);
    }, isSuccess ? 2000 : 3000);
  };


  const tabs = [
    {
      icon: HraAssets.bodystrctureicon,
      label: "Body Structure",
      styles: {
        borderColor: "#004EBA",
        textColor: "#004EBA",
        bgColor: "#EBF8FF",
      },
    },
    {
      icon: HraAssets.bloodprssureicon,
      label: "Blood Pressure",
      styles: {
        borderColor: "#6938EF",
        textColor: "#6938EF",
        bgColor: "#EDEBFE",
      },
    },
    {
      icon: HraAssets.bloodsugaricon,
      label: "Blood Sugar",
      styles: {
        borderColor: "#F0BB00",
        textColor: "#F0BB00",
        bgColor: "#FFF9E4",
      },
    },
    {
      icon: HraAssets.bloodcholesterolicon,
      label: "Blood Cholesterol",
      styles: {
        borderColor: "#DD54FF",
        textColor: "#DD54FF",
        bgColor: "#FDF3FF",
      },
    },
    {
      icon: HraAssets.familyhistoryicon,
      label: "Family History",
      styles: {
        borderColor: "#FF832B",
        textColor: "#FF832B",
        bgColor: "#FFF2E8",
      },
    },
  ];

  const handleNextStep = () => {
    if (activeTabIndex < tabs.length - 1) {
      setActiveTabIndex(activeTabIndex + 1);
      // setMaxStepUnlocked(Math.max(maxStepUnlocked, activeTabIndex + 1));
    }
  };

  const renderActiveTabContent = () => {
    scrollToTop();
    switch (activeTabIndex) {
       case 0:
        return <BodyStructure showProgressSaved={showProgressSaved} onNext={handleNextStep} />
        ;
      case 1:
        return <BloodPressure showProgressSaved={showProgressSaved}  onNext={handleNextStep} />;
      case 2:
        return <BloodSugar showProgressSaved={showProgressSaved} onNext={handleNextStep} />;
      case 3:
        return <BloodCholestrol showProgressSaved={showProgressSaved} onNext={handleNextStep} />;
      case 4:
        return <FamilyHistory onNextStep={onNextStep} />;
      default:
        return null;
    }
  };


  return (
    <div className="px-4 md:px-10 lg:px-16 ">
      <div className="flex justify-between items-center py-4 bg-white border-b">
        <h1 className="flex items-center font-semibold text-[20px]">
          Personal & Family
          <span className="text-blue-400  ml-1">
            <img src={HraAssets.info} alt="" />
          </span>
        </h1>
        <p className={`flex items-center ${progressSaved ? 'block' : 'hidden'}`}>
        <span className="text-green-400 font-bold ml-1">
            <img src={HraAssets.right} alt="" />
          </span>
           Progress Saved
         
        </p>
      </div>

      <div className="flex gap-4 mt-[24px] justify-center">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            icon={tab.icon}
            label={tab.label}
            isActive={activeTabIndex === index}
            // onClick={() => index <= maxStepUnlocked && setActiveTabIndex(index)}
            onClick={() => index <= setActiveTabIndex(index)}
            // isDisabled={index > maxStepUnlocked}
            styles={tab.styles}
          />
        ))}
      </div>

      <div className="mt-6">{renderActiveTabContent()}</div>

      <div className="mt-36">
        <hr />
      </div>
    </div>
  );
};

export default PersonalandFamily;
