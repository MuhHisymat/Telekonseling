import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-2.png";
import mocup from "../assets/images/moc-1-1.png";

const FeatureTwo = () => {
  return (
    <section className="feature-style-two" id="features">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="image-block">
              <img src={mocup} alt="Awesome Image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="content-block">
              <BlockTitle
                textAlign="left"
                image={blockTitleCircle}
                title={`3 Steps To  \n Doing Counseling.`}
              />
              <p>
                Kerahasiaan Ceritamu Dijamin ! <br />
                kami menjamin Kerahasiaan ceritamu. Psikolog yang mendampingi dalam sesi
                konseling adalah merupakan psikolog yang terjamin kredibilitasnya. So, kamu bisa
                ceritakan semua uneg-unegmu tanpa rasa khawatir
              </p>
              <ul className="feature-lists">
                <li>
                  <i className="fa fa-check"></i> Download Aplikasi.
                </li>
                <li>
                  <i className="fa fa-check"></i> Pilih Psikolog Tepat.
                </li>
                <li>
                  <i className="fa fa-check"></i> Jadwalkan Sesi Pertamamu.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureTwo;
