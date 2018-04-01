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

    this.state={
      snake: false
    }
  }
  render() {
    if(!this.state.snake){
      return (
        <View style={{width: 30, height: 30, backgroundColor: 'black'}}>
            
        </View>
      );
    }
    else{
      return(
        <View style={{width: 30, height: 30, backgroundColor: 'white'}}>
        
        </View>
      )
    }
  }

  BecomeSnake(){
    this.setState({
      snake: true
    })
  }

  UnbecomeSnake(){
    this.setState({
      snake: false
    })
  }
};