import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Offcanvas_Student() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        PROFILE
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Student Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{display:"flex", flexDirection:"column" , gap:"40px" }}>
            <Button>DashBoard</Button>
            <Button>Companies applied</Button>
            <Button>Resume</Button>
            <Button>more</Button>
        </Offcanvas.Body>
        <Button><Link to='/'>Log-Out</Link></Button>
      </Offcanvas>
    </>
  );
}

export default Offcanvas_Student;