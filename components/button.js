import React from 'react';
import { 
  Pressable,
  Text
} from 'react-native';
import { styles } from '../styles';
import { reorderHandler } from '../functions'

export const Button = () => {

  return (
    <Pressable style={styles.button} onPress={ reorderHandler }>
        <Text>CLICK ME</Text>
    </Pressable>
  );
}
