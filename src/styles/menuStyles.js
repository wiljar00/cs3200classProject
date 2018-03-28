import { StyleSheet } from 'react-native';

//Created these styles to differentiate from the original stylesheet
//I didn't want them getting mixed up.
export default StyleSheet.create({
    menuButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        borderWidth: 5,
        borderColor: 'navy',
        margin: 10,
        padding: 10
      },
      menuButtonText: {
        fontSize: 30,
        width: 300,
        textAlign:'center',
        justifyContent: 'center',
        color: 'navy'
      },
      menuTitle: {
        fontSize: 50,
        borderRadius: 20,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        marginTop: 40,
        color: 'white',
        backgroundColor: 'navy',
      },
      menuTitleBlock:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 300
      },
      menuView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'cornflowerblue',
        alignItems: 'center'
      }
});
    