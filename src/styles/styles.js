import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
      flex: 1,
      alignSelf: 'stretch',
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