import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

const Ethnicity = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false); 
  
 
  const defaultEthnicityOptions = {
    indian: false,
    hawaiian: false,
    polynesian: false,
    chinese: false,
    japanese: false,
    caucasian: false,
    filipino: false,
    AfricanAmerica: false,
    Hispanic: false,
    AmericanIndian: false,
    EastIndian: false,
    Others: false,

  };


  const GetEthnicityApi = async () => {
    setIsLoading(true); 

    try {
      const response = await axios.get('https://service.healthcapita.com/api/PHR/GetEthnicity?UserId=1212');
                                                                    
      if (response?.data?.isData) {
        const responseData = response.data.data;           
        const filteredData = Object.fromEntries(  
          Object.entries(responseData).filter(    
            ([key]) => key !== 'userId' && key !== 'isPasswordProtected' && key !== 'isdisplayUnderSummaryPage' && key !== 'ethnicityDetailId'
          )
        );
        setData({ ...filteredData });
      }
    } catch (error) {
      console.error('Error fetching ethnicity data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetEthnicityApi();
  }, []);

  const renderEthnicityCheckboxes = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <Oval
            visible={true}
            height="40"
            width="40"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      );
    }

   
    const ethnicityData = Object.keys(data).length === 0 ? defaultEthnicityOptions : data;

    return (
      <div className="p-4">
        <div className="flex flex-col gap-5">
          {Object.entries(ethnicityData).map(([key, value]) => (
            <div key={key} className="flex items-center gap-3">
              <input
                className="w-4 h-4 custom-checkbox"
                type="checkbox"
                checked={!!value}
                readOnly // Make the checkbox read-only
              />
              <label className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };  

  return (
    <div className="container mx-auto">
      {renderEthnicityCheckboxes()}
    </div>
  );
};

export default Ethnicity;