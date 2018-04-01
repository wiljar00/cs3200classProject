import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SnakeCell from './SnakeCell';

class Coordinate{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  getX(){
    return x;
  }

  getY(){
    return y;
  }
}

export default class SnakeScreen extends Component {
  constructor(props){
    super(props);
    var snake = [];
    var head = new Coordinate(0,0);
    var tail = new Coordinate(0,1);
    snake.push(head, tail);
  }
    render() {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {this.SnakeGrid()}
        </View>
      );
    }

    SnakeColumns(x){
      let columns = [];
      for(let i = 0; i < 13; i++){
        if(this.check(x, i)){
          
        }
        columns.push(<SnakeCell type={false} key={i}/>)
      }
      return columns;
    }

    SnakeGrid(){
      let rows = [];
      for(let i = 0; i < 13; i++){
        rows.push(<View style={{flexDirection: 'row'}} key={i}>{this.SnakeColumns(i)}</View>);
      }
      return rows;
    }

    check(x, y){
      bool
      foreach(item in snake){
        
      }
    }
  };