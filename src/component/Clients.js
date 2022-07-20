import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import banner_image from '../images/inner-banner-3.jpg'; 
import client_image_1 from '../images/client-1.png'; 
import client_image_2 from '../images/client-2.png'; 
import client_image_3 from '../images/client-3.png'; 
import client_image_4 from '../images/client-4.png'; 
import client_image_5 from '../images/client-5.png'; 
import client_image_6 from '../images/client-6.png'; 
import client_image_7 from '../images/client-7.png'; 
import client_image_8 from '../images/client-8.png'; 
import client_image_9 from '../images/client-9.png'; 
import client_image_10 from '../images/client-10.png'; 
import client_image_11 from '../images/client-11.png'; 
import client_image_12 from '../images/client-12.png'; 
import client_image_13 from '../images/client-13.png'; 
import client_image_14 from '../images/client-14.png'; 
import client_image_15 from '../images/client-15.png'; 
import client_image_16 from '../images/client-16.png'; 

export default function Clients() {
  return (
    <div>

    <section className='inner-banner'>
    <img src={banner_image}/>
    <Col className='banner-sector'>
    <Container>
    <Row>
    <Col className='ban-cnt'>
    <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    Clients
    </h1>
    <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
    <li><Link to='/'>Home</Link></li>  
    <li> / </li> 
    <li className="active">Clients</li>
    </ul>
    </Col>
    </Row>
    </Container>
    </Col>
    </section>  

    <section className='clients-pace text-center'>
    <Container>
    <Row>
    
    <div class="col-lg-12">
    <div class="industries-serving" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <div class="common-title"><h2>Valuable Clients</h2></div>
    <div class="common-second-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"><h3>Trusted by India’s Leading Names</h3></div>
    <div class="common-third-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <h4>We have the know-how, capability and capacity to take up<br></br>
manufacturing and engineering challenges across various industries.</h4></div> 
    </div>

    <div className='clnete-lsts'>
    <ul>
    <li><img src={client_image_1}/></li>    
    <li><img src={client_image_2}/></li>    
    <li><img src={client_image_3}/></li>    
    <li><img src={client_image_4}/></li>    
    <li><img src={client_image_5}/></li>    
    <li><img src={client_image_6}/></li>    
    <li><img src={client_image_7}/></li>    
    <li><img src={client_image_8}/></li>    
    <li><img src={client_image_9}/></li>    
    <li><img src={client_image_10}/></li>    
    <li><img src={client_image_11}/></li>    
    <li><img src={client_image_12}/></li>    
    <li><img src={client_image_13}/></li>    
    <li><img src={client_image_14}/></li>    
    <li><img src={client_image_15}/></li>    
    <li><img src={client_image_16}/></li>    
    </ul>    
    </div>

    </div>

    </Row>    
    </Container>  
    </section>

    </div>
  )
}
