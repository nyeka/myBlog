import React from "react";
import "./style.css";
import sadgif from "../../images/sad.gif";

const EmptyList = () => (
  <div className="emptyList-wrap">
    <img src={sadgif} alt="empty" />
  </div>
);

export default EmptyList;
