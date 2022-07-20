import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner_image from "../images/inner-banner-6.jpg";
import { FormInput } from "./FormInput";

export default function CompanyProfile() {
  return (
    <div>
      <section className="inner-banner">
        <img src={banner_image} />
        <Col className="banner-sector">
          <Container>
            <Row>
              <Col className="ban-cnt">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Career
                </h1>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li> / </li>
                  <li> Career </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Col>
      </section>

      <section className="section about-section">
        <Container>
          <Row className="align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="common-title">
                <h2>Careers</h2>
              </div>
              <div className="common-second-title">
                <h3>Join the team of tomorrow</h3>
              </div>
              <div className="common-third-title">
                <h4>
                  At Dynamic Air, you don’t just have a job or one of many
                  careers you have a home for your passion and are surrounded by
                  a team that supports and celebrates you.{" "}
                </h4>
              </div>
              <div className="common-para">
                <p>
                  We take a people-centric approach to manufacturing with a
                  collaborative and energetic culture, redefining what it looks
                  and feels like to work in manufacturing. Our team is composed
                  of smart, dynamic individuals who are leaders in innovation,
                  engineering, business, automation, sales, and design.<br></br>
                  <br></br>
                  We are here to make dreams into reality – whether it’s turning
                  a customer’s vision into tangible, well-built parts and
                  assemblies or coaching our team members to discover their
                  life’s purpose. We reward performance and provide our team
                  members with job opportunities that encourage individual
                  growth and job satisfaction.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="career-frm">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <h4>Apply Now</h4>
                    <label>Name</label>
                    <FormInput
                      required={true}
                      type="text"
                      label="name"
                      onChange={(e) => console.log("sdfsdfds")}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                  <label>E-mail</label>
                    <FormInput
                      required={true}
                      type="email"
                      label="email"
                      placeholder="Enter your mail"
                    />
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                  <label>Phone</label>
                    <FormInput
                      required={true}
                      type="number"
                      label="phone number"
                      placeholder="Enter your phone number"
                    />
                  </div> 
                  <div className="col-sm-12 col-md-12 col-lg-12">
                  <label>Resume</label>
                    <FormInput
                      required={true}
                      type="file"
                      label="file"
                    />
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                  <label>Meassage</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter your message"
                    ></textarea>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
}
