import { API_URL } from '../Utils/Config';
import { useState, useEffect } from 'react';

const useBreweriesState = () => {
  const [allBreweries, setallBreweries] = useState([]);
  // return all breweries from API
  async function getBreweries() {
    const info = await fetch(API_URL);
    const json = await info.json();
    setTimeout(() => setallBreweries(json), 2000);
  }

  useEffect(() => {
    getBreweries();
  }, []);

  return allBreweries;
};

export default useBreweriesState;
