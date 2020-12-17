import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
        <h5>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          ул. Садовая-Триумфальная, д. 10/13, г. Москва, 127006
        </h5>
        <a href="https://mgkh.mosreg.ru/">
          <h5>
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            http://mgkh.mosreg.ru
          </h5>
        </a>
      </div>
      <img height="50%" src={logo} alt="logo" />
      <h4>Министерство жилищно-коммунального хозяйства Московской области</h4>
    </div>
  );
};

export default Footer;
