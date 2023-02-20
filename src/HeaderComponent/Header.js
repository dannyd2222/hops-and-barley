import { Link } from 'react-router-dom';
import { setBackgroundColor, setFontColor, setIcon } from '../Utils/modeSetters';
import Logo from '/public/images/hb_logo.png'

const Header = ({ modeColor, onChange }) => {
  const handleChange = () => onChange(modeColor);

  return (
    <div
      className={`text-sm p-2 ${setFontColor(modeColor)} ${setBackgroundColor(modeColor)}`}
    >
      <div
        className={"flex responsive"}
      >
        <Link
          to="/"
          className="my-auto"
        >
          <img src={Logo} alt="App logo" className="ml-2 h-[20px] md:h-[40px] lg:h-[40px]"/>
        </Link>
        <Link
          to="/"
          className={`self-center min-w-max text-lg font-bold ml-4 mr-auto
            md:mx-auto lg:mx-auto`}
        >
          <h1>HOPS & BARLEY</h1>
        </Link>
        <div className="flex py-4 mr-4 hover:cursor-pointer" onClick={handleChange}>
          <span className="mr-1">
            <i className={`fa-solid fa-${setIcon(modeColor)}`}></i>
          </span>
          <p className="font-bold hidden md:block lg:block">
            {modeColor === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
