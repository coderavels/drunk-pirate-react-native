/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './pages/welcome';
import AddPlayers from './pages/addPlayers';
import Playground from './pages/playground';
import {SafeAreaView, StyleSheet} from 'react-native';

export type RootStackParamList = {
  welcome: undefined;
  addPlayers: undefined;
  playground: {players: Array<string>};
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName={'welcome'}>
          <RootStack.Screen name={'welcome'} component={Welcome} />
          <RootStack.Screen name={'addPlayers'} component={AddPlayers} />
          <RootStack.Screen name={'playground'} component={Playground} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
