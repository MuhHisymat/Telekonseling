import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";

const FUNFACT_DATA = [
  {
    count: 99,
    text: "Psychology"
  },
  {
    count: 32302,
    text: "Consult"
  },
  {
    count: 100,
    text: "Problem"
  },
  {
    count: 226999,
    text: "Hours"
  }
];

const FunFact = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="fun-fact-style-one">
      <Container>
        <h3 className="title-line">Telekonseling Psikomorfosa</h3>
        <Row>
          {FUNFACT_DATA.map(({ text, count }, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <div className="single-funfact-one text-center">
                <h3 className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? count : 0} />
                  </VisibilitySensor>
                </h3>
                <p>{text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFact;
