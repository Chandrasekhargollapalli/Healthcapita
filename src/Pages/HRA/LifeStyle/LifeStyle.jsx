import { useState } from "react";
import { HraAssets } from "../../../assets/Hra/assets";
import { LifeStyleObj } from "../../../utils/HraApis";
import LifeStyleTab from "./LifeStyleTab";
import Button from "../../../CommonComponents/Button";
import HabitTabs from "./HabitsTab";
import FoodHabits from "./FoodHabits";
import ExericiseTab from "./Exericise";
import StressTab from "./StressTab";
import EmploymentTab from "./EmployementTab";


const LifeStyle = ({ onNextStep, backStep ,scrollToTop }) => {
  const [activeTab, setActiveTab] = useState(0);
  // const [maxStepUnlocked, setMaxStepUnlocked] = useState(0);
  const [progressSaved, setProgressSaved] = useState(false)

  const showProgressSaved = (isSuccess) => {
    setProgressSaved(true);
    
    // Hide message after 3 seconds (or 2 seconds if true is passed)
    setTimeout(() => {
      setProgressSaved(false);
    }, isSuccess ? 1000 : 3000);
  };
  const handleNextStep = () => {
    if (activeTab < LifeStyleObj.length - 1) {
      setActiveTab(activeTab + 1);
      // setMaxStepUnlocked(Math.max(maxStepUnlocked, activeTab + 1));
      // setMaxStepUnlocked(Math.max(maxStepUnlocked, activeTab + 1));
    }
  };

  const renderTabContent = () => {
    scrollToTop()
    switch (activeTab) {
      case 0:
        return <LifeStyleTab showProgressSaved={showProgressSaved} onNext={handleNextStep} />;
      case 1:
        return <HabitTabs showProgressSaved={showProgressSaved} onNext={handleNextStep} />;
      case 2:
        return <FoodHabits showProgressSaved={showProgressSaved} onNext={handleNextStep} />;
      case 3:
        return <ExericiseTab showProgressSaved={showProgressSaved} onNext={handleNextStep} />;
      case 4:
        return <StressTab showProgressSaved={showProgressSaved} onNext={handleNextStep} />;
      case 5:
        return <EmploymentTab showProgressSaved={showProgressSaved} onNextStep={onNextStep} />;
      default:
        return null;
    }
  };
 

  return (
    <div className="px-4 md:px-10 lg:px-16">
      <div className="flex justify-between items-center py-4 bg-white border-b ">
        <h1 className="flex items-center font-semibold text-[20px]">
          <img
            onClick={() => {
              backStep(1);
            }}
            src={HraAssets.leftarrow}
            alt=""
            className="m-2"
          />
          Life Style
          <span className="text-blue-400 ml-1">
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

      <div className="mt-6 bg-gray-50 flex justify-start items-center rounded-md overflow-x-auto flex-nowrap mb-8">
        {LifeStyleObj.map((item, index) => (
          <div
            key={index}
            className={`flex  flex-col items-center text-center cursor-pointer p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 ${
              activeTab === index ? "bg-white" : ""
            }`}
            // onClick={() => index <= maxStepUnlocked && setActiveTab(index)}
             onClick={() => index <=  setActiveTab(index)}
            style={{
              borderBottom:
                activeTab === index
                  ? `4px solid ${item.secondBackgroundColor}`
                  : "none",
              // cursor: index > maxStepUnlocked ? "not-allowed" : "pointer",
              // opacity: index > maxStepUnlocked ? 0.5 : 1,
            }}
          >
            <div
              className="rounded-full flex justify-center items-center mb-2"
              style={{
                backgroundColor: item.backgroundColor,
                width: "60px",
                height: "60px",
              }}
            >
              <img src={item.image} alt={item.name} />
            </div>
            <p className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default LifeStyle;
