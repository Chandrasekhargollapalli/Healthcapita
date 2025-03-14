import { useState } from "react";
import PrescribedMedication from "./PrescribedMedication";
import MedicalReminders from "./MedicalReminders";
import { PhrAssets } from "../../../../../../../assets/PHR/assets";

const MedicationTabs = () => {

  const [activeTab, setActiveTab] = useState("Prescribed Medication");

  const tabIcons = {
    "Prescribed Medication": PhrAssets.AddPrescribedIcon, 
    "Add Medical Reminders": PhrAssets.AddMedicalIcon,
  };

  const renderActiveTabs = () => {
      switch (activeTab) {
      case "Prescribed Medication":
         return <PrescribedMedication/>
        case "Add Medical Reminders":
          return <MedicalReminders />
        default:
          return null
        break;
    }
  }
 
  return (
    <>
      <div className="flex gap-3 mx-12 mt-10">
        {
          ["Prescribed Medication", "Add Medical Reminders"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-3 text-lg font-medium capitalize flex gap-2 items-center ${
                activeTab === tab
                  ? "border-b-4 border-[#EF5728] text-black "
                  : "border-transparent text-gray-400 hover:border-b-4 hover:border-[#EF5728] hover:text-black"
                }`}
              onClick={()=>setActiveTab(tab)}
            ><img  src={tabIcons[tab]} alt={`${tab} icon`} className="w-5 h-5" />{tab}</button>  
          ))
        }
  
      </div>
      <p className="border border-b-0 border-gray-200 mx-14 w-[35%]"></p>
      <div className="py-4 px-4 sm:px-6 md:px-4 lg:px-12">{renderActiveTabs()}</div>
    </>
  )
}

export default MedicationTabs;