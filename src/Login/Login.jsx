import { HomeAssets } from "../assets/Home/HomeAssets";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Login = () => {
  return (
    <div>
     <div className=" flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-12 md:py-4 lg:py-1 w-full">
  <div className="max-w-[150px] sm:max-w-[180px]">
    <img src={HomeAssets.LoginLogo} alt="Logo" className="w-full h-auto" />
  </div>
  <div className="flex flex-col sm:flex-row items-center gap-4">
    <select className="border rounded px-2 py-1 text-sm sm:text-base">
      <option>English (United States)</option>
    </select>
    <button className="px-4 py-2 border border-black rounded-full text-sm sm:text-base">
      Sign-up
    </button>
  </div>
</div>
<div className='lg:fixed'>
    <LeftSide/>
    </div>
    </div>
  );
};

export default Login;
