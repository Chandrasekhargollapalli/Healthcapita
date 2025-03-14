import React, { useState,useContext, useEffect, useCallback, useRef } from "react";
import RadioButton from "../../../CommonComponents/RadioButton.jsx";
import MultiSlider from "../../../CommonComponents/MultiSlider.jsx";
import Separator from "../../../CommonComponents/Separator.jsx";
import { HraAssets } from "../../../assets/Hra/assets.js";
import Button from "../../../CommonComponents/Button.jsx";
import axios from "axios";
import { HraApiEndPoints } from "../../../utils/HraApis.jsx";
import { UserId } from "../../../utils/HraApis.jsx";
import { DateContext } from "../../../utils/DateProvider.jsx";

const LifeStyleTab = ({ onNext,showProgressSaved}) => {
  const {selectedDate}=  useContext(DateContext)
  const [formdata, setFormData] = useState({
    sleepIssues: 'N',
    mealsType: 'Veg',
    appetite: 'Always',
    blurredVision: 'N',
    UserId,
    autoId: 0,
    DateOfEntry: selectedDate,
    RecStatus: "p",
    sleepingHours: '',
     eyeDistantLeft: null,
      eyeDistantRight: null,
      eyeNearLeft: null,
      eyeNearRight: null,
    
  });

const [errors,setErrors] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://service.healthcapita.com/api/Hra/GetLifeStyle?UserId=${UserId}&AssesmentDate=${selectedDate}`
          );
        console.log(response)
        if(response?.data?.isData){
          setFormData(response?.data?.data)
        }else{
  setFormData({
    sleepIssues: 'N',
    mealsType: 'Veg',
    appetite: 'Always',
    blurredVision: 'N',
    UserId,
    autoId:0,
    DateOfEntry: selectedDate,
    RecStatus: "p",
    sleepingHours: '',
    eyeDistantLeft: null,
    eyeDistantRight: null,
    eyeNearLeft: null,
    eyeNearRight: null,
    
  })
        }
        } catch (error) {
          console.log(error);
        
        }
      };
      fetchData();
    }, [selectedDate,UserId]);
 console.log('helo')


 const handleChange = useCallback((e) => {
  const { name, value } = e.target;
  setFormData((prev) => {
    const updatedFormData = {
      ...prev,
      [name]: value,
    };
    if (name === "blurredVision" && value === "N") {
      updatedFormData.eyeDistantLeft = null;
      updatedFormData.eyeDistantRight = null;
      updatedFormData.eyeNearLeft = null;
      updatedFormData.eyeNearRight = null;
    }

    return updatedFormData;
  });
}, []);

console.log('hello')

  const handleSliderChange = useCallback((field, data) => {
    const formattedValue = `${data.minValue}-${data.maxValue}`;
    if (formdata[field] !== formattedValue) { 
      setFormData((prev) => ({
        ...prev,
        [field]: formattedValue,
      }));
    }
  }, [formdata]);


  const validateForm = () => {
    const newErrors = {};
    if (formdata.blurredVision === "Y") {
      if (!formdata.eyeDistantLeft) newErrors.eyeDistantLeft = "Left Distant is required";
      if (!formdata.eyeDistantRight) newErrors.eyeDistantRight = "Right Distant is required";
      if (!formdata.eyeNearLeft) newErrors.eyeNearLeft = "Left Near is required";
      if (!formdata.eyeNearRight) newErrors.eyeNearRight = "Right Near is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  

  const handleNextClick = async () => {
    if (!validateForm()) return
    try {
      
      const response = await axios.post(HraApiEndPoints.SaveLifeStyle, formdata);
      console.log('Submitted Data:', formdata);
      console.log('Response:', response?.data?.status);
      if(response?.data?.status){
        showProgressSaved(true)
      onNext();
      }else{
       showProgressSaved(false)
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <div className="space-y-10 sm:space-y-7">
        <p className="text-sm sm:text-lg font-bold">
          Do you experience any sleep issues, such as trouble falling asleep,
          staying asleep, or waking up feeling unrested?
        </p>
        <div className="flex space-x-10">
          <RadioButton
            label="Regular"
            value="Y"
            name="sleepIssues"
            onChange={handleChange}
            checked={formdata.sleepIssues === "Y"}
          />
          <RadioButton
            label="Irregular"
            value="N"
            name="sleepIssues"
            onChange={handleChange}
            checked={formdata.sleepIssues === "N"}
          />
        </div>
        <div className="flex items-center">
          <p className="text-sm font-semibold">Sleeping Hours</p>
          <div className="w-3/4 lg:w-1/4">
            <MultiSlider
              min={1}
              max={30}
              minValue={Number(formdata.sleepingHours.split("-")[0])}
              maxValue={Number(formdata.sleepingHours.split("-")[1])}
              step={1}
              onChange={(data) => handleSliderChange("sleepingHours", data)}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10">
        <Separator />
      </div>

      <p className="text-sm sm:text-lg font-bold">
        What types of meals do you usually have?
      </p>
      <div className="flex flex-wrap gap-10 items-center p-4 sm:flex-row sm:space-x-10 sm:gap-0">
        {[ 
          { img: HraAssets.Vegetarain, label: "Vegetarian", Name: 'Veg' },
          { img: HraAssets.NonVegetarian, label: "Non-Vegetarian", Name: 'Nvg' },
          { img: HraAssets.Eggetarian, label: "Eggetarian", Name: 'Egg' },
          { img: HraAssets.Mix, label: "Mix", Name: 'Mix' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 sm:flex-col sm:space-y-4 w-full sm:w-auto"
          >
            <img src={item.img} alt={item.label} className="mb-4" />
            <RadioButton
              label={item.label}
              value={item.Name}
              name="mealsType"
              onChange={handleChange}
              checked={formdata.mealsType === item.Name}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 mb-10">
        <Separator />
      </div>

      <p className="text-sm sm:text-lg font-bold">
        Do you experience any issues with your appetite?
      </p>
      <div className="flex flex-wrap gap-10 items-center p-4 sm:flex-row sm:space-x-10 sm:gap-0">
        {[ 
          { img: HraAssets.AlwaysHungry, label: "Always Hungry", Name: 'Always' },
          { img: HraAssets.GreenSalad, label: "Normal appetite", Name: 'Normal' },
          { img: HraAssets.NoAppetiteAtAll, label: "No appetite at all", Name: 'No' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 sm:flex-col sm:space-y-4 w-full sm:w-auto"
          >
            <img src={item.img} alt={item.label} className="mb-4" />
            <RadioButton
              label={item.label}
              value={item.Name}
              name="appetite"
              onChange={handleChange}
              checked={formdata.appetite === item.Name}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 mb-10">
        <Separator />
      </div>

      <p className="text-sm sm:text-lg font-bold">
        Do you have any vision problems, such as difficulty seeing clearly,
        blurred vision?
      </p>
      <div className="flex gap-4 mt-4 mb-10">
        <RadioButton
          label="Yes"
          value="Y"
          name="blurredVision"
          onChange={handleChange}
          checked={formdata.blurredVision === "Y"}
        />
        <RadioButton
          label="No"
          value="N"
          name="blurredVision"
          onChange={handleChange}
          checked={formdata.blurredVision === "N"}
        />
      </div>

      {formdata.blurredVision === "Y" && (
  <div className="flex flex-col sm:flex-row sm:space-x-4">
    <div className="relative mb-10 w-full sm:w-auto">
      <p className="absolute -top-10 left-4 px-1 text-xl font-semibold">
        Distant
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="relative w-full sm:w-32">
          <label className="absolute -top-2 left-4 bg-white px-1 text-gray-500 text-xs">
            Left
          </label>
          <input
            type="number"
            name="eyeDistantLeft"
            value={formdata.eyeDistantLeft}
            required={formdata.blurredVision === "Y"}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded bg-transparent text-gray-700 outline-none"
          />
           {errors.eyeDistantLeft && <p className="text-red-500 text-xs">{errors.eyeDistantLeft}</p>}
        </div>
        <div className="relative w-full sm:w-32">
          <label className="absolute -top-2 left-4 bg-white px-1 text-gray-500 text-xs">
            Right
          </label>
          <input
            type="number"
            name="eyeDistantRight"
            value={formdata.eyeDistantRight}
            required={formdata.blurredVision === "Y"}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded bg-transparent text-gray-700 outline-none"
          />
           {errors.eyeDistantRight && <p className="text-red-500 text-xs">{errors.eyeDistantRight}</p>}
        </div>
      </div>
    </div>

    <div className="relative w-full sm:w-auto">
      <p className="absolute -top-10 left-4 px-1 text-xl font-semibold">
        Near
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="relative w-full sm:w-32">
          <label className="absolute -top-2 left-4 bg-white px-1 text-gray-500 text-xs">
            Left
          </label>
          <input
            type="number"
            name="eyeNearLeft"
            value={formdata.eyeNearLeft}
            required={formdata.blurredVision === "Y"}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded bg-transparent text-gray-700 outline-none"
          />
           {errors.eyeNearLeft && <p className="text-red-500 text-xs">{errors.eyeNearLeft}</p>}
        </div>
        <div className="relative w-full sm:w-32">
          <label className="absolute -top-2 left-4 bg-white px-1 text-gray-500 text-xs">
            Right
          </label>
          <input
            type="number"
            name="eyeNearRight"
            value={formdata.eyeNearRight}
            required={formdata.blurredVision === "Y"}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded bg-transparent text-gray-700 outline-none"
          />
           {errors.eyeNearRight && <p className="text-red-500 text-xs">{errors.eyeNearRight}</p>}
        </div>
      </div>
    </div>
  </div>
)}


      <div className="col-span-12 flex justify-end">
        <Button type="primary" onClick={handleNextClick}>
          Next : Habits
        </Button>
      </div>
    </div>
  );
};

export default LifeStyleTab;
