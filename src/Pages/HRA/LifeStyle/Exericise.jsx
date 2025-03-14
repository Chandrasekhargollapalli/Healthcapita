import MultiSlider from "../../../CommonComponents/MultiSlider.jsx";
import RadioButton from "../../../CommonComponents/RadioButton";
import { useState,useEffect,useCallback,useContext } from "react";
import Separator from "../../../CommonComponents/Separator";
import Button from "../../../CommonComponents/Button";
import axios from "axios";
import { HraApiEndPoints } from "../../../utils/HraApis.jsx";
import { UserId } from "../../../utils/HraApis.jsx";
import { DateContext } from "../../../utils/DateProvider.jsx";

const ExerciseTab = ({ onNext,showProgressSaved}) => {
  const {selectedDate}=  useContext(DateContext)
  const [formData, setformData] = useState({
    meditation: "N",
    meditationDuration: "",
    yoga: "N",
    yogaDuration: "",
    yogaTimesInWeek: "",
    sedentaryActivities: "N",
    physicalOrMobility: "N",
    UserId,
    DateOfEntry:selectedDate,
    RecStatus: "p"
  });
  
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://service.healthcapita.com/api/Hra/GetExercise?UserId=${UserId}&AssesmentDate=${selectedDate}`
      );
    
    if(response?.data?.isData){
    setformData(response?.data?.data)
    }else{
setformData({
  meditation: "N",
  meditationDuration: "",
  yoga: "N",
  yogaDuration: "",
  yogaTimesInWeek: "",
  sedentaryActivities: "N",
  physicalOrMobility: "N",
  UserId,
  DateOfEntry: selectedDate,
  RecStatus: "p"
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
        
        if (name === "meditation" && value === "N") {
          updatedFormData.meditationDuration = '';
        }else if(name === 'yoga' && value === "N"){
updatedFormData.yogaDuration = ''
updatedFormData.yogaTimesInWeek=''
        }
         return updatedFormData 
      });
    }, []);
  
console.log('exerrsie')
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
        HraApiEndPoints.SaveExercise,formData
      );
      console.log("Data saved:",formData );
      if(response?.data?.status){
        showProgressSaved(true)
      onNext();
      }else{
       showProgressSaved(false)
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      <div className="space-y-10 sm:space-y-7">
        <p className="text-sm sm:text-lg font-bold">Are you doing meditation?</p>
        <div className="flex gap-4 mt-4">
          <RadioButton
            label="Yes"
            value="Y"
            name='meditation'
            checked={formData.meditation === "Y"}
            onChange={handleChange}
          />
          <RadioButton
            label="No"
            value="N"
            name='meditation'
            checked={formData.meditation === "N"}
            onChange={handleChange}
          />
        </div>
        {formData.meditation === "Y" && (
          <div className="bg-[#F9FAFB] p-4 rounded-md">
            <p className="text-sm sm:text-lg font-bold">Duration</p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                minValue={Number(formData.meditationDuration.split("-")[0])}
                maxValue={Number(formData.meditationDuration.split("-")[1])}
                onChange={(data) => handleSliderChange("meditationDuration", data)}
              />
            </div>
          </div>
        )}

        <div className="mt-10 mb-10">
          <Separator />
        </div>

        <p className="text-sm sm:text-lg font-bold">Are you doing yoga?</p>
        <div className="flex gap-4 mt-4">
          <RadioButton
            label="Yes"
            name='yoga'
            value='Y'
            checked={formData.yoga === "Y"}
            onChange={handleChange}
          />
          <RadioButton
            label="No"
            value='N'
            name='yoga'
            checked={formData.yoga === "N"}
            onChange={handleChange}
          />
        </div>

        {formData.yoga === "Y" && (
          <div className="bg-[#F9FAFB] p-4 rounded-md">
            <p className="text-sm sm:text-lg font-bold">Duration</p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                minValue={Number(formData.yogaDuration.split("-")[0])}
                maxValue={Number(formData.yogaDuration.split("-")[1])}
                onChange={(data) => handleSliderChange("yogaDuration", data)}
              />
            </div>
            <div className="mt-10 mb-10">
              <Separator />
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-md">
              <p className="text-sm sm:text-lg font-bold">
                How many times in a week do you get 30 minutes or more for physical activity?
              </p>
              <div className="w-3/4 lg:w-1/4 mt-10">
                <MultiSlider
                  min={1}
                  max={30}
                  minValue={Number(formData.yogaTimesInWeek.split("-")[0])}
                  maxValue={Number(formData.yogaTimesInWeek.split("-")[1])}
                  onChange={(data) => handleSliderChange("yogaTimesInWeek", data)}
                />
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 mb-10">
          <Separator />
        </div>

        <p className="text-sm sm:text-lg font-bold">
          I enjoy sedentary activities rather than physical activity.
        </p>
        <div className="flex gap-4 mt-4">
          <RadioButton
            label="Yes"
            name='sedentaryActivities'
            value='Y'
            checked={formData.sedentaryActivities === "Y"}
            onChange={handleChange}
          />
          <RadioButton
            label="No"
            value='N'
            name='sedentaryActivities'
            checked={formData.sedentaryActivities === "N"}
            onChange={handleChange}
          />
        </div>

        <div className="mt-10 mb-10">
          <Separator />
        </div>

        <p className="text-sm sm:text-lg font-bold">
          Do you have any physical disabilities or mobility challenges?
        </p>
        <div className="flex space-x-10">
          <RadioButton
            label="Yes"
            name='physicalOrMobility'
            value='Y'
            checked={formData.physicalOrMobility === "Y"}
            onChange={handleChange}
          />
          <RadioButton
            label="No"
            name='physicalOrMobility'
            value='N'
            checked={formData.physicalOrMobility === "N"}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-span-12 flex justify-end">
        <Button type="primary" onClick={handleNextClick}>
          Next: Stress
        </Button>
      </div>
    </div>
  );
};

export default ExerciseTab;
