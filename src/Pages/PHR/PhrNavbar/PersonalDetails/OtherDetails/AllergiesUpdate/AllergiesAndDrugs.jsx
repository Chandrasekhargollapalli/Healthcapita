import { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const AllergiesAndDrugs = () => {
  const [allergies, setAllergies] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAllergies, setSelectedAllergies] = useState({});
  const [updatedAllergies, setUpdatedAllergies] = useState(new Set());
  const [customAllergyNames, setCustomAllergyNames] = useState({}); 

 
  const declaredUserId = 123;
  const declaredIsPasswordProtected = true;
  const declaredIsDisplayUnderSummaryPage = true;

 
  const fetchAllergies = async () => {
    try {
      const response = await axios.get(
        "https://service.healthcapita.com/api/PHR/GetAllergyList"
      );

      const data = response.data.data || [];
      const groupedAllergies = data.reduce((acc, allergy) => {
        const group = allergy.allergiesDrugGroupName;
        if (!acc[group]) acc[group] = [];
        acc[group].push(allergy);
        return acc;
      }, {});

      setAllergies(groupedAllergies);

      const initialSelections = {};
      data.forEach((allergy) => {
        initialSelections[allergy.allergyDetailId] = allergy.ischecked || false;
      });

      setSelectedAllergies(initialSelections);
    } catch (error) {
      console.error("Error fetching allergies:", error);
      setError("Failed to load allergies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllergies();
  }, []);

  // Handle Checkbox Change
  const handleCheckboxChange = (allergy) => {
    const allergyId = allergy.allergyDetailId;

    setSelectedAllergies((prevSelected) => ({
      ...prevSelected,
      [allergyId]: !prevSelected[allergyId],
    }));

    setUpdatedAllergies((prevUpdated) => new Set([...prevUpdated, allergyId]));
  };

 
  const handleCustomAllergyChange = (allergyId, value) => {
    setCustomAllergyNames((prev) => ({
      ...prev,
      [allergyId]: value,
    }));
  };


  const sendUpdatedAllergies = async () => {
    const updatedData = Array.from(updatedAllergies)
      .map((id) => {
        for (const group in allergies) {
          const allergy = allergies[group].find(
            (item) => item.allergyDetailId === Number(id)
          );
          if (allergy) {
            return {
              allergyId: allergy.allergyId || 0,
              userId: declaredUserId,
              allergiesDrugid: allergy.allergiesDrugid || 0,
              allergyDetailId:
                allergy.allergyName === "Other" && customAllergyNames[allergy.allergyDetailId]
                  ? allergy.allergyDetailId 
                  : allergy.allergyName === "Other"
                  ? 0 
                  : allergy.allergyDetailId,
              allergiesDrugGroupName: allergy.allergiesDrugGroupName || "string",
              allergyName:
                allergy.allergyName === "Other"
                  ? customAllergyNames[allergy.allergyDetailId] || "Other"
                  : allergy.allergyName,
              ischecked: selectedAllergies[id],
              isPasswordProtected: declaredIsPasswordProtected,
              isdisplayUnderSummaryPage: declaredIsDisplayUnderSummaryPage,
            };
          }
        }
        return null;
      })
      .filter((item) => item !== null);

    if (updatedData.length === 0) {
      console.log("No updates to send.");
      return;
    }

    try {
      const response = await axios.post(
        "https://service.healthcapita.com/api/PHR/SaveAllergy",
        updatedData
      );
      console.log("Updated allergies sent successfully:", response.data);
      setUpdatedAllergies(new Set());
    } catch (error) {
      console.error("Error updating allergies:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Oval visible={true} height={40} width={40} color="#4fa94d" ariaLabel="oval-loading" />
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  const allergyGroups = Object.entries(allergies);

  return (
    <div className="mb-6 flex flex-col p-4 rounded-lg">
      {allergyGroups.map(([groupName, allergyList], index) => (
        <div key={groupName} className="mb-6">
          <h2 className="font-semibold text-base text-gray-800 mb-2">{groupName}</h2>
          <div className="flex flex-wrap gap-3">
            {allergyList.map((allergy) => (
              <div key={allergy.allergyDetailId} className="flex flex-col">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-blue-50 cursor-pointer"
                    checked={selectedAllergies[allergy.allergyDetailId] || false}
                    onChange={() => handleCheckboxChange(allergy)}
                  />
                  <span className="text-gray-700">{allergy.allergyName}</span>
                </label>
                {/* Show input field if "Other" is selected */}
                {allergy.allergyName === "Other" &&
                  selectedAllergies[allergy.allergyDetailId] && (
                    <input
                      type="text"
                      className="mt-1 p-1 border border-gray-300 rounded"
                      placeholder="Enter allergy name"
                      value={customAllergyNames[allergy.allergyDetailId] || ""}
                      onChange={(e) =>
                        handleCustomAllergyChange(allergy.allergyDetailId, e.target.value)
                      }
                    />
                  )}
              </div>
            ))}
          </div>
          {index < allergyGroups.length - 1 && <hr className="mt-4 border-t border-gray-300" />}
        </div>
      ))}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={sendUpdatedAllergies}
      >
        Updated Allergies
      </button>
    </div>
  );
};

export default AllergiesAndDrugs;
