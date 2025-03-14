import { PhrAssets } from "../../../../../../../assets/PHR/assets";

const MedicalReminders = () => {
  const formFields1 = [
    { id: 0, label: "09:30 AM", type: "checkbox" },
    { id: 1, label: "10:00 AM", type: "checkbox" },
    { id: 2, label: "10:30 AM", type: "checkbox" },
    { id: 3, label: "11:00 AM", type: "checkbox" },
    { id: 4, label: "11:30 AM", type: "checkbox" },
  ];

  const formFields2 = [
    { id: 0, label: "12:00 PM", type: "checkbox" },
    { id: 1, label: "01:30 PM", type: "checkbox" },
    { id: 2, label: "02:00 PM", type: "checkbox" },
    { id: 3, label: "02:30 PM", type: "checkbox" },
    { id: 4, label: "03:30 PM", type: "checkbox" },
    { id: 5, label: "04:00 PM", type: "checkbox" },
  ];

  const formFields3 = [
    { id: 0, label: "06:30 PM", type: "checkbox" },
    { id: 1, label: "07:00 PM", type: "checkbox" },
    { id: 2, label: "07:30 PM", type: "checkbox" },
    { id: 3, label: "08:00 PM", type: "checkbox" },
  ];


  return (
    <>
      <div className="w-full">
        <h2 className="font-semibold text-lg py-4">Add Medical Reminders</h2>
        <form>
        <div className="flex gap-5 bg-[#F9FAFB] py-5 px-4 rounded-lg my-4">
          <img src={PhrAssets.AMicon} alt="" />
         
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {formFields1.map((field) => (
                <div className="bg-white py-3 px-4 border border-gray-200 rounded-md">
                  <label className="flex gap-2">
                    <input type={field.type} />
                    <span>{field.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          
          <div className="flex gap-5 bg-[#F9FAFB] py-4 px-4 rounded-lg my-4">
          <img src={PhrAssets.Afternoon} alt="" />
         
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {formFields2.map((field) => (
                <div className="bg-white py-3 px-4 border border-gray-200 rounded-md">
                  <label className="flex gap-2">
                    <input type={field.type} />
                    <span>{field.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-5 bg-[#F9FAFB] py-4 px-4 rounded-lg my-4">
          <img src={PhrAssets.Night} alt="" />
         
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {formFields3.map((field) => (
                <div className="bg-white py-3 px-4 border border-gray-200 rounded-md">
                  <label className="flex gap-2">
                    <input type={field.type} />
                    <span>{field.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          </form>
      </div>
    </>
  );
};

export default MedicalReminders;
