import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MenuButton from './MenuButton';

import menuStyles from '../../styles/menuStyles';
import { StackNavigator } from 'react-navigation';


export default class MenuScreen extends Component {
    render() {
      return (
        <View style={menuStyles.menuView}>
            <View style={menuStyles.menuTitleBlock}>
                <Text style={menuStyles.menuTitle}>Team Triple T Games App</Text>
            </View>
            <View>
                <MenuButton buttonText="Tic Tac Toe"/>
                <MenuButton buttonText="Snake"
                    navfunc={()=>this.props.navigation.navigate('Snake')}
                    />
                <MenuButton buttonText="Hangman"/>
            </View>
        </View>
      );
    }
  };
