/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ResetButton from './ResetButton'


import styles from '../styles/styles';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      pTurn: true
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          TIC-TAC-TOE
        </Text>
        <ResetButton onPress={this.resetState()}/>
      </View>
    );
  }

  resetState(){
    //TODO: Reset State
  }
};
