import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import HraAssesment from "./Pages/HRA/Hra/HraAssesment";
import Summarydetails from "./Pages/HRA/PersonalAndFamily/SummarryDetails";
import HraMainDashboard from "./Pages/HRA/Hra/HraDashboard/HraMainDashboard";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Dashboard from "./Pages/PhrDashboard/Dashboard";      
import { useLocation } from "react-router-dom";
import Phr from "./Pages/PHR/Phr";
import OverviewPhrUpdate from "./Pages/PHR/PhrNavbar/PersonalDetails/OtherDetails/AllergiesUpdate/OverviewPhrUpdate";
import PhrProfileUpdate from "./Pages/PHR/PhrNavbar/PersonalDetails/PhrProfile/PhrProfileUpdate";
import EmergencyContactUpdate from "./Pages/PHR/PhrNavbar/PersonalDetails/EmergencyContactInfo/EmergencyContactUpdate";
import FamilyDetailsUpdate from "./Pages/PHR/PhrNavbar/PersonalDetails/FamilyDetails/FamilyDetailsUpdate";
import MedicalContactsUpdate from "./Pages/PHR/PhrNavbar/PersonalDetails/MedicalContacts/MedicalContactsUpdate";
import InsuranceDetailsUpdate from "./Pages/PHR/PhrNavbar/PersonalDetails/InsuranceDetails/InsuranceDetailsUpdate";
import EmployerInfoUpdate from "./Pages/PHR/PhrNavbar/PersonalDetails/EmployerInfo/EmployerInfoUpdate";
import LifeStyleUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/LifeStyle/LifeStyleUpdate";
import PhrBloodPressureUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/PhrBloodPressure/PhrBloodPressureUpdate";
import BloodSugarUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/BloodSugar/BloodSugarUpdate";
import BloodTestInfoUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/BloodTestInfo/BloodTestInfoUpdate";
import CholestrolUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/Cholestrol/CholestrolUpdate";
import HdlUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/HDL/HdlUpdate";
import LdlUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/LDL/LdlUpdate";
import MoodAndStressUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/MoodAndStress/MoodAndStressUpdate";
import SgotUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/SGOT/SgotUpdate";
import SgptUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/SGPT/SgptUpdate";
import TriglyceridesUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/Triglycerides/TriglyceridesUpdate";
import WeightUpdate from "./Pages/PHR/PhrNavbar/LifeStyle/TrackingHealth/Weight/WeightUpdate";
import MedicalAndSurgeryUpdate from "./Pages/PHR/PhrNavbar/MedicalSurgery/MedicalAndSurgeryUpdate";
import MedicalAndSurgery from "./Pages/PHR/PhrNavbar/MedicalSurgery/MedicalAndSurgery";

function App() {

  
  const location = useLocation();
  console.log(location);
  const HideHeaderandFooter = location.pathname === "/Login";
  console.log(HideHeaderandFooter);
  return (
    <>
      {!HideHeaderandFooter && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/phr" element={<Phr />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/hraassessment/new" element={<HraAssesment />} />
        <Route path="/hraassessment/edit" element={<HraAssesment />} />
        <Route path="/HraDashboard/:id" element={<HraMainDashboard />} />
        <Route path="/assessment" element={<Summarydetails />} />
        <Route path="/OverviewPhrUpdate" element={<OverviewPhrUpdate />} />
        <Route path="/PhrProfileUpdate" element={<PhrProfileUpdate />} />
        <Route
          path="/EmergencyContactUpdate"
          element={<EmergencyContactUpdate />}
        />
        <Route path="/FamilyDetailsUpdate" element={<FamilyDetailsUpdate />} />
        <Route
          path="/MedicalContactsUpdate"
          element={<MedicalContactsUpdate />}
        />
        <Route
          path="/InsuranceDetailsUpdate"
          element={<InsuranceDetailsUpdate />}
        />
        <Route path="/EmployerInfoUpdate" element={<EmployerInfoUpdate />} />
        <Route path="/LifeStyleUpdate" element={<LifeStyleUpdate />} />
        <Route
          path="/PhrBloodPressureUpdatePage"
          element={<PhrBloodPressureUpdate />}
        />
        <Route path="BloodSugarUpdate" element={<BloodSugarUpdate />} />
        <Route path="/BloodTestInfoUpdate" element={<BloodTestInfoUpdate />} />
        <Route path="/PhrCholestrolUpdatePage" element={<CholestrolUpdate />} />
        <Route path="/PhrHdlUpdatePage" element={<HdlUpdate />} />
        <Route path="/PhrLdlUpdatePage" element={<LdlUpdate />} />
        <Route
          path="/phrMoodAndStressUpdatePage"
          element={<MoodAndStressUpdate />}
        />
        <Route path="/PhrSgotUpdatePage" element={<SgotUpdate />} />
        <Route path="/PhrSgptUpdatePage" element={<SgptUpdate />} />
        <Route
          path="/PhrTriglyceridesUpdate"
          element={<TriglyceridesUpdate />}
        />
        <Route path="/PhrWeightUpdate" element={<WeightUpdate />} />
        <Route
          path="/PhrMedicalAndSUrgeryUpdate"
          element={<MedicalAndSurgeryUpdate />}
        />
        <Route path="/phr/MedicalAndSurgery" element={<MedicalAndSurgery />} />
      </Routes>

      {!HideHeaderandFooter && <Footer />}
    </>
  );
}

export default App;
