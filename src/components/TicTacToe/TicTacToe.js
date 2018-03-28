import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from '../../styles/styles';
import Grid from './Grid';
import cell from './Cell';

export default class TicTacToeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          player1: 'O',
          player2: 'X',
          empty: '',
          board: []
        }
      }
    render() {
        return (
            <View style={styles.mainView}>
                <View>
                    <Text style={styles.turn}>
                        Pick a Square! 
                    </Text>
                </View>
                <View style={styles.gridView}>
                    <Grid>
                    </Grid>
                </View>
            </View>
        );
    }
};
