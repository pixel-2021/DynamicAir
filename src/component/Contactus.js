import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import banner_image from '../images/inner-banner-1.jpg';
import Addressmap from './Addressmap';
import { FaRegBuilding } from "react-icons/fa";
import { RiBuilding4Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FormInput } from './FormInput';


import { Form, Helper, Alert, FormSubmitButton } from "./customStyle";
import { useFormValidation } from "../hooks/useFormValidation";

export const isText = RegExp(/^[A-Z ]{3,}$/i);
export const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
export const isPhone = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/);

const stateShcema = {
  name: {
    value: "",
    error: ""
  },
  email: {
    value: "",
    error: ""
  },
  phone: {
    value: "",
    error: ""
  },
  message: {
    value: "",
    error: ""
  },
  location: {
    value: "",
    error: ""
  }
};

const validateShcema = {
  name: {
    required: true,
    validator: {
      regEx: isText,
      error: "Please provide a valid name"
    }
  },
  email: {
    required: true,
    validator: {
      regEx: isEmail,
      error: "Invalid email address"
    }
  },
  phone: {
    required: true,
    validator: {
      regEx: isPhone,
      error: "Please enter a valid phone number"
    }
  },
  location: {
    required: true,
    validator: {

      error: "Please enter a valid location"
    }
  },
  message: {
    required: true,
    validator: {
      length: 10,
      error: "Minimum 10 characters required."
    }
  }
};


export default function Contactus() {
  
  const { state, disable, handleChange, handleSubmit } = useFormValidation(
    stateShcema,
    validateShcema,
    handleSend
  );
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { name, email, phone, message,location } = state;

  function handleSend() {
    setLoading(true);
    // Just for testing
    // setTimeout(() => {
      setResponseMessage("Email send successfully");
      setLoading(false);
    // }, 3000);
  }


  return (
    <div>

    <section className='inner-banner'>
    <img src={banner_image}/>
    <Col className='banner-sector'>
    <Container>
    <Row>
    <Col className='ban-cnt'>
    <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    Contact Us
    </h1>
    <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
    <li><Link to='/'>Home</Link></li>  
    <li> / </li> 
    <li className="active">Contact Us</li>
    </ul>
    </Col>
    </Row>
    </Container>
    </Col>
    </section>  

    <section className="contact-us">
    <Container>
    <Row> 

    <div className='cont-usall'> 
    <Row>
    
    <div className='col-lg-7 bg-white'>
    <div className='get-intoch' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
    <div className="common-second-title"><h3>Get in Touch</h3></div>    
    {/* <div>
        <Form onSubmit={handleSubmit} method="POST" noValidate>
        {responseMessage.length > 0 && (
            <Alert
              success={responseMessage.includes("Email send successfully") ? true : false}
              role="alert"
            >
              {responseMessage}
            </Alert>
          )}
          <div className="form-group">
            <input
              name="name"
              autoComplete="name"
              className="form-control ps-3"
              value={name.value}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {name.error ? (
              <Helper style={{ bottom: '-18px' }}>{name.error}</Helper>
            ) : name.value ? (
              <Helper color="green" style={{ bottom: '-18px' }}>Name ✔</Helper>
            ) : (
              ""
            )}
            <span className="bar" />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="form-control  ps-3"
              value={email.value}
              onChange={handleChange}
              placeholder="Email"
            />
            {email.error ? (
              <Helper style={{ bottom: '-18px' }}>{email.error}</Helper>
            ) : email.value ? (
              <Helper style={{ bottom: '-18px' }} color="green">Email ✔</Helper>
            ) : (
              ""
            )}
            <span className="bar" />
          </div>
          <div className="form-group">
            <input
              name="phone"
              autoComplete="phone"
              className="form-control  ps-3"
              value={phone.value}
              onChange={handleChange}
              placeholder="Phone i.e. xxx-xxx-xxxx"
            />
            {phone.error ? (
              <Helper style={{ bottom: '-18px' }}>{phone.error}</Helper>
            ) : phone.value ? (
              <Helper style={{ bottom: '-18px' }} color="green">Phone ✔</Helper>
            ) : (
              ""
            )}
            <span className="bar" />
          </div>
          <div className="form-group">
            <input
              name="location"
              autoComplete="location"
              className="form-control  ps-3"
              value={location.value}
              onChange={handleChange}
              placeholder="Location"
            />
            {phone.error ? (
              <Helper style={{ bottom: '-18px' }}>{location.error}</Helper>
            ) : location.value ? (
              <Helper style={{ bottom: '-18px' }} color="green">Location ✔</Helper>
            ) : (
              ""
            )}
            <span className="bar" />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              className="form-control  ps-3"
              value={message.value}
              onChange={handleChange}
              placeholder="Your message.."
            />
            {message.error && <Helper style={{ bottom: '-18px' }}>{message.error}</Helper>}
            <span className="bar" />
          </div>
        
          <FormSubmitButton type="submit" disabled={disable}>
            <span>Send </span>
            {loading && <span className="loader" />}
          </FormSubmitButton>
        </Form>
      </div> */}
      <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6">
        <FormInput required={true} type="text" label="name" onChange={(e) => console.log('sdfsdfds')} placeholder="Enter your name"/>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
        <FormInput required={true} type="email" label="email"   placeholder="Enter your mail"/>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
        <FormInput required={true} type="number" label="phone number"  placeholder="Enter your phone number"/>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
        <FormInput required={false} type="text" label="location"   placeholder="Enter your location"/>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-12">
    <textarea className="form-control" placeholder="Enter your message"></textarea>
    <button type="submit">Submit</button>
    </div>
    </div>     
    </div>    
    </div> 

    <div className='col-lg-5 p-0'>
    <div className='adress-layr' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
    <div className="common-second-title white"><h3>Reach Us</h3></div>  
    <ul>
    <li><FaRegBuilding />
    <span>No.4, Boopathy Nagar, <br></br>
    Industrial Estate, <br></br>
    Keelkattalai, Chennai - 600117.</span></li> 
    <li><RiBuilding4Line />
    <span>No.123, Satharai Village <br></br>
    Near Mappedu Koot Road, <br></br>
    Thiruvallur District, Chennai - 631402.</span></li>
    <li><FiPhoneCall />
    <span>044 2247445 / 46 / 48 | +91 8925202444</span></li>
    <li><AiOutlineMail />
    <span>marketing@dynamicair.in</span></li>
    </ul>   
    </div>       
    </div> 

    </Row>
    </div>  

    </Row>    
    </Container>    
    </section> 

     <Addressmap/>

    </div>
  )
}
