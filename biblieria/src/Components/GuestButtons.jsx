import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function GuestButtons() {
  return (
    <div className="guest-btns">
      <Link to={'/login'} className="btn btn-light mx-3">Login</Link>
      <Link to={'/register'}  className="btn btn-outline-light">Register</Link>
    </div>
  );
}
