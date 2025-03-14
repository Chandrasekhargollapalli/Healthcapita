import { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HraApiEndPoints, UserId } from "../../../utils/HraApis";
import MultiSlider from "../../../CommonComponents/MultiSlider.jsx"; 
import RadioButton from "../../../CommonComponents/RadioButton";
import Button from "../../../CommonComponents/Button";
import { DateContext } from "../../../utils/DateProvider.jsx";
import { Oval } from "react-loader-spinner";
import { HraAssets } from "../../../assets/Hra/assets.js";

const MedicalAndSurgery = ({ backStep }) => {
  const { selectedDate } = useContext(DateContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [neverDiagnosed, setNeverDiagnosed] = useState(false);
  const navigate = useNavigate();

  const GetMedicalIconsData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://service.healthcapita.com/api/Hra/DiagnosisList?module=HRA_MEDICAL"
      );
      const MedicalDataResponse = await axios.get(
        `https://service.healthcapita.com/api/Hra/GetMedicalHistory?UserId=${UserId}&AssesmentDate=${selectedDate}`
      );

      const diagnosisData = response?.data?.data || [];
      const medicalData = MedicalDataResponse?.data?.data || [];

      const MergeData = diagnosisData.map((item) => {
        const existingRecord = medicalData.find((f) => f.keyId === item.keyId);
        return existingRecord
          ? { ...existingRecord }
          : {
              keyId: item.keyId,
              onMedication: "N",
              duration: "",
            };
      });
      setData(diagnosisData);
      setMedicalHistory(MergeData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load medical data!");
    } finally {
      setLoading(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    GetMedicalIconsData();
  }, [GetMedicalIconsData]);

  const handleConditionClick = (keyId) => {
    if (!neverDiagnosed) {
      setActiveTab((prevKeyId) => (prevKeyId === keyId ? null : keyId));
    }
  };

  const handleOptionChange = (keyId, option) => {
    setMedicalHistory((prevData) =>
      prevData.map((item) =>
        item.keyId === keyId
          ? { ...item, onMedication: option === "Yes" ? "Y" : "N" }
          : item
      )
    );
  };

  const handleSliderChange = (keyId, sliderData) => {
    setMedicalHistory((prevData) =>
      prevData.map((item) =>
        item.keyId === keyId
          ? { ...item, duration: `${sliderData.minValue}-${sliderData.maxValue}` }
          : item
      )
    );
  };

  const handleCheckboxChange = () => {
    setNeverDiagnosed((prev) => !prev);
    if (!neverDiagnosed) {
      setMedicalHistory((prevData) =>
        prevData.map((item) => ({
          ...item,
          onMedication: "N",
          duration: "", 
        }))
      );
      setActiveTab(null);
    }
  };

  const handleFinish = async () => {
    // If the user hasn't checked the checkbox and hasn't selected any condition
    if (activeTab === null && !neverDiagnosed) {
      // Set 'onMedication' to 'N' for all conditions
      setMedicalHistory((prevData) =>
        prevData.map((item) => ({
          ...item,
          onMedication: "N", // Set 'No' for all conditions
          duration: "", // Reset the duration as no condition is selected
        }))
      );
    }

    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    const updatedMedicalHistory = medicalHistory.map((item) => {
      let duration = item.onMedication === 'N' ? '' : item.duration; // Adjust duration based on condition
    
      return {
        ...item,
        duration, // Add duration to the object
        recStatus: "p",
        UserId,
        DateOfEntry: selectedDate,
      };
    });

    try {
      await axios.post(HraApiEndPoints.SaveMedicalAndSurgery, updatedMedicalHistory);
      toast.success("Data submitted successfully!");
      navigate("/assessment");
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Failed to submit data!");
    }
  };

  return (
    <div className="px-4 md:px-10 lg:px-16">
      <div className="flex justify-between items-center py-4 border-b">
        <h1 className="flex items-center font-semibold text-[20px]">
          <img
            onClick={() => backStep(2)}
            src={HraAssets.leftarrow}
            alt=""
            className="m-2"
          />
          Medical & Surgery
          <span className="text-blue-400 ml-1">
            <img src={HraAssets.info} alt="" />
          </span>
        </h1>
        <p className="flex items-center gap-3">
          <span className="text-green-400 font-bold ml-1">
            <img src={HraAssets.right} alt="" />
          </span>
          Progress Saved
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
          <div className="flex flex-wrap justify-between items-center mt-5 sm:flex-nowrap sm:gap-4">
            <h1 className="font-bold sm:w-auto w-full text-center sm:text-left">
              Any known family history of
            </h1>
            <p className="flex items-center gap-4 sm:w-auto w-full justify-center sm:justify-start">
              <input
                className="w-5 h-5"
                type="checkbox"
                checked={neverDiagnosed}
                onChange={handleCheckboxChange}
              />
              Never diagnosed of Below conditions
            </p>
          </div>

          <div className="flex items-center justify-between gap-x-4 mt-5 overflow-x-auto scrollbar-hide bg-[#F9FAFB]">
            {data.map((condition) => (
              <div key={condition.keyId} className="flex flex-col items-center">
                <div
                  onClick={() => handleConditionClick(condition.keyId)}
                  className={`p-4 flex flex-col items-center cursor-pointer transition duration-300 ease-in-out ${activeTab === condition.keyId ? "bg-white shadow-lg" : ""} ${neverDiagnosed ? "opacity-50 pointer-events-none" : ""}`}
                >
                  <div
                    style={{ backgroundColor: condition.iconBgcolor }}
                    className="rounded-full flex items-center justify-center p-2 mb-1"
                  >
                    <img src={condition.iconPath} alt={condition.name} />
                  </div>
                  <h1 className="text-center capitalize whitespace-nowrap">
                    {condition.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {activeTab !== null && !neverDiagnosed && (
            <div className="mt-4 p-4">
              <h2 className="text-lg font-semibold">On Medication</h2>
              <div className="flex gap-4 mt-4">
                <RadioButton
                  label="Yes"
                  name="selectoption"
                  checked={medicalHistory.find((item) => item.keyId === activeTab)?.onMedication === "Y"}
                  onChange={() => handleOptionChange(activeTab, "Yes")}
                />
                <RadioButton
                  label="No"
                  name="selectoption"
                  checked={medicalHistory.find((item) => item.keyId === activeTab)?.onMedication === "N"}
                  onChange={() => handleOptionChange(activeTab, "No")}
                />
              </div>
              {medicalHistory.find((item) => item.keyId === activeTab)?.onMedication === "Y" && (
                <div className="mt-5">
                  <div className="w-3/4 lg:w-1/4 mt-10">
                    <p>since</p>
                    <MultiSlider
                      id={activeTab} 
                      min={1}
                      max={20}
                      minValue={medicalHistory.find((item) => item.keyId === activeTab)?.duration.split('-')[0]}
                      maxValue={medicalHistory.find((item) => item.keyId === activeTab)?.duration.split('-')[1]}
                      onChange={(data) => handleSliderChange(activeTab, data)}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="col-span-12 mt-28 flex justify-end">
            <Button type="primary" onClick={handleFinish}>
              Finish
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MedicalAndSurgery;
