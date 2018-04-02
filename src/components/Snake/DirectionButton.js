import React, { Component } from 'react';
import {
    Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import menuStyles from '../../styles/menuStyles';
import { StackNavigator } from 'react-navigation';


export default class MenuButton extends Component {
    render() {
        if(this.props.dir == 1){
            return (
                <TouchableOpacity onPress={this.props.changeDir} style={{backgroundColor: 'lightgrey', borderRadius: 15, padding: 10}}>
                    <Image style={{width: 50, height: 50}} source={require("./Images/uparrow.png")}/>
                </TouchableOpacity>
              );
        }
        else if(this.props.dir == 2){
            return (
                <TouchableOpacity onPress={this.props.changeDir} style={{backgroundColor: 'lightgrey', borderRadius: 15, padding: 10, marginLeft: 25}}>
                    <Image style={{width: 50, height: 50}} source={require("./Images/rightarrow.png")}/>
                </TouchableOpacity>
              );
        }
        else if(this.props.dir == 3){
            return (
                <TouchableOpacity onPress={this.props.changeDir} style={{backgroundColor: 'lightgrey', borderRadius: 15, padding: 10}}>
                    <Image style={{width: 50, height: 50}} source={require("./Images/downarrow.png")}/>
                </TouchableOpacity>
              );
        }
        else{
            return (
                <TouchableOpacity onPress={this.props.changeDir} style={{backgroundColor: 'lightgrey', borderRadius: 15, padding: 10, marginRight: 25}}>
                    <Image style={{width: 50, height: 50}} source={require("./Images/leftarrow.png")}/>
                </TouchableOpacity>
              );
        }
    }
  };