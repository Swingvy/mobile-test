import { AppRegistry } from "react-native";

import Navigator from "./src/navigator";
import { setI18nConfig } from "./src/i18n";
import { name as appName } from "./app.json";

// set I18nConfig
setI18nConfig();

AppRegistry.registerComponent(appName, () => Navigator);
