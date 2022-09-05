import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moc from "../assets/images/banner-moc-1-2.png";

const bannertwo = () => {
  return (
    <section className="banner-style-one home-page-two" id="banner">
      <img src={moc} className="banner-mock" alt="Awesome Image" />
      <Container>
        <Row>
          <Col xl={6} lg={8}>
            <div className="content-block">
              <h3>
                Best Mobile App <br /> For Psychology <br /> Consulting.
              </h3>
              <p>
                Excepteur fugiat nostrud enim elit irure velit cillum <br />incididunt
                sint aliqua. Duis esse deserunt tempor <br /> mollit nulla. Nulla consequat 
                officia excepteur <br /> veniam non eiusmod laboris. Est ad amet veniam <br />nisi ex cillum. .
              </p>
              <div className="button-block">
                <a href="#" className="banner-btn">
                  <i className="fa fa-play"></i>
                  Get in<span>Google Play</span>
                </a>
                <a href="#" className="banner-btn">
                  <i className="fa fa-apple"></i>
                  Get in<span>Apps Store</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default bannertwo;
