import { API_URL } from '../Utils/Config';
import { useState, useEffect } from 'react';

export const useShowBrewery = breweryId => {
  const [breweryData, setBreweryData] = useState([]);
  // return selected brewery from API quering by ID value
  async function getBreweryData() {
    const data = await fetch(API_URL + "/" + breweryId);
    const json = await data.json();
    setBreweryData(json);
  }

  useEffect(() => {
    getBreweryData();
  }, []);

  return breweryData;
};

export default useShowBrewery;
