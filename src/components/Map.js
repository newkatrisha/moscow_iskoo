import React from "react";
import schema from "../images/schema.png";
import "../styles/Map.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { toolTips } from "../tooltips";

const Map = () => {
  return (
    <div className="map">
      <img width="100%" height="100%" src={schema} alt="" />
      {toolTips &&
        toolTips.map((tooltip) => {
          return (
            <div className={`tooltip tooltip-${tooltip.id}`}>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                size="1x"
                className="question"
              />
              <span className={`tooltipText tooltipText-${tooltip.id}`}>
                {tooltip.text}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Map;
