import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    cell: {
      backgroundColor: 'lightgrey',
      padding: 10,
      width: 111,
      height: 160,
      alignSelf: 'center',
      margin: 7,
      borderRadius: 2,
    },
    mainView: {
      flex: 1,
      paddingTop: 80,
      alignItems: 'center',
      backgroundColor: 'cyan'
    },
    grid: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    gridView:{
      backgroundColor: 'black',
      height: 520
    },
    turn: {
      fontSize: 20,
      textAlign:'center',
      paddingBottom: 20,
    }
});