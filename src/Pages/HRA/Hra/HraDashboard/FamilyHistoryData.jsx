import axios from "axios";
import { useState, useEffect } from "react";

// const FamilyObject = [
//   { autoId: 186, keyId: 1, keyValue: "Y", keyMember: "Sister, Grandfather" },
//   { autoId: 187, keyId: 2, keyValue: "N", keyMember: "" },
//   { autoId: 188, keyId: 3, keyValue: "Y", keyMember: "Father, Mother" },
//   { autoId: 189, keyId: 4, keyValue: "Y", keyMember: "Mother, Sister" },
//   { autoId: 190, keyId: 5, keyValue: "Y", keyMember: "GrandMother, Father" },
//   { autoId: 191, keyId: 6, keyValue: "Y", keyMember: "Grandfather" },
//   { autoId: 192, keyId: 7, keyValue: "Y", keyMember: "Grandfather" },
//   { autoId: 193, keyId: 8, keyValue: "N", keyMember: "" },
// ];

const FamilyHistoryData = ({familyHistory}) => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedDisease, setSelectedDisease] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [familyMember, setFamilyMember] = useState("");

  
  const getKeyValueName = (keyValue) => (keyValue === "Y" ? "Yes" : "No");

  const GetFamilyIconsData = async () => {
    try {
      const response = await axios.get(
        "https://service.healthcapita.com/api/Hra/DiagnosisList?module=HRA_FAMILY"
      );
      setData(response?.data?.data);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetFamilyIconsData();
  }, []);

  const changeActive = (keyId) => {
    setActiveTab(keyId);
    const iconsItem = familyHistory.find((item) => item.keyId === keyId);
   
    const diseaseItem = data.find((item) => item.keyId === keyId);

    if (iconsItem && diseaseItem) {
      setSelectedDisease(diseaseItem.name); 
      setSelectedValue(getKeyValueName(iconsItem.keyValue)); 
      setFamilyMember(iconsItem.keyMember || "");
    }
  };

  return (
    <div className='bg-[#F9FAFB] p-4'>
      <div className="">
        <div className="flex justify-between items-center p-5">
          <h1 className="font-semibold">
            Medical History Of Your Family Members
          </h1>
        </div>
        <hr />
        <div className="flex  items-center justify-between gap-x-16  sm:gap-x-4 mt-4 overflow-x-auto hide-scrollbar">
          {data.map((item) => (
            <div key={item.keyId}>
              <div
                onClick={() => changeActive(item.keyId)}
                className={`p-8 sm:p-4  ${
                  activeTab === item.keyId ? "bg-[#FFFFFF]" : ""
                } flex flex-col items-center cursor-pointer transition duration-300 ease-in-out `}
              >
                <div
                  style={{ backgroundColor: item.iconBgcolor }}
                  className="rounded-full p-2 items-center mb-1"
                >
                  <img src={item.iconPath} alt="" />
                </div>
                <h1 className="text-center capitalize">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
        {activeTab !== null && (
          <div className="p-4  rounded bg-[#FFFFFF] ">
            <h2 className="font-semibold">
              {selectedDisease} :  {selectedValue}
            </h2>
            <p className="mt-2"> <span className='font-semibold'>{familyMember}</span></p>
            {/* <p className="mt-2">Relation: <span className='font-semibold'>{familyMember}</span></p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilyHistoryData;



