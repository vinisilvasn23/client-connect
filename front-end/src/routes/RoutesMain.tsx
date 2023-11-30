import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DashboardUser } from "../pages/DashboardUser";
import { PrivateRoute } from "./PrivateRoute";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardUser />} />
      </Route>
    </Routes>
  );
};
