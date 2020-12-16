import React from "react";
import schema from "../images/schema.png";
import "../Schema.css";

const Schema = () => {
  return (
    <div className="schema">
      <img width="100%" height="100%" src={schema} alt="" />
      {/* <div className="tooltips">
        <div className="tooltip tooltip-1">
          <div className="pin"></div>
          <div className="tooltip_box">
            <p className="tooltip_text">
              Предоставление сведений в подсистему «Кадастр отходов»,
              взаимодействие с подсистемой «Контроль вывоза»
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Schema;
