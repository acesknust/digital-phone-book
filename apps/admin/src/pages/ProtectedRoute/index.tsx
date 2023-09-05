// import { useContext } from "react";

import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuthProvider } from "../../contextapi/AuthProvider";


const ProtectedRoute = () => {
  const { authState } = useAuthProvider();

  const location = useLocation();

  if (authState.credentials?.token || !authState.credentials === null) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }
  return (
    // <LayoutWrapper>
      <Outlet />
    // </LayoutWrapper>
  );
};

export default ProtectedRoute;
