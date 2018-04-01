import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import styles from '../../../styles/tictactoeStyles';

export default class Cross extends Component {
  render() {

    const { 
      xTranslate, 
      yTranslate, 
      color 
    } = this.props

    return (
      <View style={[styles.crossContainer, {
        transform: [
          {translateX: (xTranslate ? xTranslate : 10) + 35},
          {translateY: (yTranslate ? yTranslate : 10) - 12},
        ]
      }]}>
        <View style={[styles.crossLine, {
          transform: [
            {rotate: '45deg'},
          ],
          backgroundColor: color ? color : '#000'
        }]} />
        <View style={[styles.crossLine, {
          transform: [
            {rotate: '135deg'},
          ],
          backgroundColor: color ? color : '#000'
        }]} />
      </View>
    )
  }
}
