/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './src/reduxsaga/configureStore';
import Main from './src/Main';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
