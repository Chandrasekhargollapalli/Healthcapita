import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HraAssets } from "../../../assets/Hra/assets";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import PersonalandFamily from "../PersonalAndFamily/PersonalAndFamily";
import LifeStyle from "../LifeStyle/LifeStyle";
import MedicalAndSurgery from "../MedicalAndSurgery/MedicalAndSurgery";


const HraAssesment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const closePage = () => {
    
    navigate("/assessment");
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const backStep = (step) => {
    setStep(step);
  };

  
  const containerRef = useRef(null);

  useEffect(() => {
    scrollToTop();
  }, [containerRef.current]);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div   className="fixed inset-0 z-50 flex flex-col bg-white ">
      <header className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#001940] shadow-md w-full z-10">
        <div className="flex items-center space-x-3">
          <img src={HraAssets.logo2} alt="Logo" className="w-8 h-8" />
          <h2 className="text-xl font-semibold text-white">
            Health Risk Assessment
          </h2>
        </div>
        <button onClick={closePage} className="text-gray-200 text-xl font-bold">
          X Close
        </button> 
      </header>

      <main ref={containerRef} className="flex-1 overflow-y-auto">
        <ProgressBar step={step} />
        {step === 1 && <PersonalandFamily onNextStep={nextStep} scrollToTop={scrollToTop}/>}
        {step === 2 && <LifeStyle onNextStep={nextStep} backStep={backStep} scrollToTop={scrollToTop}/>}
        {step === 3 && <MedicalAndSurgery backStep={backStep} scrollToTop={scrollToTop}/>}
      </main>
    </div>
  );
};

export default HraAssesment;
