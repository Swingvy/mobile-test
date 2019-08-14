import i18n from "i18n-js";

const translations = {
  en: {
    hello: "hi",
    settings: "settings",
    gpsNotEnabled: "GPS is not enabled",
    gpsEnabled: "GPS is enabled"
  },
  ko: {
    hello: "안녕",
    settings: "설정",
    gpsNotEnabled: "GPS is not enabled",
    gpsEnabled: "GPS is enabled"
  }
};

const setI18nConfig = () => {
  // fallback if no available language fits

  // set i18n-js config
  i18n.translations = translations;
  i18n.locale = "en";
};

export { setI18nConfig };
