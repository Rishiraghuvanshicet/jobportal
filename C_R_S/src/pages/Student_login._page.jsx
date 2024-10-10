import { useState } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export default function Student_login_page() {
  const navigate = useNavigate();
  const [existing, setExisting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    DOB:'',
    email:'',
    Branch:'',
    XPercentage:'',
    XIIPercentage:'',
    Experience:'',
    phone: '',
    city: '',
    password: '',
  });
  const [token, setToken] = useState(null);

  const handleLogIn = () => {
    setExisting(false);
  };

  const handleReg = () => {
    setExisting(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (existing) {
        // Registration logic
        await axios.post('http://localhost:3000/user/Uregister', formData);
        alert('Registration successful');
        setFormData({
          fullName: '',
          DOB:'',
          email:'',
          Branch:'',
          XPercentage:'',
          XIIPercentage:'',
          Experience:'',
          phone: '',
          city: '',
          password: '',
        });
      } else {
        // Login logic
        const response = await axios.post('http://localhost:3000/user/Ulogin',formData);
        setToken(response.data.token);
        alert('Login successful');
        navigate("/student/login/homepage");
      }
    } catch (error) {
      alert("invalid credentials");
      console.log({ message: err.message },);
    }
  };

  return (
    <>
      <div id='switch-btn'>
        <Button variant="outline-primary" onClick={handleLogIn}>LogIn</Button> <Button variant="outline-primary" onClick={handleReg}>Register</Button>
      </div>
      <div id="student-login-form">
        <Form onSubmit={handleSubmit}>
          {existing ? (
            <>
              <h1>Student Registration Form</h1>
              <br/>
              <Container>
              <Form.Group as={Row} className="mb-4">
                <Form.Label column sm="5">Full Name</Form.Label>
                <Col sm="7">
                  <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder=" Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5">Date of Birth</Form.Label>
                <Col sm="7">
                  <Form.Control type="text" name="DOB" value={formData.DOB} onChange={handleChange} placeholder="xx/xx/xxxx" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5">Email ID</Form.Label>
                <Col sm="7">
                  <Form.Control type="text" name="email" value={formData.email} onChange={handleChange} placeholder="XXX@gmail.com" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5">Branch</Form.Label>
                <Col sm="7">
                  <Form.Control type="text" name="Branch" value={formData.Branch} onChange={handleChange} placeholder="" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5">12 Percentage</Form.Label>
                <Col sm="7">
                  <Form.Control type="text" name="XIIPercentage" value={formData.XIIPercentage} onChange={handleChange} placeholder="50%" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5">10 percentage</Form.Label>
                <Col sm="7">
                  <Form.Control type="text" name='XPercentage' value={formData.XPercentage} onChange={handleChange} placeholder="50%" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5">Experience (yr)</Form.Label>
                <Col sm="7">
                  <Form.Control type="number" name="Experience" value={formData.Experience} onChange={handleChange} placeholder="1" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5"> Phone no.</Form.Label>
                <Col sm="7">
                  <Form.Control type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="6395XXXXXX" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5">City</Form.Label>
                <Col sm="7">
                  <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="5">Password</Form.Label>
                <Col sm="7">
                  <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="******" />
                </Col>
              </Form.Group>
              </Container>
          </>)
          :<>
          <Container>
          <h1 style={{textAlign:'center'}}>Student Login</h1>
          <br/>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">Email</Form.Label>
            <Col sm="8">
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">Password</Form.Label>
            <Col sm="8">
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            </Col>
          </Form.Group>
          </Container>
          </>  }
          <center>
            <Button variant="success" type="submit">
              {existing ? 'Register' : 'LogIn'}
            </Button>
          </center>
          
        </Form>
      </div>
    </>
  );
}