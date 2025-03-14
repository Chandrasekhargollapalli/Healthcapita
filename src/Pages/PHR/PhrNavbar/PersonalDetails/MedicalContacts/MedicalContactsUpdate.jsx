import { useNavigate } from "react-router-dom";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import { useState, useEffect } from "react";
import axios from "axios";

const MedicalContactsUpdate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const id = 10;
  const [formData, setFormData] = useState({
    medicalContactId: '',
    userId: id,
    medicalContactTypeId: '',
    name: "",
    countryId: '',
    mobile: "",
    email: "",
    experience: '',
    recStatus: true,
    specializationId: '',
    otherSpecializationName: "",
  });

  const handleAddNewEntry = () => {
    setFormData({
      medicalContactId: '',
      userId: id,
      medicalContactTypeId: 0,
      name: "",
      countryId: '',
      mobile: "",
      email: "",
      experience: '',
      recStatus: true,
      specializationId: '',
      otherSpecializationName: "",
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://service.healthcapita.com/api/PHR/GetMedicalContactById?UserId=${id}`);
        if (response?.data?.isData === true) {
          console.log('response.....',response?.data?.data)
          setFormData(response?.data?.data);
        }
        setLoading(false);
      } catch (err) {
     
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  const closePage = () => {
    navigate("/phr");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://service.healthcapita.com/api/PHR/SaveMedicalContact",
        formData
      );

    } catch (error) {
      console.error("Error saving medical contact:", error);
   
    }
  };
  
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
    
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 sm:px-6 md:px-4 lg:px-12 bg-[#001940] shadow-md w-full">
          <div className="flex items-center space-x-3">
            <img src={PhrAssets.PhrIcon} alt="Logo" className="w-8 h-8" />
            <p className="border border-r-0 h-6 border-white"></p>
            <h2 className="md:text-3xl text-xl font-semibold text-white">Edit Personal Health Record</h2>
          </div>

          <button onClick={closePage} className="text-white text-xl font-semibold tracking-wide">
            X <span className="hidden md:inline">Close</span>
          </button>
        </header>

      
        <div className="px-2 md:p-5 xl:px-10 lg:px-4 sm:px-4 w-full">
     
          <div className="pt-3 sm:pt-0 flex flex-col sm:flex-row sm:justify-between sm:mx-3 sm:items-center gap-3">
            <div className="flex flex-row sm:justify-between items-center gap-2">
              <img onClick={closePage} className="text-black sm:w-6 cursor-pointer" src={PhrAssets.ArrowLeft} alt="" />
              <p className="border h-5 sm:h-6 sm:border-l-0 border-l-0 border-gray-400"></p>
              <h2 className="md:text-xl text-base lg:text-2xl leading-5 font-semibold">Medical Contacts</h2>
              <img className="lg:mt-1 h-5 w-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6" src={PhrAssets.InfoCircle} alt="" />
            </div>
          </div>
          <p className="mx-2 border-b-2 border-gray-100 mt-4"></p>
        </div>

       
        <div className="py-4 px-4 sm:px-6 md:px-4 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
         
            <div className="flex flex-col gap-2">
              <label className="font-normal">Medical Contact Type</label>
              <select   name="medicalContactTypeId"
                    value={formData.medicalContactTypeId}
                    onChange={handleChange}  className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none">
                <option value="">Select</option>
                <option value="1">Family Physician</option>
              </select>
            </div>

         
            <div className="flex flex-col gap-2">
              <label className="font-normal">Name</label>
              <input type="text" placeholder="Enter your name" name="name"
                    value={formData.name}
                    onChange={handleChange}  className="border border-gray-300 py-1 px-3 rounded-md focus:outline-none w-4/5" />
            </div>

            
            <div className="flex flex-col gap-2">
              <label className="font-normal">Specialization</label>
              <select name="specializationId"
                    value={formData.specializationId}
                    onChange={handleChange}  className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none">
                <option value="">Select</option>
                <option value="Dentist">Dentist</option>
                <option value="Neurologist">Neurologist</option>
              </select>
            </div>

       
            <div className="flex flex-col gap-2">
              <label className="font-normal">Since How Many Years</label>
              <input type="text"  name="experience"
                    value={formData.experience}
                    onChange={handleChange} placeholder="Enter the years" className="border border-gray-300 py-1 px-3 rounded-md focus:outline-none w-4/5" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-normal">Mobile Number</label>
              <div className="flex gap-2 w-10/12">
                <select className="border border-gray-300 py-1 px-3 rounded-md w-15 focus:outline-none">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+81">+81</option>
                </select>
                <input type="number"  name="mobile"
                    value={formData.mobile}
                    onChange={handleChange} placeholder="Enter Mobile Number" className="border border-gray-300 py-1 px-3 flex-1 rounded-md focus:outline-none w-4/5" />
              </div>
            </div>

        
            <div className="flex flex-col gap-2">
              <label className="font-normal">Country</label>
              <select  name="countryId"
                    value={formData.countryId}
                    onChange={handleChange} className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none">
                <option value="">Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>

          
            <div className="flex flex-col gap-2">
              <label className="font-normal">Email</label>
              <input name="email"
                    value={formData.email}
                    onChange={handleChange} type="email" placeholder="Enter Your Email" className="border border-gray-300 py-1 px-3 rounded-md focus:outline-none w-4/5" />
            </div>
          </div>

          <div className="my-3">
            <button onClick={handleAddNewEntry} className="text-green-700 font-semibold">+ Add</button>
          </div>
        </div>

    
        <div className="relative">
          <p className="mx-14 border-b-2 border-gray-100 my-5"></p>

          <button onClick={handleSubmit} className="bg-[#1C9401] text-white font-medium tracking-wide text-lg py-3 px-8 rounded-full absolute -bottom-20 right-8 mb-0 mr-4">Update Details</button>
        </div>
      </div>
    </>
  );
};

export default MedicalContactsUpdate;
