import Separator from "../../../../CommonComponents/Separator";
import { HraAssets } from "../../../../assets/Hra/assets";

const BloodGlucoseLevelData = ({ bloodSugar }) => {
  const { fastingBloodGlucose = "0", postprandialGlucose = "0", lastExaminedOn = "N/A" } = bloodSugar || {};

  const thresholds = {
    beforeMeal: { start: 70, normal: 100, caution: 125, max: 150 },
    afterMeal: { start: 70, normal: 140, caution: 200, max: 300 },
  };

  const data = [
    {
      type: "beforeMeal",
      title: "Before Meal",
      value: parseInt(fastingBloodGlucose, 10),
    },
    {
      type: "afterMeal",
      title: "After Meal",
      value: parseInt(postprandialGlucose, 10),
    },
  ];

  return (
    <div className="w-full bg-[#F9FAFB] rounded-lg p-5">
      <h1 className="font-semibold mb-4">Blood Glucose Level</h1>
      <hr className="mb-6" />

      {data.map((item, index) => {
        const { start, normal, caution, max } = thresholds[item.type];

        
        const greenWidth = ((normal - start) / (max - start)) * 100;
        const orangeWidth = ((caution - normal) / (max - start)) * 100;
        const redWidth = ((max - caution) / (max - start)) * 100;

        
        const valuePosition = Math.min(Math.max(((item.value - start) / (max - start)) * 100, 0), 100);

        return (
          <div key={index} className="flex flex-col lg:flex-row mb-8 gap-5 lg:gap-8">
            <div className="w-full">
              <h3 className="text-lg font-medium mb-3">{item.title}</h3>

             
              <div className="relative w-full">
                <div className="flex h-3 rounded-full overflow-hidden">
                  <div className="bg-green-500" style={{ width: `${greenWidth}%` }}></div>
                  <div className="bg-orange-500" style={{ width: `${orangeWidth}%` }}></div>
                  <div className="bg-red-500" style={{ width: `${redWidth}%` }}></div>
                </div>

                <div className="absolute top-[-52px] transform -translate-x-1/2 bg-white border border-gray-300 rounded px-3 py-1 text-sm font-medium shadow-md" style={{ left: `${valuePosition}%` }}>
                  {item.value} mg/dl
                  <img src={HraAssets.DownDropdown} alt="Dropdown Icon" className="w-4 h-4 mx-auto mt-1" />
                </div>
              </div>

      
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span>{start} mg/dl</span>
                <span>Normal</span>
                <span>{normal} mg/dl</span>
                <span>Caution</span>
                <span>{caution} mg/dl</span>
                <span>Max</span>
                <span>{max} mg/dl</span>
              </div>
            </div>

            
            <div className="w-full lg:w-[10%] flex items-center justify-center">
              <button className="px-4 py-1 bg-yellow-400 rounded-md">Caution</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BloodGlucoseLevelData;
