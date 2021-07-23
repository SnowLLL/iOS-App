import { URL } from './constants'

export const FetchData = (callback) => {
  const fetchData = async () => {
    const response = await fetch(URL);
    const DATA = await response.json();
    callback(DATA);
  }
  fetchData();
}