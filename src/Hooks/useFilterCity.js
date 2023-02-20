function useFilterCity(city, allBreweries, searchBrewery) {
  let data;
  data =
    city === 'Filter By City' // equal to 'no filter'
      ? allBreweries
      : allBreweries.filter(eachBrewery => eachBrewery.city === city);

  // There is something in the search input
  if (searchBrewery.length !== 0) {
    data = data.filter(eachBrewery =>
      eachBrewery.name.toLowerCase().includes(searchBrewery.toLowerCase())
    );
  }

  return data;
}

export default useFilterCity;
