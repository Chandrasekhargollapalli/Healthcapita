import { useState, useEffect,useContext } from "react";
import { HraAssets } from "../../../assets/Hra/assets";
import Button from "../../../CommonComponents/Button";
import { UserId } from "../../../utils/HraApis";
import axios from "axios";
import { HraApiEndPoints } from "../../../utils/HraApis";
import { DateContext } from "../../../utils/DateProvider";
        
const BloodCholestrol = ({ onNext,showProgressSaved }) => {
  
  const {selectedDate}=  useContext(DateContext)
 
  const [formData, setFormData] = useState({
    lastExaminedOn: "",
    cholesterol: "",
    hdl: "",
    ldl: "",
    triglyceride: "",
    AutoId: 0,
    UserId,
    DateOfEntry:selectedDate,
    RecStatus: "p",
  });

  const [error, setError] = useState({});
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://service.healthcapita.com/api/Hra/GetBloodcholesterol?UserId=${UserId}&AssesmentDate=${selectedDate}`);
       console.log(response)
        if (response?.data?.isData) {
          setFormData(response?.data?.data);
        } else {
          setFormData({
            lastExaminedOn: "",
            cholesterol: "",
            hdl: "",
            ldl: "",
            triglyceride: "",
            AutoId: 0,
            UserId,
            DateOfEntry: selectedDate,
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

 if (name === 'cholesterol' || name === 'hdl' || name==='ldl' || name === 'triglyceride') {
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
    if(!formData.cholesterol) newErrors.cholesterol =  'cholesterol is required'
    if(!formData.triglyceride) newErrors.triglyceride = 'triglyceride is required'
    if(!formData.hdl) newErrors.hdl = 'hdl is required'
    if(!formData.ldl) newErrors.ldl = 'ldl is required'
    if(Object.keys(newErrors).length > 0){
      setError(newErrors)
      return
    }
    try {
      const response = await axios.post(HraApiEndPoints.SaveBloodCholestrol, formData);
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

      <div className="col-span-4">
        <img src={HraAssets.BloodCholesterolicWithFlow} alt="Blood Cholestrol" />
      </div>

      <div className="col-span-4 flex items-center mb-7">
        <form autoComplete="off" onSubmit={submitHandler} className="w-4/5 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-bold text-gray-700 mb-6">Recent Blood Cholesterol Level</h2>

          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.lastExaminedOn ? "text-red-500" : "text-gray-500"
  }`} >Last examined on</label>
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
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.cholesterol ? "text-red-500" : "text-gray-500"
  }`} >Cholesterol Level</label>
            <input
              type="number"
              name="cholesterol"
              placeholder="150"
              required
              value={formData.cholesterol || ''}
              onChange={handleChange}
              error = {error.cholesterol}
              className={`w-full py-2 px-3 border rounded ${
    error.cholesterol ? "border-red-500" : "border-gray-300"
  } bg-transparent text-gray-700 outline-none`}
            />
              {error.cholesterol && <p className='text-red-500 text-xs mt-1'>{error.cholesterol}</p>} 
          </div>

          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.hdl ? "text-red-500" : "text-gray-500"
  }`} >Hdl</label>
            <input
              type="number"
              name="hdl"
              required
              placeholder="91"
              value={formData.hdl || ''}
              onChange={handleChange}
              error = {error.hdl}
              className={`w-full py-2 px-3 border rounded ${
    error.hdl ? "border-red-500" : "border-gray-300"
  } bg-transparent text-gray-700 outline-none`}
            />
              {error.hdl && <p className='text-red-500 text-xs mt-1'>{error.hdl}</p>} 
          </div>
          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.ldl ? "text-red-500" : "text-gray-500"
  }`} >Ldl</label>
            <input
              type="number"
              name="ldl"
              required
              placeholder="91"
              value={formData.ldl || ''}
              onChange={handleChange}
              error = {error.ldl}
              className={`w-full py-2 px-3 border rounded ${
    error.ldl ? "border-red-500" : "border-gray-300"
  } bg-transparent text-gray-700 outline-none`}
            />
              {error.ldl && <p className='text-red-500 text-xs mt-1'>{error.ldl}</p>} 
          </div>
          <div className="relative mb-6">
            <label className={`block  absolute -top-2 left-4 bg-white px-1 text-xs ${error.triglyceride ? "text-red-500" : "text-gray-500"
  }`} >Triglyceride</label>
            <input
              type="number"
              name="triglyceride"
              required
              placeholder="91"
              value={formData.triglyceride || ''}
              onChange={handleChange}
              error = {error.triglyceride}
              className={`w-full py-2 px-3 border rounded ${
    error.triglyceride ? "border-red-500" : "border-gray-300"
  } bg-transparent text-gray-700 outline-none`}
            />
              {error.triglyceride && <p className='text-red-500 text-xs mt-1'>{error.triglyceride}</p>} 
          </div>
        </form>
      </div>

      <div className="col-span-1 text-center"></div>

      <div className="col-span-12 flex justify-end">
        <Button type="primary" onClick={submitHandler}>
          Next:   Family History
        </Button>
      </div>
    </div>
  );
};

export default BloodCholestrol;
