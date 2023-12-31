import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

/* eslint-disable react/prop-types */
const LoginLayOut = () => {
  useEffect(() => {
    console.log("login");
  }, []);
  return (
    <>
      <div className="h-screen bg-gray-100 flex flex-col justify-center ">
        <div className="relative py-3 mx-auto w-11/12 sm:w-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg  rounded-3xl">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLayOut;
