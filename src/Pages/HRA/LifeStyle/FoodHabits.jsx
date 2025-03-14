import { useState,useCallback,useEffect,useContext } from "react";
import MultiSlider from "../../../CommonComponents/MultiSlider.jsx/MultiSlider";
import RadioButton from "../../../CommonComponents/RadioButton";
import Separator from "../../../CommonComponents/Separator";
import Button from "../../../CommonComponents/Button";
import axios from "axios";
import { HraApiEndPoints } from "../../../utils/HraApis";
import { UserId } from "../../../utils/HraApis";
import { DateContext } from "../../../utils/DateProvider";

const FoodHabits = ({ onNext,showProgressSaved }) => {
  const {selectedDate}=  useContext(DateContext)
  const [formData, setformData] = useState({
    UserId,
    dateOfEntry: selectedDate,
    RecStatus: "p",
    breakfast: "N",
    servingsPerDay: "",
    frequencyInWeek: "",
    averageMealsPerDay: "",
    waterConsulptionPerDay: "",
  });

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://service.healthcapita.com/api/Hra/GetFoodHabit?UserId=${UserId}&AssesmentDate=${selectedDate}`
      );
      
  
    if(response?.data?.isData){
    setformData(response?.data?.data)
    }else{
setformData({
  UserId,
  dateOfEntry: selectedDate,
  RecStatus: "p",
  breakfast: "N",
  servingsPerDay: "",
  frequencyInWeek: "",
  averageMealsPerDay: "",
  waterConsulptionPerDay: "",
})
    }
    } catch (error) {
      console.log(error);
    
    }
  };
  fetchData();
}, [selectedDate,UserId]);

console.log('foodhabits')
const handleChange = useCallback((e) => {
    const {name,value} = e.target
    setformData((prev) => {
      const updatedFormData = {
        ...prev, [name]: value
      }
      console.log('updated...',updatedFormData)
      if (name === "breakfast" && value === "N") {
        updatedFormData.servingsPerDay = ''
        updatedFormData.frequencyInWeek = ''
        updatedFormData.averageMealsPerDay = ''
        updatedFormData.waterConsulptionPerDay = ''
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
        HraApiEndPoints.SaveFoodHabits,
        formData
      );
      console.log(formData);
      if(response?.data?.status){
        showProgressSaved(true)
      onNext();
      }else{
       showProgressSaved(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="space-y-10 sm:space-y-7">
        <p className="text-sm sm:text-lg font-bold">
          Are you taking breakfast every day ?
        </p>
        <div className="flex gap-4 mt-4">
          <RadioButton
            label="Yes"
            value='Y'
            name='breakfast'
            checked={formData.breakfast === "Y"}
            onChange={handleChange}
          />
          <RadioButton
            label="No"
             value='N'
            name='breakfast'
            checked={formData.breakfast === "N"}
            onChange={handleChange}
          />
        </div>
        {formData.breakfast === "Y" && (
          <div className="bg-[#F9FAFB] p-4 rounded-md">
            <p className="text-sm sm:text-lg font-bold">
              In a day how many servings of foods you eat that are high in
              cholesterol or fat such as cheese, fried foods?
            </p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                step={1}
                minValue={Number(formData.servingsPerDay.split("-")[0])}
                maxValue={Number(formData.servingsPerDay.split("-")[1])}
                onChange={(data) => handleSliderChange("servingsPerDay", data)}
              />
            </div>
            <div className="mt-10 mb-10">
              <Separator />
            </div>
            <p className="text-sm sm:text-lg font-bold">
              Frequency of having junk food in week
            </p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                minValue={Number(formData.frequencyInWeek.split("-")[0])}
                maxValue={Number(formData.frequencyInWeek.split("-")[1])}
                onChange={(data) => handleSliderChange("frequencyInWeek", data)}
              />
            </div>
            <div className="mt-10 mb-10">
              <Separator />
              <p className="text-sm sm:text-lg font-bold">
                On the average how many meals do you consume per day
              </p>
              <div className="w-3/4 lg:w-1/4 mt-10">
                <MultiSlider
                  min={1}
                  max={30}
                  minValue={Number(formData.averageMealsPerDay.split("-")[0])}
                  maxValue={Number(formData.averageMealsPerDay.split("-")[1])}
                  onChange={(data) =>
                    handleSliderChange("averageMealsPerDay", data)
                  }
                />
              </div>
              <div className="mt-10 mb-10">
                <Separator />
              </div>
              <p className="text-sm sm:text-lg font-bold">
                On the average, how many glasses of water do you consume per day
              </p>
              <div className="w-3/4 lg:w-1/4 mt-10">
                <MultiSlider
                  min={1}
                  max={30}
                  minValue={Number(formData.waterConsulptionPerDay.split("-")[0])}
                maxValue={Number(formData.waterConsulptionPerDay.split("-")[1])}
                  onChange={(data) =>
                    handleSliderChange("waterConsulptionPerDay", data)
                  }
                />
              </div>
            </div>
          </div>
        )}
        <hr />
      </div>
      <div className="col-span-12 flex justify-end">
        <Button type="primary" onClick={handleNextClick}>
          Next : Exercise
        </Button>
      </div>
    </div>
  );
};

export default FoodHabits;
