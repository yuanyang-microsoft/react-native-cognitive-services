import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

import { Constants } from 'expo';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { HomeScreen } from './screens/HomeScreen'
import { SettingsScreen } from './screens/SettingsScreen'

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Home2: {
    screen: SettingsScreen
  }
});

export default createAppContainer(AppNavigator);
