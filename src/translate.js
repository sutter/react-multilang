import dataFr from "./data/fr";
import dataEn from "./data/en";

const translate = locale => {
  switch (locale) {
    case "fr":
      return dataFr;
      break;
    default:
      return dataEn;
      break;
  }
};

export default translate;
