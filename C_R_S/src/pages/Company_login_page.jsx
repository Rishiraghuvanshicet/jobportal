import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Container, Col, Form, Row } from "react-bootstrap";

export default function Company_login_page() {
  const navigate = useNavigate();
  const [existing, setExisting] = useState(false);
  const [CompanyName, setCompanyName] = useState("");
  const [YourId, setYourId] = useState("");
  const [HrName, setHrName] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [City, setCity] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    setExisting(false);
  };

  const handleReg = () => {
    setExisting(true);
  };

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        CompanyName,
        HrName,
        ContactNumber,
        City,
        UserName,
        password,
      };
      const response = await axios.post("http://localhost:3000/company/Cregister",newUser);
      alert('Registration successful');
      setCompanyName('');
      setHrName('');
      setContactNumber('');
      setCity('');
      setUserName('');
      setPassword('');
      console.log(response.data);
    } catch (err) {
      console.log({ message: err.message });
    }
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { UserName, password };
      const response = await axios.post(
        "http://localhost:3000/company/Clogin",
        newUser
      );
      const { token } = response.data;
      console.log(token);
      localStorage.setItem("token", newUser.UserName);
      alert('Login successful');
      navigate(`/company/login/homepage`);
    } catch (err) {
      alert("invalid credentials");
      console.log({ message: err.message },);
    }
  };

  return (
    <>
      <div id="switch-btn">
        <Button variant="outline-primary" onClick={handleLogIn}>
          LogIn
        </Button>{" "}
        <Button variant="outline-primary" onClick={handleReg}>
          Register{" "}
        </Button>
      </div>
      {existing ? (
        <div id="student-login-form">
          <Form onSubmit={onRegisterSubmit}>
            <Container>
              <h1 style={{ textAlign: "center" }}>Company Registration Form</h1>
              <br />
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  CompanyName
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    placeholder="Company Name"
                    value = {CompanyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  Unique Id
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    placeholder="Id"
                    value = {YourId}
                    onChange={(e) => setYourId(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  HR Name
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    placeholder="HR's Name"
                    value = {HrName}
                    onChange={(e) => setHrName(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  Contact
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="number"
                    placeholder="Contact Number"
                    value = {ContactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  Company City
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  UserName
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    placeholder="UserName"
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  Password
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <center>
                <Button variant="success" type="submit">
                  Register
                </Button>
              </center>
            </Container>
          </Form>
        </div>
      ) : (
        <div id="student-login-form">
          <Form onSubmit={onLoginSubmit}>
            <h1 style={{ textAlign: "center" }}>Company Login</h1>
            <br />
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                UserName
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  placeholder="UserName"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Password
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Form.Group>
            <center>
              <Button variant="success" type="submit">
                LogIn
              </Button>
            </center>
          </Form>
        </div>
      )}
    </>
  );
}
