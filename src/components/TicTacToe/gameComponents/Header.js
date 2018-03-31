import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import styles from '../../../styles/tictactoeStyles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>
          Tic Tac Toe
        </Text>
      </View>
    )
  }
}
