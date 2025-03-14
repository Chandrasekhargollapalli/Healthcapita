import { useNavigate } from "react-router-dom";
import { PhrAssets } from "../../../../../assets/PHR/assets";

const InsuranceDetailsUpdate = () => {

  const navigate = useNavigate()

  const closePage = () => {
    navigate('/phr')

  }

  const formFields = [
    {
      id: "insurancecompany",
      label: "Insurance Company",
      type: "text",
      placeholder: "Enter Insurance Company",
    },
    {
      id: "insurancetype",
      label: "Insurance Type",
      type: "select",
      options: ["Life", "Health", "Fire"],
      placeholder: "Select",
    },
    {
      id: "tpa",
      label: "TPA",
      type: "phone",
      countryCodes: ["+1", "+91", "+44", "+61", "+81"],
      placeholder: "Enter Mobile Number",
    },
    {
      id: "country",
      label: "Country",
      type: "select",
      options: ["India", "USA", "UK"],
      placeholder: "Select",
    },
    {
      id: "insupolicyno",
      label: "Insurance Policy No.",
      type: "text",
      placeholder: "Enter Insurance Policy No.",
    },
    {
      id: "premiumamount",
      label: "Premium Amount",
      type: "text",
      placeholder: "Enter Relation",
    },
    {
      id: "planname",
      label: "Plan Name",
      type: "text",
      placeholder: "Enter Plan Name",
    },
    {
      id: "maturityamount",
      label: "Maturity Amount",
      type: "number",
      placeholder: "Enter Maturity Amount",
    }
  
  ]
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
                Insurance Details
              </h2>
              <img
                className="lg:mt-1 h-5 w-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6"
                src={PhrAssets.InfoCircle}
                alt=""
              />
            </div>
          </div>
          <p className="mx-2 border-b-2 border-gray-100 mt-4"></p>
        </div>
   
        <div className="py-4 px-4 sm:px-6 md:px-4 lg:px-12">
        <form className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <label htmlFor={field.id} className="font-normal">
                {field.label}
              </label>
  
              {field.type === "select" ? (
                <select
                  id={field.id}
                  name={field.id}
                  className="border border-gray-300 py-2 px-3 rounded-md w-3/4 focus:outline-none"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "phone" ? (
                <div className="flex gap-2 w-3/4">
                  <select
                    id={`${field.id}-code`}
                    name={`${field.id}-code`}
                    className="border border-gray-300 py-2 px-3 rounded-md w-1/5 focus:outline-none"
                  >
                    {field.countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    placeholder={field.placeholder}
                    id={field.id}
                    name={field.id}
                    className="border border-gray-300 py-2 px-3 flex-1 rounded-md focus:outline-none w-3/4"
                  />
                </div>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  id={field.id}
                  name={field.id}
                  className="border border-gray-300 py-2 px-3 rounded-md focus:outline-none w-3/4"
                />
              )}
            </div>
          ))}
        </div>
  
        <div>
          <button className="text-green-700 font-semibold">+ Add</button>
        </div>
        </form>
        </div>

        <div className="relative">
        <p className="mx-14 border-b-2 border-gray-100 my-5"></p>
        <button
          
          className="bg-[#1C9401] text-white font-medium tracking-wide text-lg py-3 px-8 rounded-full absolute -bottom-20 right-8 mb-0 mr-4"
        >
          Update Details
        </button>
        </div>
        </div>
    </>
   )
}

export default InsuranceDetailsUpdate;