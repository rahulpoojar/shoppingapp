import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
  return (
    <div className="flex justify-between items-center p-3 bg-orange-500 border border-black">
      <div className="flex-shrink-0">
        <img className="w-12" src={LOGO_URL} alt="logo" />
      </div>
      <div>
        <ul className="flex space-x-4 items-center">
          <li className="text-sm font-semibold">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-gray-300">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="text-white hover:text-gray-300">
              Grocery
            </Link>
          </li>
          <button
            className="ml-4 px-4 py-2 bg-green-200 border border-black rounded-md transition hover:bg-red-500 hover:text-white"
            onClick={() =>
              setLoginState((prevState) =>
                prevState === "Login" ? "Logout" : "Login"
              )
            }
          >
            {loginState}
          </button>
          <li className="text-white hover:text-gray-300 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
