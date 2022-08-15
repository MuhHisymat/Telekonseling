import React from "react";
import { Container } from "react-bootstrap";

const Subscribe = () => {
  return (
    <section className="subscribe-style-one">
      <Container>
        <h3 className="text-center">
          Contact Us <span>      <h6 className="text-center">Dolore dolore consequat tempor sit <br /> deserunt dolor incididunt ipsum cupidatat eu sit.</h6></span>
        </h3>
        <form className="subscribe-form contact-form-vaidated">
          <button type="submit">Costumer Service</button>
          <button type="submit">Partnership</button>
        </form>
        <div className="result"></div>
      </Container>
    </section>
  );
};

export default Subscribe;
