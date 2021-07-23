import React, {useState, useEffect} from 'react';
import { 
  SafeAreaView, 
  FlatList,
  Button
} from 'react-native';
import { URL } from './constants'
import { styles } from './styles';
import { ListItem } from './components'
import { reorderEventHandler } from './eventHandler'

export default function App() {
  const [data, setData] = useState([])
  fetch(URL,{
            'Content-Type':'application/json'
        })
        .then(res=>res.json())
        .then(resJson=>{
          return setData(resJson)
        }).catch(error=>{
            console.log(error)
        })

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data = {data}
        horizontal
        renderItem = {({item})=>{
          return <ListItem item ={item} />
        }}
        keyExtractor = {(item) => item.id.toString()}
      />
      <Button 
        title='CLICK ME'
        color='black'
        onPress={reorderEventHandler({data})}
      />
    </SafeAreaView>
  );
}
