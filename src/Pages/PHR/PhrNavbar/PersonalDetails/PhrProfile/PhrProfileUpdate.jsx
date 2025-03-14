import { useState,useEffect} from "react";
import PhrUpdateHeader from "../../../../../CommonComponents/PhrUpdateHeader/PhrUpdateHeader";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import axios from "axios";

const PhrProfileUpdate = () => {
  const id =12
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateofBirth: "",
    gender: "",
    email: "",
    mobile: "",
    phone: "",
    height: "",
    weight: "",
    BloodGroupType : "",
    maritalStatusId: "",
    spouseName: "",
    noOfChildren: "",
    address: "",
    pinCode: "",
    countryId: "", 
    stateId: "",
    cityId: "",
    rhesusFactor:"",
    userId:id,
    OtherCity:'kakinada',
    OtherState:'east godavari',
    MembershipNo:'MembershipNo',
    AlternateEmail:'chandrasekhargollapalli416@gmail.com',
    isDisplayUnderSummary:false,
    isPasswordProtected:false

  });

console.log('helloooo')
  const [loading,setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://service.healthcapita.com/api/PHR/GetMemberById?UserId=${id}`);
        if (response?.data?.isData === true) {
          setFormData(response?.data?.data);
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user data");
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

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
const response = await axios.post('https://service.healthcapita.com/api/PHR/SaveMemberDetails',formData)
console.log(response)
   }catch(error){
    console.log(error)
   }
  };
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        <PhrUpdateHeader Title={"Personal Details"} />
        <div className="w-[100%] flex">
          <form   onSubmit={handleSubmit} className="py-4 px-4 sm:px-6 md:px-4 lg:px-12 w-[70%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="col-span-3 flex gap-4">
                {/* First Name, Middle Name, Last Name */}
                <div className="flex flex-col w-full">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    type="text"
                    placeholder="Enter middle name"
                    value={formData.middleName}
                    onChange={handleChange}
                    name="middleName"
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}

                    name="lastName"
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Date of Birth, Gender, Email */}
              <div className="col-span-3 flex gap-4 items-center">
                <div className="flex flex-col w-full">
                  <label htmlFor="dob">Date Of Birth</label>
                  <input
                    type="date"
                    name="dateofBirth"
                    value={formData.dateofBirth}
                    onChange={handleChange}
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="gender">Gender</label>
                  <select
                  
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none"
                  >
                    <option value="">Select gender</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="o">Other</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Mobile and Phone */}
              <div className="col-span-3 flex gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="mobile">Mobile Number</label>
                  <div className="flex items-center gap-2">
                    <select className="border border-gray-300 py-2 px-2 rounded-md focus:outline-none w-30">
                      <option value="+1">+1</option>
                      <option value="+91">+91</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                    <input
                      type="phone"
                      placeholder="Enter Mobile Number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="phone">Landline No.</label>
                  <input
                    type="tel"
                    placeholder="Enter Landline number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Height & Weight */}
              <div className="col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="height">Height (ft.-inch)</label>
                    <input
                      type="number"
                      placeholder="Enter weight"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="weight">Weight (kgs)</label>
                    <input
                      type="number"
                      placeholder="Enter weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Blood Group Type and Marital Status */}
              <div className="col-span-3">
                <div className="flex gap-4">
                  <div className="flex flex-col w-full">
                    <label htmlFor="bloodgroup">Blood Group Type</label>
                    <select
                     name="BloodGroupType"
                     value={formData.BloodGroupType }
                     onChange={handleChange}
                      className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB">AB</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="bloodgroup">Rhesus Factor</label>
                    <select
                     value={formData.rhesusFactor}
                     onChange={handleChange}
                      name="rhesusFactor"
                      className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="-ve">VE</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="maritalstatus">Marital Status</label>
                    <select
                      
                      name="maritalStatusId"
                      value={formData.maritalStatusId}
                      onChange={handleChange}
                      className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none"
                    >
                      <option value="">Select Status</option>
                      <option value="1">Married</option>
                      <option value="2">Unmarried</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Spouse Name and Number of Children */}
              <div className="col-span-3 flex gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="spousename">Spouse Name</label>
                  <input
                    type="text"
                    placeholder="Enter spouse name"
                    name="spouseName"
                    value={formData.spouseName}
                    onChange={handleChange}
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="noofchildren">No. of Children</label>
                  <input
                    type="number"
                    placeholder="Enter no. of children"
                    name="noOfChildren"
                    value={formData.noOfChildren}
                    onChange={handleChange}
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* P.O. Box, Country, Governate */}
              <div className="col-span-3 flex gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="pobox">Pin Code</label>
                  <input
                    type="number"
                    placeholder="Enter P.O. box"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="country">Country</label>
                  <select
                  value={formData.countryId}
                  onChange={handleChange}
                    name="countryId"
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none"
                  >
                    <option value="">Select Country</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">UK</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="governate">Governate</label>
                  <select
                value={formData.stateId}
                onChange={handleChange}
                    name="stateId"
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none"
                  >
                    <option value="">Select Governate</option>
                    <option value="1">Northern</option>
                    <option value="2">Southern</option>
                    <option value="3">Other</option>
                  </select>
                </div>
              </div>

              {/* Area */}
              <div className="col-span-4 flex gap-4">
                <div className="flex flex-col w-1/4">
                  <label htmlFor="area">Area</label>
                  <select
                    value={formData.cityId}
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
                
              </div>

              {/* Address */}
              <div className="col-span-3">
                <div className="flex flex-col">
                  <label htmlFor="address">Address</label>
                  <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                    placeholder="Enter your Address here.."
                    rows="2"
                    className="border border-gray-300 py-2 px-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="w-[25%] mt-20 mr-14">
            <div className="bg-[#EBF8FF] py-4 px-4 rounded-xl w-4/4">
              <h2 className="text-lg font-semibold text-[#004EBA] mb-2 py-2">
                Upload Image
              </h2>
              <div className="p-2 rounded-lg shadow-sm border border-gray-400 border-dashed py-2">
                <label className="flex items-center justify-center space-x-2 mb-2 cursor-pointer">
                  <img
                    src={PhrAssets.UploadIcon}
                    alt="Upload Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-gray-600 font-medium py-2">
                    Upload Image
                  </span>
                  <input type="file" className="hidden" />
                </label>
                <div className="flex items-center justify-center space-x-2 pt-1">
                  <img
                    src={PhrAssets.InfoCircle}
                    alt="Info Icon"
                    className="w-3 h-3"
                  />
                  <span className="text-[#004EBA] text-sm py-2">
                    You can upload 1 file, not exceeding 10MB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <p className="mx-14 border-b-2 border-gray-100 my-5"></p>
        <button className="bg-[#1C9401] text-white font-medium tracking-wide text-lg py-3 px-8 rounded-full absolute -bottom-20 right-8 mb-0 mr-4"  onClick={handleSubmit}>
         
          Update Details
        </button>
      </div>
    </>
  );
};

export default PhrProfileUpdate;
