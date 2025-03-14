import { useState, useEffect, useContext, useRef } from "react";
import { HraAssets } from "../../../assets/Hra/assets";
import Button from "../../../CommonComponents/Button";
import axios from "axios";
import { HraApiEndPoints } from "../../../utils/HraApis";
import { UserId } from "../../../utils/HraApis";
import { DateContext } from "../../../utils/DateProvider";

const BloodPressure = ({ onNext,showProgressSaved }) => {
  const { selectedDate } = useContext(DateContext);
  const [formData, setFormData] = useState({
    systolic: "",
    diastolic: "",
    lastExaminedOn: "",
    AutoId: 0,
    UserId,
    dateOfEntry: selectedDate,
    RecStatus: "p",
  });
  const [error, setError] = useState({});
console.log('hellooooo')
  useEffect(() => {
    const fetchData = async () => {
      try {   
        const response = await axios.get(`https://service.healthcapita.com/api/Hra/GetBloodPressure?UserId=${UserId}&AssesmentDate=${selectedDate}`);
        if (response?.data?.isData) {
          setFormData(response?.data?.data);
        } else {
          setFormData({
            systolic: "",
            diastolic: "",
            lastExaminedOn: "",
            AutoId: 0,
            UserId,
            dateOfEntry: selectedDate,
            RecStatus: "p",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [selectedDate, UserId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
 
    if (name === 'systolic' || name === 'diastolic') {
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
  if(!formData.systolic) newErrors.systolic =  'systolic is required'
  if(!formData.diastolic) newErrors.diastolic = 'diastolic is required'
  
  if(Object.keys(newErrors).length > 0){
    setError(newErrors)
    return
  }
    try {
    const response =  await axios.post(HraApiEndPoints.SaveBloodPressure, formData);
    
      if(response?.data?.status){
        showProgressSaved(true)
        onNext();
        setFormData({});
      }else{
        showProgressSaved(false)
      }
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div className="grid grid-cols-12  min-h-screen">
      <div className="col-span-3 text-center"></div>

      <div className="col-span-4 ">
       
        <img src={HraAssets.BloodPressureWithFlow} alt="Blood Pressure" />
      
      </div>

      <div className="col-span-4 flex items-center">
        <form autoComplete="off" onSubmit={submitHandler} className="w-4/5 mb-28  p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-bold text-gray-700 mb-6">Recent Blood Pressure</h2>
          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.lastExaminedOn ? "text-red-500" : "text-gray-500"
  }`}>Last examined on</label>
            <input
              type="date"
              name="lastExaminedOn"
              value={formData.lastExaminedOn || ''}
              required
              onChange={handleChange}
              error = {error.lastExaminedOn}
              className={`w-full py-2 px-3 border rounded ${
    error.lastExaminedOn ? "border-red-500" : "border-gray-300"
  } bg-transparent text-gray-700 outline-none`}
            />
            {error.lastExaminedOn && <p className='text-red-500 text-xs mt-1'>{error.lastExaminedOn}</p>} 
          </div>

          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.systolic ? "text-red-500" : "text-gray-500"
  }`}>Systolic (upper)</label>
            <input
              type="number"
              name="systolic"
              placeholder="150"
             
              required
              value={formData.systolic}
              onChange={handleChange}
              error = {error.systolic}
              className={`w-full py-2 px-3 border rounded ${
                error.systolic ? "border-red-500" : "border-gray-300"
              } bg-transparent text-gray-700 outline-none`}
            />
             {error.systolic && <p className='text-red-500 text-xs mt-1'>{error.systolic}</p>} 
          </div>

          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.diastolic ? "text-red-500" : "text-gray-500"
  }`}>Diastolic (lower)</label>
            <input
              type="number"
              name="diastolic"
              required
              placeholder="91"
              value={formData.diastolic}
              onChange={handleChange}
              error = {error.diastolic}
              className={`w-full py-2 px-3 border rounded ${
                error.diastolic ? "border-red-500" : "border-gray-300"
              } bg-transparent text-gray-700 outline-none`}
            />
             {error.diastolic && <p className='text-red-500 text-xs mt-1'>{error.diastolic}</p>} 
          </div>
        </form>
      </div>

      <div className="col-span-1 text-center"></div>

      <div className="col-span-12 flex justify-end">
        <Button type="primary" onClick={submitHandler}>
          Next: Blood Sugar
        </Button>
      </div>
    </div>
  );
};

export default BloodPressure;
