import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import {
  GAME_RESULT_NO,
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_TIE
} from './constantValues/game'

import styles from '../../../styles/tictactoeStyles';

export default class Header extends Component {
  generateResultText(result) {
    switch (result) {
      case GAME_RESULT_USER:
        return 'Congratulations! \n You Win!'
      case GAME_RESULT_AI:
        return 'You Lose!'
      case GAME_RESULT_TIE:
        return 'Tie Match!'
      default:
        return ''
    }
  }

  render() {
    const { result, onRestart } = this.props
    return (
      <View>
        <Text style={styles.promptText}>{ this.generateResultText(result) }</Text>
        {
          result !== GAME_RESULT_NO && (
            <TouchableOpacity onPress={() => onRestart()}>
              <Text style={styles.promptInstructions}>
                Touch here to play again
              </Text>
            </TouchableOpacity>
          )
        }
      </View>
    )
  }
}
