import useAuth from "@/hooks/useAuth";
import AuthorizedRoutes from "@/router/AuthorizedRoutes";
import UnAuthorizedRoutes from "@/router/UnAuthorizedRoutes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const { isAuthorized, authLoading } = useAuth();
  const privateRoutes = createBrowserRouter(AuthorizedRoutes);
  const publicRoutes = createBrowserRouter(UnAuthorizedRoutes);

  if (authLoading) {
    return <div>loading</div>;
  }
  return (
    <RouterProvider router={isAuthorized ? privateRoutes : publicRoutes} />
  );
};
export default App;
