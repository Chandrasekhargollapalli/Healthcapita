import { HraAssets } from "../../../assets/Hra/assets";

const ProgressBar = ({ step }) => {
  const { ProgressSuccessIcon, ProgressIcon, ProgressCompletedIcon } =
    HraAssets;

  return (
    <div className="bg-[#F9FAFB] flex justify-center py-4 font-semibold items-center">
      <img
        className="mr-2"
        src={
          step === 1
            ? ProgressSuccessIcon
            : step > 1
            ? ProgressCompletedIcon
            : ProgressIcon
        }
        alt=""
      />
      <p className={`mr-2 ${step === 1 ? "text-black" : "text-gray-400"}`}>
        1. Personal & Family
      </p>
      <span
        className={`w-8 md:w-11 h-[2px] ${
          step === 1
            ? "bg-[#FF832B]"
            : step > 1
            ? "bg-[#12B76A]"
            : "bg-gray-300"
        }`}
      ></span>

      <img
        className=""
        src={
          step === 2
            ? ProgressSuccessIcon
            : step > 2
            ? ProgressCompletedIcon
            : ProgressIcon
        }
        alt=""
      />
      <p className={`mr-2 ${step === 2 ? "text-black" : "text-gray-400"}`}>
        2. Life Style
      </p>
      <span
        className={`w-8 md:w-11 h-[2px] ${
          step === 2
            ? "bg-[#FF832B]"
            : step > 2
            ? "bg-[#12B76A]"
            : "bg-gray-300"
        }`}
      ></span>

      <img
        className="mr-2"
        src={
          step === 3
            ? ProgressSuccessIcon
            : step > 3
            ? ProgressCompletedIcon
            : ProgressIcon
        }
        alt=""
      />
      <p className={`${step === 3 ? "text-black" : "text-gray-400"}`}>
        3. Medical & Surgery
      </p>
    </div>
  );
};

export default ProgressBar;
