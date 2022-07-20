import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import banner_image from '../images/inner-banner-5.jpg';  
import service_image_1 from '../images/servce-1.jpg';  
import service_image_2 from '../images/servce-2.jpg';  
import service_image_3 from '../images/servce-3.jpg';  
import service_image_4 from '../images/servce-4.jpg';  
import service_image_5 from '../images/servce-5.jpg';  
import service_image_6 from '../images/servce-6.jpg';  
import service_image_7 from '../images/servce-7.jpg';  
import service_image_8 from '../images/servce-8.jpg';  

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
    Services
    </h1>
    <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
    <li><Link to='/'>Home</Link></li>  
    <li> / </li> 
    <li className="active">Services</li>
    </ul>
    </Col>
    </Row>
    </Container>
    </Col>
    </section>  

    <section className='services-lstngs'>
    <Container>
    <Row>

    <div className='col-lg-12 text-center'>

    <div className='common-title'>
    <h2>Services</h2>
    </div>
    <div className='common-second-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <h3>Our Futuristic Technology <br></br> Solutions for a Dynamic Edge</h3>
    </div>
    <div className='common-third-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <h4> </h4>
    </div>

    <div className='servicing-sector'>

    <div className='servces no-bricks' id='laser-cutting'> 
    <Row>

    <div className='col-lg-5'>
    <div className='servce-img right-prt'>
    <img src={service_image_2}/>
    </div>
    </div>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Laser Cutting</h4> 
    <p><span>Dynamic Air utilizes fiber laser technology, which cuts faster and more accurately than traditional lasers.</span><br></br>
    
    A fully automated laser cutting department with loading and unloading capabilities and a highly experienced Engineering team uses nesting to increase sheet utilization, which results in less waste and lower costs. The optimum quality CO2 lasers are reliable and robust in creating smooth edges and parts that are free of burrs.</p>
    </div>
    </div>
    </Row>
    </div> 

    <div className='servces' id="welding">
    <Row>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Laser Welding</h4> 
    <p><span>Dynamic Air utilizes fiber laser technology, which cuts faster and more accurately than traditional lasers.</span><br></br>
    We are versatile in the use of materials and offer flexible and economical choices in Stud Welding, best suited for materials with low thermal conductivity and Spot Welding, that works by creating an electric arc between a fastener (stud) and the parent material. The robotic welding equipment helps in delivering game-changing results to customers of all sizes.</p>
    </div>
    </div>

    <div className='col-lg-5'>
    <div className='servce-img left-prt'>
    <img src={service_image_3}/>
    </div>
    </div>
    
    </Row>
    </div>  

      

    <div className='servces' id="machining"> 
    <Row>

    <div className='col-lg-5 right-prt'>
    <div className='servce-img'>
    <img src={service_image_6}/>
    </div>
    </div>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Spot Welding</h4> 
    <p><span>At Dynamic Air, our experienced machining department has the capabilities to produce high-complexity parts and assemblies.</span><br></br>
    Our team specialises in precision-tolerance CNC machining and turning of small to medium-size parts. Our offerings include bearings, housings, pins, bushings, blocks, custom nuts, bolts, screws, and other special products. Spot Welding is done with automated robot-controlled arms with high-quality welds and a short cycle time. </p>
    </div>
    </div>

    </Row>
    </div> 

    <div className='servces' id="welding">
    <Row>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Bending</h4> 
    <p><span>Dynamic Air uses the most accurate and precise machine for bending that enables huge production. </span><br></br>Accurate and precise stroke depth adjustment guarantees in exact parallelism along with the length of the machine between the lower table and upper press beam. </p>
    </div>
    </div>

    <div className='col-lg-5'>
    <div className='servce-img left-prt'>
    <img src={service_image_7}/>
    </div>
    </div>

    </Row>
    </div>  

      

    <div className='servces' id="machining"> 
    <Row>

    <div className='col-lg-5 right-prt'>
    <div className='servce-img'>
    <img src={service_image_8}/>
    </div>
    </div>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Shearing</h4> 
    <p><span>Dynamic Air utilizes machinery with accurate and adjustable stroke length for shearing purposes. </span><br></br>Very accurate NC backgauge system with the accuracy of ±0.1 mm. Rapid blade gap adjustment with adjustable stroke length for burr-free and distortion-free shear results. </p>
    </div>
    </div>

    </Row>
    </div>

    <div className='servces no-bricks' id="metal-punching">
    <Row>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Turret Punching</h4> 
    <p><span>At Dynamic Air, we have the capability to meticulously produce quality parts with high-speed precision, thereby lowering costs and lead times.</span><br></br>We produce a variety of holes, countersinks, embossments, louvers, and other formed features such as automated turrets which can process complex parts. Only such parts with quality assurance and lights-out automation capabilities are delivered at Dynamic Air. With high-speed deburring, slotting, and marking, the punching accuracy is improved from ±0.1mm to ±0.07mm.</p>
    </div>
    </div>

    <div className='col-lg-5'>
    <div className='servce-img left-prt'>
    <img src={service_image_1}/>
    </div>
    </div>

    </Row>
    </div> 

    <div className='servces' id="powder-coating"> 
    <Row>

    <div className='col-lg-5'>
    <div className='servce-img right-prt'>
    <img src={service_image_4}/>
    </div>
    </div>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Powder Coating</h4> 
    <p><span>Dynamic Air uses the most eco-friendly methods for coating with powder that requires no solvents and generates little or no waste.</span><br></br>Through our Powder coating, which is a full conveyor operating procedure, we utilize a six-stage pre-treatment system with separate dry-off and curing ovens for best quality, thus creating the widest range of finishes and textures that are more durable than ordinary powder coats.</p>
    </div>
    </div>

    </Row>
    </div> 

    {/* <div className='servces' id="metal-forming">
    <Row>
    <div className='col-lg-5'>
    <div className='servce-img left-prt'>
    <img src={service_image_5}/>
    </div>
    </div>

    <div className='col-lg-7 align-self-center'>
    <div className='servce-cnt left-prt text-start'>
    <h4>Metal Forming</h4> 
    <p><span>Our Metal forming department invests in state-of-the-art machines to deliver high-quality parts. </span><br></br>
    Equipment in the department also includes manual press brakes, that helps experienced operators produce very complex, tight-tolerance parts. Before the forming process begins, our Engineering team uses bend simulation technology to validate our processes and ensure repeatability. </p>
    </div>
    </div>
    </Row>
    </div>  */}

    </div>

    </div>

    </Row>
    </Container>
    </section>

    <section className='form-sector'>
    <Container>
    <Row>

    <Col className='col-lg-12'>
    <div className='form-major text-center'>
    <div class="common-second-title white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"><h3> Quick Enquiry </h3></div>
    <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6">
    <input type="text" className="form-control" placeholder="Enter your Name" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
    <input type="email" className="form-control" placeholder="Enter your Mail" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
    <input type="text" className="form-control" placeholder="Enter your Phone Number" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
    <select class="form-control jsrequired" id="state" name="state">
	    <option value="">Select your Service</option>
	    <option value="Metal Punching">Metal Punching</option> 
	    <option value="Laser Cutting">Laser Cutting</option> 
	    <option value="Laser Welding">Laser Welding</option> 
	    <option value="Powder Coating">Powder Coating</option> 
	    <option value="Metal Forming">Metal Forming</option> 
	    <option value="Machining">Machining</option> 
	  </select>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-12">
    <textarea className="form-control" placeholder="Additional Message"></textarea>
    <button type="submit">Submit</button>
    </div>
    </div> 
    </div>
    </Col>

    </Row>
    </Container>
    </section>
 
    </div>
  )
}
