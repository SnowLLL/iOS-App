import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text:{
      width: 250,
      transform:[
        {rotate:'-30deg'},
        {translateY: 180},
        {translateX: -20},
      ]
    },
  
    shadow:{
      shadowOpacity: 0.33,
      shadowRadius: 3,
      elevation: 3,
    },
  
    image: {
      width: 360,
      height: 360,
      margin: 10,
      overflow:'hidden',
      borderRadius:80,
      borderColor:'silver',
      borderWidth:1,
    }
  });