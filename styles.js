import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text:{
      width: 200,
      color:'white',
      // have the “title” text written diagonally across the photo
      transform:[
        {rotate:'-30deg'},
        {translateY: 300},
        {translateX: 0},
      ]
    },
    
    // have a drop shadow
    shadow:{
      shadowOffset:{
        height:3,
        width:1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 1,
    },
  
    image: {
      width: 360,
      height: 360,
      margin: 10,
      overflow:'hidden',
      // have rounded corners
      borderRadius:50,
      borderColor:'silver',
      // have a border
      borderWidth:2,
    },

    button:{
      height:80,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'orange'
    }
  });