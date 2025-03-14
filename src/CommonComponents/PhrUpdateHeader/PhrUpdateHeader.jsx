import { useNavigate } from "react-router-dom";
import { PhrAssets } from "../../assets/PHR/assets" 

const PhrUpdateHeader = ({ Title }) => {
  const navigate = useNavigate();
  const closePage = () => {
    navigate('/phr') 
  }
  return (
    <>
    
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 sm:px-6 md:px-4 lg:px-12 bg-[#007183] shadow-md w-full">
          <div className="flex items-center space-x-3">
            <img src={PhrAssets.PhrIcon} alt="Logo" className="w-8 h-8" />
            <p className="border border-r-0 h-6 border-white"></p>
            <h2 className="md:text-3xl text-xl font-semibold text-white">
              Edit Personal Health record
            </h2>
          </div>

          <button
            onClick={closePage} 
            className="text-white text-xl font-semibold tracking-wide"
          >
            X <span className="hidden md:inline">Close</span>
          </button>
        </header>

        {/* Main Section */}
        <div className="px-2 md:p-5 xl:px-10 lg:px-4 sm:px-4 w-full">
          <div className="pt-3 sm:pt-0 flex flex-col sm:flex-row sm:justify-between sm:mx-3 sm:items-center gap-3">
            <div className="flex flex-row sm:justify-between items-center gap-2">
              <img
                onClick={closePage}
                className="text-black sm:w-6 cursor-pointer"
                src={PhrAssets.ArrowLeft}
                alt=""
              />
              <p className="border h-5 sm:h-6 sm:border-l-0 border-l-0 border-gray-400"></p>
              <h2 className="md:text-xl text-base lg:text-2xl leading-5 font-semibold">
                {Title}
              </h2>
              <img
                className="lg:mt-1 h-5 w-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6"
                src={PhrAssets.InfoCircle}
                alt=""
              />
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 lg:gap-5">
              <div className="flex items-center">
                <input
                  className="mr-1 lg:mr-2 border-none checked:bg-[#001940]"
                  type="checkbox"
                />
                <label className="text-[#001940] font-medium">
                  Protect with password
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="mr-1 lg:mr-2 border-none checked:bg-[#001940]"
                  type="checkbox"
                />
                <label className="text-[#001940] font-medium">
                  Display under summary page
                </label>
              </div>
            </div>
          </div>
          <p className="mx-2 border-b-2 border-gray-100 mt-4"></p>
        </div>
        
    </>
  )
}

export default PhrUpdateHeader