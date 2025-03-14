import EmergencyContactInfo from "../PersonalDetails/EmergencyContactInfo/EmergencyContactInfo";
import EmployerInfo from "../PersonalDetails/EmployerInfo/EmployerInfo";
import FamilyDetails from "../PersonalDetails/FamilyDetails/FamilyDetails";
import InsuranceDetails from "../PersonalDetails/InsuranceDetails/InsuranceDetails";
import MedicalContacts from "../PersonalDetails/MedicalContacts/MedicalContacts";
import Allergies from "../PersonalDetails/OtherDetails/Allergies";
import PhrProfile from "../PersonalDetails/PhrProfile/PhrProfile";

const Summary = () => {
  return (
    <>
      <div  className="px-12">
        <h2 className="text-2xl font-semibold py-3">Personal Details</h2>
        <PhrProfile showUpdateButton={false}/>
        <InsuranceDetails showUpdateButton={false} />
        <EmployerInfo showUpdateButton={false}/>
        <FamilyDetails showUpdateButton={false}/>
        <EmergencyContactInfo showUpdateButton={false}/>
        <MedicalContacts showUpdateButton={false}/>
        <Allergies showUpdateButton={false}/>
      </div>
    </>
  );
};

export default Summary;
