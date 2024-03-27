import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import Spinner from "../Components/Spinner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const { csrf } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await csrf();
    setErrors([]);
    setLoading(true);
    setStatus(null);
    try {
      const response = await axios.post("/forgot-password", { email });
      setStatus(response.data.status);
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setErrors(err.response.data.errors);
      }
    } finally {
        setLoading(false)
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
            <div className="bg-green-500 rounded-lg m-4 p-3 mx-auto text-white text-center">{status}</div>
          )}
          <h2 className="text-xl text-center mb-3">Forgot your password?</h2>
          <form
            className="w-75 position-relative top-0 start-50 translate-middle-x"
            onSubmit={handleSubmit}
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

            <button disabled={loading} type="submit" className="btn btn-secondary">
              {!loading ? 'Send' : 'sending...'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
