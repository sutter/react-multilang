import React, { Component } from "react";
import { IntlProvider, addLocaleData, FormattedMessage } from "react-intl";
import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";
import frMessages from "./data/fr";
import enMessages from "./data/en";
import LangSelector from "./components/langSwitcher";
import logo from "./logo.svg";
import "./App.css";

addLocaleData([...en, ...fr]);

const locale = navigator.language || "fr";

const getMessages = locale => {
  switch (locale) {
    case "fr":
      return frMessages;
    default:
      return enMessages;
  }
};

class App extends Component {
  state = {
    lang: locale
  };

  langSwitch = locale => {
    this.setState({
      lang: locale
    });
  };

  render() {
    return (
      <IntlProvider
        locale={this.state.lang}
        messages={getMessages(this.state.lang)}
      >
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <LangSelector lang={this.state.lang} langSwitch={this.langSwitch} />
            <h2>
              <FormattedMessage id="hello" />
            </h2>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
