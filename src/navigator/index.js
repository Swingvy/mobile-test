import { createStackNavigator, createAppContainer } from "react-navigation";
import ClockMain from "../containers/ClockMain";

const LAUNCH_SCREEN = "LAUNCH_SCREEN";
const CLOCK_MAIN = "CLOCK_MAIN";

const AppNavigator = createStackNavigator(
  {
    [CLOCK_MAIN]: ClockMain
  },
  {
    initialRouteName: CLOCK_MAIN,
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
