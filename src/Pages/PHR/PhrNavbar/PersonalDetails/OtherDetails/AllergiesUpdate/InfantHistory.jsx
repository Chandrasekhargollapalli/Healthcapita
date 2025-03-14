import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const InfantHistory = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isDefectVisble, setIsDefectVisible] = useState(false);

  const GetInfantHistoryApi = async () => {
    try {
      const response = await axios.get(
        "https://service.healthcapita.com/api/PHR/GetInfantHistory?UserId=1"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetInfantHistoryApi();
  }, []);

  return (
    <div className="space-y-4">
      {isLoading && (
        <div className="flex justify-center items-center h-96">
          <Oval
            visible={true}
            height="40"
            width="40"
            color="#4fa94d"
            ariaLabel="oval-loading"
          />
        </div>
      )}

      {!isLoading && (
        <>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={data?.data?.jaundice || false}
            />
            <label className="ml-2 font-semibold">
              Did the child suffer from jaundice after birth
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={data?.data?.soreThroat || false}
            />
            <label className="ml-2 font-semibold">
              Did the Child Suffered from repeated Sore Throat
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={data?.data?.overWeight || false}
            />
            <label className="ml-2 font-semibold">
              Was Child Overweight at Birth
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={data?.data?.underWeight || false}
            />
            <label className="ml-2 font-semibold">
              Was the child Underweight at Birth
            </label>
          </div>

          <div>
            <p className="font-semibold">
              Any detected congenital internal/external Defect
            </p>
            <div className="flex items-center space-x-4 py-3">
              <input
                type="radio"
                className="custom-radio"
                checked={isDefectVisble}
                onChange={() => setIsDefectVisible(true)}

               
              />
              <label>Yes</label>
              <input
                type="radio"
                className="custom-radio"
                checked={!isDefectVisble}
                onChange={() => setIsDefectVisible(false)}
                
              />
              <label>No</label>
            </div>
          </div>

          {isDefectVisble && (
            <div className="p-4 bg-white border border-gray-200 rounded">
              {/* {data?.data?.remarks === data?.data?.intExtDefect || ""} */}
              {data?.data?.remarks || "No remarks available."}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InfantHistory;
