import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Cell from './Cell';
import styles from '../../styles/styles';

export default class Grid extends Component {
    constructor(props) {
        super(props);
    }

    createWithLoop() {
        let grid = [];
        for(let i = 0; i < 9; i++){
            grid.push(
                <Cell 
                    key={i}
                />
            );
        }
        return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {grid}
        </View>);
    }

    render(){
        return (
            <View style={styles.grid}>
                {this.createWithLoop()}
            </View>     
        );
    }
}