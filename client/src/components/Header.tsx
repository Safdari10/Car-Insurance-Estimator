import { useState } from "react";

const Header = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="bg-teal-500 flex justify-between items-center px-5">
      <div className="flex items-center gap-2">
        <img src="" alt="logo" className="w-10 h-10" />
        <h1 className="text-white text-xl font-bold">Turners Car Insurance</h1>
      </div>

      <div>
        {/* Hamburger icon for mobile screens */}
        <div
          className="block md:hidden cursor-pointer text-white text-2xl"
          onClick={handleClick}
        >
          &#9776;
        </div>

        {/* Navigation menu */}
        <nav
          className={`${
            display ? "block" : "hidden"
          } md:block absolute md:static w-fit right-0`}
        >
          <ul className="flex flex-col md:flex-row text-white gap-4 p-4 md:p-0 bg-teal-500 md:bg-inherit">
            <li className="p-2">
              <a href="#">Home</a>
            </li>
            <li className="p-2">
              <a href="#">About</a>
            </li>
            <li className="p-2">
              <a href="#">Services</a>
            </li>
            <li className="p-2">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
