import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../store/Slices/userSlice";

const RightSide = () => {
  const [activeTab, setActiveTab] = useState("Email");
  const [showPassword,setShowPassword] = useState(false)
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

const handleChange = (e)=>{
const {name,value} =  e.target
setFormData ({...formData,[name] : value})
}

const submitHandler = async(e)=>{
e.preventDefault()
try{
const response = await axios.post(`https://service.healthcapita.com/api/Account/Login?Email=${formData.email}&password=${formData.password}`)
dispatch(setUser(response?.data?.data))
 if(response?.data?.status) navigate('/Dashboard'), toast.success('Login successfully')
}catch(error){
  console.log(error)
  toast.error('Invalid Email And Password')
}
}

  return (
    <div className="px-6 py-8">
      <h1 className='font-semibold text-sm sm:text-3xl mb-3'>Welcome! Please Sign In</h1>
      <p className="text-xs pb-4">Login to Continue</p>
      <div className="flex justify-around border-b mb-4 w-full">
        <button
          onClick={() => {
            setActiveTab("Email");
          }}
          className={`pb-4 w-1/2 ${activeTab === "Email" ? "border-b-4 border-[#1C9401]" : ""} `}
        >
          Email
        </button>
        <button
          onClick={() => {
            setActiveTab("Otp");
          }}
          className={`pb-4 w-1/2 ${activeTab === "Otp" ? "border-b-4 border-[#1C9401]" : ""}`}
        >
          Otp
        </button>
      </div>
      {activeTab === 'Email' && (
        <form onSubmit={submitHandler}>
          <div className='mb-4'>
<label  htmlFor="email" className="block text-gray-700 font-medium" >Email</label>
<input type='email' name='email' value={formData.email} id='email' className='mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500' autoComplete="off" placeholder='Enter a email' onChange={handleChange} />
          </div>
          <div className='mb-4 relative'>
<label  htmlFor="password" className="block text-gray-700 font-medium" >Password</label>
<input name='password' value={formData.password} type='password' id='password' className='mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500' autoComplete="off" placeholder='Enter a password' onChange={handleChange} />
<button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/6 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
          </div>
          <div className="mb-6 text-left">
              <a href="#" className="text-[#1C9401] hover:underline">
                Forgot password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1C9401] text-white py-2 rounded-lg font-bold hover:bg-green-600 transition"
            >
              Sign in
            </button>
        </form>
      )}
    </div>
  );
};

export default RightSide;
