import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function App() {
  return (
    <Container>
        <div id='homepage_heading'>
            <h1>Career with Us</h1>
            <p>Enhance your Abalities!!</p>
        </div>
        <div id='homepage_choice'>
           <Link style={{color:'black'}} to='/student/login'><h1>STUDENT</h1></Link> 
           <Link style={{color:'black'}} to='/company/login'><h1>COMPANY</h1></Link> 
           
        </div>
    </Container>
  )
}
