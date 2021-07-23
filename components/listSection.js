import React, {useState, useEffect} from 'react';
import { 
  SafeAreaView, 
  FlatList,
  Pressable,
  Text
} from 'react-native';
import { FetchData } from '../fetchData';
import { styles } from '../styles';
import { renderItemHandler } from '../functions'

export const PhotoSection = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
      FetchData(setData)
  },[]);

  const onPress =()=>{
    updateData();
  }

  const updateData =()=>{
    alert('clicked me');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data = {data}
        horizontal
        renderItem = {renderItemHandler}
        keyExtractor = {(item) => item.id.toString()}
      />
      <Pressable style={styles.button} onPress={ onPress }>
        <Text>CLICK ME</Text>
      </Pressable>
        {/* // onPress={reorderEventHandler({data})} */}
    </SafeAreaView>
  );
}
