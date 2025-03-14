import { HraAssets } from "../assets/Hra/assets"

 const BASE_URL = 'https://service.healthcapita.com'
 
 export  const UserId = 69
export const HraApiEndPoints = {
   SaveBodyStracture:`${BASE_URL}/api/Hra/SaveBodyStructure`,
   SaveBloodPressure:`${BASE_URL}/api/Hra/SaveBloodPressure`,
   SaveBloodSugar:`${BASE_URL}/api/Hra/SaveBloodSugar`,
   SaveBloodCholestrol:`${BASE_URL}/api/Hra/SaveBloodCholesterol`,
   SaveFamilyHistory:`${BASE_URL}/api/Hra/SaveFamilyHistoryDetails`,
   SaveLifeStyle:`${BASE_URL}/api/Hra/SaveLifeStyle`,
   SaveHabits:`${BASE_URL}/api/Hra/SaveHabits`,
   SaveFoodHabits:`${BASE_URL}/api/Hra/SaveFoodHabits`,
   SaveExercise:`${BASE_URL}/api/Hra/SaveExercise`,
   SaveStress:`${BASE_URL}/api/Hra/SaveStress`,
   SaveEmployment:`${BASE_URL}/api/Hra/SaveEmployment`,
   SaveMedicalAndSurgery:`${BASE_URL}/api/Hra/SaveMedicalData`,
}


export const FamilyIconsObj = [
    //{KeyID:1,Name:'Asthama',IconPath:'aa',IconBGColor:'red',FocusColor:'',Module:'HRA_FAMILY'}
    { name: 'Asthma', image: HraAssets.asthma, backgroundColor: '#FFF9E4',  KeyID:1},
    { name: 'cancer', image: HraAssets.cancer, backgroundColor: '#EDEBFE' , KeyID:2 },
    { name: 'diabetes', image: HraAssets.diabetes, backgroundColor: '#DEF7EC', KeyID:3 },
    { name: 'Genetic Disorder', image: HraAssets.genetic, backgroundColor: '#EAF7FF' ,KeyID:4},
    { name: 'High cholesterol', image: HraAssets.high_cholesterol, backgroundColor: '#EBF8FF',KeyID:5 },
    { name: 'Hypertension', image: HraAssets.Hypertension, backgroundColor: '#FFF2E8' ,KeyID:6},
    { name: 'Lung Disease/COPD', image: HraAssets.LungDiseaseCOPD, backgroundColor: '#FFF1F1',KeyID:7 },
    { name: 'Tuberculosis', image: HraAssets.Tuberculosis, backgroundColor: '#ECFEFF',KeyID:8 }
];



export const LifeStyleObj=[
    {
        name:'Life Style',
        image:HraAssets.lifestyle,
        backgroundColor:'#ECFEFF',
        secondBackgroundColor:'#02C1E0'
    },
    {
        name:'Habits',
        image:HraAssets.habits,
        backgroundColor:'##FDF3FF',
        secondBackgroundColor:'#DD54FF'
    },
    {
        name:'Food Habits',
        image:HraAssets.foodhabits,
        backgroundColor:'#DEF7EC',
        secondBackgroundColor:'#12B76A'
    },
    {
        name:'Exercise',
        image:HraAssets.lifestyllexercise,
        backgroundColor:'#EAF7FF',
        secondBackgroundColor:'#004EBA'
    },
    {
        name:'Stress',
        image:HraAssets.stress,
        backgroundColor:'#FFF1F1',
        secondBackgroundColor:'#FA4D56'
    },
    {
        name:'Employment',
        image:HraAssets.employment,
        backgroundColor:'#FFF2E8',
        secondBackgroundColor:'#FF832B'
    },
]



export const MedicalAndSurgeryObj=[
    {
        name:'Allergy',
        image:HraAssets.allergey,
        backgroundColor:'#FFF1F1',
       
    },
    {
        name:'Asthma',
        image:HraAssets.medicalasthama,
        backgroundColor:'#DEF7EC',
    
    },
    {
        name:'Blood disorder',
        image:HraAssets.blooddisorder,
        backgroundColor:'#EBF8FF',
        
    },
    {
        name:'Blood pressure',
        image:HraAssets.medicalbloodpressure,
        backgroundColor:'#EDEBFE',
      
    },
    {
        name:'Cancer',
        image:HraAssets.medicalcancer,
        backgroundColor:'#ECFEFF',
    
    },
    {
        name:'Depression',
        image:HraAssets.depression,
        backgroundColor:'#FFF1F1',
       
    },
    {
        name:'Diabetes',
        image:HraAssets.mediacaldiabetes,
        backgroundColor:'#FFF9E4',
       
    },
    {
        name:'Heart disease',
        image:HraAssets.heartdisease,
        backgroundColor:'#DAE9FF',
       
    },
    {
        name:'Obesity',
        image:HraAssets.medicalobesity,
        backgroundColor:'#FFF2E8',
       
    },
    {
        name:'Organ transplant',
        image:HraAssets.medicalorgantransplant,
        backgroundColor:'#FFF1F1',
       
    },
    {
        name:'Paralysis',
        image:HraAssets.medicalparalysis,
        backgroundColor:'#D1D5DB',
       
    },
    {
        name:'Renal failure',
        image:HraAssets.medicalrenalfailure,
        backgroundColor:'#FFECFD',
       
    },
    
    {
        name:'Restricted blood',
        image:HraAssets.medicalrestricted,
        backgroundColor:'#FFECEE',
       
    },
    {
        name:'Backache',
        image:HraAssets.medicalbackache,
        backgroundColor:'#ECFEFF',
       
    },
    {
        name:'Seizure disorder',
        image:HraAssets.medicalseizure,
        backgroundColor:'#FFF2E8',
       
    },
    
    
]

