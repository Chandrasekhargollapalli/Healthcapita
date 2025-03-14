import { useNavigate } from "react-router-dom";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import Separator from "../../../../../CommonComponents/Separator";
import { useState,useEffect } from "react";
import axios from "axios";
const FamilyDetailsUpdate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    relationShip: "",
    gender: "",
    cityId: "",
    otherCity: "",
    countryId: "",
    stateId: "",
    otherState: "",
    pobox: "",
    address: "",
    email: "",
    dateOfBirth: "",
    age: "",
    countryCode: "",
    mobile: "",
    isPasswordProtected: false,
    isDisplayUnderSummary: false,
  });
  const [loading,setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [sameAsMemberAddress, setSameAsMemberAddress] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://service.healthcapita.com/api/PHR/GetFamilyContactDetailById?UserId=2`);
   
    if (response?.data?.isData === true) {
      setFormData(response?.data?.data);
    }
    setLoading(false);
  } catch (err) {
      console.log(err)
      }
    };
    fetchData();
  }, []);
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

  const fetchMemberAddress = async () => {
    try {
      const response = await axios.get("https://service.healthcapita.com/api/PHR/GetFamilyContactAddressById?UserId=12")
      // const data = await response.json();

      console.log('response....',response?.data?.isData)
     
      setFormData((prev) => ({
        ...prev,
        countryId: response?.data?.data?.countryId,
        cityId: response?.data?.data?.cityId,
        stateId:response?.data?.data?.stateId ,
        pobox: response?.data?.data?.pobox,
        address: response?.data?.data?.address,
      }));
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSameAsMemberAddress(checked);

    if (checked) {
      fetchMemberAddress();
    } else {
      // Allow user to enter address manually
      setFormData((prev) => ({
        ...prev,
        countryId: "",
        cityId: "",
        stateId: "",
        pobox: "",
        address: "",
      }));
    }
  };
  const handleSubmit = async (e)  => {
    e.preventDefault();
    // You can handle form submission here (e.g., make an API call)
   try{
const response = await axios.post('https://service.healthcapita.com/api/PHR/SaveFamilyDetails',formData)
console.log(response)
   }catch(error){
    console.log(error)
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
              <h2 className="md:text-xl text-base lg:text-2xl leading-5 font-semibold">Family Details</h2>
              <img className="lg:mt-1 h-5 w-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6" src={PhrAssets.InfoCircle} alt="" />
            </div>
          </div>
          <p className="mx-2 border-b-2 border-gray-100 mt-4"></p>
        </div>

        <div className="py-4 px-4 sm:px-6 md:px-4 lg:px-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-2">
                <label>Name</label>
                <input type="text"  name="name"
                  value={formData.name}
                  onChange={handleChange} placeholder="Enter your name" className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label>Date Of Birth</label>
                <input type="date" value={formData.dateOfBirth} onChange={handleChange} name='dateOfBirth' className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label>Gender</label>
                <select name="gender"
                    value={formData.gender}
                    onChange={handleChange} className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none">
                <option value="">Select gender</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="o">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label>Relation</label>
                <input type="text" name="relation"
                    value={formData.relation}
                    onChange={handleChange} placeholder="Enter Relation" className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label>His/Her Relationship</label>
                <input type="text" name="relationShip"
                    value={formData.relationShip}
                    onChange={handleChange} className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label>Mobile No</label>
                <input name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}  type="text" placeholder="Enter Mobile No" className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input name="email"
                    value={formData.email}
                    onChange={handleChange}  type="text" placeholder="Enter Email" className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none" />
              </div>
            </div>
            <Separator />

            <p className="font-semibold py-3">Address</p>
            <div className="flex gap-3">
              <input type="checkbox" checked={sameAsMemberAddress} onChange={handleCheckboxChange} />
              <label htmlFor="">Same as Member Address</label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-2">
                <label>Country</label>
                <select  value={formData.countryId}
                  onChange={handleChange}
                  disabled={sameAsMemberAddress}
                    name="countryId" className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none">
                <option value="">Select Country</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">UK</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
              <label htmlFor="area">Area</label>
                  <select
                    value={formData.cityId}
                    disabled={sameAsMemberAddress}
                    onChange={handleChange}
                    name="cityId"
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none"
                  >
                    <option value="">Select area</option>
                    <option value="1">A Ali</option>
                    <option value="2">JNTU</option>
                    <option value="3">Other</option>
                  </select>
              </div>
              <div className="flex flex-col gap-2">
                <label>Governate</label>
                <select  value={formData.stateId}
                 disabled={sameAsMemberAddress}
                onChange={handleChange}
                    name="stateId" className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none">
                <option value="1">Northern</option>
                    <option value="2">Southern</option>
                    <option value="3">Other</option>
                </select>
              </div>
          
              <div className="flex flex-col gap-2">
                <label>P.O Box</label>
                <input  name="pobox"
                 disabled={sameAsMemberAddress}
                    value={formData.pobox}
                    onChange={handleChange} type="text" placeholder="Enter Relation" className="border border-gray-300 py-1 px-3 rounded-md w-4/5 focus:outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label>Address</label>
                <input   name="address"
                 disabled={sameAsMemberAddress}
                  value={formData.address}
                  onChange={handleChange} type="text" placeholder="Enter Relation" className="border border-gray-300 py-1 px-3 rounded-md w-full focus:outline-none" />
              </div>
            </div>
          </form>
        </div>

        <div className="relative">
          <p className="mx-14 border-b-2 border-gray-100 my-5"></p>
          <button onClick={handleSubmit} className="bg-[#1C9401] text-white font-medium tracking-wide text-lg py-3 px-8 rounded-full absolute -bottom-20 right-8 mb-0 mr-4">Update Details</button>
        </div>
      </div>
    </>
  );
};

export default FamilyDetailsUpdate;
