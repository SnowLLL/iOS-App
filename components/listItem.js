import React from 'react';
import { styles } from '../styles';
import { 
    Text, 
    ImageBackground,
    View
  } from 'react-native';

export const ListItem = ({item}) =>{
    return (
      <View style={styles.container}>
        <View style={styles.shadow}>
          <ImageBackground 
            style ={styles.image}
            source = {{
              uri: item.url,
              cache: 'force-cache'
            }}
            resizeMode='cover'
          >
            <Text style={styles.text}>{item.title}</Text>
          </ImageBackground>
        </View>
      </View>
    );
  }