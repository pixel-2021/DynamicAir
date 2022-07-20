import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'; 
import logo from '../images/logo.png';
import {Link} from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import ScrollToTop from './ScrollToTop';

export default function Header() {
  return (
    <div className=''>
    <div className='top-bar'>
    <Container>
      <Row>
    <Col>No.4, Boopathy Nagar, Industrial Estate, Keelkattalai, Chennai-600117</Col>
    <Col className='text-end'>
      <a href="mailto:Marketing@dynamicair.in">Marketing@dynamicair.in </a> |  +91 8925202444
    </Col>
    </Row>
  </Container> 
    </div>
    
    <div className='main-menu'>
    <ScrollToTop>
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" ><Link className='inn-lnk' to='/'><img src={logo} className="App-logo" alt="Dynamic Air Logo" width="136" height="73"/></Link>
        </Navbar.Brand>
        <div className='mob-specs'>
        <ul>
        <li><a href="mailto:Marketing@dynamicair.in"><FiMail /></a></li>
        <li><a href="tel:"><FiPhoneCall /></a></li>
        </ul>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav><Link to='/'>Home</Link></Nav>
            {/* <NavDropdown title="Services" id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#">Service - 1</NavDropdown.Item> 
              <NavDropdown.Item href="#">Service - 2</NavDropdown.Item> 
              <NavDropdown.Item href="#">Service - 3</NavDropdown.Item> 
              <NavDropdown.Item href="#">Service - 4</NavDropdown.Item> 
            </NavDropdown> */}
            
            { <NavDropdown title="about-us" id="basic-nav-dropdown" renderMenuOnMount={true}>
                <NavDropdown.Item href="about-us#overview">Overview</NavDropdown.Item> 
                <NavDropdown.Item href="about-us#vision">Vision &amp; Mission</NavDropdown.Item> 
                <NavDropdown.Item href="about-us#certifications">Certifications</NavDropdown.Item>
              </NavDropdown> }
            <Nav><Link to='services'>Services</Link></Nav>
            <Nav><Link to='products'>Products</Link></Nav> 
            <Nav><Link to='technologies'>Technologies</Link></Nav>
            <Nav><Link to='clients'>Clients</Link></Nav> 
            <Nav><Link to='career'>Career</Link></Nav> 
            <Nav><Link to='contact-us'>Contact Us</Link></Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </ScrollToTop>
    </div>
    </div>
  )
}

