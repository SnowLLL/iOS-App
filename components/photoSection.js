import React, {useState, useEffect} from 'react';
import { 
  SafeAreaView, 
  FlatList,
} from 'react-native';
import { FetchData } from '../fetchData';
import { styles } from '../styles';
import { renderItemHandler } from '../functions'

export const PhotoSection = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
      FetchData(setData)
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data = {data}
        horizontal
        renderItem = {renderItemHandler}
        keyExtractor = {(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
