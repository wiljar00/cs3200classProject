import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    board: {
      width: 312,
      height: 312,
      borderWidth: 3,
      borderColor: '#000',
      marginTop: 50
    },
    cell: {
      backgroundColor: 'lightgrey',
      padding: 10,
      width: 111,
      height: 160,
      alignSelf: 'center',
      margin: 7,
      borderRadius: 2,
    },
    circle: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    innerCircle: {
      backgroundColor: 'cornflowerblue',
      width: 70,
      height: 70,
      borderRadius: 35,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    crossContainer: {
      position: 'absolute',
      width: 80,
      height: 80,
    },
    crossLine: {
      position: 'absolute',
      width: 8,
      height: 105,
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
    headerContainer: {
      marginTop: 20,
      backgroundColor: 'navy',
      flexDirection: 'row',
    },
    headerTitle: {
      color: 'white',
      fontWeight: 'bold',
      flex: 1,
      fontSize: 23,
      textAlign: 'center',
      margin: 10,
    },
    line: {
      position: 'absolute',
      width: 3,
      height: 306,
      backgroundColor: '#000',
      transform: [
        {translateX: 100}
      ]
    },
    mainView: {
      flex: 1,
      paddingTop: 80,
      alignItems: 'center',
      backgroundColor: 'cornflowerblue'
    },
    promptText: {
      fontSize: 35,
      marginTop: 50,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    promptInstructions: {
      textAlign: 'center',
      fontSize: 25,
      marginTop: 20,
      color: 'grey',
      marginBottom: 5,
      fontWeight: 'bold',
    },
    turn: {
      fontSize: 20,
      textAlign:'center',
      paddingBottom: 20,
    },
    TicTacToeContainer: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'cornflowerblue',
  },
    TicTacToeTitle: {
        fontSize: 30,
        marginTop: 50,
        marginBottom: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    TicTacToeInstructions: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 20,
        color: 'grey',
        marginBottom: 5,
        fontWeight: 'bold',
    },
});