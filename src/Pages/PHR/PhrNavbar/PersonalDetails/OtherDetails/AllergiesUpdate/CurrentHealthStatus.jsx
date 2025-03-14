import { useState } from "react";

const CurrentHealthStatus = () => {
  const [isIllnessVisible, setIsIllnessVisible] = useState(false);
  const [isMedicationVisible, setIsMedicationVisible] = useState(false);

  return (
    <div className="px-2 my-3">
      <p className="text-base font-semibold py-5">Currently suffering from any illness</p>
      <div className="flex gap-3 pb-5">
        <div className="flex items-center gap-2">
          <input
            className="custom-radio"
            type="radio"
            name="illness"
            checked={isIllnessVisible}
            onChange={() => setIsIllnessVisible(true)}
          />
          <label>Yes</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="custom-radio"
            type="radio"
            name="illness"
            checked={!isIllnessVisible} 
            onChange={() => setIsIllnessVisible(false)}
          />
          <label>No</label>
        </div>
      </div>
                                               
      {isIllnessVisible && (               
       <input type="text" placeholder="Enter the Illness" className="h-20 sm:w-3/4 w-full p-3 bg-white border border-gray-200 rounded focus:outline-none"/>
      )}

    

      {/* Currently on Any Medication */}   
      <p className="text-base font-semibold py-5">Currently on any medication</p>
      <div className="flex gap-3 pb-2">
        <div className="flex items-center gap-2">
          <input
            className="custom-radio"
            type="radio"
            name="medication"
            checked={isMedicationVisible}
            onChange={() => setIsMedicationVisible(true)}  
          />
          <label>Yes</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="custom-radio"
            type="radio"
            name="medication"
            checked={!isMedicationVisible}
            onChange={() => setIsMedicationVisible(false)}
          />
          <label>No</label>
        </div>
      </div>

      {isMedicationVisible && (
        
        <input type="text" placeholder="Enter the Illness" className="h-20 sm:w-3/4 w-full  p-3 text-black bg-white border border-gray-200 rounded focus:outline-none"/>
      )}

    </div>
  );
};

export default CurrentHealthStatus;      
