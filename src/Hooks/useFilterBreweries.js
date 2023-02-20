function useFilterBreweries(searchBrewery, allBreweries, city) {
  const data = allBreweries.filter(eachBrewery =>
    eachBrewery.name.toLowerCase().includes(searchBrewery.toLowerCase())
  );
  // If no city selected
  if (data.length == 0 || city === 'Filter By City') return data;

  // If the city is not 'Filter By City'
  return data.filter(eachBrewery => eachBrewery.city === city);
}

export default useFilterBreweries;
