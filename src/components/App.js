import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles/styles';

import { StackNavigator } from 'react-navigation';

import MenuScreen from './Menu/MenuScreen';
import TicTacToeScreen from './TicTacToe/TicTacToe';

//These navigation names can be changed.
//Add your game screens to the navigator.
const MainNavigator = StackNavigator({
  Menu:{
    screen: MenuScreen,
    navigationOptions:{
      headerTransparent: true
    }
  },
  TicTacToe:{
    screen: TicTacToeScreen,
    navigationOptions: {
      headerTransparent: true,
      title: 'Tic-Tac-Toe'
    }
  },
});

export default class App extends Component {
  render() {
    return (
      <MainNavigator/>
    );
  }
};
