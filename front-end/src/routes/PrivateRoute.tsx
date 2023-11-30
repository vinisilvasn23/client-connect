import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../provider/UserContext/UserContext";

export const PrivateRoute = () => {
  const { userData } = useContext(UserContext);

  if (!userData) return <Navigate to="/" />;

  return <Outlet />;
};
