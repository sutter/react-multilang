import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const locale = window.locale || "fr";

ReactDOM.render(<App locale={locale} />, document.getElementById("root"));
