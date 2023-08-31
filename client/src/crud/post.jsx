import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Post() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [State, setState] = useState("");
  const [Password, setPassword] = useState("");
  const [Number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/router/", {
        name: Name,
        email: Email,
        password: Password,
        city: State,
        phone: Number,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <div className="container-fluid">
        <Link to="/">
          <Button className="btn btn-danger m-2 mx-4 mt-3">
            Read all input data
          </Button>
        </Link>

        <Form onSubmit={handleSubmit}>
          <Row className="m-3 sm-1">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="m-3">
            <FormGroup as={Col}>
              <Form.Label>State</Form.Label>
              <FormControl
                required
                type="text"
                placeholder="Enter your City"
                onChange={(e) => setState(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
          </Row>
          <Row className="m-3">
            <Form.Label>Phone number</Form.Label>
            <FormControl
              required
              type="text"
              placeholder="Enter your Phone number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </Row>
          <div className="container text-center">
            <button
              className="btn btn-primary p-2"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Post;
