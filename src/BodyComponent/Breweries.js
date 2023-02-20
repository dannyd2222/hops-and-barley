import { useEffect, useState } from 'react';
import { useRef } from 'react';
import useBreweriesState from '../Hooks/useShowAllBreweries';
import Brewery from './Brewery';
import useFilterBreweries from '../Hooks/useFilterBreweries';
import useFilterCity from '../Hooks/useFilterCity';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { setBackgroundColor, setBreweriesBackgroundColor } from '../Utils/modeSetters.js';
import Shimmer from '../Utils/Shimmer';
import BrandImg from '/public/images/hb_brand.png'

const Breweries = ({ modeColor }) => {
  const allBreweries = useBreweriesState();

  const [filteredBreweries, setfilteredBreweries] = useState([]);

  const [searchBrewery, setsearchBrewery] = useState('');
  // value 'Filter By City' is equal to 'no filter'
  const [city, setCity] = useState('Filter By City');

  const inputRef = useRef(null);

  useEffect(() => {
    setfilteredBreweries(allBreweries);
  }, [allBreweries]);

  useEffect(() => {
    setfilteredBreweries(useFilterBreweries(searchBrewery, allBreweries, city));
  }, [searchBrewery]);

  useEffect(() => {
    setfilteredBreweries(useFilterCity(city, allBreweries, searchBrewery));
  }, [city]);
  // handle search box typing
  function handleSearchBrewery(evt) {
    setsearchBrewery(evt.target.value);
  }
  // handle filter change
  function handleCityFilter(evt) {
    setCity(evt.target.value);
  }
  // handle click on show/hide filters icon
  function handleShowFilter(evt) {
    // offsetHeight === 0 means hidden filters
    if (inputRef.current.offsetHeight === 0) {
      inputRef.current.style.height = "50px";
      inputRef.current.style.opacity = 1;
      evt.target.innerText = "Hide filters";
    }
    else {
      inputRef.current.style.height = "0";
      inputRef.current.style.opacity = 0;
      evt.target.innerText = "Show filters";
    }
  }
  // set city filter dropdown values
  function setCityFilter() {
      // select distinct cities of allBreweries
      const allCities = [...new Set(allBreweries.map(eachBrewery => eachBrewery.city))];
      // set each option element value
      for (var i = 0; i < allCities.length; i++) {
        let filterNode = document.createElement("option");
        filterNode.innerText = allCities[i];
        inputRef.current.firstChild.appendChild(filterNode);
      }
  }

  return (
    <div className={`${setBreweriesBackgroundColor(modeColor)}`}>
      <section
        className={"grid responsive overflow-hidden bg-no-repeat bg-top bg-cover items-center "}
        style={{ height: '30vh', backgroundImage: "url('https://thebrewingnetwork.com/wp-content/uploads/2019/01/hopsandbeerglasses-e1548380312538.jpeg')" }}
      >
        <div className={"container mx-auto"}>
          <img src={BrandImg} alt="App cover" className="relative ml-4 w-1/2 md:w-1/3 lg:w-1/4" style={{ backgroundColor: 'rgb(0 0 0 / 10%)',boxShadow: '0 0 8px 10px rgb(0 0 0 / 10%)' }}/>
        </div>
      </section>
      <div
        className={`flex responsive justify-center items-center py-8 flex-col`}
      >
        <div
          className={`inline-flex justify-center items-center w-full`}
        >
          <div
            className={`${setBackgroundColor(modeColor)} rounded-md m-3 w-5/6 md:w-1/2 lg:w-1/3`}
            style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
          >
            <i
              className="fa-solid fa-magnifying-glass text-gray-500 absolute pl-4 pt-4"
            ></i>
            <input
              type="text"
              value={searchBrewery}
              placeholder="search for any brewery..."
              onChange={handleSearchBrewery}
              className={`${setBackgroundColor(modeColor)}
              text-gray-500 placeholder:font-semibold placeholder:text-xs
              placeholder:pl-1 pl-11 pr-3 py-3 w-full rounded-md outline-none`}
            />
          </div>
          <div
            className={`inline-flex items-center text-gray-500 hover:cursor-pointer`}
            onClick={handleShowFilter}
          >
            <i
              className="fa-solid fa-filter pl-2"
            ></i>
            <p className="w-28 pl-2">Show filters</p>
          </div>
        </div>
        <div
          ref={inputRef}
          className={`inline-flex items-center overflow-hidden h-0 opacity-0 transition-all duration-300`}
        >
          <select
            name="City"
            id="City"
            className={`${setBackgroundColor(modeColor)}
            w-28 lg:mt-3 text-gray-500 text-[12px] rounded-sm py-3 pl-2 outline-none m-3 mt-1`}
            onChange={handleCityFilter}
            style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
          >
            <option value="Filter By City">Filter By City</option>
          </select>
        </div>
      </div>
      {allBreweries.length === 0 ? (
        <Shimmer modeColor={modeColor} />
      ) : (
        <div
          className={`flex justify-center flex-wrap items-center
          lg:max-w-[1300px] lg:m-auto xl:max-w-[1400px] xl:m-auto 2xl:max-w-[1536px] 2xl:m-auto`}
          loaded={inputRef.current.firstChild.length == 1 ? setCityFilter() : undefined}
        >
          {filteredBreweries.map(eachBrewery => (
            <Link to={`/brewery/${eachBrewery.id}`} key={uuidv4()}>
              <Brewery
                id={eachBrewery.id}
                name={eachBrewery.name}
                breweryType={eachBrewery.brewery_type}
                websiteUrl={eachBrewery.website_url}
                city={eachBrewery.city !== undefined ? eachBrewery.city : 'No City'}
                state={eachBrewery.state !== undefined ? eachBrewery.state : 'No Capital'}
                country={eachBrewery.country !== undefined ? eachBrewery.country : 'No Country'}
                modeColor={modeColor}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Breweries;
