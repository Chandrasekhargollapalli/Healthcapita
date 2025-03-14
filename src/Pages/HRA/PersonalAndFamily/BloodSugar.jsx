import { useState,useEffect,useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify"; 
import { HraAssets } from "../../../assets/Hra/assets";
import Button from "../../../CommonComponents/Button";
import { HraApiEndPoints } from "../../../utils/HraApis";
import { UserId } from "../../../utils/HraApis";
import { DateContext } from "../../../utils/DateProvider";


const BloodSugar = ({ onNext,showProgressSaved }) => {
 const {selectedDate}=  useContext(DateContext) 
  const [formData, setFormData] = useState({
    lastExaminedOn:'',
    fastingBloodGlucose:'',
    postprandialGlucose:'',
    AutoId: 0, 
    UserId,
    DateOfEntry: selectedDate,
    RecStatus: "p",
  });
   console.log(formData.DateOfEntry)
  const [error, setError] = useState({});
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://service.healthcapita.com/api/Hra/GetBloodSugar?UserId=${UserId}&AssesmentDate=${selectedDate}`);

      if(response?.data?.isData){
        setFormData(response?.data?.data)
      }else{
setFormData({
  lastExaminedOn:'',
  fastingBloodGlucose:'',
  postprandialGlucose:'',
  AutoId: 0, 
  UserId,
  DateOfEntry: selectedDate,
  RecStatus: "p",
})
      }
      } catch (error) {
        console.log(error);
      
      }
    };
    fetchData();
  }, [selectedDate,UserId]);


  const handleChange = (e) => {
    const { name, value } = e.target;

 if (name === 'fastingBloodGlucose' || name === 'postprandialGlucose') {
      if (/^\d{0,3}$/.test(value)) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    } 
    
    else if (name === 'lastExaminedOn') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  
    if (error[name]) {
      setError((prevError) => ({
        ...prevError,
        [name]: "",
      }));
    }
  };


  const submitHandler = async (e) => {
    e.preventDefault();

    const newErrors ={}
    if(!formData.lastExaminedOn) newErrors.lastExaminedOn = 'Date is required'
    if(!formData.fastingBloodGlucose) newErrors.fastingBloodGlucose =  'systolic is required'
    if(!formData.postprandialGlucose) newErrors.postprandialGlucose = 'diastolic is required'
    
    if(Object.keys(newErrors).length > 0){
      setError(newErrors)
      return
    }

    try {
      const response = await axios.post(
        HraApiEndPoints.SaveBloodSugar,formData
      );
      if(response?.data?.status){
        showProgressSaved(true)
        onNext();
        setFormData({});
      }else{
        showProgressSaved(false)
      }

    } catch (error) {
      console.error("Error submitting blood sugar data:", error);
      toast.error("Failed to submit blood sugar data.");
    }
  };

  return (
    <div className="grid grid-cols-12  min-h-screen">
      <div className="col-span-3 text-center"></div>

      <div className="col-span-4">
        <img src={HraAssets.BloodSugarWithFlow} alt="Blood Sugar" />
      </div>

      <div className="col-span-4 flex items-center">
        <form
          autoComplete="off"
          onSubmit={submitHandler}
          className="w-4/5 p-6 bg-white shadow-lg rounded-lg mb-10"
        >
          <h2 className="text-lg font-bold text-gray-700 mb-6">
            Recent Blood Sugar
          </h2>
          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.lastExaminedOn ? "text-red-500" : "text-gray-500"
  }`} >
              Last Examined On
            </label>
            <input
              type="date"
              name="lastExaminedOn"
              value={formData.lastExaminedOn || ''}
              onChange={handleChange}
              error = {error.lastExaminedOn}
              className={`w-full py-2 px-3 border rounded ${
                error.lastExaminedOn ? "border-red-500" : "border-gray-300"
              } bg-transparent text-gray-700 outline-none`}
              required
            />
            {error.lastExaminedOn && <p className='text-red-500 text-xs mt-1'>{error.lastExaminedOn}</p>} 
          </div>

          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.fastingBloodGlucose ? "text-red-500" : "text-gray-500"
  }`}  >
              Fasting Blood Glucose
            </label>
            <input
              type="number"
              name="fastingBloodGlucose"
              value={formData.fastingBloodGlucose}
              onChange={handleChange}
              error = {error.fastingBloodGlucose}
              placeholder="Enter value"
              className={`w-full py-2 px-3 border rounded ${
                error.fastingBloodGlucose ? "border-red-500" : "border-gray-300"
              } bg-transparent text-gray-700 outline-none`}
              required
            />
             {error.fastingBloodGlucose && <p className='text-red-500 text-xs mt-1'>{error.fastingBloodGlucose}</p>} 
          </div>

          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.postprandialGlucose ? "text-red-500" : "text-gray-500"
  }`} >
              Postprandial Glucose (Post Lunch)
            </label>
            <input
              type="number"
              name="postprandialGlucose"
              value={formData.postprandialGlucose}
              onChange={handleChange}
              placeholder="Enter value"
              className={`w-full py-2 px-3 border rounded ${
                error.postprandialGlucose ? "border-red-500" : "border-gray-300"
              } bg-transparent text-gray-700 outline-none`}
              required
            />
             {error.postprandialGlucose && <p className='text-red-500 text-xs mt-1'>{error.postprandialGlucose}</p>} 
          </div>
        </form>
      </div>

      <div className="col-span-1 text-center"></div>
      <div className="col-span-12 flex justify-end">
        <Button type="primary" onClick={submitHandler}>
          Next: Blood Cholestrol
        </Button>
      </div>
    </div>
  );
};

export default BloodSugar;
