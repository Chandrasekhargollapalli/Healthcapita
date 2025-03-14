import React from "react";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import Separator from "../../../../../CommonComponents/Separator";
import Update from "../../../../../CommonComponents/Update/Update";
import { useNavigate } from "react-router-dom";
const EmergencyContactInfo = ({showUpdateButton = true }) => {

  const navigate = useNavigate()

  const openEmergencyContactUpdatePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/EmergencyContactUpdate")
  }
  return (
    <>
      <div className="py-5 px-5 my-7 bg-[#F9FAFB] rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="p-2 rounded-full bg-[#FFF1F1]"
              src={PhrAssets.EmergencyContact}
              alt=""
            />
            <p className="font-medium landing-5 text-lg text-[#111928]">
              Emergency Contct Information
            </p>
          </div>
          {showUpdateButton && <Update onClick={openEmergencyContactUpdatePage} />}
          
        </div>
        <p className="border border-gray-300 px-2 my-3"></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Name:</p>
              <p className=" text[#374151] font-semibold landing-5">
                Jane Cooper
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Relation</p>
              <p className=" text[#374151] font-semibold landing-5">Brother</p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Country</p>
              <p className=" text[#374151] font-semibold landing-5">Kuwait</p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Contact</p>
              <p className=" text[#374151] font-semibold landing-5">
                +965-9988007766
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Email</p>
              <p className=" text[#374151] font-semibold landing-5">N/A</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Name:</p>
              <p className=" text[#374151] font-semibold landing-5">
                Jane Cooper
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Relation</p>
              <p className=" text[#374151] font-semibold landing-5">Brother</p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Country</p>
              <p className=" text[#374151] font-semibold landing-5">Kuwait</p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Contact</p>
              <p className=" text[#374151] font-semibold landing-5">
                +965-9988007766
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Email</p>
              <p className=" text[#374151] font-semibold landing-5">N/A</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Name:</p>
              <p className=" text[#374151] font-semibold landing-5">
                Jane Cooper
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Relation</p>
              <p className=" text[#374151] font-semibold landing-5">Brother</p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Country</p>
              <p className=" text[#374151] font-semibold landing-5">Kuwait</p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Contact</p>
              <p className=" text[#374151] font-semibold landing-5">
                +965-9988007766
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Email</p>
              <p className=" text[#374151] font-semibold landing-5">N/A</p>
            </div>
          </div>
        </div>
      </div>

      <Separator />
    </>
  );
};

export default EmergencyContactInfo;
