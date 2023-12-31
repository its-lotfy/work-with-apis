import SideBarVideoes from "@/features/aparat/SideBarVideoes";
import { Outlet } from "react-router-dom";

const Video = () => {
  return (
    <div className="gridvideo">
      <Outlet />
      <SideBarVideoes />
    </div>
  );
};
export default Video;
