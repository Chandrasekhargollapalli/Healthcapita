import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserId } from "../../../utils/HraApis";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { HraAssets } from "../../../assets/Hra/assets";

const HraDataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCard, setActiveCard] = useState(null); // New state for active card
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handleDateClick = (id) => {
    navigate(`/HraDashboard/${id}`);
  };

  const getDatabyId = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://service.healthcapita.com/api/Hra/GetHRAAssesments?UserID=${UserId}`
      );
      const reversedData = response.data?.data.reverse();
      setData(reversedData || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getDatabyId();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const handleDotsClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // Toggle card visibility
  };

  return (
    <div className="overflow-x-auto max-w-full mt-8">
      {loading ? (
        <div className="flex justify-center items-center h-20">
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
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left border-b border-gray-300"></th>
                <th className="px-4 py-2 text-left border-b border-gray-300">
                  Assessment Date
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-300">
                  Progress
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-300"></th>
                <th className="px-4 py-2 text-left border-b border-gray-300"></th>
                <th className="px-4 py-2 text-left border-b border-gray-300"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="px-4 py-2 border-gray-200 text-center">
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => handleDotsClick(index)}
                    >
                      &#8942;
                    </button>
                    {/* Card next to dots */}
                    {activeCard === index && (
  <div className="absolute bg-white shadow-md p-4 border rounded-md w-64 space-y-4">
    <div className="flex space-x-2 items-center">
      <img src={HraAssets.Message} alt="Ask a Doctor" className="w-5 h-5" />
      <p>Ask a Doctor</p>
    </div>
    <hr />
    <div className="flex space-x-2 items-center mt-2">
      <img src={HraAssets.Contact} alt="Another Image" className="w-5 h-5" />
      <p>Second Openion</p>
    </div>
    <hr />
    <div className="flex space-x-2 items-center mt-2">
      <img src={HraAssets.MedicalCross} alt="Another Image" className="w-5 h-5" />
      <p>Health Check Up</p>
    </div>
    <hr />
    <div className="flex space-x-2 items-center mt-2">
      <img src={HraAssets.Calender} alt="Another Image" className="w-5 h-5" />
      <p>Book an Appointment</p>
    </div>
  </div>
)}

                  </td>
                  <td
                    className="px-4 py-2 border-gray-200 text-blue-500 hover:underline cursor-pointer"
                    onClick={() => {
                      handleDateClick(item.id);
                    }}
                  >
                    {formatDate(item.assesmentDate)}
                  </td>
                  <td className="px-4 py-2 border-gray-200">
                    {item.recStatus === "P" ? "InProgress" : "Completed"}
                  </td>
                  <td className="px-4 py-2 border-gray-200"></td>
                  <td className="px-4 py-2 border-gray-200"></td>
                  <td className="px-4 py-2 border-gray-200">
                    <button className="text-green-600 hover:underline">
                      {/* Download Report */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 py-4">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt; Back
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`px-4 py-2 border border-gray-300 rounded-md ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handlePageClick(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HraDataTable;
