import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useContext } from "react";
import { GoLocation } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { AuthContext } from "../../Auth/Context/UserContext";

const Navbar = () => {
  const [theme, setTheme] = useState("Color Theme");
   const { user, logOut } = useContext(AuthContext);
  useEffect(() => {}, [setTheme]);
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
        //remove jwt from localstorage
        localStorage.removeItem("token");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Homepage</NavLink>
              </li>
              <li>
                <NavLink to="/meal">Meal Track</NavLink>
              </li>
              <li>
                <NavLink to="/bazar">Bazar Date</NavLink>
              </li>
              <li>
                <NavLink to="">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a
            target="_blank"
            href="https://maps.app.goo.gl/rgG9gV6fQRn3SFT46"
            className="btn btn-ghost flex justify-between items-center w-52 normal-case text-xl"
          >
            <GoLocation className="text-bold"></GoLocation> আমিন ছাত্রাবাস
          </a>
        </div>
        <div className="navbar-end">
          {/* theme start  */}
          <ul class="menu menu-horizontal   p-0">
            <label
              // data-act-class="ACTIVECLASS"
              // data-toggle-theme="dark,light"
              className="swap swap-rotate w-12  visible lg:hidden   p-5   z-50 cursor-pointer   btn-sm btn btn-ghost btn-circle"
              // data-choose-theme
            >
              <input type="checkbox" />

              <svg
                className="swap-on fill-current w-10 h-10 p-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                //   data-toggle-theme="light"
                //   data-act-class="ACTIVECLASS"
                data-set-theme="light"
                data-act-class="ACTIVECLASS"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
              <svg
                className="swap-off fill-current w-10 h-10 p-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                //   data-toggle-theme="dark"
                //   data-act-class="ACTIVECLASS"
                data-set-theme="dark"
                data-act-class="ACTIVECLASS"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </label>

            <li
              className="w-44 hidden lg:flex absolute right-40 top-2 z-20"
              data-choose-theme
              tabindex="0"
            >
              <NavLink className="w-full flex justify-between">
                <Link
                //   data-set-theme=""
                //   setTheme=" System Default"
                //   data-act-class="ACTIVECLASS"
                //   onClick={() => setTheme("System Default")}
                //   className="hover:  hover:text-base-100 "
                >
                  {theme}
                </Link>
                <svg
                  className="fill-current bg-base-300 lg:rounded-full  lg:w-6 lg:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul data-choose-theme className="w-full   p-2 bg-base-200">
                <li>
                  <Link
                    data-set-theme=""
                    onClick={() => setTheme("System Default")}
                    data-act-class="ACTIVECLASS"
                  >
                    System Default
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="dark"
                    onClick={() => setTheme("Dark")}
                    //onClick swapTheme class swap-off
                    data-act-class="ACTIVECLASS"
                  >
                    Dark
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="light"
                    onClick={() => setTheme("Light")}
                    data-act-class="ACTIVECLASS"
                  >
                    Light
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="retro"
                    onClick={() => setTheme("Retro")}
                    data-act-class="ACTIVECLASS"
                  >
                    Retro
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="halloween"
                    onClick={() => setTheme("Halloween")}
                    data-act-class="ACTIVECLASS"
                  >
                    Halloween
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="cyberpunk"
                    onClick={() => setTheme("Cyberpunk")}
                    data-act-class="ACTIVECLASS"
                  >
                    Cyberpunk
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="luxury"
                    onClick={() => setTheme("Luxury")}
                    data-act-class="ACTIVECLASS"
                  >
                    Luxury
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="synthwave"
                    onClick={() => setTheme("Synthwave")}
                    data-act-class="ACTIVECLASS"
                  >
                    Synth
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="autumn"
                    onClick={() => setTheme("Autumn")}
                    data-act-class="ACTIVECLASS"
                  >
                    Autumn
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="lemonade"
                    onClick={() => setTheme("Lemonade")}
                    data-act-class="ACTIVECLASS"
                  >
                    Lemonade
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* theme toggle end  */}
          {user?.uid ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      title={user?.name}
                      alt={user?.name}
                    />
                  ) : (
                    <img
                      alt={user?.name}
                      src="https://placeimg.com/80/80/people"
                    />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <NavLink to='/profile' className="justify-between">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/settings' className="justify-between">
                    Settings
                    <span className="badge">New</span>
                  </NavLink>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-ghost btn-circle">
              <Link to="/login">
                <AiOutlineLogin className="w-7 h-7" />
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
