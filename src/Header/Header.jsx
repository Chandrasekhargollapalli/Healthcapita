import { useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";
import { HomeAssets } from "../assets/Home/HomeAssets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const Navigate =  useNavigate()
  return (
    <>                                  
      <div className="w-full">
        <header className="bg-[#007183]  py-4  overflow-x-hidden sm:px-6 md:px-8 lg:px-12 md:py-4 lg:py-1 text-white sticky top-0 z-50">
          <div className="container flex justify-between items-center">
            <div className="flex items-center gap-6 md:gap-8">
              <img src={HomeAssets.MainLogo} alt="Logo" className="h-8 sm:h-12" />

              <nav className="hidden md:flex">
                <ul className="flex items-center justify-center pt-7 pb-2 gap-4 lg:gap-6 text-xs sm:text-sm md:text-base lg:text-md font-semibold">
                  {/* Home */}
                  <NavLink
                    to="/Dashboard"
                    end
                    className={({ isActive }) =>
                      `relative cursor-pointer after:content-[''] after:h-1 after:bg-white after:absolute after:left-0 after:-bottom-2.5 after:w-full after:border-none transition-all duration-300 ${
                        isActive
                          ? "after:opacity-100 text-white"
                          : "after:opacity-0 hover:after:opacity-100 hover:text-gray-300"
                      }`
                    }
                  >
                    <li>Dashboard</li>
                  </NavLink>

                  {/* PHR */}
                  <NavLink
                    to="/phr"
                    className={({ isActive }) =>
                      `relative cursor-pointer after:content-[''] after:h-1 after:bg-white after:absolute after:left-0 after:-bottom-2.5 after:w-full after:border-none transition-all duration-300 ${
                        isActive
                          ? "after:opacity-100 text-white"
                          : "after:opacity-0 hover:after:opacity-100 hover:text-gray-300"
                      }`
                    }
                  >
                    <li>PHR</li>
                  </NavLink>

                  {/* HRA */}
                  <NavLink
                    to="/assessment"
                    className={({ isActive }) =>
                      `relative cursor-pointer after:content-[''] after:h-1 after:bg-white after:absolute after:left-0 after:-bottom-2.5 after:w-full after:border-none transition-all duration-300 ${
                        isActive
                          ? "after:opacity-100 text-white"
                          : "after:opacity-0 hover:after:opacity-100 hover:text-gray-300"
                      }`
                    }
                  >
                    <li>HRA</li>
                  </NavLink>

                  {/* Health Services */}
                  <NavLink
                    to="/healthServices"
                    className={({ isActive }) =>
                      `relative cursor-pointer after:content-[''] after:h-1 after:bg-white after:absolute after:left-0 after:-bottom-2.5 after:w-full after:border-none transition-all duration-300 ${
                        isActive
                          ? "after:opacity-100 text-white"
                          : "after:opacity-0 hover:after:opacity-100 hover:text-gray-300"
                      }`
                    }
                  >
                    <li>Health Services</li>
                  </NavLink>

                  {/* Health Directory */}
                  <NavLink
                    to="/healthDirectory"
                    className={({ isActive }) =>
                      `relative cursor-pointer after:content-[''] after:h-1 after:bg-white after:absolute after:left-0 after:-bottom-2.5 after:w-full after:border-none transition-all duration-300 ${
                        isActive
                          ? "after:opacity-100 text-white"
                          : "after:opacity-0 hover:after:opacity-100 hover:text-gray-300"
                      }`
                    }
                  >
                    <li>Health Directory</li>
                  </NavLink>

                  {/* Device Data */}
                  <NavLink
                    to="/deviceData"
                    className={({ isActive }) =>
                      `relative cursor-pointer after:content-[''] after:h-1 after:bg-white after:absolute after:left-0 after:-bottom-2.5 after:w-full after:border-none transition-all duration-300 ${
                        isActive
                          ? "after:opacity-100 text-white"
                          : "after:opacity-0 hover:after:opacity-100 hover:text-gray-300"
                      }`
                    }
                  >
                    <li>Device Data</li>
                  </NavLink>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
             
              <img
                src={HomeAssets.search}
                alt="Search Icon"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <img
                src={HomeAssets.bell}
                alt="Notification Bell"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <img
                src={HomeAssets.ellipse}
                alt="User Avatar"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
              />
              <button
                onClick={() => Navigate("/")}
                className="text-xs sm:text-sm md:text-base font-medium"
              >
                Logout
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden focus:outline-none"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden">
              <ul className="flex flex-col text-center gap-5 mt-5 sm:mt-4 text-xs sm:text-sm text-gray-200">
                <NavLink to="/Dashboard">
                  <li className="hover:text-gray-300 cursor-pointer">
                    Dashboard
                  </li>
                </NavLink>
                <NavLink to="/phr">
                  <li className="hover:text-gray-300 cursor-pointer">PHR</li>
                </NavLink>
                <NavLink to="/assessment">
                  <li className="hover:text-gray-300 cursor-pointer">HRA</li>
                </NavLink>
                <li className="hover:text-gray-300 cursor-pointer">
                  Health Services
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  Health Directory
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  Device Data
                </li>
              </ul>
            </nav>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;