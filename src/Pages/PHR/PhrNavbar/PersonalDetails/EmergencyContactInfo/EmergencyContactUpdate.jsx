import { useNavigate } from "react-router-dom";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import { useState, useEffect } from "react";
import axios from "axios";

const EmergencyContactUpdate = () => {
  const navigate = useNavigate();
  const id=10
  const [loading,setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    countryId: '',
    relation: "",
    mobile: "",
    emailId: "",
    userId:id
  });

  const closePage = () => {
    navigate("/phr");
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://service.healthcapita.com/api/PHR/GetEmergencyContactInformationDetailById?UserId=${id}`);
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
  const handleAddNewEntry = () => {
    setFormData({
      name: "",
      countryId: '',
      relation: "",
      mobile: "",
      emailId: "",
      userId: id,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e)  => {
    e.preventDefault();
    // You can handle form submission here (e.g., make an API call)
   try{
const response = await axios.post('https://service.healthcapita.com/api/PHR/SaveEmergencyContactInformation',formData)
   }catch(error){
    console.log(error)
   }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
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

        {/* Main Section */}
        <div className="px-2 md:p-5 xl:px-10 lg:px-4 sm:px-4 w-full">
          <div className="pt-3 sm:pt-0 flex flex-col sm:flex-row sm:justify-between sm:mx-3 sm:items-center gap-3">
            <div className="flex flex-row sm:justify-between items-center gap-2">
              <img onClick={closePage} className="text-black sm:w-6 cursor-pointer" src={PhrAssets.ArrowLeft} alt="" />
              <p className="border h-5 sm:h-6 sm:border-l-0 border-l-0 border-gray-400"></p>
              <h2 className="md:text-xl text-base lg:text-2xl leading-5 font-semibold">Emergency Contact</h2>
              <img className="lg:mt-1 h-5 w-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6" src={PhrAssets.InfoCircle} alt="" />
            </div>
          </div>
          <p className="mx-2 border-b-2 border-gray-100 mt-4"></p>
        </div>

        <div className="py-4 px-4 sm:px-6 md:px-4 lg:px-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-normal">
                  Name
                </label>
                <input type="text"     name="name"
                  value={formData.name}
                  onChange={handleChange}  placeholder="Enter your name" className="border border-gray-300 py-2 px-3 rounded-md focus:outline-none w-3/4" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="relation" className="font-normal">
                  Relation
                </label>
                <input type="text"     name="relation"
                  value={formData.relation}
                  onChange={handleChange} placeholder="Enter Relation" className="border border-gray-300 py-2 px-3 rounded-md focus:outline-none w-3/4" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mobilenumber" className="font-normal">
                  Mobile Number
                </label>
                <div className="flex gap-2 w-3/4">
                  <select   className="border border-gray-300 py-2 px-3 rounded-md w-15 focus:outline-none">
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                    <option>+61</option>
                    <option>+81</option>
                  </select>
                  <input type="number" value={formData.mobile} name='mobile'  onChange={handleChange} placeholder="Enter Mobile Number" className="border border-gray-300 py-2 px-3 flex-1 rounded-md focus:outline-none w-3/4" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="font-normal">
                  Country
                </label>
                <select  name="countryId"
                    value={formData.countryId}
                    onChange={handleChange} className="border border-gray-300 py-2 px-3 rounded-md w-3/4 focus:outline-none">
                  <option value='1'>Select</option>
                  <option value='2' >India</option>
                  <option value='3'>USA</option>
                  <option value='4'>UK</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-normal">
                  Email
                </label>
                <input type="email"  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange} placeholder="Enter Your Email" className="border border-gray-300 py-2 px-3 rounded-md focus:outline-none w-3/4" />
              </div>
            </div>
            <div>
              <button className="text-green-700 font-semibold" onClick={handleAddNewEntry} >+ Add</button>
            </div>
          </form>
        </div>

        <div className="relative">
          <p className="mx-14 border-b-2 border-gray-100 my-5"></p>
          <button className="bg-[#1C9401] text-white font-medium tracking-wide text-lg py-3 px-8 rounded-full absolute -bottom-20 right-8 mb-0 mr-4" onClick={handleSubmit} >Update Details</button>
        </div>
      </div>
    </>
  );
};

export default EmergencyContactUpdate;
