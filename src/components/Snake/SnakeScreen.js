import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SnakeCell from './SnakeCell';

export default class SnakeScreen extends Component {
    render() {
      return (
        <View>
            <SnakeCell/>
        </View>
      );
    }
  };