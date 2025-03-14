import React from "react";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import Update from "../../../../../CommonComponents/Update/Update";
import { useNavigate } from "react-router-dom";

const EmployerInfo = ({showUpdateButton = true}) => {
  const navigate = useNavigate()

  const openEmployerInfoUpdatePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/EmployerInfoUpdate')
  }
  return (
    <>
      <div className="py-5 px-5 my-7 bg-[#F9FAFB] rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="p-2 rounded-full bg-[#DEF7EC]"
              src={PhrAssets.EmployerInfo}
              alt=""
            />
            <p className="font-medium landing-5 text-lg text-[#111928]">
              Employer Information
            </p>
          </div> 
          {showUpdateButton && <Update  onClick={openEmployerInfoUpdatePage}/>}  
        </div>
        <p className="border border-gray-300 px-2 my-3"></p>

        <div className="grid grid-cols-1  gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Category</p>
              <p className=" text[#374151] font-semibold landing-5">
                Self employed
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Employer Name</p>
              <p className=" text[#374151] font-semibold landing-5">
                Global Masters Business Solutions
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Office Address</p>
              <p className=" text[#374151] font-semibold landing-5">
                32 Floor, United Tower Bahrain Bay Bahrain
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Landline No.</p>
              <p className=" text[#374151] font-semibold landing-5">
                +973-168459551
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">P.O. Box</p>
              <p className=" text[#374151] font-semibold landing-5">98723</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerInfo;
