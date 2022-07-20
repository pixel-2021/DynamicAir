import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from './ScrollToTop';
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div>
        <section className='footer'>
    <ScrollToTop>
    <Container>
    <Row>
    
    <div className='col-lg-4'>
    <div className='foot-lnks'>
    <h4>Location</h4>
    <h5>Corporate Office & Manufacturing Unit-I</h5>
    <p>No.4, Boopathy Nagar, Industrial Estate, Keelkattalai, <br></br> Chennai-600117</p> 
    <h5>Manufacturing Unit-II</h5>   
    <p>D.No.123, Satharai Village, Near Mappedu Koot Road, <br></br> Thiruvallur District, Pincode - 631402</p>
    </div>     
    </div>
    
    <div className='col-lg-8'>
    <Row>
    <div className='col-lg-4'>
    <div className='foot-lnks'>
    <h4>Contact Info</h4>
    <p>044 2247445 / 46 / 48 <br></br>
    +91 8925202444 <br></br>
    marketing@dynamicair.in</p>
    </div> 
    <div className='social-lnks'>
    <h4>Follow us on</h4> 
    <ul>
    <li><a href=""><FaFacebookF /></a></li>    
    <li><a href=""><FaTwitter /></a></li>    
    <li><a href=""><FaYoutube /></a></li> 
	<li><a href=""><FaLinkedinIn /></a></li> 
    </ul>    
    </div>         
    </div>
    
    <div className='col-lg-4'>
    <div className='foot-lnks'>
    <h4>Quick Links</h4>
    <ul>
    <li><Link to='/'>Home</Link></li> 
    <li><Link to='/about-us'>About Us</Link></li> 
    <li><Link to='/technologies'>Technologies</Link></li> 
    <li><Link to='/products'>Products</Link></li> 
    <li><Link to='/clients'>Clients</Link></li> 
    <li><Link to='/contact-us'>Contact Us</Link></li> 
    
    {/* <li><a href="">About Us</a></li> 
    <li><a href="">Our Team</a></li> 
    <li><a href="">Clients</a></li> 
    <li><a href="">Testimonials</a></li> 
    <li><a href="">Contact Us</a></li>     */}
    </ul>
    </div>     
    </div>
    
    <div className='col-lg-4'>
    <div className='foot-lnks'>
    <h4>Services</h4>
    <ul>
    <li><a href="services#metal-punching">Metal Punching</a></li> 
    <li><a href="services#laser-cutting">Laser Cutting</a></li> 
    <li><a href="services#metal-forming">Metal Forming</a></li> 
    <li><a href="services#welding">Welding</a></li> 
    <li><a href="services#powder-coating">Powder Coating</a></li> 
    <li><a href="services#machining">Machining</a></li>    
    </ul>
    </div>     
    </div>
    </Row>

    </div>
    
    </Row>
    </Container>   
    </ScrollToTop>
    </section>

    <section className='copywrite text-center'>
    <Container>
    <Row>

    <p>Copyright © 2022 - Dynamic Air Engineering India Private Limited. - All Rights Reserved</p>

    </Row>
    </Container>
   
    </section>
    </div>
  )
}
