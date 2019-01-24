import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from "./Login";
import SignUp from "./SignUp";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
});

export default createAppContainer(AppNavigator);