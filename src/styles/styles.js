import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
      flex: 1,
      alignSelf: 'stretch',
    },
    button: {
      backgroundColor: 'lightgrey',
      borderRadius: 5,
      padding: 10,
      width: 60,
      height: 60,
      alignSelf: 'center',
      margin: 7,
      borderColor: 'black',
    },
    buttonText: {
      fontSize: 12,
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      color: 'rgb(0,0,139)'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      },
    title: {
      fontSize: 35,
      fontFamily: 'arial',
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 10,
      marginTop:40,
      color: 'blue'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});