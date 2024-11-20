import { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons from FontAwesome
import {
  faLocationDot,
  faUser,
  faPhone,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="bg-bl flex justify-between items-center px-5">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-32 h-16" />
      </div>

      <div>
        {/* Hamburger icon for mobile screens */}
        <div
          className="block md:hidden cursor-pointer text-2xl"
          onClick={handleClick}>
          &#9776;
        </div>

        {/* Navigation menu */}
        <nav
          className={`${
            display ? "block" : "hidden"
          } md:block absolute md:static w-fit right-0`}>
          <ul className="flex flex-col md:flex-row gap-8 p-4 md:p-0 bg-teal-500 md:bg-inherit">
            <li className="w-10 h-10 p-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-full h-full text-blue-500 "
              />
            </li>
            <li className="w-10 h-10 p-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faUser}
                className="w-full h-full text-blue-500 "
              />
            </li>
            <li className="w-10 h-10 p-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-full h-full text-blue-500 "
              />
            </li>
            <li className="w-10 h-10 p-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="w-full h-full text-blue-500 "
              />
            </li>
            <li className="w-10 h-10 p-2 cursor-pointer hidden md:block">
              <FontAwesomeIcon
                icon={faBars}
                className="w-full h-full text-blue-500 "
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
