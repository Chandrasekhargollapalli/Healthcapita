import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Button from "../../../CommonComponents/Button";
import Separator from "../../../CommonComponents/Separator";
import { UserId } from "../../../utils/HraApis";
import { DateContext } from "../../../utils/DateProvider";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const FamilyHistory = ({ onNextStep }) => {
  const { selectedDate } = useContext(DateContext);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [familyHistory, setFamilyHistory] = useState([]);
  const [disableAll, setDisableAll] = useState(false);
  const [loading, setLoading] = useState(true);

  const familyMembers = ["Father", "Mother", "Sister", "Grandfather", "GrandMother"];

  const GetFamilyIconsData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://service.healthcapita.com/api/Hra/DiagnosisList?module=HRA_FAMILY"
      );
      const familyDataResponse = await axios.get(
        `https://service.healthcapita.com/api/Hra/GetFamilyHistory?UserId=${UserId}&AssesmentDate=${selectedDate}`
      );

      const diagnosisData = response?.data?.data || [];
      const familyData = familyDataResponse?.data?.data || [];

      const MergeData = diagnosisData.map((item) => {
        const existingRecord = familyData.find((f) => f.keyId === item.keyId);
        return existingRecord
          ? { ...existingRecord }
          : { keyId: item.keyId, keyValue: "N", keyMember: "" };
      });

      setData(diagnosisData);
      setFamilyHistory(MergeData);
    } catch (error) {
      alert("Failed to fetch data. Please try again later.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetFamilyIconsData();
  }, []);

  const changeActive = (keyId) => {
    if (disableAll) return;
    setActiveTab(keyId);
  };

  const handleRadioChange = (keyId, value) => {
    const updatedHistory = familyHistory.map((item) =>
      item.keyId === keyId
        ? { ...item, keyValue: value, keyMember: value === "N" ? "" : item.keyMember }
        : item
    );
    setFamilyHistory(updatedHistory);
  };

  const handleCheckboxChange = (keyId, member) => {
    const updatedHistory = familyHistory.map((item) => {
      if (item.keyId === keyId) {
        const members = item.keyMember ? item.keyMember.split(", ") : [];
        const newMembers = members.includes(member)
          ? members.filter((m) => m !== member)
          : [...members, member];
        return { ...item, keyMember: newMembers.join(", ") };
      }
      return item;
    });
    setFamilyHistory(updatedHistory);
  };

  const handleDisableAll = () => {
    setDisableAll(!disableAll);
    if (!disableAll) {
      const resetHistory = familyHistory.map((item) => ({
        ...item,
        keyValue: "N",
        keyMember: "",
      }));
      setFamilyHistory(resetHistory);
    }
  };

  const handleSubmit = async () => {
    // Check if all tabs are unselected and the user has not clicked "No Family History"
    if (!disableAll && familyHistory.every((item) => item.keyValue === "N")) {
      const defaultHistory = familyHistory.map((item) => ({
        ...item,
        keyValue: "N",
        keyMember: "",
        UserId,
        RecStatus: "P",
        AutoId: 0,
        DateOfEntry: selectedDate,
      }));

      try {
        await axios.post(
          "https://service.healthcapita.com/api/Hra/SaveFamilyHistoryDetails",
          defaultHistory
        );
        onNextStep();
      } catch (error) {
        alert("Error sending data. Please try again later.");
        console.error("Error sending data:", error);
      }
      return;
    }

    // If the user has interacted with the tabs or selected "No Family History"
    try {
      const updatedFamilyHistory = familyHistory.map((item) => ({
        ...item,
        UserId,
        RecStatus: "P",
        AutoId: 0,
        DateOfEntry: selectedDate,
      }));

      await axios.post(
        "https://service.healthcapita.com/api/Hra/SaveFamilyHistoryDetails",
        updatedFamilyHistory
      );
      onNextStep();
    } catch (error) {
      alert("Error sending data. Please try again later.");
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <div className="bg-[#F9FAFB] p-5">
        <div className="flex flex-wrap justify-between items-center mt-5 sm:flex-nowrap sm:gap-4">
          <h1 className="font-bold sm:w-auto w-full text-center sm:text-left">
            Any known family history of
          </h1>
          <p className="flex items-center gap-4 sm:w-auto w-full justify-center sm:justify-start">
            <input
              className="w-5 h-5"
              type="checkbox"
              checked={disableAll}
              onChange={handleDisableAll}
            />
            Never diagnosed of Below conditions
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-x-4 mt-4 overflow-x-auto hide-scrollbar">
              {data.map((item) => (
                <div key={item.keyId}>
                  <div
                    onClick={() => changeActive(item.keyId)}
                    className={`p-4 ${
                      activeTab === item.keyId ? "bg-[#FFFFFF]" : "bg-[#F9FAFB]"
                    } flex flex-col items-center cursor-pointer transition duration-300 ease-in-out ${
                      disableAll ? "cursor-not-allowed opacity-50" : ""
                    }`}
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

            {activeTab && !disableAll && (
              <div className="bg-white p-4 shadow-md">
                <h2 className="text-lg font-semibold">
                  {data.find((d) => d.keyId === activeTab)?.name}
                </h2>
                <div className="flex gap-4 mt-4">
                  <label className="flex items-center bg-[#F9FAFB] p-2 pr-14 rounded-md cursor-pointer">
                    <input
                      type="radio"
                      name={`radio-${activeTab}`}
                      value="Y"
                      className="mr-2"
                      checked={
                        familyHistory.find((f) => f.keyId === activeTab)?.keyValue === "Y"
                      }
                      onChange={() => handleRadioChange(activeTab, "Y")}
                    />
                    Yes
                  </label>
                  <label className="flex items-center bg-[#F9FAFB] p-2 pr-14 rounded-md cursor-pointer">
                    <input
                      type="radio"
                      name={`radio-${activeTab}`}
                      value="N"
                      className="mr-2"
                      checked={
                        familyHistory.find((f) => f.keyId === activeTab)?.keyValue === "N"
                      }
                      onChange={() => handleRadioChange(activeTab, "N")}
                    />
                    No
                  </label>
                </div>
                {familyHistory.find((f) => f.keyId === activeTab)?.keyValue === "Y" && (
                  <div className="mt-5">
                    <Separator />
                    <div className="flex flex-wrap gap-4 mt-4">
                      {familyMembers.map((member) => (
                        <label
                          key={member}
                          className="flex items-center w-1/2 sm:w-auto"
                        >
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={familyHistory
                              .find((f) => f.keyId === activeTab)
                              ?.keyMember.split(", ")
                              .includes(member)}
                            onChange={() => handleCheckboxChange(activeTab, member)}
                          />
                          {member}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <div className="mt-6 flex justify-end p-10">
        <Button type="primary" onClick={handleSubmit}>
          Next: LifeStyle
        </Button>
      </div>
    </div>
  );
};

export default FamilyHistory;
