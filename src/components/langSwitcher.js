import React from "react";

const LangSelector = ({ ...props }) => (
  <div className="langSelector">
    <button
      className={props.lang === "fr" ? "is-active" : "is-inactive"}
      onClick={e => props.langSwitch("fr")}
    >
      FR
    </button>
    <button
      className={props.lang === "en" ? "is-active" : "is-inactive"}
      onClick={e => props.langSwitch("en")}
    >
      EN
    </button>
  </div>
);

export default LangSelector;
