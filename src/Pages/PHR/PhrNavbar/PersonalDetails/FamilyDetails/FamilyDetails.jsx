import { useNavigate } from "react-router-dom";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import Separator from "../../../../../CommonComponents/Separator";
import Update from "../../../../../CommonComponents/Update/Update";
const FamilyDetails = ({showUpdateButton = true}) => {
  const navigate = useNavigate();

  const openFamilyDetailsUpdatePage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/FamilyDetailsUpdate");
  };
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
              Family Details
            </p>
          </div>
          {showUpdateButton && <Update onClick={openFamilyDetailsUpdatePage}/>}
          
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
              <p className=" text[#374151] font-semibold landing-5">
                Gynaecologist
              </p>
            </div>

            <div className="flex justify-between bg-white">
              <div className="flex flex-col  py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">Country</p>
                <p className=" text[#374151] font-semibold landing-5">Kuwait</p>
              </div>
              <div className="flex flex-col  py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">Governate</p>
                <p className=" text[#374151] font-semibold landing-5">
                  Northen Governate
                </p>
              </div>

              <div className="flex flex-col py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">Area</p>
                <p className=" text[#374151] font-semibold landing-5">ali</p>
              </div>
              <div className="flex flex-col py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">P.O. Box</p>
                <p className=" text[#374151] font-semibold landing-5">98723</p>
              </div>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Contact</p>
              <p className=" text[#374151] font-semibold landing-5">
                +965-8987656789
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Email</p>
              <p className=" text[#374151] font-semibold landing-5">
                chandu@gmail.com
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Address</p>
              <p className=" text[#374151] font-semibold landing-5">
                31, Building 184, Road No-126,Block 338, Adliya, Kingdom Of
                Bahrain
              </p>
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
              <p className=" text[#374151] font-semibold landing-5">
                Gynaecologist
              </p>
            </div>

            <div className="flex justify-between bg-white">
              <div className="flex flex-col  py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">Country</p>
                <p className=" text[#374151] font-semibold landing-5">Kuwait</p>
              </div>
              <div className="flex flex-col  py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">Governate</p>
                <p className=" text[#374151] font-semibold landing-5">
                  Northen Governate
                </p>
              </div>

              <div className="flex flex-col py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">Area</p>
                <p className=" text[#374151] font-semibold landing-5">ali</p>
              </div>
              <div className="flex flex-col py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">P.O. Box</p>
                <p className=" text[#374151] font-semibold landing-5">98723</p>
              </div>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Contact</p>
              <p className=" text[#374151] font-semibold landing-5">
                +965-8987656789
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Email</p>
              <p className=" text[#374151] font-semibold landing-5">
                chandu@gmail.com
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Address</p>
              <p className=" text[#374151] font-semibold landing-5">
                31, Building 184, Road No-126,Block 338, Adliya, Kingdom Of
                Bahrain
              </p>
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
              <p className=" text[#374151] font-semibold landing-5">
                Gynaecologist
              </p>
            </div>

            <div className="flex justify-between bg-white">
              <div className="flex flex-col  py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">Country</p>
                <p className=" text[#374151] font-semibold landing-5">Kuwait</p>
              </div>
              <div className="flex flex-col  py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">Governate</p>
                <p className=" text[#374151] font-semibold landing-5">
                  Northen Governate
                </p>
              </div>

              <div className="flex flex-col py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">Area</p>
                <p className=" text[#374151] font-semibold landing-5">ali</p>
              </div>
              <div className="flex flex-col py-2 px-3 rounded-md gap-2">
                <p className="text-[#111928] landing-5">P.O. Box</p>
                <p className=" text[#374151] font-semibold landing-5">98723</p>
              </div>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Contact</p>
              <p className=" text[#374151] font-semibold landing-5">
                +965-8987656789
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Email</p>
              <p className=" text[#374151] font-semibold landing-5">
                chandu@gmail.com
              </p>
            </div>

            <div className="flex flex-col bg-[white] py-2 px-3 rounded-md gap-2">
              <p className="text-[#111928] landing-5">Address</p>
              <p className=" text[#374151] font-semibold landing-5">
                31, Building 184, Road No-126,Block 338, Adliya, Kingdom Of
                Bahrain
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />
    </>
  );
};

export default FamilyDetails;
