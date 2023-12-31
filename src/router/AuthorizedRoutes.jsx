import RootLayOut from "@/layout/RootLayOut";
import Error from "@/components/Error";
import Profile from "@/features/aparat/Profile";
import { Navigate } from "react-router-dom";
import Logout from "@/features/user/Logout";
import ShowVideo from "@/features/aparat/ShowVideo";
import Video from "@/pages/aparat/Video";
import Search from "@/pages/aparat/Search";

export default [
  {
    element: <RootLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "profile/:username",
        element: <Profile />,
      },

      {
        path: "search",
        element: <Search />,
      },
      {
        path: "video",
        element: <Video />,

        children: [
          {
            index: true,
            element: <div>no video</div>,
          },
          {
            path: ":uid",
            element: <ShowVideo />,
          },
        ],
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
