import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";
import frMessages from "./data/fr";
import enMessages from "./data/en";
import "./index.css";

addLocaleData([...en, ...fr]);

const getMessages = locale => {
  switch (locale) {
    case "fr":
      return frMessages;
    default:
      return enMessages;
  }
};

const render = locale => {
  ReactDOM.render(
    <IntlProvider locale={locale} messages={getMessages(locale)}>
      <App />
    </IntlProvider>,
    document.getElementById("root")
  );
};

window.render = render(navigator.language || "fr");
