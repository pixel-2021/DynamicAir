import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import ReactFancyBox from 'react-fancybox';
import {Link} from "react-router-dom";
import 'react-fancybox/lib/fancybox.css';
import banner_image from '../images/inner-banner-4.jpg';  
import product_img_1 from '../images/pro-1.jpg';  
import product_img_1_1 from '../images/pro-1-1.jpg';  
import side from '../images/products/sidewall.jpg';
import underframe from '../images/products/underframe.jpg';
import roof from '../images/products/roof.jpg';
import endwall from '../images/products/endwall.jpg';
import nosecone from '../images/products/nosecone.jpg';
import doors from '../images/products/railway-doors.jpg';
import hvac from '../images/products/hvac-prodcuts.jpg';

export default function Products() {
  return (
    <div>

    <section className='inner-banner'>
    <img src={banner_image}/>
    <Col className='banner-sector'>
    <Container>
    <Row>
    <Col className='ban-cnt'>
    <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    Products
    </h1>
    <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
    <li><Link to='/'>Home</Link></li>  
    <li> / </li> 
    <li className="active">Products</li>
    </ul>
    </Col>
    </Row>
    </Container>
    </Col>
    </section>  

    <section className='prducts-lists text-center'>
    <Container>
    <Row>

    <div class="col-lg-12">

    <div class="industries-serving" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <div class="common-title"><h2>Dynamic Air Products</h2></div>
    <div class="common-second-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"><h3>Our Dynamic Affinity
with Metals</h3></div>
    <div class="common-third-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <h4>Our innovative products & solutions have put forth a wide spectrum of <br></br>
industrial and engineering processes across industries.</h4></div> 
<h5>Railway - Fabrication</h5>
<p>We produce state-of-the-art metal parts for railway trains in compliance with<br></br> international quality norms using superior grade raw material</p>
    </div>

    <div className='products-lstings'>
    <ul>
    <li>
      <ReactFancyBox thumbnail={side} image={side}/>
      <span> Side Wall </span>
    </li>
    <li>
      <ReactFancyBox thumbnail={roof} image={roof}/>
      <span> Roof </span>
    </li>
    <li>
    <ReactFancyBox thumbnail={underframe} image={underframe}/>
    <span> Underframe </span>
    </li>
    <li>
    <a href="">
    <img src={endwall}/>
    <span> End Wall </span>
    </a>
    </li>
    <li>
    <ReactFancyBox thumbnail={nosecone} image={nosecone}/>
    <span> Nose Cone </span>
    </li>
    <li>
    <ReactFancyBox thumbnail={doors} image={doors}/>
    <span> Railway Doors &amp; Windows </span>
    </li>
    </ul>
    </div>

    <div className='products-lstings havoc'> 
    <ul>
    <h5>HVAC - Air Distribution Products</h5>
    <p>From grills to diffusers, dampers and doors, Dynamic Air engineers a durable <br></br> and qualitatively superior gamut of engineering products </p>
    <li>
    <ReactFancyBox thumbnail={hvac} image={hvac}/>
    <span> HVAC Air Distribution Products </span>
    </li>
    </ul>
    
    </div>

    </div>
    </Row>   
    </Container> 
    </section>

     

    </div>
  )
}
