import { URL } from './constants'

// fetch /photos JSON data from the http://jsonplaceholder.typicode.com website
export const FetchData = (callback) => {
  const fetchData = async () => {
    const response = await fetch(URL);
    const DATA = await response.json();
    callback(DATA);
  }
  fetchData();
}