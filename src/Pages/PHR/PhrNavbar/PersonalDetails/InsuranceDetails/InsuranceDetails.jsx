import { useNavigate } from "react-router-dom";
import { PhrAssets } from "../../../../../assets/PHR/assets";
import Update from "../../../../../CommonComponents/Update/Update";
import { useState } from "react";

const InsuranceDetails = ({ showUpdateButton = true }) => { 

  const navigate = useNavigate() 

  const openInsuranceUpdatePage = () => {        

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/InsuranceDetailsUpdate')
  }
  const [optionsVisible, setOptionsVisible] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const data = [
    {
      id: 1,     
      icon: PhrAssets.ThreeDotted,
      email: "john@example.com",
      role: "Admin",
    },
    {  
      id: 2,
      icon: PhrAssets.ThreeDotted,
      email: "jane@example.com",
      role: "Editor",
    },
  ];

  const toggleOptions = (id) => {
    setOptionsVisible((prev) => (prev === id ? null : id));
  };

  const handleOptionClick = (option, id) => {
    console.log(`Option "${option}" selected for row ID ${id}`);
    setDropdownVisible(null);
  };

  return (
    <>
      <div className="py-5 px-5 my-7 bg-[#F9FAFB] rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="p-2 rounded-full bg-[#EBF8FF]"
              src={PhrAssets.Insurance}
              alt=""
            />
            <p className="font-medium leading-5 text-lg text-[#111928]">
              Insurance Details
            </p>
          </div>
          {showUpdateButton && <Update onClick={openInsuranceUpdatePage} />}
        </div>
        <p className="border border-gray-300 px-2 my-3"></p>

        <div className="overflow-x-auto rounded-md border  ">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-[#D1D5DB]">
                <th></th>
                <th className="px-6 py-3 text-left text-base font-medium ">
                  Insurance Company
                </th>
                <th className="px-6 py-3 text-left text-base font-medium ">
                  TPA
                </th>
                <th className="px-6 py-3 text-left text-base font-medium ">
                  Policy No.
                </th>
                <th className="px-6 py-3 text-left text-base font-medium ">
                  Premium Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-sm text-gray-900 border-b">
                    <img
                      src={item.icon}
                      onClick={() => toggleDropdown(item.id)}
                      alt="Options"
                      className="w-6 h-6"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 border-b">
                    --
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 border-b">
                    --
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 border-b">
                    --
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 border-b">
                    --
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InsuranceDetails;
