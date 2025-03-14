import React from "react";
import { Bar } from "react-chartjs-2";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip, 
  Legend,
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels'; 
import { HraAssets } from "../../../../assets/Hra/assets";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels); 

const CholesterolAndBP = ({bloodCholesterol}) => {
  const {
    cholesterol= '0',
    hdl='0',
    ldl='0',
    triglyceride='0'

  }=bloodCholesterol || {}
  const data = {
    labels: ["Cholesterol Level", "HDL", "LDL", "Triglyceride"],
    datasets: [
      {
        data: [cholesterol, hdl, ldl, triglyceride],
        backgroundColor: ["#FFAC11", "#1192E8", "#FF6354", "#002364"],
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        color: "#fff", 
        font: {
          size: 14, 
        },
        anchor: "center", 
        align: "end", 
        rotation: -90, 
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          display: false, 
        },
        border: {
          display: false, 
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false, 
          color: "#E5E5E5",
          display: false, 
        },
        ticks: {
          display: false, 
        },
        border: {
          display: false, 
        },
      },
    },
  };

  return (
    
    <div className="flex flex-wrap lg:flex-nowrap gap-4">
   
    <div className="w-full lg:w-1/2 bg-[#F9FAFB] rounded-lg">
      <h1 className="p-5 font-semibold">Blood Cholesterol Level</h1>
      <hr />
      <div className="flex flex-wrap">
     
        <div className=" w-full md:w-1/2 lg:w-auto mt-10 md:mt-36">
          <Bar data={data} options={options} />
        </div>
  
  
        <div className="flex flex-col justify-between p-4 w-full md:w-1/2 lg:w-auto">
      
          <div className="p-2 m-auto w-1/2 bg-[#FFC801] rounded-md">
            <p className="text-center">At Risk</p>
          </div>
  
        
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-[#FFFFFF] rounded-md text-center">
              <p>{cholesterol}</p>
              <p className="text-[#FFAC11]">CholestrolLevel</p>
            </div>
            <div className="p-4 bg-[#FFFFFF] rounded-md text-center">
              <p>{hdl}</p>
              <p className="text-[#1192E8]">HDL</p>
            </div>
            <div className="p-4 bg-[#FFFFFF] rounded-md text-center">
              <p>{ldl}</p>
              <p className="text-[#FF6354]">LDL</p>
            </div>
            <div className="p-4 bg-[#FFFFFF] rounded-md text-center">
              <p>{triglyceride}</p>
              <p className="text-[#002364]">Triglyceride</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-[#F9FAFB] rounded-lg">
      <h1 className="p-5 font-semibold">Blood Pressure</h1>
      <hr />
   <div className='flex justify-between p-24'>
    <div>
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full px-6 text-gray-500 text-sm">
        <span>90</span>
        <span>Perhypertension</span>
        <span>150</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div className="bg-[#FA4D56] h-2.5 rounded-full" style={{ width: '100%' }}></div>
      </div>
    </div>
    <div className="flex flex-col items-center">
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div className="bg-[#12B76A] h-2.5 rounded-full" style={{ width: '100%' }}></div>
      </div>
      <div className="flex justify-between w-full px-6 text-gray-500 text-sm">
        <span>80</span>
        <span>Normal</span>
        <span>120</span>
      </div>
    </div>
    </div>
   <div className=''>
    <img src={HraAssets.TemparatureIcon} alt="" />
    <button className='bg-[#FFC801] p-2 rounded mt-4 px-5'>Caution</button>
    </div>
   </div>
    </div>
  </div>
  
  
  
  
  );
};

export default CholesterolAndBP;


