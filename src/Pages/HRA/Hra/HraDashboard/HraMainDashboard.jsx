import { useEffect, useState,useContext } from "react";
import Button from "../../../../CommonComponents/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { HraAssets } from "../../../../assets/Hra/assets";
import CholesterolAndBP from "./CholesterolAndBP";
import BodyStractureAndBMI from "./BodyStractureAndBMI";
import Separator from "../../../../CommonComponents/Separator";
import LifeStyleHraData from "./LifeStyleHraData";
import HabitsHraData from "./HabitsHraData";
import FoodHabitsAndExercise from "./FoodHabitsAndExercise";
import StressAndEmployment from "./StressAndEmployement";
import BloodGlucoseLevelData from "./BloodGlucoseLevelData";
import FamilyHistoryData from "./FamilyHistoryData";
import { DateContext } from "../../../../utils/DateProvider";
import { Oval } from 'react-loader-spinner'



const HraMainDashboard = () => {
  const { setSelectedDate } = useContext(DateContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [data,setData] = useState(null)
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getHraAllDashboardData = async () => {
      try {
        const response = await axios.get(`https://service.healthcapita.com/api/Hra/GetHRAAssesmentData?AssesmentID=${id}`);
          setData(response?.data?.data)
          console.log(response)
       
      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false);
      }
    };

    getHraAllDashboardData();
  }, [id]);
  const editAssessmentPage = () => {
    if(data?.assesmentDate){
      setSelectedDate(data?.assesmentDate)
      navigate("/hraassessment/edit");
    }
        
      };
  // if (loading) {
  //   return <div> <Audio
  //   height="80"
  //   width="80"
  //   radius="9"
  //   color="green"
  //   ariaLabel="three-dots-loading"
  //   wrapperStyle
  //   wrapperClass
  // />
  // </div> 
  // }

  if (!data) {
    console.log('data is not there')
  }

  return (
    <div className="px-4 md:px-10 lg:px-10 mt-10">
      <div>
        {loading ? (<div className="flex items-center justify-center h-auto">
  <div className="">
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
</div>)
        :(
      <div>
      <div className="flex flex-row justify-between text-center self-stretch gap-1 p-2   sticky top-16 bg-white z-10">
        <div className="flex justify-center items-baseline">
          <div className="flex items-center justify-center">
            <img className="w-6" onClick={()=>{navigate('/assessment')}} src={HraAssets.leftarrow} alt="" />
            <p className="border border-right border-[#E5E7EB] w-0.5 h-5 mx-2 bg-[#E5E7EB]"></p>
          </div>

          <h6 className="sm:text-2xl text-xs font-semibold landing-8 py-2">Health Summary Details</h6>
          <p className="text-[#6B7280] text-xs font-normal landing-4 ml-2"> Last AssessmentDate: {data?.assesmentDate ? new Date(data?.assesmentDate).toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  }) : ''}</p>
        </div>

        <div className="flex items-center justify-center gap-2">  
          <Button type="primary" onClick={editAssessmentPage}>
            Edit Assessment
          </Button>
        </div>
      </div>
      <BodyStractureAndBMI bodystracture={data.bodyStructure}  />

      <div className="mt-10 mb-10">
        <Separator />
      </div>
      
      <CholesterolAndBP bloodCholesterol={data.bloodCholesterol} />
      <div className="mt-10 mb-10">
        <Separator />
      </div>
      <BloodGlucoseLevelData bloodSugar={data.bloodSugar}/>
      <div className="mt-10 mb-10">
        <Separator />
      </div>
      <FamilyHistoryData familyHistory={data.familyHistory} />
      <LifeStyleHraData lifeStyle={data.lifeStyle} />
      <div className="mt-10 mb-10">
        <Separator />
      </div>
     
      <HabitsHraData habits={data.habit}/>
      <div className="mt-10 mb-10">
        <Separator />
      </div>

      <div>
        <FoodHabitsAndExercise foodHabits={data.foodHabits} exercise={data.exercise}/>
      </div>
     
      <StressAndEmployment stress={data.stress} employment={data.employment} />
      </div>
      )}
      </div>
    </div>

  );
};

export default HraMainDashboard;
