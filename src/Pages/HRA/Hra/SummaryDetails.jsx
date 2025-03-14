import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../CommonComponents/Button";

const Summarydetails = () => {
  const navigate = useNavigate();

  const openAssessmentPage = () => {
    // console.log("Navigating to /hraassessment")
    navigate("/hraassessment/edit");
  };

  return (
    <div className="flex justify-end">
      <Button type="primary" onClick={openAssessmentPage}>
        Take New Assessment
      </Button>
    </div>
  );
};

export default Summarydetails;

