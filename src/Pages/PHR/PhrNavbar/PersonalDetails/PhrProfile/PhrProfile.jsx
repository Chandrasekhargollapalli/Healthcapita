import React from "react";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import Update from "../../../../../CommonComponents/Update/Update";
import {useNavigate} from "react-router-dom"
import { useEffect,useState} from "react";
import axios from "axios";
const PhrProfile = ({ showUpdateButton = true}) => {
  const [formData,setFormData] = useState({})
  const[loading,setLoading] = useState(true)
const id=10
  const navigate = useNavigate()

  const openPhrProfileUpdatePage = () => {
    // Scroll the page to the top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    navigate("/PhrProfileUpdate")
  }
console.log('formdata.....',formData)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://service.healthcapita.com/api/PHR/GetMemberById?UserId=${id}`);
        if (response?.data?.isData === true) {
          setFormData(response?.data?.data);
        }
        setLoading(false);
      } catch (err) {
      
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);


  return (
    <>
      <div className="py-3 px-8 bg-[#F3FBFF] rounded-md">
        <div className="flex justify-between items-center ">
          <div className="flex gap-4">
            <img src={PhrAssets.Profile} alt="profile" />
            <div className="flex flex-col gap-2">
              <p className="font-semibold  landing-5 text-md">{formData.firstName}</p>
              <div className="flex gap-1 text-[#374151] text-base">
                <p>Indian(AmericanIndian)</p>
                <p>. 34</p>
                <p>. {formData.gender}</p>
                <p>. {formData.dateofBirth}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {showUpdateButton && <Update onClick={openPhrProfileUpdatePage} />}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-4 px-3">
          <div className="flex flex-col text-sm landing-5">
            <p className="text-[#6B7280]">{formData.email}</p>
            <p>healthcapita@gmail.com</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">{formData.AlternateEmail}</p>
            <p>healthcapita@gmail.com</p>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-2">
              <img src={PhrAssets.Phone_icon} alt="phone" />
              <p className="text-[#6B7280]">Mobile</p>
            </div>
            <p>+973-{formData.mobile}</p>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-2">
              <img src={PhrAssets.Landphone_icon} alt="phone" />
              <p className="text-[#6B7280]">Landline No</p>
            </div>
            <p>+973-{formData.phone}</p>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-2">
              <img src={PhrAssets.Bloodgroup_icon} alt="phone" />
              <p className="text-[#6B7280]">Blood group</p>
            </div>
            <p>{formData.bolldGroupType}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">Rhesus Factor</p>
            <p>{formData.rhesusFactor}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">Height:</p>
            <p>{formData.height}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">Weight:</p>
            <p>{formData.weight}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">Marital status</p>
            <p>{formData.maritalStatusId}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">Spouse name</p>
            <p>{formData.spouseName}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">No of children</p>
            <p>{formData.noOfChildren}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">Address</p>
            <p>
           {formData.address}
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">Area, Governate</p>
            <p>{formData.stateId}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">P.O. Box</p>
            <p>{formData.pinCode}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#6B7280]">Country</p>
            <p>{formData.countryId}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhrProfile;
