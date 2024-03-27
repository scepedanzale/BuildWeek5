import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

export default function EditProfile() {
  const { user, setUser, errors } = useAuthContext();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profile_img, setProfileImg] = useState(user.profile_img);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoadingUpdate(true);
    axios
      .patch(`/admin/user/${user.id}`, {
        name,
        email,
        profile_img,
      })
      .then(() => navigate("/profile"));
  };

  const deleteProfile = (e) => {
    e.preventDefault();
    setLoadingDelete(true);
    window.confirm("Are you sure you want to delete your account?");
    axios.delete(`admin/user/${user.id}`).then(() => {
      setUser(null);
      navigate("/");
    });
  };

  return (
    <div
      className="container w-50 position-absolute top-50 start-50 translate-middle bg-dark text-white p-5 rounded"
      data-bs-theme="dark"
    >
    <Link className="text-decoration-none btn btn-light" to={'/profile'}>back</Link>
      <div className="row">
        <h2 className="text-center mb-5">Modify Account</h2>
        <form
          className="w-75 position-relative top-0 start-50 translate-middle-x mb-20"
          onSubmit={handleUpdate}
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
            <label for="exampleInputEmail1" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              name="profile_img"
              id="profile_img"
              aria-describedby="emailHelp"
              value={profile_img}
              onChange={(e) => setProfileImg(e.target.value)}
            />
          </div>

          <button
            disabled={loadingUpdate}
            type="submit"
            className="btn btn-warning "
          >
            {!loadingUpdate ? "UPDATE" : "Loading..."}
          </button>
        </form>

        <form
          onSubmit={deleteProfile}
          className="w-75 position-relative top-0 start-50 translate-middle-x"
        >
          <button
            disabled={loadingDelete}
            type="submit"
            className="btn btn-danger"
          >
            {!loadingDelete ? "DELETE ACCOUNT" : "Loading..."}
          </button>
        </form>
      </div>
    </div>
  );
}
