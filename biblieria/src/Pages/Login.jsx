import biblio from "../assets/img/biblio.jpg";
import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, errors } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
      <div
        className="container-fluid w-75 bg-dark text-white rounded m-20 p-3 md:p-5"
        data-bs-theme="dark"
      >
        <div className="row">
          <h2 className="text-center mb-3">Login</h2>
          <form
              onSubmit={handleLogin}
            >
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div id="emailHelp" className="form-text text-danger">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="password1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div id="password1" className="form-text text-danger">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="form-check">
                <Link
                  to={"/forgot-password"}
                  className="text-decoration-none hover:text-gray-500"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="text-center">
              <button type="submit" className="btn btn-secondary w-75 my-4">
                Register
              </button>
            </div>
              <div className="text-center">
                <Link to={'/register'} className="font-bold hover:text-gray-500">Crea un nuovo account</Link>
              </div>
            </form>
        </div>
      </div>
  );
}
