import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useShowBrewery from '../Hooks/useShowBrewery';
import { useEffect, useState } from 'react';
import PlaceholderImg from '/public/images/brewery_placeholder.png'

const Showbrewery = ({ modeColor }) => {
  const { id } = useParams();

  const singleBrewery = useShowBrewery(id);

  const [dataSet, setData] = useState([]);

  useEffect(() => {
    if (singleBrewery && singleBrewery.id === id) {
      setData(singleBrewery);
    }
  }, [id, singleBrewery]);

  // handle the sharing button click
  function handleSharing(evt) {
    // copy to clipboard
    navigator.clipboard.writeText(document.location.href);
    // fade-in and fade-out animation for "copied to clipboard" message
    let alertElem = evt.target.parentElement.parentElement.firstChild;
    alertElem.style.opacity = 0.5;
    setTimeout(() => {
      alertElem.style.removeProperty("opacity");
    }, "2000")
  }

  return dataSet.length === 0 ? (
    <div
      className={`inline-flex justify-center text-center text-2xl pt-4 min-w-full min-h-screen
      ${
        modeColor === 'Dark Mode'
          ? 'bg-slate-800 text-white'
          : 'bg-[#FAFAFA] text-black'
      }`}
      >
      <svg className="animate-spin mr-4 mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Getting The Brewery Data....
    </div>
  ) : (
    <div
      className={
        modeColor === 'Dark Mode'
          ? 'bg-slate-800 text-white min-h-screen'
          : 'bg-[#FAFAFA] text-black min-h-screen'
      }
    >
      <div
        className={'responsive shadow-lg'}
      >
        <div
          className={'flex justify-between'}
        >
          <Link
            to="/"
          >
            <div
              className={`${
                modeColor === 'Dark Mode' ? 'bg-slate-600' : 'bg-white'
              } min-w-max inline-block py-2 px-8 m-8 rounded-md
              opacity-90 scale-95 hover:opacity-[100] hover:scale-100 duration-200`}
              style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
            >
              <i className="fa-solid fa-arrow-left mr-1"></i>
              <span>Back</span>
            </div>
          </Link>
          <div className="flex items-center">
            <div className={`${modeColor === 'Dark Mode' ? 'bg-slate-700' : 'bg-slate-200'}
              rounded alert-border text-center text-sm md:text-md
              opacity-0 transition-opacity duration-1500 ease-out`}>
              <h1 className="p-2">Brewery link copied to clipboard.</h1>
            </div>
            <div
              className={`${modeColor === 'Dark Mode' ? 'bg-slate-600' : 'bg-white'}
              m-8 rounded-md opacity-90 scale-95 hover:opacity-[100] hover:scale-100 duration-200`}
              style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
            >
              <i
                className="fa-solid fa-share-nodes text-2xl p-2"
                onClick={handleSharing}></i>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-2 md:flex-row md:items-start">
          <div className="flex flex-col pr-2 scale-90 sm:scale-[100%] md:flex-1 md:w-0 xl:flex-row xl:flex-[2] xl:w-0">
            <div className="xl:w-[38rem] xl:mr-4">
              <img src={dataSet.website_url !== null
                ? "https://logo.clearbit.com/" + dataSet.website_url.replace(/http:\/\/[www\.]*/gm, "") + "?size=600"
                : PlaceholderImg}
                alt={dataSet.name}
                className="w-3/4 max-h-[30rem] mx-auto pb-12 object-contain"
              />
            </div>
            <div className="mb-3">
              <p className="font-bold py-[2px] text-xl mt-2">{dataSet.name || 'No Name'}</p>
              <div className="mt-3">
                <p className={`py-[2px]
                  ${dataSet.brewery_type ? '' : 'hidden'}`}
                  >
                  <span className="font-medium">Brewery type : </span>
                  {dataSet.brewery_type}
                </p>
                <p className="py-1">
                  <span className="font-medium">Brewery address : </span>
                  {dataSet.street ? dataSet.street + ', ' : ''}{dataSet.city + ', ' + dataSet.state + ', ' + dataSet.brewery}
                </p>
                <p className={`py-1
                  ${dataSet.phone ? '' : 'hidden'}`}
                  >
                  <span className="font-medium">Brewery phone number : </span>
                  {dataSet.phone}
                </p>
                <p className={`py-1
                  ${dataSet.website_url ? '' : 'hidden'}`}
                  >
                  <span className="font-medium">Brewery website url : </span>
                  {dataSet.website_url}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showbrewery;
