import React from "react";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import Separator from "../../../../../CommonComponents/Separator";
import Update from "../../../../../CommonComponents/Update/Update";
import { useNavigate } from "react-router-dom";
const MedicalContacts = ({showUpdateButton = true}) => {

  const navigate = useNavigate()

  const openPhrMedicalContactsPage = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/MedicalContactsUpdate')
  }
  return (
    <>
      <div className="py-5 px-5  my-7 bg-[#F9FAFB] rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="p-2 rounded-full bg-[#FFF1F1]"
              src={PhrAssets.MedicalContact}
              alt=""
            />
            <p className="font-medium landing-5 text-lg text-[#111928]">
              Medical Contacts
            </p>
          </div>
          {showUpdateButton && <Update onClick={openPhrMedicalContactsPage}/>}
         
        </div>
        <p className="border border-gray-300 px-2 my-3"></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-medium landing-5">Family physician</p>
            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Name:</p>
              <p className=" text[#374151] font-semibold landing-5">
                Jane Cooper
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Specialization</p>
              <p className=" text[#374151] font-semibold landing-5">
                Gynaecologist
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Mobile</p>
              <p className=" text[#374151] font-semibold landing-5">
                +965-9988766554
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Email</p>
              <p className=" text[#374151] font-semibold landing-5">
                chandu@gmail.com
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Since How Many Years ?</p>
              <p className=" text[#374151] font-semibold landing-5">1</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-medium landing-5">My Consultant</p>
            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Name:</p>
              <p className=" text[#374151] font-semibold landing-5">
                Jane Cooper
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Specialization</p>
              <p className=" text[#374151] font-semibold landing-5">
                Gynaecologist
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Mobile</p>
              <p className=" text[#374151] font-semibold landing-5">
                +965-9988766554
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Email</p>
              <p className=" text[#374151] font-semibold landing-5">N/A</p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Since How Many Years ?</p>
              <p className=" text[#374151] font-semibold landing-5">1</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-medium landing-5">My Consultant</p>
            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Name:</p>
              <p className=" text[#374151] font-semibold landing-5">
                Jane Cooper
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Specialization</p>
              <p className=" text[#374151] font-semibold landing-5">
                Gynaecologist
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Mobile</p>
              <p className=" text[#374151] font-semibold landing-5">
                +965-9988766554
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Email</p>
              <p className=" text[#374151] font-semibold landing-5">N/A</p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Since How Many Years ?</p>
              <p className=" text[#374151] font-semibold landing-5">1</p>
            </div>
          </div>
        </div>
      </div>

      <Separator />
    </>
  );
};

export default MedicalContacts;
