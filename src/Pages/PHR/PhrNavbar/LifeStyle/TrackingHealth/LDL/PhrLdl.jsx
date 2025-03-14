import { useState } from "react";
import { PhrAssets } from "../../../../../../assets/PHR/assets";
import AddBtn from "../../../../../../CommonComponents/AddBtn/AddBtn";
import { useNavigate } from "react-router-dom";

const PhrLdl = () => {

  const navigate = useNavigate()
  
  const openLdlUpdatePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/PhrLdlUpdatePage')
  }
  const [optionsVisible, setOptionsVisible] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const data = [
    {
      id: 1,
      icon: PhrAssets.ThreeDotted,
      date: "October 15, 2024",
      LDL: "--",
    },
    {
      id: 2,
      icon: PhrAssets.ThreeDotted,
      date: "October 15, 2024",
      LDL: "--",
    },
    {
      id: 3,
      icon: PhrAssets.ThreeDotted,
      date: "October 15, 2024",
      LDL: "--",
    },
    {
      id: 4,
      icon: PhrAssets.ThreeDotted,
      date: "October 15, 2024",
      LDL: "--",
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
      <div className="py-3 px-2 bg-[#F9FAFB] rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="p-2 rounded-full bg-[#004EBA]"
              src={PhrAssets.Ldl}
              alt=""
            />
            <p className="font-medium leading-5 text-lg text-[#111928]">LDL</p>
          </div>
          <AddBtn onClick={openLdlUpdatePage} />
        </div>
        <p className="border border-gray-300 px-2 my-4"></p>

        <div className="overflow-x-auto rounded-md border  ">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-[#D1D5DB]">
                <th className="py-3 text-left text-base font-medium pl-1"></th>{" "}
                <th className="py-3 text-left text-base font-medium px-4">
                  Date of Test
                </th>
                <th className="py-3 text-left text-base font-medium px-4">
                  LDL
                </th>
                <th className="py-3 text-left text-base font-medium px-4"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="pl-1 py-4 text-sm text-gray-900 border-b">
                    <img
                      src={item.icon}
                      onClick={() => toggleOptions(item.id)}
                      alt="Options"
                      className="w-6 h-6"
                    />
                  </td>
                  <td className="px-4 py-4 text-base text-[#004EBA] border-b font-semibold">
                    {item.date}
                  </td>
                  <td className="px-4 py-4 text-base text-gray-900 border-b">
                    {item.LDL}
                  </td>

                  <td className="px-4 py-4 text-base text-gray-900 border-b">
                    <div className="flex gap-4 items-center">
                      <button onClick={openLdlUpdatePage}>
                        <img src={PhrAssets.Edit} alt="" />
                      </button>

                      <button className="flex gap-1 items-center  font-semibold">
                        <img src={PhrAssets.Delete} alt="" />
                      </button>
                    </div>
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

export default PhrLdl;
