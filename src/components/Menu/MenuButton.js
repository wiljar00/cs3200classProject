import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import menuStyles from '../../styles/menuStyles';

export default class MenuButton extends Component {
    render() {
      return (
        <TouchableOpacity style={menuStyles.menuButton}>
            <Text style={menuStyles.menuButtonText}>{this.props.buttonText}</Text>
        </TouchableOpacity>
      );
    }
  };