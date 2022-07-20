import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import banner_image from '../images/inner-banner-5.jpg';  
import tech_mage_1 from '../images/tech-1.jpg';  
import tech_mage_2 from '../images/tech-2.jpg'; 
import tech_mage_3 from '../images/tech-3.jpg'; 
import tech_mage_4 from '../images/tech-4.jpg'; 
import tech_mage_5 from '../images/tech-5.jpg'; 
import tech_mage_6 from '../images/tech-6.jpg'; 
import tech_mage_7 from '../images/tech-7.jpg'; 
import tech_mage_8 from '../images/tech-8.jpg'; 
import tech_mage_9 from '../images/tech-9.jpg'; 
import tech_mage_10 from '../images/tech-10.jpg'; 
import tech_mage_11 from '../images/tech-11.jpg'; 
import tech_mage_12 from '../images/tech-12.jpg'; 
import tech_mage_13 from '../images/tech-13.jpg'; 
import tech_mage_14 from '../images/tech-14.jpg'; 
import tech_mage_15 from '../images/tech-15.jpg'; 
import tech_mage_16 from '../images/tech-16.jpg'; 
import tech_mage_17 from '../images/tech-17.jpg'; 
import tech_mage_18 from '../images/tech-18.jpg'; 

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
    Technologies
    </h1>
    <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
    <li><Link to='/'>Home</Link></li>  
    <li> / </li> 
    <li className="active">Technologies</li>
    </ul>
    </Col>
    </Row>
    </Container>
    </Col>
    </section>  

    <section className='technolgies-fraction'>
    <Container>
   
    <Row>
    
    <Col className='col-lg-12 text-center'>
    
    <div className='common-title'>
    <h2>Works Done</h2>
    </div>
    <div className='common-second-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <h3>Enabling Highly Advanced Technology</h3>
    </div>
    <div className='common-third-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <h4> </h4>
    </div>
    </Col>
    </Row>
    
    
    <Row>
    
    <Col className='col-lg-12'>

    <Row>


    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_1}/>
    <div className='tech-cont'>
    <h4>Laser Cutting Machine 1 – CO2 Laser 5KW</h4>
    <p>
    <b>Make:</b> TRUMPF, Germany | Bed Size - 3000mm X 1500mm <br></br>
    <b>Model No:</b> Tru Laser 3030 <br></br>
    <b>Cutting Thickness:</b> Mild Steel – 0.5 to 25mm | Stainless Steel – 0.5 to 20mm | Aluminium – 0.5 to 12mm <br></br>
    </p>
    </div>
    </div>
    </div>
    </div> 

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_2}/>
    <div className='tech-cont'>
    <h4>Laser Cutting Machine 2 - Fiber Laser 12KW</h4>
    <p>
    <b>Make:</b> Han's Songu| Bed Size - 6000mm X 2500mm <br></br>
    <b>Model No:</b> Tru Laser 3030 <br></br>
    <b>Cutting Thickness:</b> Mild Steel, Stainless Steel, Aluminium – 30mm Max <br></br>
    </p>
    </div>
    </div>
    </div>
    </div> 

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_3}/>
    <div className='tech-cont'>
    <h4>Laser Welding Machine (Fiber Laser 4KW)</h4>
    <p>
    <b>Make:</b> TRUMPF, Germany | Bed Size - 23 x 3 Meters <br></br>
    <b>Model No:</b> Trudisk 4001 <br></br>
    <b>Laser Weld Thickness:</b> Mild Steel – 6mm Max. | Stainless Steel – 5mm Max. <br></br>
    </p>
    </div>
    </div>
    </div>
    </div> 

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_4}/>
    <div className='tech-cont ltl-lrge'>
    <h4>CNC Turret Punch Press Machine</h4>
    <p>
    <b>Make:</b> AMADA, Japan | Model No: AE2510NT | Press Capacity - 20 TON| Tool Storage – 58 Stations <br></br> 
    <b>Thickness:</b> Mild Steel – 6mm Max. | Stainless Steel – 3mm Max. | Aluminium – 6mm Max. <br></br>
    <b>punching Capacity:</b> ( L X W X T ) = 2500 X 1250 X 3mm. <br></br>
    </p>
    </div>
    </div>
    </div>
    </div>  

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_5}/>
    <div className='tech-cont'>
    <h4>ROBO Spot Welding Machine</h4>
    <p>
    <b>Make:</b> ROBO - KUKA, Germany | Gun - Obara, Japan | Automation – DIFACTO, India <br></br>
    <b>Bed Size:</b> 23 X 3 Meters <br></br>
    <b>Welding Thickness:</b> (3mm + 3mm) <br></br>
    </p>
    </div>
    </div>
    </div>
    </div> 

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_6}/>
    <div className='tech-cont'>
    <h4>CNC Spot Welding Machine</h4>
    <p>
    <b>Make:</b> Naga Welders, India <br></br>
    <b>Bed Size:</b>23 X 3 Meters <br></br>
    <b>Welding Thickness:</b> (3mm+3mm) <br></br>
    </p>
    </div>
    </div>
    </div>
    </div> 

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_7}/>
    <div className='tech-cont'>
    <h4>CNC Hydraulic Press Brake</h4>
    <p>
    <b>Make:</b> Hindustan Hydraulics, India | Capacity – 450 TON | Length – 4.1 Meters | Axis - 5 <br></br> 
    <b>Cutting Thickness:</b> Mild Steel – 16mm X 4100mm | Stainless Steel – 8mm X 4100mm Aluminium – 20 mm X 4100mm <br></br>
    </p>
    </div>
    </div>
    </div>
    </div> 

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_8}/>
    <div className='tech-cont'>
    <h4>NC Hydraulic Shearing Machine</h4>
    <p>
    <b>Make:</b> Hindustan Hydraulics, India | Length – 4.1 Meters <br></br> 
    <b>Cutting Thickness:</b> Mild Steel – 16mm X 4100mm | Stainless Steel – 10mm X 4100mm | Aluminium – 20mm X 4100mm <br></br>
    </p>
    </div>
    </div>
    </div>
    </div>   

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_9}/>
    <div className='tech-cont'>
    <h4>Power Press Machine</h4>
    <p>
    <b>Capacity:</b> 150 TONS <br></br> 
    <b>Size:</b> 4'x4' <br></br>
    </p>
    </div>
    </div>
    </div>
    </div>

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_10}/>
    <div className='tech-cont'>
    <h4>Aluminium Profile Cutting</h4> 
    </div>
    </div>
    </div>
    </div>     

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_11}/>
    <div className='tech-cont'>
    <h4>Hydraulic Pipe Bending Machine</h4>
    <p>
    <b>Make:</b> UNIPUNCH, India | Max. Tube Bending Capacity Ø | Mild Steel - 60mm Stainless Steel – 32 mm | Max. Tube Length - 2000mm | Max.wall Thickness – 3mm 
    </p>
    </div>
    </div>
    </div>
    </div>   

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_12}/>
    <div className='tech-cont'>
    <h4>Power Press “C“ Frame</h4>
    <p>
    <b>Make:</b> Rajesh Machine, India <br></br> 
    <b>Capacity:</b> 20 Ton (3nos) | Bed Size - 508x305mm <br></br>
    50ton (2nos) | Bed Size -750x520mm <br></br>
    </p>
    </div>
    </div>
    </div>
    </div>     

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_13}/>
    <div className='tech-cont'>
    <h4>Sheet Rolling Machine</h4>
    <p>
    <b>Make:</b> Rajesh, India Max Roll width:2100 mm
Max thickness of Steel Plate:8mm
Min. Ø - 190mm<br></br>  
    </p>
    </div>
    </div>
    </div>
    </div>   

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_14}/>
    <div className='tech-cont'>
    <h4>TIG Welding</h4>
    <p>
    <b>Make:</b> Panasonic, Japan <br></br> 
    <b>Model:</b> YC-400TX3 <br></br> 
    <b>Machine Nos:</b> 15 
    </p>
    </div>
    </div>
    </div>
    </div>   

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_15}/>
    <div className='tech-cont'>
    <h4>MIG Welding</h4>
    <p>
    <b>Make:</b> Panasonic, Japan <br></br> 
    <b>Model:</b> YD-400RX1 <br></br> 
    <b>Machine Nos:</b> 5 
    </p>
    </div>
    </div>
    </div>
    </div>   

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_16}/>
    <div className='tech-cont'>
    <h4>Powder Coating Unit</h4>
    <p>
    <b>Make:</b> WEWIN India 
    </p>
    </div>
    </div>
    </div>
    </div>   

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_17}/>
    <div className='tech-cont'>
    <h4>Shot Blasting Unit</h4>
    <p>
    <b>Make:</b> WEWIN India 
    </p>
    </div>
    </div>
    </div>
    </div>   

    <div className='col-lg-6'> 
    <div className='tech-props'>
    <div className='tech-mage'>
    <img src={tech_mage_18}/>
    <div className='tech-cont'>
    <h4>Paint Spray Booth</h4>
    <p>
    <b>Make:</b> WEWIN India 
    </p>
    </div>
    </div>
    </div>
    </div>

    </Row>

    </Col>

    </Row>
    </Container>    
    </section>
 
    </div>
  )
}
