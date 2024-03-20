import aero from "../assets/flights.png";
import forex from "../assets/forex.png";
import car from "../assets/cabs.png";
import bus from "../assets/bus.png";
import holiday from "../assets/holiday.png";
import trains from "../assets/trains.png";
import hotel from "../assets/hotels.png";
import home from "../assets/home.png";
import travel from "../assets/travel.png";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="border border-1  bg-white shadow-lg shadow-gray-300 z-100 flex rounded-xl mx-72 justify-between p-2 px-8 absolute">
      <Link to="/flights">
        <li>
          <img className="scale " src={aero} alt="" />
        </li>
      </Link>
      <Link to="/hotels">
        <li>
          <img className="scale-[1.2] mt-2" src={hotel} alt="" />
        </li>
      </Link>
      <Link to="/home">
        <li>
          <img src={home} alt="" />
        </li>
      </Link>
      <Link to="/holiday">
        <li>
          <img src={holiday} alt="" />
        </li>
      </Link>
      <Link to="#">
        <li>
          <img src={trains} alt="" />
        </li>
      </Link>
      <Link to="#">
        <li>
          <img src={bus} alt="" />
        </li>
      </Link>
      <Link to="#">
        <li>
          <img src={car} alt="" />
        </li>
      </Link>
      <Link to="#">
        <li>
          <img src={forex} alt="" />
        </li>
      </Link>
      <Link to="#">
        <li>
          <img className="mb-1" src={travel} alt="" />
        </li>
      </Link>
    </nav>
  );
};

export default Navbar;
