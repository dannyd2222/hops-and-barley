import { setBackgroundColor, setFontColor } from '../Utils/modeSetters';
import PlaceholderImg from '/public/images/brewery_placeholder.png'

const Brewery = props => {
  return (
    <div
      id={props.id}
      className={`my-8 mx-4 h-[315px] w-64 lg:w-60 opacity-80 scale-90 hover:opacity-[100] hover:scale-100 hover:shadow-lg duration-200 ${setBackgroundColor(
        props.modeColor
      )} ${setFontColor(props.modeColor)} `}
    >
      <div className="h-[188px] mb-2 pt-2">
        <img
          src={props.websiteUrl !== null ? "https://logo.clearbit.com/" + props.websiteUrl.replace(/http:\/\/[www\.]*/gm, "") + "?size=400" : PlaceholderImg}
          alt={props.name}
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
      <p className="font-black text-base text-center h-[45px] px-2">{props.name}</p>
      <div className="p-2 text-sm">
        <p className="p-[.75px]">
          <span className="font-semibold">Brewery type : </span>
          {props.breweryType}
        </p>
        <p className="p-[.75px]">
          <span className="font-semibold">Location : </span>
          {props.city + ', ' + props.state + ', ' + props.brewery}
        </p>
      </div>
    </div>
  );
};

export default Brewery;
