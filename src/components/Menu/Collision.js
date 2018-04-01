import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
  Image,
  Alert,
  ImageBackground 
} from 'react-native';

import Enemy from './Enemy';
import MenuScreen from './MenuScreen';
import MenuButton from './MenuButton';


export default class Collision extends Component {
  constructor(props){
    super();
    this.state ={
          movePlayerValue : new Animated.Value(40),
          playerSide: 'left',
          points: 0,
          moveEnemyValue : new Animated.Value(0),
          enemyStartPosX: 0,
          enemySide: 'left',
          enemySpeed: 2000,
          gameOver: false,

    };
  }
  
  componentDidMount =()=>{
       this.animateEnemy();
  }
  
  animateEnemy =()=> {
      this.state.moveEnemyValue.setValue(-100);
      windowH = Dimensions.get('window').height;
      //left
      let r= Math.floor(Math.random() * 2) + 1;
      if(r==2){
        r=40; 
        this.setState({enemySide: 'left'});
      }
      else {
        r=Dimensions.get('window').width - 140; //right
        this.setState({enemySide: 'right'})
      }
      this.setState({enemyStartPosX: r});
      var refresh,
      refresh = setInterval(()=> {
            //collision checking each  50 ms
            if(this.state.moveEnemyValue._value > windowH -240 && this.state.moveEnemyValue._value < windowH - 180 
            && this.state.playerSide == this.state.enemySide ){
              clearInterval(refresh);
              this.setState({gameOver: true});
              this.gameOver();
            }
      },50);

      setInterval(()=> {
        this.setState({enemySpeed: this.state.enemySpeed - 50 })
      }, 10000);
      Animated.timing(
         this.state.moveEnemyValue, {
           toValue: Dimensions.get('window').height,
           duration: this.state.enemySpeed,
         } 
      ).start(event => {
        if(event.finished && this.state.gameOver== false){
          clearInterval(refresh);
          this.setState({points: ++this.state.points});
          this.animateEnemy();
        }

      });
}

gameOver = () => {
  Alert.alert(
    'Game Over',
    'Unfortunately You Lost',
    [
      {text: 'Go to the Main Menu ', onPress: () => this.props.navigation.navigate('Menu') },
    ],
    { cancelable: false }
  );
 
}
  movePlayer=(direction)=>{
    if(direction=='right'){
    this.setState(
      {playerSide: 'right'}
    )
    Animated.spring(
     this.state.movePlayerValue,{
       toValue: Dimensions.get('window').width -140,
       tension: 120, 
     }

     
    ).start()} else if(direction=='left'){
      this.setState(
        {playerSide: 'left'}
      )
      Animated.spring(
        this.state.movePlayerValue,{
          toValue: 40,
          tension: 120, 
        }
   
        
       ).start()

    } 
  }
  
    render() {
      return (
      
      <ImageBackground  source = {require ('./img/old-main22222.jpg') } style={styles.container}>  
    
        <View style= {{flex: 1, alignItems: 'center', marginTop: 180,}} >
        <View style = {styles.points}>
        <Text style= {{ fontSize: 40  }}> {this.state.points} </Text>  
          </View>   
          </View> 
        <Animated.Image source= {require ('./img/utahst_cv1.png')} style= {{
          
          width: 150,
          height: 150,
          position: 'absolute',
          zIndex: 1,
          bottom: 50,
          resizeMode: 'stretch',
          transform: [
            {
              translateX: this.state.movePlayerValue
            }
          ]
           
        }}>
        </Animated.Image> 
<Enemy enemyImg = {require ('./img/Fail-Stamp.png') } enemyStartPosX={this.state.enemyStartPosX} moveEnemyValue= {this.state.moveEnemyValue}
        />
        <View style= {styles.controls}>
        <Text style = {styles.left} onPress={()=> this.movePlayer('left')}>{'<'} </Text> 
          <Text style= {styles.right} onPress={()=> this.movePlayer('right')}>{'>'} </Text>   
          </View> 
  </ImageBackground>    );
    };
  } 
  const styles = StyleSheet.create({
    container: 
    {
      position: 'relative',
      flex: 1
    },
    controls: {
      alignItems: 'center',
      flexDirection: 'row'
    },

    right: {
        flex: 1,
        margin: 0,
        color: '#FFFF00',
        fontSize: 60,
        // fontWeight: 'bold',
        textAlign: 'left',
    },
    left: {
      flex: 1,
      margin: 0,
      color: '#FFFF00',
      fontSize: 60,
      // fontweigth: bold,
      textAlign: 'right',
  },
  points: {
    width: 80,
    height:80,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
     

  }
  })
