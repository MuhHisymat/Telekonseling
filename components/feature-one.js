import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-3.png";
import mocup from "../assets/images/moc-1-2.png";

const FeatureOne = () => {
  return (
    <section className="feature-style-one" id="featureone">
      <Container>
        <hr className="style-one" />
        <Row>
          <Col lg={6}>
            <div className="content-block">
              <BlockTitle
                textAlign="left"
                image={blockTitleCircle}
                title={`Psikomorfosa  \n Psikolog Profile.`}
              />
              <p>
              Percayakan Cerita Personal pada yang Profesional

              </p>
              <ul className="feature-lists">
                <li>
                  <i className="fa fa-check"></i> Profesi Psikologi Peminatan Klinis dan memiliki gelar (M.Psi, Psikolog).{" "}
                </li>
                <li>
                  <i className="fa fa-check"></i> Psikolog Satu Persen sudah memiliki Surat Izin Praktik Psikologi (SIPP) dari Himpunan Psikologi Indonesia (HIMPSI).
                </li>
                <li>
                  <i className="fa fa-check"></i> Surat Izin Praktik Psikologi Klinis (SIPPK) dari Ikatan Psikologi Klinis Indonesia (IPK).
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={6}>
            <div className="image-block">
              <img src={mocup} alt="Awesome Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureOne;
