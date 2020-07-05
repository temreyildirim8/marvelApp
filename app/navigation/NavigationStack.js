import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from 'app/screens/Home';
import CharacterPage from 'app/screens/CharacterPage';

const RNApp = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    CharacterPage: {
      screen: CharacterPage,
    }
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RNApp);
