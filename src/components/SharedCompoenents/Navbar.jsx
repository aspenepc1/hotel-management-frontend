import {
  faBars,
  faCaretDown,
  faClose,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
const userOptions = [
  { id: 1, name: "Profile", disabled: true },
  { id: 2, name: "Settings", disabled: true },
  { id: 3, name: "Logout", disabled: false },
];

function Navbar() {
  const [hideMenu, setHideMenu] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const userDetail = useSelector((state) => state.user.userDetails) || null;

  const handleUserOptionSelect = (option) => {
    if (option === "Logout") {
      localStorage.clear();
      toast.success("You are Logged out!");
      navigate("/signIn");
    }
    setUserDropdownOpen(false);
  };

  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <h2 className="text-2xl font-bold text-[#001f53]">
          ASPEN GRAND HOTEL, Houston
        </h2>

        <button
          onClick={() => setHideMenu(!hideMenu)}
          className="lg:hidden focus:outline-none text-2xl"
        >
          <FontAwesomeIcon icon={hideMenu ? faBars : faClose} />
        </button>

        <nav
          className={`${
            hideMenu ? "hidden" : "block"
          } absolute top-16 left-0 w-full lg:static lg:block lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6 font-bold">
            {/* other links... */}
            <li className="p-2 lg:p-0">
              <Link
                className={`${
                  pathname === "/" ? "text-blue-600" : "text-black"
                } hover:text-blue-600`}
                to="/"
                onClick={() => setHideMenu(true)}
              >
                Home
              </Link>
            </li>
            <li className="p-2 lg:p-0">
              <Link
                className={`${
                  pathname.includes("rooms") ? "text-blue-600" : "text-black"
                } hover:text-blue-600`}
                to="/rooms"
                onClick={() => setHideMenu(true)}
              >
                Rooms
              </Link>
            </li>
            <li className="p-2 lg:p-0">
              <Link
                className={`${
                  pathname === "/amenities" ? "text-blue-600" : "text-black"
                } hover:text-blue-600`}
                to="/amenities"
                onClick={() => setHideMenu(true)}
              >
                Amenities
              </Link>
            </li>
            <li className="p-2 lg:p-0">
              <Link
                className={`${
                  pathname === "/gallery" ? "text-blue-600" : "text-black"
                } hover:text-blue-600`}
                to="/gallery"
                onClick={() => setHideMenu(true)}
              >
                Gallery
              </Link>
            </li>
            {/* User Dropdown or Login */}
            <li className="relative p-2 lg:p-0">
              {userDetail ? (
                <>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center text-black hover:text-blue-600 focus:outline-none"
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    {userDetail?.name}
                    <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                  </button>
                  {userDropdownOpen && (
                    <ul className="absolute mt-2 bg-white shadow-lg border rounded-md py-2 right-0 w-48">
                      {userOptions?.map((option) => (
                        <li
                          key={option.id}
                          className={`px-4 py-2 ${
                            option.disabled
                              ? "text-gray-400 cursor-not-allowed"
                              : "hover:bg-gray-100 cursor-pointer"
                          }`}
                          onClick={() =>
                            !option.disabled &&
                            handleUserOptionSelect(option.name)
                          }
                        >
                          {option.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <button
                  onClick={() => navigate("/signIn")}
                  className="text-black hover:text-blue-600"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
