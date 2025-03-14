import { useState,useEffect,useCallback,useContext} from "react";
import MultiSlider from "../../../CommonComponents/MultiSlider.jsx/MultiSlider";
import RadioButton from "../../../CommonComponents/RadioButton";
import Separator from "../../../CommonComponents/Separator";
import StarRating from "../../../CommonComponents/StarRating/StarRating";
import Button from "../../../CommonComponents/Button";
import axios from "axios";
import { HraApiEndPoints } from "../../../utils/HraApis";
import { UserId } from "../../../utils/HraApis";
import { DateContext } from "../../../utils/DateProvider";

const StressTab = ({ onNext,showProgressSaved}) => {
   const {selectedDate}=  useContext(DateContext)
  const [formData, setformData] = useState({
    UserId,
    DateOfEntry: selectedDate,
    RecStatus: "p",
    lifeSatisfaction: 0,
    personalLossOrMisfortune: "N",
    stressDuration: "",
    sleepingHours: "",
    workingHoursPerDay: "",
    travellingHoursPerDay: "",
  });

useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://service.healthcapita.com/api/Hra/GetStress?UserId=${UserId}&AssesmentDate=${selectedDate}`
      );

    if (response?.data?.isData) {
      // console.log(data)
      setformData(response?.data?.data);
    } else {
      setformData({
        UserId,
        DateOfEntry: selectedDate,
        RecStatus: "p",
        lifeSatisfaction: 0,
        personalLossOrMisfortune: "N",
        stressDuration: "",
        sleepingHours: "",
        workingHoursPerDay: "",
        travellingHoursPerDay: "",
      });
    }
    
    } catch (error) {
      console.log(error);
    
    }
  };
  fetchData();
}, [selectedDate,UserId]);
  const handleChange = useCallback((e,customName,customValue) => {
    const name = customName || e?.target?.name;
    const value = customValue || e?.target?.value;
    
     setformData((prev) => {
       const updatedFormData = {
         ...prev, [name]: value
       }
       if (name === "personalLossOrMisfortune" && value === "N") {
         updatedFormData.stressDuration=''
         updatedFormData.sleepingHours=''
         updatedFormData.workingHoursPerDay=''
         updatedFormData.travellingHoursPerDay=''
       }
   
        return updatedFormData 
     });
   }, []);
console.log('lifesatisfa',formData.lifeSatisfaction)
  const handleSliderChange = useCallback((field, data) => {
    const formattedValue = `${data.minValue}-${data.maxValue}`;
    setformData((prev) => {
      if (prev[field] !== formattedValue) {
        return { ...prev, [field]: formattedValue };
      }
      return prev; // Avoid re-render if the value is the same
    });
  }, []);
  const HandleNextClick = async () => {
    try {
      const response = await axios.post(
        HraApiEndPoints.SaveStress,formData
      );
      console.log("Stress data submitted:", formData);
      if(response?.data?.status){
        showProgressSaved(true)
      onNext();
      }else{
       showProgressSaved(false)
      }
    } catch (error) {
      console.error("Error submitting stress data:", error);
    }
  };

  return (
    <div>
      <div className="space-y-10 sm:space-y-7">
        <p className="text-sm sm:text-lg font-bold">
          How satisfied are you with your life?
        </p>
        <StarRating
          numberofstars={5}
          initialValue={formData.lifeSatisfaction}
          onStarChange={(value) => handleChange(null, 'lifeSatisfaction', value)}
        />

        <p className="text-sm sm:text-lg font-bold">
          Has there been an event of personal loss or misfortune in the past
          year?
        </p>
        <div className="flex gap-4 mt-4">
          <RadioButton
            label="Yes"
            value='Y'
            name="personalLossOrMisfortune"
            checked={formData.personalLossOrMisfortune === "Y"}
            onChange={handleChange}
          />
          <RadioButton
            label="No"
            value='N'
            name="personalLossOrMisfortune"
            checked={formData.personalLossOrMisfortune === "N"}
            onChange={handleChange}
          />
        </div>

        {formData.personalLossOrMisfortune === "Y" && (
          <div className="bg-[#F9FAFB] p-4 rounded-md">
            <p className="text-sm sm:text-lg font-bold">
              How often are you stressed, anxious, or depressed?
            </p>
            <div className="w-3/4 lg:w-1/4 mt-10">
              <MultiSlider
                min={1}
                max={30}
                minValue={Number(formData.stressDuration.split("-")[0])}
                maxValue={Number(formData.stressDuration.split("-")[1])}
                onChange={(data) => handleSliderChange("stressDuration", data)}
              />
            </div>
            <div className="mt-10 mb-10">
              <Separator />
            </div>
            <p className="text-sm sm:text-lg font-bold">
              How many hours of sleep do you get?
            </p>
            <div className="flex items-center mt-8">
              <p className="text-sm font-semibold">Sleeping Hours</p>
              <div className="w-3/4 lg:w-1/4">
                <MultiSlider
                  min={1}
                  max={10}
                  minValue={Number(formData.sleepingHours.split("-")[0])}
                  maxValue={Number(formData.sleepingHours.split("-")[1])}
                  onChange={(data) => handleSliderChange("sleepingHours", data)}
                />
              </div>
            </div>
            <div className="mt-10 mb-10">
              <Separator />
            </div>
            <p className="text-sm sm:text-lg font-bold">
              Total working hours per day
            </p>
            <div className="flex items-center mt-8">
              <p className="text-sm font-semibold">Working Hours</p>
              <div className="w-3/4 lg:w-1/4">
                <MultiSlider
                  min={1}
                  max={30}
                  minValue={Number(formData.workingHoursPerDay.split("-")[0])}
                maxValue={Number(formData.workingHoursPerDay.split("-")[1])}
                  onChange={(data) =>
                    handleSliderChange("workingHoursPerDay", data)
                  }
                />
              </div>
            </div>
            <div className="mt-10 mb-10">
              <Separator />
            </div>
            <p className="text-sm sm:text-lg font-bold">
              Total travelling hours per day
            </p>
            <div className="flex items-center mt-8">
              <p className="text-sm font-semibold">Travelling Hours</p>
              <div className="w-3/4 lg:w-1/4">
                <MultiSlider
                  min={1}
                  max={10}
                  minValue={Number(formData.travellingHoursPerDay.split("-")[0])}
                  maxValue={Number(formData.travellingHoursPerDay.split("-")[1])}
                  onChange={(data) =>
                    handleSliderChange("travellingHoursPerDay", data)
                  }
                />
              </div>
            </div>
          </div>
        )}

        <hr />
      </div>
      <div className="col-span-12 flex justify-end">
        <Button type="primary" onClick={HandleNextClick}>
          Next: Employment
        </Button>
      </div>
    </div>
  );
};

export default StressTab;
