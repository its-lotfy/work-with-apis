import Login from "@/features/user/Login";
import LoginLayOut from "@/layout/LoginLayOut";
import { Navigate } from "react-router-dom";

export default [
  {
    element: <LoginLayOut />,
    errorElement: <div>went wrong</div>,
    children: [{ path: "login", element: <Login /> }],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];
