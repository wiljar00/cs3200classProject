import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SnakeCell extends Component {
  constructor(props){
    super(props);
  }
  render() {
    if(this.props.type == 0){
      return (
        <View style={{width: 30, height: 30, backgroundColor: 'black'}}>
            
        </View>
      );
    }
    else if(this.props.type == 1){
      return(
        <View style={{width: 30, height: 30, backgroundColor: 'white'}}>
        
        </View>
      )
    }
    else{
      return(
        <View style={{width: 30, height: 30, backgroundColor: 'red'}}>
        
        </View>
      )
    }
  }
};