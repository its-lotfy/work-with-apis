import {
  apGetRelatedVideoes,
  apGetVideo,
  clearVideo,
  selectVideo,
} from "@/features/aparat/aparatSlice";
import { shortNumber } from "@/utils/utils";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import watched from "@/assets/images/aparat/wached.png";
import { useGetVideoQuery } from "@/API/apiSlice";

const ShowVideo = () => {
  const { uid } = useParams();
  console.log(uid);
  const { data, isFetching, isSuccess, isLoading } = useGetVideoQuery(uid);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({});
  // const video = useSelector(selectVideo);

  // useEffect(() => {
  //   // dispatch(apGetVideo(uid));
  //   return () => {
  //     dispatch(clearVideo());
  //   };
  // }, [uid]);
  useEffect(() => {
    if (isSuccess) {
      setInfo(data.video);
    }
    dispatch(clearVideo());
  }, [isFetching]);

  useEffect(() => {
    if (info.cat_id) {
      const relatedObject = {
        // category: info.cat_id,
        title: info.title,
        tag: info.tag_str,
      };
      dispatch(apGetRelatedVideoes(relatedObject));
    }
  }, [info]);

  return (
    <section className="mainside">
      <div className="video relative">
        {info.file_link && (
          <video
            className="rounded-3xl w-full h-full"
            controls
            src={info.file_link}
          >
            <source src={info.file_link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {!isFetching ? (
          ""
        ) : (
          <div className="absolute top-0 left-0 bg-slate-500 animate-skelton w-full h-full rounded-3xl"></div>
        )}
      </div>

      <div className="video-detail">
        <p>{info.title}</p>
        <div className="minidetail flex justify-between w-9/12 mx-auto my-5">
          <div className="p-4 rounded-lg shadow-md  sender flex justify-center items-center">
            <img
              src={info.profilePhoto}
              alt=""
              loading="lazy"
              className="rounded-full w-6 ml-2"
            />

            <p>{info.sender_name}</p>
          </div>
          {/* <div className="p-4 rounded-lg shadow-md duration">
            <p> {convertToMinute(info.duration)}</p>
          </div> */}
          <div className="p-4 rounded-lg shadow-md date ">{info.sdate}</div>
          <span className="flex justify-center items-center p-4 rounded-lg shadow-md visitcount  ">
            <img src={watched} alt="" width={15} className="ml-1" />

            {shortNumber(info.visit_cnt)}
          </span>
        </div>
        {info.description && (
          <p className="p-2 my-4 leading-10 shadow-md rounded-3xl">
            {info.description}
          </p>
        )}
        {info.tag_str && (
          <p className="p-2 my-4 shadow-md rounded-3xl">
            {info.tag_str?.split("-").map((itm) => (
              <span key={itm}> #{itm}</span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
};
export default ShowVideo;
