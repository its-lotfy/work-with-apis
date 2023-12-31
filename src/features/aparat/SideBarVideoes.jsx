import { getRandomVideoes, shortNumber } from "@/utils/utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import watched from "@/assets/images/aparat/wached.png";
import VideoCard from "@/features/aparat/VideoCard";
const SideBarVideoes = () => {
  const { video } = useSelector((state) => state.aparat);
  const [randomVideo, setRandomVideo] = useState([]);
  const { relatedVideo } = video;

  useEffect(() => {
    setRandomVideo(getRandomVideoes(relatedVideo));
  }, [relatedVideo]);

  return (
    <section className="leftside">
      {relatedVideo.length > 0
        ? randomVideo.map((itm, idx) => (
            //   <NavLink
            //     to={`/video/${itm.uid}${location.search}`}
            //     key={`${idx}`}
            //     className="imgsideContainer shadow-md rounded-sm "
            //   >
            //     <div
            //       className={`overflow-hidden bg-no-repeat bg-cover bg-right`}
            //       style={{
            //         backgroundImage: `url(${itm.big_poster})`,
            //         height: 140,
            //       }}
            //     >
            //       {/* <img
            //   className="rounded-t-lg object-contain w-full h-full"
            //   src={video.big_poster1}
            //   alt={video.title}
            //   loading="lazy"
            // /> */}
            //     </div>
            //     <div className="detail p-2">
            //       <p
            //         className="text-base text-neutral-600 dark:text-neutral-200 py-4"
            //         style={{
            //           whiteSpace: "nowrap",
            //           textOverflow: "ellipsis",
            //           overflow: "hidden",
            //           maxWidth: "calc(100% - 7px)",
            //         }}
            //       >
            //         {itm.title}
            //       </p>
            //       <Link
            //         to={`/profile/${itm.username}`}
            //         className="mb-4 inline-block"
            //       >
            //         {itm.sender_name}
            //       </Link>
            //       <p className="flex justify-between items-center">
            //         <span className="ml-4 py-2 flex justify-center items-center">
            //           <img src={watched} alt="" width={15} className="ml-1" />
            //           {shortNumber(itm.visit_cnt)}
            //         </span>
            //         <span className="p1"> {itm.sdate} </span>
            //       </p>
            //     </div>
            //   </NavLink>

            <VideoCard video={itm} key={idx} />
          ))
        : Array.apply(null, Array(5)).map((itm, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  inlie-block animate-pulse"
            >
              <div
                className={`overflow-hidden bg-no-repeat bg-cover bg-right relative bg-slate-500`}
                style={{ height: 140 }}
              >
                <div className="time absolute bottom-1 left-1 p-1 bg-slate-500 font text-xs rounded-2xl text-white h-3"></div>
              </div>
              <div className="px-5 py-2">
                <p className="text-base text-neutral-600 dark:text-neutral-200 bg-slate-500 h-2 my-2 rounded-2xl"></p>
                <div className="flex justify-between items-center">
                  <p className="bg-slate-500 h-4 text-base text-neutral-600 dark:text-neutral-200 flex  items-center rounded-2xl">
                    <img src={""} alt="" width={15} className="ml-1 " />
                  </p>
                  <span className="bg-slate-500 text-base text-neutral-600 dark:text-neutral-200 h-2 w-6 rounded-2xl"></span>
                </div>
              </div>
            </div>
          ))}
    </section>
  );
};
export default SideBarVideoes;
