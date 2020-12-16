import React from "react";
import ecoLogo from "../images/eco-logo.png";
import header from "../images/header.png";

const Header = () => {
  return (
    <div className="header">
      <img id="eco_logo" src={ecoLogo} alt="eco_logo" />
      <div className="header_text">
        <p>
          <span style={{ fontWeight: "700", fontSize: "36px" }}>ГИС ИСКОО</span>
          <br /> Государственная информационная система автоматизации процессов
          учета и контроля обращения с отходами на территории Московской области
        </p>
      </div>
      <img id="city" width="40%" src={header} alt="" />
    </div>
  );
};
export default Header;
