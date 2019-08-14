import { createStackNavigator, createAppContainer } from "react-navigation";
import ClockMain from "../containers/ClockMain";
import Settings from "../containers/Settings";

import { CLOCK_MAIN_SCREEN, SETTINGS_SCREEN } from "./routes";

const AppNavigator = createStackNavigator(
  {
    [CLOCK_MAIN_SCREEN]: ClockMain,
    [SETTINGS_SCREEN]: Settings
  },
  {
    initialRouteName: CLOCK_MAIN_SCREEN,
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
