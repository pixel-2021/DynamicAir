import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import Banner from "./banner";  
import abt_rit_img from '../images/about-img-right.png';
import logo_lst_1 from '../images/home-logo-1.jpg';
import logo_lst_2 from '../images/home-logo-2.jpg';
import logo_lst_3 from '../images/home-logo-3.jpg';
import logo_lst_4 from '../images/home-logo-4.jpg';
import logo_lst_5 from '../images/home-logo-5.jpg';
import choose_us_1 from '../images/choose-icon-1.jpg';
import choose_us_2 from '../images/choose-icon-2.jpg';
import choose_us_3 from '../images/choose-icon-3.jpg';
import choose_us_4 from '../images/choose-icon-4.jpg';
import maj_box_1 from '../images/service-1.jpg';
import maj_box_2 from '../images/service-2.jpg';
import maj_box_3 from '../images/service-3.jpg';
import maj_box_4 from '../images/service-4.jpg';
import maj_box_5 from '../images/service-5.jpg';
import maj_box_6 from '../images/service-6.jpg';
import maj_box_7 from '../images/service-7.jpg';
import maj_box_8 from '../images/service-8.jpg';
import products_img from '../images/product-left.jpg';
import products_img_1 from '../images/train-icon.png';
import products_img_2 from '../images/hvac-icon.png';
import serve_1 from '../images/serve-1.png';
import serve_2 from '../images/serve-2.png';
import serve_3 from '../images/serve-3.png';
import serve_4 from '../images/serve-4.png';
import serve_5 from '../images/serve-5.png';
import serve_6 from '../images/serve-6.png';
import cln_imge from '../images/testimonial-img.jpg';
import cln_imge_1 from '../images/testimonial-1.jpg';  
import Slider from "react-slick";
import {Link} from "react-router-dom";

 
function home () {
    var testimonials = {
        fade: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
    <Banner/> 
    <section className="section about-section">
    <Container>
    <Row>
    <Col className='col-lg-6' data-aos="fade-right" data-aos-duration="1000">

    <div className='common-title'>
    <h2>About Us</h2>
    </div>
    <div className='common-second-title'>
    <h3>Our Dynamic Story</h3>
    </div>
    <div className='common-third-title'>
    <h4>Established in 2008 and headquartered in Chennai, India, Dynamic Air Engineering India Private Limited</h4>
    </div>
    <div className='common-para'>
    <p>is an ISO 9001: 2015 Certified Company that specializes in the fabrication of all kinds of sheet metal solutions under one roof. Dynamic Air is one of the leading rail coach manufacturing companies in Chennai. Having entered the Indian railway segment in the year 2008, it caters to all the fabrication requirements of the Indian Railways and provides Design, Fabrication & Installation services on par with International standards. The company is now active in the manufacturing of entire train coaches to Integral Coach Factory, Chennai.</p>
    </div>
    <div className='logos-lists'>
    <ul>
    <li><img src={logo_lst_1}/></li>
    <li><img src={logo_lst_2}/></li>
    <li><img src={logo_lst_3}/></li> 
    <li><img src={logo_lst_5}/></li>
    </ul> 
    </div>

    <div className='comn-butn'>
    <Link to='about-us'>
    Read More    
    </Link>
    </div>

    </Col>
    <div className='col-lg-6' data-aos="fade-left" data-aos-duration="1500">
    <div className="abtou-img text-end">
    <img src={abt_rit_img}/>
    </div>
    </div>

    <Col className='col-lg-12'>
    <div className='why-chooseus text-center'>
    <div className='common-second-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <h3>Why Choose Us?</h3>
    </div> 

    <div className='col-lg-3'>
    <div className='main-box text-start' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <img src={choose_us_1}/>
    <h4>Enhanced Capability</h4>
    <p>Reinforced by full-fledged German technology machines</p>
    </div>    
    </div>  

    <div className='col-lg-3'>
    <div className='main-box text-start' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <img src={choose_us_2}/>
    <h4>Modernised Unit</h4>
    <p>Spread over 1,30,000 Sq.ft. & equipped with futuristic equipment</p>
    </div>    
    </div>  

    <div className='col-lg-3'>
    <div className='main-box text-start' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
    <img src={choose_us_3}/>
    <h4>One-stop Shop</h4>
    <p>Fabrication of all kinds of sheet metal solutions under one roof</p>
    </div>    
    </div>  

    <div className='col-lg-3'>
    <div className='main-box text-start' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
    <img src={choose_us_4}/>
    <h4>Widest Range</h4>
    <p>Sheet metal fabrication solutions to suit varied needs of our customers</p>
    </div>    
    </div> 

    </div>
    </Col>

    </Row>
    </Container>
    </section>

    <section className='services-section text-center'>
    <Container>
    <Row>
    
    <Col className='col-lg-12'> 

    <div className='common-title white' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <h2>Services</h2>
    </div> 

    <div className='common-second-title white' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <h3>Our Futuristic Technology <br></br>
    Solutions for a Dynamic Edge</h3>
    </div>

    <Row> 

    <div className='col-lg-4'>
    <div className='major-box text-start' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
    <img src={maj_box_2}/>
    <div className='maj-content'>
    <span>
    <h4>Laser Cutting</h4>
    <p>We offer a variety of valuable services, from design assistance to shipping and logistics.</p>
    </span>
    </div>
    <div className="maj-content-1">
    <Link to='services'>Read More</Link>
    </div>
    </div>
    </div>  

    <div className='col-lg-4'>
    <div className='major-box text-start' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <img src={maj_box_3}/>
    <div className='maj-content'>
    <span>
    <h4>Laser Welding</h4>
    <p>Our certified welding department has MIG, TIG, and robotic welding capabilities.</p>
    </span>
    </div>
    <div className="maj-content-1">
    <Link to='services'>Read More</Link>
    </div>
    </div>
    </div>  

    <div className='col-lg-4'>
    <div className='major-box text-start' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <img src={maj_box_6}/>
    <div className='maj-content'>
    <span>
    <h4>Spot Welding</h4>
    <p>We are capable of machining a vast assortment of parts and assemblies with guaranteed quality.</p>
    </span>
    </div>
    <div className="maj-content-1">
    <Link to='services'>Read More</Link>
    </div>
    </div>
    </div>  

    <div className='col-lg-4'>
    <div className='major-box text-start' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <img src={maj_box_7}/>
    <div className='maj-content'>
    <span>
    <h4>Bending</h4>
    <p> </p>
    </span>
    </div>
    <div className="maj-content-1">
    <Link to='services'>Read More</Link>
    </div>
    </div>
    </div>  

    <div className='col-lg-4'>
    <div className='major-box text-start' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <img src={maj_box_8}/>
    <div className='maj-content'>
    <span>
    <h4>Shearing</h4>
    <p> </p>
    </span>
    </div>
    <div className="maj-content-1">
    <Link to='services'>Read More</Link>
    </div>
    </div>
    </div>      

    <div className='col-lg-4'>
    <div className='major-box text-start' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    <img src={maj_box_1}/>
    <div className='maj-content'>
    <span>
    <h4>Turret Punching</h4>
    <p>Our punching department delivers quality-assured parts and has lights-out automation capabilities.</p>
    </span>
    </div>
    <div className="maj-content-1">
    <Link to='services'>Read More</Link>
    </div>
    </div>
    </div>   

    </Row>

    </Col>

    </Row>
    </Container>        
    </section> 

    <section className='products-sector text-start'>
    <Container>
    <Row>

    <div className='col-lg-6'>
    <div className='projects-completed' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    <img src={products_img}/>
    <div className='prdt-detls'>
    <h4>500+ PROJECTS COMPLETED</h4>
    <p>Delivered efficient and innovative solutions with a<br></br> competitive edge</p> 
    </div>
    <div className="arrow-down"></div>
    </div> 
    </div>

    <div className='col-lg-6 align-self-center'>
    <div className='dynamic-metals'>

    <div className='common-title' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <h2>Products</h2>
    </div>

    <div className='common-second-title' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
    <h3>Our Dynamic Affinity <br></br>
    with Metals</h3> 

    <div className='common-para' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
    <p>Our innovative products & solutions have put forth a wide spectrum of <br></br> industrial and engineering processes across industries.</p>
    </div>

    <ul>
    <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
    <img src={products_img_1}/>
    <h4> Railway - Fabrication </h4>
    <p>State-of-the-art metal parts in compliance with <br></br> international quality norms</p>
    </li>
    <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1200">
    <img src={products_img_2}/>
    <h4> HVAC - Air Distribution Products </h4>
    <p>Durable and qualitatively superior gamut of <br></br>engineering products</p>
    </li>
    </ul>

    </div>

    </div>     
    </div>

    </Row>
    </Container>
    </section>

    <section className='scope-services text-center'>
    <Container>
    <Row>

    <div className='col-lg-12'>
    <div className='industries-serving' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <div className='common-title'>
    <h2>Scope</h2>
    </div>
    <div className='common-second-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <h3>Industries we Serve</h3>
    </div>
    <div className='common-third-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <h4>We have the know-how, capability and capacity to take up <br></br>manufacturing and engineering challenges across various industries.</h4>
    </div>

    <ul>
    <li data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
    <img src={serve_6}/> 
    <h4>Railway </h4>  
    </li>
    <li data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
    <img src={serve_4}/> 
    <h4>Metro Rail</h4>  
    </li>
    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
    <img src={serve_3}/> 
    <h4>Aerospace</h4>  
    </li>
    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
    <img src={serve_5}/> 
    <h4>Elevator</h4>  
    </li>
    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
    <img src={serve_1}/> 
    <h4>Electrical</h4>  
    </li>
    <li data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
    <img src={serve_2}/> 
    <h4>Food Industries</h4>  
    </li>
    </ul>

    </div>
    </div>  
    

    <div className='col-lg-12'>
    <div className='clnts-testmonals text-start'>
    <Row>
        <div className='col-lg-6'> 
        <div className='our-clients'>
<div className='common-title' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    <h2>Clients</h2>
    </div>

    <div className='common-second-title' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
    <h3>Trusted by India’s <br></br>
Leading Names</h3> 
<img src={cln_imge}/>
        </div>
        </div>
        </div>

    <div className='col-lg-6'>
    <div className='testimonial-slider'>
    <div className='common-title white' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    <h2>Testimonials</h2>
    </div>

    <div className='common-second-title white' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
    <h3>Inspired by <br></br>
    our Solutions</h3> 
        </div>
    <Slider {...testimonials}>

      <div className='testimonal-dtlias'>
      <div className='testim-head align-self-center'>
      <img src={cln_imge_1}/>
      <h4>Metalscope India Private Limited
      <span>puducherry</span></h4>
      </div>
      <div className='testim-bdoy'>
      <p>Special Products has a very unique and special approach to their product offering, Vision, Mission, and planning around their capacity. The inspection technology, processes, and techniques used by Dynamic Air Quality department are impressive. I was very impressed with the overall manufacturing process method, as well as the Continuous Improvement and clear vision of Dynamic Air.</p>
      </div>
      </div>

       

    </Slider>
    </div>
    </div>

    </Row>
    </div>
    
    </div>

    </Row>   
    </Container> 
    </section>  

    </>
    );
}
 
export default home;