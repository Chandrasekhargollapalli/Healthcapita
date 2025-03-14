import React, { useState } from "react";

const RightSide = () => {
  const [activeTab, setActiveTab] = useState("email");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white  rounded-lg  w-96">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome! Please Sign In</h2>
        <p className="text-center text-gray-500 mb-6">Log in to continue</p>

        {/* Tabs */}
        <div className="flex justify-between border-b mb-4">
          <button
            onClick={() => setActiveTab("email")}
            className={`w-1/2 pb-2 text-center ${activeTab === "email" ? "border-b-4 border-green-500 font-bold" : "text-gray-500"}`}
          >
            Email
          </button>
          <button
            onClick={() => setActiveTab("otp")}
            className={`w-1/2 pb-2 text-center ${activeTab === "otp" ? "border-b-4 border-green-500 font-bold" : "text-gray-500"}`}
          >
            OTP
          </button>
        </div>

        {/* Form */}
        {activeTab === "email" && (
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="user@healthcapita.com"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="***************"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="mb-6 text-right">
              <a href="#" className="text-green-500 hover:underline">
                Forgot password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition"
            >
              Sign in
            </button>
          </form>
        )}

        {activeTab === "otp" && (
          <p className="text-center text-gray-500">OTP login is not implemented yet.</p>
        )}
      </div>
    </div>
  );
};

export default RightSide;
