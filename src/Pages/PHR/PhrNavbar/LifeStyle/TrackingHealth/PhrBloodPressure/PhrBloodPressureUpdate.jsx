import { useNavigate } from "react-router-dom";
import { PhrAssets } from "../../../../../../assets/PHR/assets";
import PhrUpdateHeader from "../../../../../../CommonComponents/PhrUpdateHeader/PhrUpdateHeader";
import MedicationTabs from "./MedicationTabs/MedicationTabs";

const  PhrBloodPressureUpdate = () => {
  
                 
  const formFields = [                                
    { id: "systolic", label: "Systolic (Upper)", type: "number", placeholder: "eg. 35" },
    { id: "diastolic", label: "Diastolic (Lower)", type: "number", placeholder: "eg. 55" },
    { id: "testdate", label: "Test Date", type: "date", placeholder: "Choose a Date" },
    { id: "testtime", label: "Test Time", type: "time", placeholder: "15:00" },
    { id: "specialist", label: "Physician Specialist", type: "text", placeholder: "Enter Physician Specialist" },
    { id: "primarycare", label: "Primary Care Physician", type: "text", placeholder: "Enter Primary Care Physician" },
  ];                               

  // const medicationFields = [
  //   { id: "prescribed", label: "Prescribed By", type: "text", placeholder: "Enter Prescribed By" },
  //   { id: "nameofdrug", label: "Name of Drug", type: "text", placeholder: "Enter Name of Drug" },
  //   { id: "dosage", label: "Dosage", type: "number", placeholder: "Enter Dosage" },
  //   { id: "strength", label: "Strength", type: "text", placeholder: "Enter Strength" },
  //   { id: "frequency", label: "Frequency", type: "number", placeholder: "Enter Frequency" },
  //   { id: "medicationtype", label: "Medication Type", type: "text", placeholder: "Enter Medication Type" },
  // ];

  return ( 
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <PhrUpdateHeader Title={'LifeStyle/Blood Pressure'} />
        {/* Form Section */}
        <div className="py-4 px-4 sm:px-6 md:px-4 lg:px-12">
        <form className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {formFields.map((field) => (
              <div key={field.id} className="flex flex-col gap-2">
                <label htmlFor={field.id} className="font-normal">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="border border-gray-300 py-2 px-3 rounded-md w-3/4 focus:outline-none"
                />
              </div>          
            ))}
          </div>
        </form>
      </div>
        {/* <div className="py-4 px-4 sm:px-6 md:px-4 lg:px-12">
          <form className="flex flex-col gap-4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {medicationFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label htmlFor={field.id} className="font-normal">{field.label}</label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="border border-gray-300 py-2 px-3 rounded-md w-3/4 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </form>
        </div> */} 
        <MedicationTabs/>
      </div>   
    </>
  );
};

export default PhrBloodPressureUpdate;   
