import { HomeAssets } from "../assets/Home/HomeAssets";
import RightSide from "./RightSide";

const LeftSide = () => {
  return (
    <div
      className={`w-full   bg-cover bg-center bg-no-repeat relative   flex flex-col lg:flex-row justify-between items-center px-16 `}
      style={{ backgroundImage: `url(${HomeAssets.LoginPageImage})` }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}


      <div className="relative bg-[#F9FAFB] space-y-4 bg-opacity-40 w-full md:w-1/2 p-5 rounded">
        <div className="bg-white p-5 rounded-md">
          <h1>Transforming</h1>
          <h1 className="text-[#1C9401] text-sm md:text-lg lg:text-3xl font-semibold">
            Healthcare & Insurance eco-system
          </h1>
        </div>

        {/* First Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="p-5 bg-white text-center rounded-lg">
            <img className="m-auto" src={HomeAssets.Cloudbase} alt="Cloud-based platform" />
            <h1>Cloud-based Integrated Health-Tech Platform</h1>
          </div>
          <div className="p-5 bg-white text-center rounded-lg">
            <img className="mx-auto" src={HomeAssets.CurePrevention} alt="Cure to Prevention" />
            <h1>Shift focus from ‘Cure to Prevention’</h1>
          </div>
        </div>

        {/* Second Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="p-5 bg-white text-center rounded-lg">
            <img className="m-auto" src={HomeAssets.PreventChronic} alt="Prevent Chronic Conditions" />
            <h1>Prevent Chronic Conditions</h1>
          </div>
          <div className="p-5 bg-white text-center rounded-lg">
            <img className="m-auto" src={HomeAssets.DigitalWell} alt="Digital Well-being Program" />
            <h1>Digital Well-being Program</h1>
          </div>
          <div className="p-5 bg-white text-center rounded-lg">
            <img className="m-auto" src={HomeAssets.Evidence} alt="Evidence-based Preventive Well-being Programs" />
            <h1>Evidence-based Preventive Well-being Programs</h1>
          </div>
        </div>
      </div>

      {/* Right Side Card */}
      <div className="relative bg-white  rounded-lg shadow-lg  md:w-1/3 ">
       <RightSide/>
      </div>
    </div>
  );
};

export default LeftSide;
