import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayOut = () => {
  return (
    <>
      <div className="mx-auto h-screen w-11/12 max-w-7xl">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
export default RootLayOut;
