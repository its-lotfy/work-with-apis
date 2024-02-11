import ErrorBoundary from "@/components/ErrorBoundry";
import Loading from "@/components/Loading";
import useAuth from "@/hooks/useAuth";
import AuthorizedRoutes from "@/router/AuthorizedRoutes";
import UnAuthorizedRoutes from "@/router/UnAuthorizedRoutes";
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const { isAuthorized, authLoading } = useAuth();
  const privateRoutes = createBrowserRouter(AuthorizedRoutes);
  const publicRoutes = createBrowserRouter(UnAuthorizedRoutes);

  if (authLoading) {
    return <div>loading</div>;
  }
  return (
    <RouterProvider
      router={isAuthorized ? privateRoutes : publicRoutes}
      fallbackElement={<p>ddd</p>}
    />
  );
};
export default App;
