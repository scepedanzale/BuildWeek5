import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import ErrorNotAuthorized from "../Pages/ErrorNotAuthorized";
import MyNavbar from "../Components/MyNavbar";

export default function AdminLayout() {
  const { user } = useAuthContext();
  return user?.is_admin ? (
    <>
      <Outlet />
    </>
  ) : (
    <ErrorNotAuthorized />
  );
}
