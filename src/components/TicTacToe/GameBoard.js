/**
 * Disclamer: Most of the logic in this 'TicTacToe' program
 * came from a tutorial by the user EcutDavid at: 
 * medium.com/@davidguandev/building-a-tic-tac-toe-in-react-native-2a3c44e697f2
 */

import React, { Component } from 'react'
import {
  TouchableWithoutFeedback,
  View
} from 'react-native'

import {
  CENTER_POINTS,
  AREAS,
  CONDITIONS,
  GAME_RESULT_NO,
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_TIE
} from './gameComponents/constantValues/game';

import Circle from './gameComponents/Circle';
import Cross from './gameComponents/Cross';
import PromptArea from './gameComponents/PromptArea';
import styles from '../../styles/tictactoeStyles';

export default class GameBoard extends Component {
  constructor() {
    super()
    this.state= {
      AIInputs: [],
      userInputs: [],
      result: GAME_RESULT_NO,
      round: 0
    }
  }

  restart() {
    const { round } = this.state
    this.setState({
      userInputs: [],
      AIInputs: [],
      result: GAME_RESULT_NO,
      round: round + 1
    })
    setTimeout(() => {
      if (round % 2 === 0) {
        this.AIAction()
      }
    }, 5)
  }

  boardClickHandler(e) {
    const { 
      locationX, 
      locationY 
    } = e.nativeEvent
    const { 
      userInputs, 
      AIInputs, 
      result } = this.state
    if (result !== -1) {
      return
    }
    const inputs = userInputs.concat(AIInputs)

    const area = AREAS.find(d =>
      (locationX >= d.startX && locationX <= d.endX) &&
      (locationY >= d.startY && locationY <= d.endY))

      if (area && inputs.every(d => d !== area.id)) {
        this.setState({ userInputs: userInputs.concat(area.id) })
        setTimeout(() => {
          this.judgeWinner()
          this.AIAction()
        }, 5)
      }
  }

  AIAction() {
    const { 
      userInputs, 
      AIInputs, 
      result } = this.state
    if (result !== -1) {
      return
    }
    while(true) {
      const inputs = userInputs.concat(AIInputs)

      const randomNumber = Math.round(Math.random() * 8.3)
      if (inputs.every(d => d !== randomNumber)) {
        this.setState({ AIInputs: AIInputs.concat(randomNumber) })
        this.judgeWinner()
        break
      }
    }
  }

  componentDidMount() {
    this.restart()
  }

  isWinner(inputs) {
    return CONDITIONS.some(d => d.every(item => inputs.indexOf(item) !== -1))
  }

  judgeWinner() {
    const { 
      userInputs, 
      AIInputs, 
      result 
    } = this.state
    const inputs = userInputs.concat(AIInputs)

    if (inputs.length >= 5 ) {
      let res = this.isWinner(userInputs)
      if (res && result !== GAME_RESULT_USER) {
        return this.setState({ result: GAME_RESULT_USER })
      }
      res = this.isWinner(AIInputs)
      if (res && result !== GAME_RESULT_AI) {
        return this.setState({ result: GAME_RESULT_AI })
      }
    }

    if (inputs.length === 9 &&
        result === GAME_RESULT_NO && result !== GAME_RESULT_TIE) {
      this.setState({ result: GAME_RESULT_TIE })
    }
  }

  render() {
    const { userInputs, AIInputs, result } = this.state
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={e => this.boardClickHandler(e)}>
          <View style={styles.board}>
            <View
              style={styles.line}
            />
            <View
              style={[styles.line, {
                width: 3,
                height: 306,
                transform: [
                  {translateX: 200}
                ]
              }]}
            />
            <View
              style={[styles.line, {
                width: 306,
                height: 3,
                transform: [
                  {translateY: 100}
                ]
              }]}
            />
            <View
              style={[styles.line, {
                width: 306,
                height: 3,
                transform: [
                  {translateY: 200}
                ]
              }]}
            />
            {
              userInputs.map((d, i) => (
                <Circle
                  key={i}
                  xTranslate={CENTER_POINTS[d].x}
                  yTranslate={CENTER_POINTS[d].y}
                  color='white'
                />
              ))
            }
            {
              AIInputs.map((d, i) => (
                <Cross
                  key={i}
                  xTranslate={CENTER_POINTS[d].x}
                  yTranslate={CENTER_POINTS[d].y}
                />
              ))
            }
          </View>
        </TouchableWithoutFeedback>
        <PromptArea result={result} onRestart={() => this.restart()} />
      </View>
    )
  }
}