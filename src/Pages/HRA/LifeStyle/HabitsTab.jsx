import React, { useState, useCallback, useEffect,useContext } from "react";
import MultiSlider from "../../../CommonComponents/MultiSlider.jsx/MultiSlider";
import RadioButton from "../../../CommonComponents/RadioButton";
import Separator from "../../../CommonComponents/Separator";
import Button from "../../../CommonComponents/Button";
import axios from "axios";
import { HraApiEndPoints } from "../../../utils/HraApis";
import { UserId } from "../../../utils/HraApis";
import { DateContext } from "../../../utils/DateProvider";

const HabitTabs = ({ onNext,showProgressSaved }) => {
  const {selectedDate}=  useContext(DateContext)
  const [formData, setformData] = useState({
    autoId: 0,
    UserId,
    DateOfEntry: selectedDate,
    RecStatus: "p",
    smokeHistory: "N",
    cigaretsPerDay: "",
    smokeDuration: "",
    alcohol: "N",
    drinksPerSitting: "",
    drinkDuration: "",
    sittingsPerWeek: "",
    tobacoChewing: "N",
    tobacoDuration: "",
    bowelMovements: "Y",
    bowelMovementsDuration: "",
  });

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://service.healthcapita.com/api/Hra/GetHabit?UserId=${UserId}&AssesmentDate=${selectedDate}`
        );

      if(response?.data?.isData){
      setformData(response?.data?.data)
      }else{
setformData({
  autoId: 0,
  UserId,
  DateOfEntry: selectedDate,
  RecStatus: "p",
  smokeHistory: "N",
  cigaretsPerDay: "",
  smokeDuration: "",
  alcohol: "N",
  drinksPerSitting: "",
  drinkDuration: "",
  sittingsPerWeek: "",
  tobacoChewing: "N",
  tobacoDuration: "",
  bowelMovements: "Y",
  bowelMovementsDuration: "",
})
      }
      } catch (error) {
        console.log(error);
      
      }
    };
    fetchData();
  }, [selectedDate,UserId]);

  const handleChange = useCallback((e) => {
    const {name,value} = e.target
    setformData((prev) => {
      const updatedFormData = {
        ...prev, [name]: value
      }
      if (name === "smokeHistory" && value === "N") {
        updatedFormData.cigaretsPerDay = '';
        updatedFormData.smokeDuration = ''
      }else if(name === 'alcohol' && value === "N"){
        updatedFormData.drinksPerSitting = ''
        updatedFormData.drinkDuration = ''
        updatedFormData.sittingsPerWeek = ''
      }else if(name ==='tobacoChewing' && value === 'N'){
        updatedFormData.tobacoDuration = ''
      }
  
       return updatedFormData 
    });
  }, []);

  const handleSliderChange = useCallback((field, data) => {
    const formattedValue = `${data.minValue}-${data.maxValue}`;
    setformData((prev) => {
      if (prev[field] !== formattedValue) {
        return { ...prev, [field]: formattedValue };
      }
      return prev; 
    });
  }, []);


  const handleNextClick = async () => {
    try {
      const response = await axios.post(
        HraApiEndPoints.SaveHabits,
        formData
      );
      console.log("Data submitted:", formData);
      if(response?.data?.status){
        showProgressSaved(true)
      onNext();
      }else{
       showProgressSaved(false)
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
console.log('habitsdata')
  return (
    <div>
      <div className="space-y-10 sm:space-y-7">
        <p className="text-sm sm:text-lg font-bold">
          Do you currently smoke or have a history of smoking?
        </p>
        <div className="flex gap-4 mt-4">
          <RadioButton
            label="Yes"
            name="smokeHistory"
            value="Y"
            checked={formData.smokeHistory === "Y"}
            onChange={handleChange}
          />
          <RadioButton
            label="No"
            name="smokeHistory"
            value="N"
            checked={formData.smokeHistory === "N"}
            onChange={handleChange}
          />
        </div>
        {formData.smokeHistory === "Y" && (
          <div className="bg-[#F9FAFB] p-4 rounded-md">
            <p className="text-sm sm:text-lg font-bold">Cigarettes per day</p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                minValue={Number(formData.cigaretsPerDay.split("-")[0])}
                maxValue={Number(formData.cigaretsPerDay.split("-")[1])}
                step={1}
                onChange={(data) => handleSliderChange("cigaretsPerDay", data)}
              />
            </div>
            <Separator />
            <p className="text-sm sm:text-lg font-bold">
              Since how long have you been smoking
            </p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                minValue={Number(formData.smokeDuration.split("-")[0])}
                maxValue={Number(formData.smokeDuration.split("-")[1])}
                step={1}
                onChange={(data) => handleSliderChange("smokeDuration", data)}
              />
            </div>
          </div>
        )}

        <Separator />
        <p className="text-sm sm:text-lg font-bold">Do you consume alcohol?</p>
        <div className="flex gap-4 mt-4">
          <RadioButton
            label="Yes"
            name="alcohol"
            value="Y"
            checked={formData.alcohol === "Y"}
            onChange={handleChange}
          />
          <RadioButton
            label="No"
            name="alcohol"
            value="N"
            checked={formData.alcohol === "N"}
            onChange={handleChange}
          />
        </div>
        {formData.alcohol === "Y" && (
          <div className="bg-[#F9FAFB] p-4 rounded-md">
            <p className="text-sm sm:text-lg font-bold">
              Number of drinks per sitting
            </p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                step={1}
                minValue={Number(formData.drinksPerSitting.split("-")[0])}
                maxValue={Number(formData.drinksPerSitting.split("-")[1])}
                onChange={(data) => handleSliderChange("drinksPerSitting", data)}
              />
            </div>
            <Separator />
            <p className="text-sm sm:text-lg font-bold">
              Since how long have you been drinking
            </p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                step={1}
                minValue={Number(formData.drinkDuration.split("-")[0])}
                maxValue={Number(formData.drinkDuration.split("-")[1])}
                onChange={(data) => handleSliderChange("drinkDuration", data)}
              />
            </div>
            <Separator />
            <p className="text-sm sm:text-lg font-bold">
              Number of sittings per week
            </p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                step={1}
                minValue={Number(formData.sittingsPerWeek.split("-")[0])}
                maxValue={Number(formData.sittingsPerWeek.split("-")[1])}
                onChange={(data) => handleSliderChange("sittingsPerWeek", data)}
              />
            </div>
          </div>
        )}

        <Separator />
        <p className="text-sm sm:text-lg font-bold">Tobacco chewing</p>
        <div className="flex gap-4 mt-4">
          <RadioButton
            label="Yes"
            name="tobacoChewing"
            value='Y'
            checked={formData.tobacoChewing === "Y"}
            onChange={handleChange}
          />
          <RadioButton
            label="No"
            name="tobacoChewing"
            value='N'
            checked={formData.tobacoChewing === "N"}
            onChange={handleChange}
          />
        </div>
        {formData.tobacoChewing === "Y" && (
          <div className="bg-[#F9FAFB] p-4 rounded-md">
            <p className="text-sm sm:text-lg font-bold">
              Since how long have you been chewing tobacco
            </p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                step={1}
                minValue={Number(formData.tobacoDuration.split("-")[0])}
                maxValue={Number(formData.tobacoDuration.split("-")[1])}
                onChange={(data) => handleSliderChange("tobacoDuration", data)}
              />
            </div>
          </div>
        )}

        <Separator />
        <p className="text-sm sm:text-lg font-bold">
          Do you experience any issues with your bowel movements?
        </p>
        <div className="flex gap-4 mt-4">
          <RadioButton
            label="Regular"
            value='Y'
             name="bowelMovements"
            onChange={handleChange}
            checked={formData.bowelMovements === "Y"}
          
          />
          <RadioButton
            label="Irregular"
            value='N'
            name="bowelMovements"
            onChange={handleChange}
            checked={formData.bowelMovements === "N"}
           
          />
        </div>

        <Separator />
        <p className="text-sm sm:text-lg font-bold">Sleeping Hours</p>
        <div className="w-3/4 lg:w-1/4 mt-10">
          <MultiSlider
            min={1}
            max={30}
            step={1}
            minValue={Number(formData.bowelMovementsDuration.split("-")[0])}
            maxValue={Number(formData.bowelMovementsDuration.split("-")[1])}
            onChange={(data) => handleSliderChange("bowelMovementsDuration", data)}
          />
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Button type="primary" onClick={handleNextClick}>
          Next: Food Habits
        </Button>
      </div>
    </div>
  );
};

export default HabitTabs;
