
import PhrUpdateHeader from "../../../../../../CommonComponents/PhrUpdateHeader/PhrUpdateHeader";

const LifeStyleUpdate = () => {
  
  const formFields = [
    { id: "tobacco", label: "Tobacco", type: "select", options: ["Hookah", "Cigarettes"], placeholder: "Select" },
    { id: "alcohol", label: "Alcohol", type: "select", options: ["Vodka", "Beer"] },
    { id: "drugs", label: "Drugs", type: "select", options: ["Fentanyl", "Cannabis"] },
    { id: "dailyactivities", label: "Daily Activities", type: "select", options: [1, 2, 3, 4] },
    { id: "stresslevel", label: "Stress Level", type: "select", options: ["Acute stress", "Chronic stress"] },
    { id: "food", label: "Food", type: "select", options: ["Veg", "Non-veg"] },
  ];

  return (
    <>
   
   
   <div className="min-h-screen bg-white flex flex-col"> 
        <PhrUpdateHeader Title={'Life Style'} />
        <div className="py-4 px-4 sm:px-6 md:px-4 lg:px-12">
          <form className="flex flex-col gap-4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {formFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label htmlFor={field.id} className="font-normal">
                    {field.label}
                  </label>

                
                  {field.type === "select" && (
                    <select
                      id={field.id}
                      name={field.id}
                      className="border border-gray-300 py-2 px-3 rounded-md w-3/4 focus:outline-none"
                    >
                      <option value="">Select</option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </div>
          </form>
        </div>

        <div className="relative">
        <p className="mx-14 border-b-2 border-gray-100 my-5"></p>
        <button
          
          className="bg-[#007183] text-white font-medium tracking-wide text-lg py-3 px-8 rounded-full absolute -bottom-20 right-8 mb-0 mr-4"
        >
          Update Details
        </button>
      </div>
      </div>

     
    </>
  );
};

export default LifeStyleUpdate;
