import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AppNavigator from "./components/AppNavigator";
import AuthNavigator from "./components/auth/AuthNavigator";
import Loading from './components/shared/Loading';

const SwitchNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
    Login: AuthNavigator,
    Loading: Loading,
  },
  {
    initialRouteName: "Loading"
  }
);

export default createAppContainer(SwitchNavigator);
