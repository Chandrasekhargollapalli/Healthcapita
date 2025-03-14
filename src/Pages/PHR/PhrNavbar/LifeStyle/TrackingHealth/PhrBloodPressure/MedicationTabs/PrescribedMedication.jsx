const PrescribedMedication = () => {

  const medicationFields = [
    { id: "prescribed", label: "Prescribed By", type: "text", placeholder: "Enter Prescribed By" },
    { id: "nameofdrug", label: "Name of Drug", type: "text", placeholder: "Enter Name of Drug" },
    { id: "dosage", label: "Dosage", type: "number", placeholder: "Enter Dosage" },
    { id: "strength", label: "Strength", type: "text", placeholder: "Enter Strength" },
    { id: "frequency", label: "Frequency", type: "number", placeholder: "Enter Frequency" },
    { id: "medicationtype", label: "Medication Type", type: "text", placeholder: "Enter Medication Type" },
    { id: "startdate", label: "Start Date", type: "date", placeholder: "Choose a date" },
    { id: "enddate", label: "End Date", type: "date", placeholder: "Choose a date" },
    { id: "duration", label: "Duration(Days)", type: "text", placeholder: "Enter duration" },
  ];

  return (
    <>
      <div>
        <h2 className="font-semibold text-lg py-4">Prescribed Medication</h2>
        <div>
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
        </div>  
      </div>
    
    </>
  )
}

export default PrescribedMedication