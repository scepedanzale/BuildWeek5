import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddUserForm } from "../../Components/AdminPageComp/AddUserForm";
import { Link } from "react-router-dom";
import AllUsersAdmin from "../../Components/AdminPageComp/AllUsersAdmin";
import Chart from "./Chart";
import PieChart from "./PieChart";

export default function AdminPage() {
  return (
    <Container>

      <Row>
      <div className="flex flex-row">
        <div className="me-4">
          <Link
            to={"/admin/createUser"}
            className=" btn btn-light bg-white my-4"
          >
            Add User
          </Link>
        </div>
        <div className="me-4">
          <Link
            to={"/admin/createBook"}
            className=" btn btn-light bg-white my-4"
          >
            Add Book
          </Link>
        </div>
        <div className="me-4">
          <Link
            to={"/admin/createAuthor"}
            className=" btn btn-light bg-white my-4"
          >
            Add Author
          </Link>
        </div>
      </div>
        <Col>
          <AllUsersAdmin />
        </Col>
        <Col>
          <Row className="mt-5">
            <Chart />
          </Row>
          <Row className="my-4">
            <PieChart />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
