import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/styles';

export default class Cell extends Component {

    render() {
        return (
            // Create a touchable object and accept passed function
            <TouchableOpacity
                style={styles.cell}
                onPress = {this.props.onPress}
            >
            {/* Output the passed name on each button */}
            <Text
                style={StyleSheet.flatten(styles.buttonText)}>
                {this.props.name}
            </Text>
            </TouchableOpacity>
        );
    }
}