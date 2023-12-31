import { clearAuthTokens } from "@/features/user/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("myapp_tokens");
    dispatch(clearAuthTokens());
  }, []);

  return <div>Logout</div>;
};
export default Logout;
