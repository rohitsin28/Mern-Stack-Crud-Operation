import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Form, FormControl, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState(0);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [State, setState] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
    setState(localStorage.getItem("city"));
    setPhone(localStorage.getItem("phone"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api/router/${id}`, {
        name: Name,
        email: Email,
        password: Password,
        city: State,
        phone: Phone,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>

      <div className="container-fluid">
      <Form onSubmit={handleSubmit}>
        <Row className="m-3 sm-1">
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={Email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="m-3">
          <FormGroup as={Col}>
            <Form.Label>State</Form.Label>
            <FormControl
              type="text"
              value={State}
              placeholder="Enter your City"
              onChange={(e) => setState(e.target.value)}
            />
          </FormGroup>
          <FormGroup as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={Password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Row>
        <Row className="m-3">
          <Form.Label>Phone number</Form.Label>
          <FormControl className="mx-2"
            type="text"
            value={Phone}
            placeholder="Enter your Phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Row>
        <Row>
        <div className="container text-center mt-3">
          <button className="btn btn-primary p-2" type="submit" value="Submit">
            Update
          </button>
        </div>
        </Row>
      </Form>
      </div>
    </>
  );
}

export default Update;
