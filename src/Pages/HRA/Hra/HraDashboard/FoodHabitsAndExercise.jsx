import React from 'react'
// import { HraAssets } from "../../assets/Hra/assets"; 
import { HraAssets } from '../../../../assets/Hra/assets'
const FoodHabitsAndExercise = ({foodHabits,exercise}) => {
  const {
    breakfast='N',
    averageMealsPerDay='N',
    frequencyInWeek='0',
    servingsPerDay = "0",
    waterConsulptionPerDay = "0",

  } = foodHabits || {};
  const {
    meditation='N',
    physicalOrMobility='N',
    meditationDuration='0',
    sedentaryActivities = "0",
    yoga = "N",
    yogaDuration='0',
    yogaTimesInWeek='0'

  } = exercise || {};
  return (
   <>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="py-3 px-4 my-3  rounded-xl  bg-[#F9FAFB]">
        <p className="py-3 font-semibold">Food Habits</p>
        <p className="border border-gray-200 px-4"></p>

       
          <div className="flex flex-col lg:flex-row gap-x-32 justify-center items-center px-4 py-5">
            <img className="p-3 rounded-full bg-[#DEF7EC]" src={HraAssets.foodhabits} alt="" />
            <div>
              <ul className="list-disc pt-5">
                <li>Do You Have Breakfast Everyday: {breakfast==='Y'? 'Yes' :'No'}</li>
                <li>Daily Servings of High-Cholesterol/High-Fat Foods: {servingsPerDay} servings</li>
                <li>Weekly Junk Food Frequency: {frequencyInWeek}</li>
                <li>Average Meals Per Day: {averageMealsPerDay} or More Times</li>
                <li>Glasses of water consume per day: {waterConsulptionPerDay} Glasses</li>
                
              </ul>
            </div>
          </div> 

      </div>
      

      <div className="py-3 px-4 my-3  rounded-xl  bg-[#F9FAFB]">
        <p className="py-3 font-semibold">Exercise</p>
        <p className="border border-gray-200 px-4"></p>

       
          <div className="flex flex-col lg:flex-row gap-x-32 justify-center items-center  px-4 py-5">
            <img className="p-3 rounded-full bg-[#EAF7FF]" src={HraAssets.ExerrciseIcon} alt="" />
            <div>
              <ul className="list-disc pt-5">
                <li>Meditation Practice:  {meditation=== 'Y' ? 'Yes' : 'No'}</li>
                <li>Meditation Duration:{meditationDuration} </li>
                <li>Yoga Practice:{yoga}</li>
                <li>Yoga Duration:{yogaDuration}</li>
                <li>Weekly Physical Activity (30+ mins) : {yogaTimesInWeek }</li>
                <li>Preference for Sedentary Activities : {sedentaryActivities=== 'Y' ? 'Yes' : 'No'}</li>
                <li>Physical Disabilities or Mobility Challenges : {physicalOrMobility=== 'Y' ? 'Yes' : 'No'}</li>
              </ul>
            </div>
          </div> 

      </div>
      </div>
   </>
  )
}

export default FoodHabitsAndExercise
