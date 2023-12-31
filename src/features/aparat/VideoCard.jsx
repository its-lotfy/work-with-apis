import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import watched from "@/assets/images/aparat/wached.png";
import { convertToMinute, shortNumber } from "@/utils/utils";

const VideoCard = ({ video }) => {
  return (
    <Link
      to={{ pathname: `/video/${video.uid}` }}
      className="rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  inlie-block "
    >
      <div
        className={`overflow-hidden bg-no-repeat bg-cover bg-right relative`}
        style={{ backgroundImage: `url(${video.big_poster})`, height: 140 }}
      >
        {/* <img
          className="rounded-t-lg object-contain w-full h-full"
          src={video.big_poster1}
          alt={video.title}
          loading="lazy"
        /> */}
        <div className="time absolute bottom-1 left-1 p-1 bg-slate-800 font text-xs rounded-2xl text-white">
          {convertToMinute(video.duration)}
        </div>
      </div>
      <div className="px-5 py-2">
        <p
          className="text-base text-neutral-600 dark:text-neutral-200"
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            maxWidth: "calc(100% - 7px)",
          }}
          title={video.title}
        >
          {video.title}
        </p>
        <div className="flex justify-between">
          <p className="text-base text-neutral-600 dark:text-neutral-200 flex  items-center">
            <img src={watched} alt="" width={15} className="ml-1" />
            {shortNumber(video.visit_cnt)}
          </p>
          <span className="text-base text-neutral-600 dark:text-neutral-200">
            {video.sdate}
          </span>
        </div>
      </div>
    </Link>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
};
export default VideoCard;
