import React, { useState } from "react";
import axios from "../api/axios";
import useAuthContext from "../context/AuthContext";

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
    <>
      <div
        className="container w-50 position-absolute top-50 start-50 translate-middle bg-dark text-white p-5 rounded"
        data-bs-theme="dark"
      >
        <div className="row">
          <h2 className="text-center mb-5">Register</h2>
          <form
            className="w-75 position-relative top-0 start-50 translate-middle-x"
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
            {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                name="check"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div> */}
            <button type="submit" className="btn btn-secondary">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
