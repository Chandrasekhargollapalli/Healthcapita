import { HomeAssets } from "../../assets/Home/HomeAssets"

const QuickToolsAndCard = ()=>{
    return(
        <div className='flex p-8 w-full flex-col  md:flex-row items-center justify-center gap-20'>
<div className='w-1/2'>
    <p className=' text sm:text-2xl font-semibold mb-6'>QuickTools</p>
    <p className='mb-5'>Quickly reach the health services that matter most to you.</p>
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
             <div className="p-5 text-center rounded-lg shadow-lg">
                        <img className="m-auto" src={HomeAssets.UploadReport} alt="Evidence-based Preventive Well-being Programs" />
                        <h1  className='mt-4 font-semibold'>Upload Report</h1>
             </div>
             <div className="p-5 text-center rounded-lg shadow-lg">
                        <img className="m-auto" src={HomeAssets.AddFamilyMember} alt="Evidence-based Preventive Well-being Programs" />
                        <h1  className='mt-4 font-semibold'>Add Family Member</h1>
             </div>
             <div className="p-5 text-center rounded-lg shadow-lg">
                        <img className="m-auto" src={HomeAssets.ReferToFriends} alt="Evidence-based Preventive Well-being Programs" />
                        <h1  className='mt-4 font-semibold'>Refer to Friends</h1>
             </div>
             <div className="p-5 text-center rounded-lg shadow-lg">
                        <img className="m-auto" src={HomeAssets.Archives} alt="Evidence-based Preventive Well-being Programs" />
                        <h1  className='mt-4 font-semibold'>Upload Report</h1>
             </div>
           

             </div>
       
    </div>
</div>
<div className="w-1/2 p-8 ">
<div className='border rounded-xl  '>
    <div className='bg-[#001940] rounded-t-lg p-2'>
<div className='flex items-center justify-between'>
    <img className="p-2" src={HomeAssets.logo} alt="" />
    <p className='text-[#9CA3AF]'>Policy No : <span className='text-white'>AL09876123456</span></p>
</div>

    </div>
    <div className='p-2 flex justify-between'>
        <div className='flex gap-3'>
    <img src={HomeAssets.JohnProfile} alt="" /> 
    <div>
    <p className='text-lg font-semibold'>John Dsouza </p>
    <p>PHR ID : <span className='text-lg font-semibold'>ODYL834994</span></p>
    <p>Age : <span className='text-lg font-semibold'>34 Years</span></p>
    <p>Date of Birth : <span className='text-lg font-semibold'>06/02/1990</span></p>
    <p>Blood Group : <span className='text-lg font-semibold'>O -ve</span></p>
    </div>
    </div>
    <div>
       <img src={HomeAssets.Qrcode} alt="" />
    </div>

  
</div>
<div className='flex justify-between p-4'>
    <div>
        <p className='text-sm text-[#6B7280]'>Insurance Company:</p>
        <p className='font-semibold'>Al Hilal Life B.S.C</p>
        <p className='text-sm text-[#6B7280]' >(+973-77000335)</p>
        <p className='text-sm text-[#6B7280] mt-4'>Physician Contac :</p>
        <p className='font-semibold'>Brooklyn Simmons</p>
        <p className='text-sm text-[#6B7280]' >(+973-77000335)</p>
    </div>
    <div>
        <p className='text-sm text-[#6B7280]'>Emergency Contact :</p>
        <p className='font-semibold'>Cameron Williamson</p>
        <p className='text-sm text-[#6B7280]' >(+973-77000335)</p>
        <p className='text-sm text-[#6B7280] mt-4'>Insurance Company:</p>
        <p className='font-semibold'>Drug Allergies*</p>
        <p className='text-sm text-[#6B7280]' >Ace Inhibitors, Beta Blocker, Penicillin</p>
    </div>
    <div>
        <p className='text-sm text-[#6B7280]'>TPA</p>
        <p className='font-semibold'>GEMS (33003300)</p>
    </div>
</div>
</div>
</div>
        </div>
    )
}

export default QuickToolsAndCard