import axios from 'axios';
import { useEffect, useState } from "react";
import { Oval } from 'react-loader-spinner';

const DistinguishingMarks = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [visibleBirthMarks, setVisibleBirthMarks] = useState(1); // Default to 1 and update based on data

  const GetDistinguishingMarksApi = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        'https://service.healthcapita.com/api/PHR/GetDistinguishMarkDetail?UserId=123'
      );
      const apiData = response?.data?.data || {};
      setData(apiData);

     
      const existingBirthMarksCount = Object.keys(apiData)
        .filter((key) => key.startsWith("birthMark") && apiData[key])
        .length;

     
      setVisibleBirthMarks(existingBirthMarksCount || 1);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetDistinguishingMarksApi();
  }, []);

  const handleAddAlternativeMark = () => {
    if (visibleBirthMarks < 5) {
      setVisibleBirthMarks((prev) => prev + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Oval visible={true} height="40" width="40" color="#4fa94d" ariaLabel="oval-loading" />
      </div>
    );
  }

  const distinguishingMarks = [
    { label: "Tattoo", key: "tattoo" },
    { label: "Scar", key: "scar" },
    { label: "Burn Mark", key: "burnMark" },
  ];

  return (
    <div className="px-2 my-3 overflow-hidden">
      {/* Birth Marks */}
      <p className="text-sm">Birth Mark</p>
      <div className="space-y-3">
        {[...Array(visibleBirthMarks)].map((_, index) => (
          <input
            key={index}
            className="mr-3 w-1/3 my-3 py-1 px-3 border rounded-md border-gray-300 placeholder:text-black placeholder:text-sm"
            type="text"
            placeholder={`Enter Birth Mark ${index + 1}`}
            value={data?.[`birthMark${index + 1}`] || ""}
            onChange={(e) => setData({ ...data, [`birthMark${index + 1}`]: e.target.value })}
          />
        ))}
      </div>
      {visibleBirthMarks < 5 && (
        <button
          onClick={handleAddAlternativeMark}
          className="text-[#1C9401] pb-3 text-base font-semibold tracking-wide"
        >
          + Add Alternative Marks
        </button>
      )}

      {/* Tattoo, Scar, Burn Mark */}
      <div className="flex justify-between gap-6">
        {distinguishingMarks.map(({ label, key }, index) => {
          const value = data?.[key]?.toLowerCase();
          return (
            <div key={index} className="flex flex-col gap-3 pt-3">
              <p className="font-semibold text-base tracking-wide">{label}</p>
              <div className="flex flex-row gap-3 justify-between">
                <div className="flex items-center gap-2">
                  <input
                    className="custom-radio"
                    type="radio"
                    name={key}
                    checked={value === "yes"}
                    onChange={() => setData({ ...data, [key]: "yes" })}
                  />
                  <label>Yes</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="custom-radio"
                    type="radio"
                    name={key}
                    checked={value !== "yes"} // Default to "No"
                    onChange={() => setData({ ...data, [key]: "no" })}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hair Color */}
      <div className="pt-5">
        <p className="text-sm">Hair Color</p>
        <select
          className="my-2 pl-2 pr-48 py-1 border"
          value={data?.hairColorId || ""}
          onChange={(e) => setData({ ...data, hairColorId: e.target.value })}
        >
          <option value="">Select</option>
          <option value="1">Black</option>
          <option value="2">Brown</option>
          <option value="3">Blonde</option>
        </select>
      </div>

      {/* Skin Color */}
      <div className="py-3">
        <p className="text-sm">Skin Color</p>
        <select
          className="my-2 pl-2 pr-48 py-1 border"
          value={data?.skinId || ""}
          onChange={(e) => setData({ ...data, skinId: e.target.value })}
        >
          <option value="">Select</option>
          <option value="1">Fair</option>
          <option value="2">Medium</option>
          <option value="3">Dark</option>
        </select>
      </div>

      {/* Eye Color */}
      <div className="py-3">
        <p className="text-sm">Eye Color</p>
        <select
          className="my-2 pl-2 pr-48 py-1 border"
          value={data?.eyeColorId || ""}
          onChange={(e) => setData({ ...data, eyeColorId: e.target.value })}
        >
          <option value="">Select</option>
          <option value="1">Brown</option>
          <option value="2">Blue</option>
          <option value="3">Green</option>
        </select>
      </div>

      {/* Other Distinguishing Marks */}
      <div>
        <p className="py-4 font-semibold text-base tracking-wide">Other Distinguishing Marks</p>
        <textarea
          className="w-full h-20 bg-white border border-gray-200 rounded-lg p-2"
          value={data?.otherMarks || ""}
          placeholder="Enter other distinguishing marks"
          onChange={(e) => setData({ ...data, otherMarks: e.target.value })}
        />
      </div>
    </div>
  );
};

export default DistinguishingMarks;


