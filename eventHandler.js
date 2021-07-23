export const reorderEventHandler = function (arr) {
    var newData=[];
    const randomNum = Math.floor(Math.random() * (arr.length - 0));
    newData.push(arr[randomNum]);
    delete arr[randomNum];
    // if(arr===null){
        //return newData;
    // }
    // return setTimeout(reorderEventHandler(arr),300);
  }