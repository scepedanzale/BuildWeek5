import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

// Create the AuthContext using createContext from React
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const csrf = async () => {
    await axios.get("/sanctum/csrf-cookie");
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get("/dashboard", {
      });
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const login = async ({ ...data }) => {
    setErrors([]);
    await csrf();
    try {
      await axios.post("/login", data);
      await getUser();
      console.log(user);
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setErrors(err.response.data.errors);
      }
    }
  };


  const register = async ({ ...data }) => {
    setErrors([]);
    await csrf();
    try {
      await axios.post("/register", data);
      await getUser();
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setErrors(err.response.data.errors);
      }
    }
  };

  const newUser = async ({ ...data }) => {
    setErrors([]);
    await csrf();
    try {
      await axios.post("/admin/user", data);
      await getUser();
      navigate("/admin");
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setErrors(err.response.data.errors);
      }
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user])

  const logout = () => {
    axios.post('/logout').then(() => {
      setUser(null);
      navigate("/");
    })
  }


  return (
    <AuthContext.Provider value={{ user, errors, getUser, login, register, logout, newUser, csrf, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
