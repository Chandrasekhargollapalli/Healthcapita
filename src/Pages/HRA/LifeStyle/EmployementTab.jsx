import MultiSlider from "../../../CommonComponents/MultiSlider.jsx/MultiSlider";
import Separator from "../../../CommonComponents/Separator";
import Button from "../../../CommonComponents/Button";
import StarRating from "../../../CommonComponents/StarRating/StarRating";
import { useState, useEffect,useCallback,useContext } from "react";
import { HraAssets } from "../../../assets/Hra/assets";
import axios from "axios";
import { HraApiEndPoints } from "../../../utils/HraApis";
import { UserId } from "../../../utils/HraApis";
import { DateContext } from "../../../utils/DateProvider";


const EmploymentTab = ({ onNextStep,showProgressSaved}) => {
  const {selectedDate}=  useContext(DateContext)
  const [formData, setFormData] = useState({
    UserId,
    DateOfEntry: selectedDate,
    RecStatus: "p",
    jobSatisfaction: 1,
    workingHoursWeek: "",
    workingHoursEmployerExpectation: "",
  });

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://service.healthcapita.com/api/Hra/GetEmployment?UserId=${UserId}&AssesmentDate=${selectedDate}`
      );
      
    if(response?.data?.isData){
    setFormData(response?.data?.data)
    }else{
setFormData({
  UserId,
  DateOfEntry: selectedDate,
  RecStatus: "p",
  jobSatisfaction: 1,
  workingHoursWeek: "",
  workingHoursEmployerExpectation: "",
})
    }
    } catch (error) {
      console.log(error);
    
    }
  };
  fetchData();
}, [selectedDate,UserId]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSliderChange = useCallback((field, data) => {
    const formattedValue = `${data.minValue}-${data.maxValue}`;
    setFormData((prev) => {
      if (prev[field] !== formattedValue) {
        return { ...prev, [field]: formattedValue };
      }
      return prev; 
    });
  }, []);

 
  const handleNextClick = async () => {
    try {
      const response = await axios.post(
        HraApiEndPoints.SaveEmployment,
        formData
      );
      console.log("Employment Data Submitted: ", formData);
     
      if(response?.data?.status){
        showProgressSaved(true)
        onNextStep(); 
      }else{
        showProgressSaved(false)
      }
    } catch (error) {
      console.error("Error submitting employment data: ", error);
    }
  };


  const starRatingImage = () => {
    switch (formData.jobSatisfaction) {
      case 1:
        return HraAssets.StarRating1
      case 2:
        return HraAssets.StarRating1;
      case 3:
        return HraAssets.StarRating3;
      case 4:
        return HraAssets.StarRating4;
      case 5:
        return HraAssets.StarRating5;
      default:
        return HraAssets.StarRating1;
    }
  };

 
console.log('employement')
  return (
    <div className="p-4 rounded-md">
      <p className="text-sm sm:text-lg font-bold mb-4">
        Are you satisfied with your current job?
      </p>
      <img
        className="p-4 mb-7"
        src={starRatingImage()}
        alt={`Job satisfaction rating: ${formData.jobSatisfaction} stars`}
      />
      <StarRating
        numberofstars={5}
        initialValue={formData.jobSatisfaction}
        onStarChange={(value) => handleChange("jobSatisfaction", value)}
        message={false}
      />
      <div className="mt-10 mb-10">
        <Separator />
      </div>

      <p className="text-sm sm:text-lg font-bold">
        How many hours do you work in a week?
      </p>
      <div className="w-3/4 lg:w-1/4 mt-10">
        <MultiSlider
          min={1}
          max={30}
          minValue={Number(formData.workingHoursWeek.split("-")[0])}
                maxValue={Number(formData.workingHoursWeek.split("-")[1])}
          onChange={(value) => handleSliderChange("workingHoursWeek", value)}
        />
      </div>
      <div className="mt-10 mb-10">
        <Separator />
        <p className="text-sm sm:text-lg font-bold">
          How many hours does your employer expect you to work in a week?
        </p>
        <div className="w-3/4 lg:w-1/4 mt-10">
          <MultiSlider
            min={1}
            max={30}
            minValue={Number(formData.workingHoursEmployerExpectation.split("-")[0])}
                maxValue={Number(formData.workingHoursEmployerExpectation.split("-")[1])}
            onChange={(value) =>
              handleSliderChange("workingHoursEmployerExpectation", value)
            }
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end p-10">
        <Button type="primary" onClick={handleNextClick}>
          Next: Medical & Surgery
        </Button>
      </div>
    </div>
  );
};

export default EmploymentTab;
