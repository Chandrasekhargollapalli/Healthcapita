import { useNavigate } from "react-router-dom";
import AddBtn from "../../../../CommonComponents/AddBtn/AddBtn";
import Update from "../../../../CommonComponents/Update/Update";

const MedicalAndSurgery = () => {

  const navigate = useNavigate()

  const openMedicalAndSurgeryUpdatePage = () => {
    navigate('/PhrMedicalAndSUrgeryUpdate')
  }
    
  return (
    <>
      <div className="mx-10 my-5 bg-[#F9FAFB] rounded-lg py-4 px-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Medical & Surgery</h2>
          <div className="flex gap-5 items-center">
            <Update showUpdateButton={true} onClick={openMedicalAndSurgeryUpdatePage}/> 
           <AddBtn onClick={openMedicalAndSurgeryUpdatePage}/>
          </div>
        </div>
        <p className="border border-gray-200 px-2 my-3"></p>

        <div className="py-2 px-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          <div className="flex flex-col gap-2">
            <p>Speciality:</p>
            <p className="font-semibold">Cancer</p>       
          </div> 

          <div className="flex flex-col gap-2">
            <p>Sub Speciality:</p>
            <p className="font-semibold">Lung Cancer</p>  
          </div> 

          <div className="flex flex-col gap-2">
            <p>Date of Diagnosis:</p>
            <p className="font-semibold">03/10/2021</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Physician Specialist: --</p>
            <p className="font-semibold">--</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Primary Care Physician: --</p>
            <p className="font-semibold">--</p>
          </div>

        </div>


        <div className="py-2 px-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          <div className="flex flex-col gap-2">
            <p>Prescribed By</p>
            <p className="font-semibold">Jane Cooper</p>       
          </div> 

          <div className="flex flex-col gap-2">
            <p>Sub Speciality:</p>
            <p className="font-semibold">Lung Cancer</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Date of Diagnosis:</p>
            <p className="font-semibold">03/10/2021</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Physician Specialist: --</p>
            <p className="font-semibold">--</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Primary Care Physician: --</p>
            <p className="font-semibold">--</p>
          </div>
          
        </div>

        <p className="border border-gray-200 border-dotted px-2 my-5"></p>

        <div className="py-2 px-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          <div className="flex flex-col gap-2">
            <p>Speciality:</p>
            <p className="font-semibold">Cancer</p>       
          </div> 

          <div className="flex flex-col gap-2">
            <p>Sub Speciality:</p>
            <p className="font-semibold">Lung Cancer</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Date of Diagnosis:</p>
            <p className="font-semibold">03/10/2021</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Physician Specialist: --</p>
            <p className="font-semibold">--</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Primary Care Physician: --</p>
            <p className="font-semibold">--</p>
          </div>

        </div>


        <div className="py-2 px-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          <div className="flex flex-col gap-2">
            <p>Prescribed By</p>
            <p className="font-semibold">Jane Cooper</p>       
          </div> 

          <div className="flex flex-col gap-2">
            <p>Sub Speciality:</p>
            <p className="font-semibold">Lung Cancer</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Date of Diagnosis:</p>
            <p className="font-semibold">03/10/2021</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Physician Specialist: --</p>
            <p className="font-semibold">--</p>
          </div> 

          <div className="flex flex-col gap-2">
            <p>Primary Care Physician: --</p>
            <p className="font-semibold">--</p>
          </div>
          
        </div>
    </div>
    </>
  )
}

export default MedicalAndSurgery;