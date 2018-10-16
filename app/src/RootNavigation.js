// @flow

import React from 'react';

import { createStackNavigator } from 'react-navigation';

import * as Pages from 'app/src/pages';

export const AppNavigator = createStackNavigator({
  home: {
    screen: Pages.Home,
  },
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
