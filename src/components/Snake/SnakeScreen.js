import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  Timers,
  View
} from 'react-native';

import SnakeCell from './SnakeCell';
import DirectionButton from './DirectionButton';

class Coordinate{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }

  setX(x){
    this.x = x;
  }

  setY(y){
    this.y = y;
  }
}

export default class SnakeScreen extends Component {
  constructor(props){
    super(props);

    this.snake = [];
    var head = new Coordinate(0,0);
    var tail = new Coordinate(0,1);
    this.snake.push(head);
    this.snake.push(tail);

    this.direction = 2;

    this.grid = [];
    for(let i = 0; i < 13; i++){
      var column = [];
      for(let j = 0; j < 13; j++){
        column.push(0);
      }
      this.grid.push(column);
    }
    
    for(let i = 0; i < this.snake.length; i++){
      let item = this.snake[i];
      this.grid[item.getX()][item.getY()] = 1;
    }
    this.intervalId = -1;
    this.food = new Coordinate(Math.floor(Math.random() * 12), Math.floor(Math.random() * 12));
    this.forward = new Coordinate(0, 2);
  }

    ResetFood(){
      this.food = new Coordinate(Math.floor(Math.random() * 12), Math.floor(Math.random() * 12));
    }

    UpdateGrid(){
      let snek = this.snake;
      let forward = this.forward;
      let food = this.food;
      if(forward.getX() == -1 || forward.getX() == 13 || forward.getY() == -1 || forward.getY() == 13){
        this.GameLose();
      }
      else{
        if(this.grid[forward.getX()][forward.getY()] == 1){
          this.GameLose();
        }
        if(this.grid[forward.getX()][forward.getY()] == 2){
          this.AddSegment();
          this.ResetFood();
        }
      }
      for(let i = 0; i < 13; i++){
        for(let j = 0; j < 13; j++){
          this.grid[i][j] = 0;
        }
      }
      for(let i = 0; i < snek.length; i++){
        let item = snek[i];
        if(item.getX() == -1 || item.getX() == 13 || item.getY() == -1 || item.getY() == 13){
          this.GameLose();
        }
        else{
          this.grid[item.getX()][item.getY()] = 1;
        }
      }
      this.grid[food.getX()][food.getY()] = 2;
    }

    componentDidMount(){
      this.intervalId = setInterval(()=>{
        this.MoveSnake();
        this.forceUpdate();
      }, 200);
    }

    render() {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {this.SnakeGrid()}
            <DirectionButton changeDir={()=>this.ChangeDirection(1)} dir={1}/>
            <View style={{flexDirection: 'row'}}>
              <DirectionButton changeDir={()=>this.ChangeDirection(4)} dir={4}/>
              <DirectionButton changeDir={()=>this.ChangeDirection(2)} dir={2}/>
            </View>
            <DirectionButton changeDir={()=>this.ChangeDirection(3)} dir={3}/>
        </View>
      );
    }

    componentWillUnmount(){
      clearInterval(this.intervalId);
    }

    SnakeColumns(x){
      let columns = [];
      for(let i = 0; i < 13; i++){
        if(this.grid[x][i] == 0){
          columns.push(<SnakeCell type={0} key={i}/>);
        }
        else if(this.grid[x][i] == 1){
          columns.push(<SnakeCell type={1} key={i}/>);
        }
        else{
          columns.push(<SnakeCell type={2} key={i}/>);
        }
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

    ChangeDirection(dir){
      this.direction = dir;
      this.GetForward();
    }

    AddSegment(){
      let tail = this.snake[this.snake.length - 1];
      var segment = new Coordinate(tail.getX(), tail.getY());
      this.snake.push(segment);
    }

    MoveSnake(){
      if(this.direction == 1){
        this.MoveUp();
      }
      else if(this.direction == 2){
        this.MoveRight();
      }
      else if(this.direction == 3){
        this.MoveDown();
      }
      else{
        this.MoveLeft();
      }
      this.GetForward();
    }

    GetForward(){
      let snek = this.snake;
      switch(this.direction){
        case 1:
          this.forward.setX(snek[0].getX() - 1);
          this.forward.setY(snek[0].getY());
        break;
        case 2:
          this.forward.setY(snek[0].getY() + 1);
          this.forward.setX(snek[0].getX());
        break;
        case 3:
          this.forward.setX(snek[0].getX() + 1);
          this.forward.setY(snek[0].getY());
        break;
        case 4:
          this.forward.setY(snek[0].getY() - 1);
          this.forward.setX(snek[0].getX());
         // console.warn(this.forward.getY(), this.forward.getX());
        break;
        default:
          console.warn("directional error");
        break;
      }
    }

    MoveUp(){
      let snek = this.snake;
      for(var i = snek.length - 1; i >= 1; i--){
        snek[i].setX(snek[i-1].getX());
        snek[i].setY(snek[i-1].getY());
      }
      snek[0].setX(snek[0].getX() - 1);
      this.UpdateGrid();
    }

    MoveRight(){
      let snek = this.snake;
      for(var i = snek.length - 1; i >= 1; i--){
        snek[i].setX(snek[i-1].getX());
        snek[i].setY(snek[i-1].getY());
      }
      snek[0].setY(snek[0].getY() + 1);
      this.UpdateGrid();
    }

    MoveDown(){
      let snek = this.snake;
      for(var i = snek.length - 1; i >= 1; i--){
        snek[i].setX(snek[i-1].getX());
        snek[i].setY(snek[i-1].getY());
      }
      snek[0].setX(snek[0].getX() + 1);
      this.UpdateGrid();
    }

    MoveLeft(){
      let snek = this.snake;
      for(var i = snek.length - 1; i >= 1; i--){
        snek[i].setX(snek[i-1].getX());
        snek[i].setY(snek[i-1].getY());
      }
      snek[0].setY(snek[0].getY() - 1);
      this.UpdateGrid();
    }

    GameLose(){
      Alert.alert("YOU DIED");
      clearInterval(this.intervalId);
    }
  };