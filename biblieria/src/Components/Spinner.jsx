import { spinner } from "@material-tailwind/react";
import React from "react";

export default function Spinner({size, text}) {
  return (
    <Spinner animation="border" role="status" size={size}>
      <span className="visually-hidden">{text}</span>
    </Spinner>
  );
}
