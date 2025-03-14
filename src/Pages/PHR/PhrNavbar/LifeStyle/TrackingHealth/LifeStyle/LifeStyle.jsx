import { useNavigate } from "react-router-dom";
import { PhrAssets } from "../../../../../../assets/PHR/assets";
import Update from "../../../../../../CommonComponents/Update/Update";
import AddBtn from "../../../../../../CommonComponents/AddBtn/AddBtn";

const LifeStyle = () => {

  const navigate = useNavigate()

  const openLifeStyleUpdatePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/LifeStyleUpdate')
  }

  

  const LifeStyleList = [
    {id:1, name: "Tobacco", value: "Cigerette"},
    {id:2, name: "Alcohol", value: "2-3x monthly"},
    {id:3, name: "Drugs", value: "Prescription"},
    {id:4, name: "Daily Activity", value: "Light Activity"},
    {id:5, name: "Stress Level", value: "Normal"},
    {id:6, name: "Food", value: "Eggetarian"}, 
  ]
  
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <img src={PhrAssets.LifeStyle_icon} alt="" />
          <h2 className="font-semibold text-lg">Lifestyle</h2>
        </div>
        <div className="flex gap-5 items-center">
          <Update onClick={openLifeStyleUpdatePage} showUpdateButton={true}/>
          <AddBtn onClick={openLifeStyleUpdatePage}/>
        </div>
      </div>
      <p className="border border-gray-200 px-2 my-3"></p> 

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 px-2 py-2">
       
      
          {LifeStyleList.map((item) => (
            <div key={item.id} className="flex flex-col gap-1">
              <p className="text-gray-700 ">{item.name}</p>
              <p className="font-medium text-base">{item.value}</p>
              </div>
          ))}    
         
        
      </div>
    </>
  );
};

export default LifeStyle;
