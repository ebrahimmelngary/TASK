import { createStackNavigator } from 'react-navigation-stack';
import { COLORS } from '../common';
import Home from '../screens/Home';


const MainStack = createStackNavigator({
  HomeScreen: Home,
}, {
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: COLORS.main
    },
    // headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitleContainerStyle: {

    },

  }
})
MainStack.navigationOptions = () => {
  return {
    headerStyle: {
      backgroundColor: COLORS.main
    }
  }
}
export default MainStack;