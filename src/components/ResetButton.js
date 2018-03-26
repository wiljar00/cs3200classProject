import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class ResetButton extends Component {
    render() {
      return (
        <TouchableOpacity>
            <Text>This is a button</Text>
        </TouchableOpacity>
      );
    }
  };