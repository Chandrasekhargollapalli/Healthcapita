import react, { useEffect, useState } from 'react'

const SocialHistory = () => {

  const defaultExericeData = [
    { ExericeName: "Aerobics", ExercideId: 1 },
    { ExericeName: "Running", ExercideId: 2 },
    { ExericeName: "Team Sports", ExercideId: 3 },
    {ExericeName: "Biking", ExercideId: 4},
    {ExericeName: "Skiing", ExercideId: 5},
    {ExericeName: "Walking", ExercideId: 6},
    {ExericeName: "Gym", ExercideId: 7},
    {ExericeName: "Swimming", ExercideId: 8},
    {ExericeName: "Yoga", ExercideId: 9}

  ]   

  const [ExericeData, setExerciseData] = useState(defaultExericeData)
 const [abusiveRelationship, setAbusiveRelationship] = useState(false)
 const [recentChanges, setRecentChanges] = useState(false)
    
  return (
    <>
      <div className='flex flex-col gap-3 w-full'>
        <label htmlFor="">How many days per week do you excercise?</label>
        <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
          <option  value="">select</option>
          <option  value="1">2</option>
          <option  value="2">5</option>
        </select>
      </div>
      
      <hr className="my-6 border-gray-300" />

      <div className='flex flex-col gap-3 w-full'>
        <label htmlFor="">How much time do you excercise per session?</label>
        <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
          <option  value="">select</option>
          <option  value="1">30</option>
          <option  value="2">45</option>
        </select>
      </div>

      <hr className="my-6 border-gray-300" />

      <div>
        <p>What type of exercise do you do?</p>
        <div  className='flex flex-wrap gap-4 pt-3'>
      {
        defaultExericeData.map((item) => (
          <div key={item.ExercideId}  className='flex gap-2 items-center'>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">{item.ExericeName}</label> 
          </div>
              
          ))
      }
           </div> 
        
      </div>

      <hr className="my-6 border-gray-300" />

      <div className='flex flex-col gap-3'>
        <label htmlFor="">If you have any other excercise(specify)</label>
        <input placeholder='Enter Exercise' className='w-1/3 p-3 focus:outline-none rounded h-16 border border-gray-300' type="text" />
      </div>

      <hr className="my-6 border-gray-300" />
       
      <div className='flex flex-col gap-3 w-full'>
        <label htmlFor="">How many hours of sleep do you get per night?</label>
        <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
          <option  value="">select</option>
          <option  value="1">4</option>
          <option  value="2">6</option> 
          <option  value="2">8</option>
        </select>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className='flex flex-col gap-3 w-full'>
        <label htmlFor="">Do you have any problems in/during sleeping?</label>
        <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
          <option  value="">select</option>
          <option  value="1">Yes</option>
          <option  value="2">No</option> 
        </select>
      </div>

      <hr className="my-6 border-gray-300" />

      <div>
        <p>How would you describe your smoking habits?</p> 
        <div className='flex gap-6'>
        <div className='flex items-center gap-1 pt-2'>
        <input type="radio" id="smoker" name="smoking_habits" checked/>
        <label htmlFor="smoker">Current Smoker</label>
          </div>
          
        <div className='flex items-center gap-1 pt-2'>
        <input type="radio" id="smoke" name="smoking_habits"/>
        <label htmlFor="smoke">Used to smoke</label>
          </div> 
          
          <div className='flex items-center gap-1 pt-2'>
        <input type="radio" id="never" name="smoking_habits"/>
        <label htmlFor="never">Never smoke</label>
        </div> 
        </div>
      </div>

      <hr className="my-6 border-gray-300" />
       
      <div>
        <p>Does anyone else in your home smoke</p>
        <div className='flex gap-6'>
        <div className='flex items-center gap-1 pt-2'>
        <input type="radio" id="yes" name="smoke"/>
        <label htmlFor="yes">Yes</label>
          </div>

          <div className='flex items-center gap-1 pt-2'>
        <input type="radio" id="no" name="smoke" checked/>
        <label htmlFor="no">No</label>
          </div>
          </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className='flex flex-col gap-3 w-full'>
        <label htmlFor="">How many alcoholic beverages do you drink per week?</label>
        <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
          <option  value="">select</option>
          <option  value="1">2</option>
          <option  value="2">5</option>
        </select>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className='flex flex-col gap-3 w-full'>
        <label htmlFor="">What is your current living situation?</label>
        <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
          <option  value="">select</option>
          <option  value="1">2</option>
          <option  value="2">5</option>
        </select>
      </div>


  <hr className="my-6 border-gray-300" />

<div className='flex flex-col gap-3 w-full'>
  <label htmlFor="">What is your highest education level?</label>
  <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
    <option  value="">select</option>
    <option  value="1">2</option>
    <option  value="2">5</option>
  </select>
      </div>
      
  <hr className="my-6 border-gray-300" />

<div className='flex flex-col gap-3 w-full'>
  <label htmlFor="">In past year, how much has stress affected your health?</label>
  <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
    <option  value="">select</option>
    <option  value="1">2</option>
    <option  value="2">5</option>
  </select>
      </div>

  <hr className="my-6 border-gray-300" />

<div className='flex flex-col gap-3 w-full'>
  <label htmlFor="">In general, how satisfied are you with your life? (including personal and professional aspects)</label>
  <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
    <option  value="">select</option>
    <option  value="1">2</option>
    <option  value="2">5</option>
  </select>
      </div>

      <hr className="my-6 border-gray-300" />

<div className='flex flex-col gap-3 w-full'>
  <label htmlFor="">Have you been exposed to any toxic or hazardous substances ? Please describe.</label>
  <select className='w-1/3 focus:outline-none p-2 rounded border border-gray-300'>
    <option  value="">select</option>
    <option  value="1">2</option>
    <option  value="2">5</option>
  </select>
      </div>
      
      <hr className="my-6 border-gray-300" />

      <div>
        <label htmlFor="">Do you have any dietary restrictions ? Please describe.(ex: low salt, vegetarian, no sugar, etc.)</label>
        <input type="text" placeholder='Enter dietary restrictions' className='w-11/12 h-20 border border-gray-300 p-3 mt-3 rounded focus:outline-none'/>
      </div>

      <hr className="my-6 border-gray-300" />

      <div>
        <label htmlFor="">Do you have any religious, spiritual, philosphical or personal convictins that may affect how you should betreated medically ? Please describe.</label>
        <input type="text" placeholder='Enter religious, spiritual, philosphical or personal convictins' className='w-11/12 h-20 border border-gray-300 p-3 mt-3 rounded focus:outline-none'/>
      </div>

      <hr className="my-6 border-gray-300" />
      
      <div>
        <p>Are you now or have you previously been in an abusive relationship (verbally, emotionally, physically, or sexually) ?</p>
        <div className='flex gap-6'>
        <div className='flex items-center gap-1 pt-2'>
            <input
              type="radio"
              checked={abusiveRelationship}
              onChange={() => setAbusiveRelationship(true)}
            />
            
            <label htmlFor="">Yes</label>
          </div>

          <div className='flex items-center gap-1 pt-2'>
            <input
              type="radio"
              checked={!abusiveRelationship}
              onChange={()=> setAbusiveRelationship(false)} 
            />
        <label htmlFor="">No</label> 
          </div>
        </div>
      </div> 
      
      {abusiveRelationship && (
         <input type="text" placeholder='Enter abusive relationship' className='w-11/12 h-20 border border-gray-300 p-3 mt-3 rounded focus:outline-none'/>
         
      )}

<hr className="my-6 border-gray-300" />
      
      <div>
        <p>Has there been any recent change in your sexual desire or the frequency of sexual activity ?</p>
        <div className='flex gap-6'>
        <div className='flex items-center gap-1 pt-2'>
            <input
              type="radio"
              checked={recentChanges}
              onChange={()=> setRecentChanges(true)} />
            <label htmlFor="">Yes</label>
          </div>

          <div className='flex items-center gap-1 pt-2'>
            <input
              type="radio"
              checked={!recentChanges}
              onChange={()=> setRecentChanges(false)} 
            />
        <label htmlFor="">No</label> 
          </div>
        </div>
      </div> 

      {
        recentChanges && (
          <input type="text" placeholder='Enter recent change in your sexual desire or the frequency of sexual activity' className='w-11/12 h-20 border border-gray-300 p-3 mt-3 rounded focus:outline-none'/>
        )
      }

<hr className="my-6 border-gray-300" />

<div>
        <p>Have you ever had a sexually transmitted infection(STI) ? (for example: herpes, chlamydia, etc)</p>
        <div className='flex gap-6'>
        <div className='flex items-center gap-1 pt-2'>
        <input type="radio" id="yes" name="STI"/>
        <label htmlFor="yes">Yes</label>
          </div>

          <div className='flex items-center gap-1 pt-2'>
        <input type="radio" checked id="no" name="STI"/>
        <label htmlFor="no">No</label>
          </div>
          </div>
      </div>

<hr className="my-6 border-gray-300" />

<div>
        <label htmlFor="">How do you protect yourself from HIV and other STIs ? Please describe.</label>
        <input type="text" placeholder='Describe how you protect yourself from HIV and STIs.' className='w-11/12 h-20 border border-gray-300 p-3 mt-3 rounded focus:outline-none'/>
      </div>

      <hr className="my-6 border-gray-300" />

      <div>
        <p>Do you ever have pain during or after sex ?</p>
        <div className='flex gap-6'>
        <div className='flex items-center gap-1 pt-2'>
        <input type="radio" id="yes" name="pain"/>
        <label htmlFor="yes">Yes</label>
          </div>

          <div className='flex items-center gap-1 pt-2'>
        <input type="radio" id="no" name="pain" checked/>
        <label htmlFor="no">No</label>
          </div>
          </div>
      </div>
    </>
   )
}

export default SocialHistory;