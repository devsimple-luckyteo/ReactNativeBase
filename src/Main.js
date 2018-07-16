import React from 'react';
import { AsyncStorage, View, StatusBar } from 'react-native';
// import { getStatusBarHeight } from 'react-native-status-bar-height';

import { HomeScreen } from './Router';
// import { primary } from './res/ColorPallet';
import { primary } from './res/ColorPallet';

// const TAG = 'Main';

/* Hidden StatusBar*/
//StatusBar.setBackgroundColor(primary, true);

class Main extends React.Component {

  componentDidMount() {
  }

  componentWillUnmount() {
    AsyncStorage.setItem('timeLoadInterstitial', `${0}`);
  }

  render() {
    // BackHandler.addEventListener('hardwareBackPress', () => {
    //     console.log('Nhan back android');
    // });
    //console.disableYellowBox = true;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={primary}
          translucent
          networkActivityIndicatorVisible
          animated
        />
        <HomeScreen screenProps={this.state} />
      </View>
    );
  }
}

export default Main;
