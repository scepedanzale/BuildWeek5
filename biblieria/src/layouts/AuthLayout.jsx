import { Navigate, Outlet } from 'react-router-dom'
import useAuthContext from '../context/AuthContext'
import MyNavbar from "../Components/MyNavbar";


export default function AuthLayout() {

  const { user } = useAuthContext()
  return  {user} ?  <Outlet /> : <Navigate to="/" />
}
