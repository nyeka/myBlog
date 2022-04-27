import React from "react";
import "./style.css";
import sadgif from "../../images/sad.gif";

const EmptyList = () => (
  <>
    <div className="emptyList-wrap">
      <img src={sadgif} alt="empty" />
    </div>
    <div className="artikel__ku">
      <h3>Artikel Tidak Ditemukan</h3>
    </div>
  </>
);

export default EmptyList;
