import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import menuStyles from '../../styles/menuStyles';
import { StackNavigator } from 'react-navigation';


export default class MenuButton extends Component {
    render() {
      return (
        <TouchableOpacity 
        onPress={this.props.navfunc}
        style={menuStyles.menuButton}>
            <Text style={menuStyles.menuButtonText}>{this.props.buttonText}</Text>
        </TouchableOpacity>
      );
    }
  };