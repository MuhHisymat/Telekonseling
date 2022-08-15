import React from "react";
import Link from "next/link";
import SubNavToggler from "./sub-nav-toggler";
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {
  return (
    <ul className="one-page-scroll-menu navigation-box">
      <li>
        <ScrollLink
          activeClass="current"
          to="banner"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </ScrollLink>
        </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="featureone"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Psycholog
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Testimonials
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Pricing
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="faq"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Faq

        </ScrollLink>

        
      </li>
    </ul>
  );
};

export default NavLinks;
