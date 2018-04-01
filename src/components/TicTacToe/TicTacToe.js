/**
 * Disclamer: Most of the logic in this 'TicTacToe' program
 * came from a tutorial by the user EcutDavid at: 
 * medium.com/@davidguandev/building-a-tic-tac-toe-in-react-native-2a3c44e697f2
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Header from './gameComponents/Header'
import GameBoard from './GameBoard'
import styles from '../../styles/tictactoeStyles'

export default class TicTacToeScreen extends Component {
      constructor() {
        super()
        this.state={ 
          gameStarted: false 
        }
      }
    
      startGame() {
        this.setState({ gameStarted: true })
      }
    
      render() {
        const { gameStarted } = this.state
        return (
          <View style={styles.TicTacToeContainer}>
            <Header />
            {
              gameStarted ? (<GameBoard />) : (
                <View>
                  <Text style={styles.TicTacToeTitle}>
                    Welcome to Tic Tac Toe !
                  </Text>
                  <TouchableOpacity onPress={() => this.startGame()}>
                    <Text style={styles.TicTacToeInstructions}>
                      Touch here to start
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            }
          </View>
        )
    }
}
