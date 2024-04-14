import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsEnvelope } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center">
      <div className="border-b-2 border-white p-6">
        <Container className="d-flex justify-content-center justify-content-lg-between">
          <div className="mr-12 gap-5 d-none d-lg-block" style={{marginTop:"20px"}}>
            <span className="mb-4 flex items-center justify-center justify-md-start font-semibold" style={{marginTop:"10px"}}>Get connected with us on social networks:</span>
          </div>
          <div className="d-flex justify-content-center" style={{marginLeft:"40px"}}>
            <a href="#" className="mr-6 text-white" style={{marginLeft:"10px"}}>
              <BsFacebook />
            </a>
            <a href="#" className="mr-6 text-white"style={{marginLeft:"10px"}}>
              <BsTwitter />
            </a>
            <a href="#" className="mr-6 text-white" style={{marginLeft:"10px"}}>
              <BsInstagram />
            </a>
            <a href="#" className="mr-6 text-white"style={{marginLeft:"10px"}}>
              <BsLinkedin />
            </a>
            <a href="#" className="text-white"style={{marginLeft:"10px"}}>
              <BsEnvelope />
            </a>
          </div>
        </Container>
      </div>

      <Container className="py-10 text-center text-md-left">
        <Row className="gap-8 lg:grid lg:grid-cols-4">
          <Col>
            <p className="mb-4 flex items-center justify-center justify-md-start font-semibold" style={{marginTop:"10px"}}>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Col>
          <Col>
            <h6 className="mb-4 flex items-center justify-center justify-md-start font-semibold">
              Products
            </h6>
            <p className="mb-4">
              <a className="text-white">Angular</a>
            </p>
            <p className="mb-4">
              <a className="text-white">React</a>
            </p>
            <p className="mb-4">
              <a className="text-white">Vue</a>
            </p>
            <p>
              <a className="text-white">Laravel</a>
            </p>
          </Col>
          <Col>
            <h6 className="mb-4 flex items-center justify-center justify-md-start font-semibold">
              Useful links
            </h6>
            <p className="mb-4">
              <a className="text-white">Pricing</a>
            </p>
            <p className="mb-4">
              <a className="text-white">Settings</a>
            </p>
            <p className="mb-4">
              <a className="text-white">Orders</a>
            </p>
            <p>
              <a className="text-white">Help</a>
            </p>
          </Col>
          <Col>
            <h6 className="mb-4 flex items-center justify-center justify-md-start font-semibold">
              Contact
            </h6>
            <p className="mb-4">
              <span className="mr-3">
                <BsEnvelope />
              </span>
              New York, NY 10012, US
            </p>
            <p className="mb-4">
              <span className="mr-3">
                <BsEnvelope />
              </span>
              info@example.com
            </p>
            <p className="mb-4">
              <span className="mr-3">
                <BsEnvelope />
              </span>
              + 01 234 567 88
            </p>
            <p>
              <span className="mr-3">
                <BsEnvelope />
              </span>
              Mon - Fri 9:00am to 6:00pm
            </p>
          </Col>
          <h6 className="mb-4 flex items-center justify-center justify-md-start font-semibold">
              TW Elements 
            </h6>
        </Row>
      </Container>
    </footer>
  );
}
