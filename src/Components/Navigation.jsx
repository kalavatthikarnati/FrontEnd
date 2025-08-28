import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { StoreContext } from './StoreContext';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink'; // or just use Nav.Link
import './Navigation.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';




 const Navigation=({setShowlogin}) =>{
  const {url,setToken,token} =useContext(StoreContext);
  const navigate = useNavigate();

   
  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
   navigate('/');
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">User Registration</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link href="/login" onClick={() => setShowlogin(true)}>Login</Nav.Link>
           {token?<Nav.Link to="/cart">Cart</Nav.Link>:"Unable to fetch cart details"}
                                 
           <Nav.Link href="#" onClick={()=>logout()}>Logout</Nav.Link>
            <Link to='/customer'><li>Customer</li></Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;