import EmergencyContactInfo from "./EmergencyContactInfo/EmergencyContactInfo";
import EmployerInfo from "./EmployerInfo/EmployerInfo";
import FamilyDetails from "./FamilyDetails/FamilyDetails";
import InsuranceDetails from "./InsuranceDetails/InsuranceDetails";
import MedicalContacts from "./MedicalContacts/MedicalContacts";
import Allergies from "./OtherDetails/Allergies";
import PhrProfile from "./PhrProfile/PhrProfile";

const MainPersonalDetails = () => {
  return (
    <>
      <div className="px-12">
        <h2 className="text-2xl font-semibold py-3">Personal Details</h2>
        <PhrProfile />
        <EmergencyContactInfo />
        <FamilyDetails />
        <MedicalContacts />
        <InsuranceDetails />
        <EmployerInfo/>
        <Allergies />
      </div>
    </>
  );
};

export default MainPersonalDetails;
