import React from 'react';
import { ListItem } from "./components/listItem";

export const renderItemHandler = ({item})=> {
    return <ListItem item ={item} />
  }

// var newData=[];
// export const reorderEventHandler = function (arr) {
//     const randomNum = Math.floor(Math.random() * (arr.length - 0));
//     newData.push(arr[randomNum]);
//     delete arr[randomNum];
//     // if(arr===null){
//         //return newData;
//     // }
//     // return setTimeout(reorderEventHandler(arr),300);
//   }