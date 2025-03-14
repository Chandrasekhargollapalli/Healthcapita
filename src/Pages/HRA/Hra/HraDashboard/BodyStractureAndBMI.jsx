import React from "react";
import { HraAssets } from "../../../../assets/Hra/assets";

const BodyStructureAndBMI = ({ bodystracture }) => {
  const {
    chestValue = "0",
    chestMeasurement = "0",
    waistMeasurement = "0",
    waistValue = "0",
    hipMeasurement = "0",
    hipValue = "0",
    heightMeasurement = "0",
    heightValue = "0",
    weightMeasurement = "0",
    weightValue = "0",
  } = bodystracture || {};

  const convertHeightToMeters = (height, unit) => {
    if (unit === "Cms") return height / 100;
    if (unit === "ft") return height * 0.3048;
    return height; 
  };

  const convertWeightToKg = (weight, unit) => {
    if (unit === "Pounds") return weight * 0.453592;
    if (unit === "Kgs") return weight; 
    return weight; 
  };

  const heightInMeters = convertHeightToMeters(parseFloat(heightValue) || 0, heightMeasurement);
  const weightInKg = convertWeightToKg(parseFloat(weightValue) || 0, weightMeasurement);
  const bmi = heightInMeters > 0 ? weightInKg / (heightInMeters * heightInMeters) : 0;

  const getHealthStatus = () => {
    if (bmi < 18.5) return { status: "Underweight", color: "text-yellow-500" };
    if (bmi >= 18.5 && bmi <= 24.99)
      return { status: "You're Healthy", color: "text-green-500" };
    if (bmi >= 25 && bmi <= 29.99) return { status: "Overweight", color: "text-orange-500" };
    return { status: "Obese", color: "text-red-500" };
  };

  const healthStatus = getHealthStatus();

  const calculatePosition = () => {
    const rangeStep = 10;
    const minBMI = Math.floor(bmi / rangeStep) * rangeStep - rangeStep;
    const maxBMI = minBMI + rangeStep * 5;

    const clampedBMI = Math.max(minBMI, Math.min(maxBMI, bmi));

    return {
      position: ((clampedBMI - minBMI) / (maxBMI - minBMI)) * 100,
      range: [
        minBMI,
        minBMI + rangeStep,
        minBMI + rangeStep * 2,
        minBMI + rangeStep * 3,
        minBMI + rangeStep * 4,
        maxBMI,
      ],
    };
  };

  const { position: dotPosition, range } = calculatePosition();

  return (
    <div className="flex flex-col  xl:flex-row  gap-4">
      
      <div className="w-full xl:w-1/2 bg-[#F9FAFB] rounded-lg shadow-md">
        <div className="flex justify-between items-center p-5 flex-col sm:flex-row">
          <h1 className="font-semibold text-center sm:text-left">Body Structure</h1>
          <h1 className="font-semibold bg-white rounded-full shadow-sm text-sm text-center p-2 mt-2 sm:mt-0 sm:ml-4">
            Inverted Triangle Body Shape
          </h1>
        </div>

        <hr />
        <div className="flex justify-between   p-3">
          <div className="space-y-2">
            <div className="p-3 bg-white w-44 rounded-xl text-center border border-gray-100 shadow-sm">
              <p>Chest ({chestMeasurement})</p>
              <div className='flex justify-center'>
                <p className="font-bold  ">{chestValue}  </p>
                <img  src={HraAssets.RedUparrow} alt=""  />
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl text-center border border-gray-100 shadow-sm">
              <p>Waist ({waistMeasurement})</p>
              <div className='flex justify-center'>
                <p className="font-bold">{waistValue} </p>
                <img src={HraAssets.DownGreenarrow} alt="" />
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl text-center border border-gray-100 shadow-sm">
              <p>Hips ({hipMeasurement})</p>
              <div className='flex justify-center'>
                <p className="font-bold">{hipValue}</p>
                <img src={HraAssets.DownGreenarrow} alt="" />
              </div>
            </div>
          </div>
          
          <div>
            <img src={HraAssets.HraSmallBody} alt="Body Shape Illustration" />
          </div>
        </div>
      </div>

      <div className="w-full xl:w-1/2 bg-[#F9FAFB] rounded-lg shadow-md">
        <h1 className="p-5 font-semibold">BMI Details</h1>
        <hr />
        <div className="flex flex-col md:flex-row justify-center md:justify-between p-3 gap-4">
          
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <div className="w-full max-w-xs bg-[#EAF6FE] rounded-lg flex flex-col items-center space-y-2 shadow">
              <div className="flex justify-between w-full text-sm text-gray-700 p-2">
                <p>Height</p>
                <p className="font-bold text-gray-900">
                  {heightValue} {heightMeasurement}
                </p>
              </div>
              <div className="w-full">
                <img
                  src={HraAssets.HeightScale}
                  alt="Height Scale"
                  className="w-full object-contain"
                />
              </div>
            </div>

            <div className="w-full max-w-xs bg-[#FEF3E8] rounded-lg flex flex-col items-center space-y-2 shadow">
              <div className="flex justify-between w-full text-sm text-gray-700 p-2">
                <p>Weight</p>
                <p className="font-bold text-gray-900">
                  {weightValue} {weightMeasurement}
                </p>
              </div>
              <div className="w-full">
                <img
                  src={HraAssets.HeightScale}
                  alt="Weight Scale"
                  className="w-full object-contain"
                />
              </div>
            </div>

            <div className="w-full max-w-xs bg-[#F4F0FF] rounded-lg flex flex-col items-center space-y-2 shadow">
              <div className="flex justify-between w-full text-sm text-gray-700 p-2">
                <p>BMI Ratio</p>
                <p className="font-bold text-gray-900">{bmi.toFixed(2)}</p>
              </div>
              <div className="w-full">
                <img
                  src={HraAssets.HeightScale}
                  alt="BMI Scale"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-1/2 md:w-1/2 bg-[#001940] text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Body Mass Index (BMI)</h2>

            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold">{bmi.toFixed(2)}</p>
              <span
                className={`inline-block bg-white px-3 py-1 rounded-md text-sm font-semibold text-[#001940] ${healthStatus.color}`}
              >
                {healthStatus.status}
              </span>
            </div>

            <div className="mt-10">
              <div className="relative h-4 bg-gradient-to-r from-[#B5D4F1] via-[#81E5DB] to-[#E8D284] rounded-full">
                <div
                  className="absolute h-3 w-3 bottom-4 bg-red-600 border-2 border-white rounded-full transform -translate-y-1/2"
                  style={{ left: `${dotPosition}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-sm mt-2 text-gray-400">
                {range.map((value, index) => (
                  <span key={index}>{value}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyStructureAndBMI;
