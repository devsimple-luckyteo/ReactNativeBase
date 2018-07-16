import { StackNavigator } from 'react-navigation';

import Home from './components/Home';

export const HomeScreen = StackNavigator(
  {
    /* Màn hình chính - Đấu giá */
    Screen_Home: {
      screen: Home
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null
      // headerTitleStyle: {
      //     textAlign: 'center',
      //     alignSelf: 'center',
      //     fontSize: moderateScale(18)
      // },
      // headerStyle: {
      //     backgroundColor: '#fff',
      //     borderBottomWidth: 1,
      //     borderBottomColor: '#a2a2a2',
      //     shadowColor: '#dcdcdc',
      //     shadowOpacity: 0.3,
      //     elevation: 3
      // },
      // headerRight: <View />,
      // headerBackTitle: '',
      // headerLeft: renderButtonBack(navigation)
    })
    // transitionConfig: () => ({
    //screenInterpolator: CardStackStyleInterpolator.forHorizontal })
  }
);
