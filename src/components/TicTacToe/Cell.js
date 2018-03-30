import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from '../../styles/styles';

export default class Cell extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.cell}
                onPress = {this.props.onPress}
            >
            <Text>
                cell
            </Text>
            </TouchableOpacity>
        );
    }
}