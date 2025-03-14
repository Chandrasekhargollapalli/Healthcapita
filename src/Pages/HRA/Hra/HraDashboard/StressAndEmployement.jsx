import { HraAssets } from "../../../../assets/Hra/assets"
const StressAndEmployment = ({stress,employment})=>{
  const {
    travellingHoursPerDay='0',
    stressDuration='0',
    sleepingHours='0',
    personalLossOrMisfortune = "N",
    lifeSatisfaction = "0",
    workingHoursPerDay='0'

  } = stress || {};

  const {
    jobSatisfaction='0',
    workingHoursEmployerExpectation='0',
    workingHoursWeek='0'

  } = employment || {};
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
      
              <div className="py-3 px-4 my-3  rounded-xl  bg-[#F9FAFB]">
        <p className="py-3 font-semibold">Stress</p>
        <p className="border border-gray-200 px-4"></p>

       
          <div className="flex flex-col lg:flex-row gap-x-32 justify-center items-center  px-4 py-5">
            <img className="p-3 rounded-full bg-[#FFF1F1]" src={HraAssets.stress} alt="" />
            <div>
              <ul className="list-disc pt-5">
                <li>Life Satisfaction : {lifeSatisfaction}</li>
               <li>Personal Loss/Misfortune in Past Year: [Yes/No] : {personalLossOrMisfortune === 'Y' ? 'Yes' : 'No'}</li>
               <li>Frequency of Stress/Anxiety/Depression : {stressDuration}</li>
               <li>Average Hours of Sleep : {sleepingHours}</li>
               <li>Total Working Hours Per Day {workingHoursPerDay}</li>
               <li>Total Travelling Hours Per Day {travellingHoursPerDay}</li>
              </ul>
            </div>
          </div> 

      </div>
      


      <div className="py-3 px-4 my-3  rounded-xl  bg-[#F9FAFB]">
        <p className="py-3  font-semibold">Employement</p>
        <p className="border border-gray-200 px-4"></p>

       
          <div className="flex flex-col lg:flex-row gap-x-32 justify-center items-center  px-4 py-5">
            <img className="p-3 rounded-full bg-[#FFF2E8]" src={HraAssets.employment} alt="" />
            <div>
              <ul className="list-disc pt-5 ">
              <li>Job Satisfaction : {jobSatisfaction}</li>
                <li>Working Hours Employer Expectation : {workingHoursEmployerExpectation}</li>
                <li>Working Hours Week : {workingHoursWeek}</li>
              </ul>
            </div>
          </div> 

          </div>

        

      

        </div>
    )
}

export default StressAndEmployment