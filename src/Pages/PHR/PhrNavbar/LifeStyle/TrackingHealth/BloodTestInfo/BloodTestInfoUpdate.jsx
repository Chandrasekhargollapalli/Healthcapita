import { useNavigate } from "react-router-dom"
import { PhrAssets } from "../../../../../../assets/PHR/assets"
import PhrUpdateHeader from "../../../../../../CommonComponents/PhrUpdateHeader/PhrUpdateHeader"

const BloodTestInfoUpdate = () => {

  const navigate = useNavigate()

  const closePage = () => {
    navigate('/phr') 
  }

  const formFields = [
    {
      id: "haemoglobil",
      label: "Haemoglobil",
      type: "text",
      placeholder: "Enter Haemoglobil",
    },
    {
      id: "wbc",
      label: "WBC",
      type: "text",
      placeholder: "Enter WBC",
    },
    {
      id: "rbc",
      label: "RBC",
      type: "text",
      placeholder: "Enter RBC",
    },
    {
      id: "testdate",
      label: "Test Date",
      type: "date",
      placeholder: "Choose a Date",
    },
    { id: "testtime", label: "Test Time", type: "time", placeholder: "15:00" },
    {
      id: "testdate",
      label: "Date of Entry",
      type: "date",
      placeholder: "Choose a Date",
    },
    {
      id: "primrycare",
      label: "Primary care Physician",
      type: "text",
      placeholder: "Enter fasting",
    },
    {
      id: "comments",
      label: "Comments",
      type: "text",
      placeholder: "Enter comments here",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <PhrUpdateHeader Title={'Life Style/Blood Test Information'} />

        {/* Form Section */}
        <div className="py-4 px-4 sm:px-6 md:px-4 lg:px-12">
          <form className="flex flex-col gap-4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {formFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-3">
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
      </div>
    </>
  );
}

export default BloodTestInfoUpdate