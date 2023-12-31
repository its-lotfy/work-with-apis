import {
  apgetProfileCategoriesApi,
  apgetUserProfileApi,
  apgetUserVideoesApi,
  apgetVideosByCategoryApi,
} from "@/API";
import CatCarousel from "@/features/aparat/CatCarousel";
import SearchCard from "@/features/aparat/VideoCard";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const [videobyuser, setvideobyuser] = useState([]);
  const [categories, setCategories] = useState([]);
  const { username } = useParams();
  const getUser = async () => {
    const { data } = await apgetUserProfileApi(username);
    const { data: videos } = await apgetUserVideoesApi(username);
    const { profilecategories } = (await apgetProfileCategoriesApi(username))
      .data;
    setUser(data.profile);
    setvideobyuser(videos.videobyuser);
    setCategories(profilecategories);
  };
  const getVideobyCat = async (cat) => {
    const { videobyprofilecat } = (
      await apgetVideosByCategoryApi(username, cat)
    ).data;
    setvideobyuser(videobyprofilecat);
  };
  useEffect(() => {
    getUser();
    return () => {};
  }, []);

  return (
    <>
      <div className="flex items-center justify-center  h-full pt-20">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view*/}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${user.pic_b})`,
              }}
            />
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.name}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {user.follower_cnt}
                  </span>
                  <span className="text-sm text-blueGray-400">Folowers</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {parseInt(user.followed_cnt) || 0}
                  </span>
                  <span className="text-sm text-blueGray-400">folowing</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {user.video_cnt}
                  </span>
                  <span className="text-sm text-blueGray-400">videoes</span>
                </div>
              </div>
            </div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              {user.descr}
            </p>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between"></div>
          </div>
        </div>
        <div>
          <img
            src={user.pic_b}
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
      <div>
        {categories && categories.length > 0 && (
          <CatCarousel
            videoCategories={categories}
            handleSearchByCat={getVideobyCat}
          />
        )}
      </div>
      <div className="grid gap-3 grid-cols-5	">
        {videobyuser &&
          videobyuser.length > 0 &&
          videobyuser.map((itm) => <SearchCard video={itm} />)}
      </div>
    </>
  );
};

export default Profile;
