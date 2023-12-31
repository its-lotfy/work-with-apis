import { setAuthTokens, verifyToken } from "@/features/user/userSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();

  const { isAuthorized, authLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setAuthTokens());
    const validate = setInterval(() => {
      dispatch(verifyToken());
    }, 60000);
    return () => {
      clearInterval(validate);
    };
  }, [isAuthorized, dispatch]);

  return { authLoading, isAuthorized };
};

export default useAuth;
