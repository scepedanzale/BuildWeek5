import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, errors } = useAuthContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    register({
        name, 
        email,
        password,
        password_confirmation
    });
  };
  return (
      <div
        className="container-fluid w-75 bg-dark text-white rounded m-20 p-3 md:p-5"
        data-bs-theme="dark"
      >
        <div className="row">
          <h2 className="text-center mb-3">Register</h2>
          <form
            onSubmit={handleRegister}
          >
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <div id="emailHelp" className="form-text text-danger">
                  {errors.name}
                </div>
              )}
            </div>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div id="emailHelp" className="form-text text-danger">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label for="password_confirmation" className="form-label">
                Confirm Password
              </label>
              <input
                type="password_confirmation"
                name="password_confirmation"
                className="form-control"
                id="password_confirmation"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              {errors.password_confirmation && (
                <div id="emailHelp" className="form-text text-danger">
                  {errors.password_confirmation}
                </div>
              )}
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-secondary w-75 my-4">
                Register
              </button>
            </div>
            <div className="text-center">
              Hai già un account? <Link to={'/login'} className="font-bold hover:text-gray-500">Accedi</Link>
            </div>
          </form>
        </div>
      </div>
  );
}
