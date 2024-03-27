import React, { useState, useEffect } from "react";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import Spinner from "../Components/Spinner";
import { useParams, useSearchParams } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const { token } = useParams();
  const { csrf } = useAuthContext();

  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await csrf();
    setErrors([]);
    setLoading(true);
    setStatus(null);
    try {
      const response = await axios.post("/reset-password", {
        email,
        token,
        password,
        password_confirmation,
      });
      setStatus(response.data.status);
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setErrors(err.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        className="container w-75 position-absolute top-50 start-50 translate-middle bg-dark text-white p-5 rounded"
        data-bs-theme="dark"
      >
        <div className="row">
          {status && (
            <div className="bg-green-500 rounded-lg m-4 p-3 mx-auto text-white text-center">
              {status}
            </div>
          )}
          <h2 className="text-xl text-center mb-3">Reset your password</h2>
          <form
            className="w-75 position-relative top-0 start-50 translate-middle-x"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
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
              <label for="exampleInputEmail1" className="form-label">
                Password Confirmation
              </label>
              <input
                type="password"
                className="form-control"
                name="password_confirmation"
                id="password_confirmation"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="btn btn-secondary"
            >
              {!loading ? "Submit" : "Loading..."}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
