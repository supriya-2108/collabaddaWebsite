import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const HeaderMenu = () => {
  const [scrolPosition, setScrollPosition] = useState(0);
  const [screenSize, setScreenSize] = useState(1000);
  const location = useLocation();
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  const handleResizeMenu = () => {
    setScreenSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResizeMenu);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResizeMenu);
    };
  });
  return (
    <div
      className={`z-10 fixed w-[100vw] h-[60px] flex justify-between p-[10px] ${
        scrolPosition === 0 && location.pathname === "/"
          ? "text-white"
          : "shadow-lg text-black bg-slate-50"
      }`}
    >
      <div>
        <div className=" p-2">Collabadda</div>
      </div>
      {screenSize >= 700 ? (
        <div>
          <ul className=" flex pr-10 text-center">
            <NavLink to="/">
              <li className=" p-2 ml-2 cursor-pointer hover:outline">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className=" p-2 ml-2 cursor-pointer hover:outline">About</li>
            </NavLink>
            <NavLink to="/work">
              <li className=" p-2 ml-2 cursor-pointer hover:outline">Work</li>
            </NavLink>
            <NavLink>
              <li className=" p-2 ml-2 cursor-pointer hover:outline">
                Services
              </li>
            </NavLink>
            <NavLink to="/SignIn">
              <li className=" p-2 ml-2 cursor-pointer hover:outline">Login</li>
            </NavLink>
            <NavLink to="/contactus">
              <li className=" p-2 ml-2 cursor-pointer hover:outline">
                Contact Us
              </li>
            </NavLink>
          </ul>
        </div>
      ) : (
        <div className="">
          <img
            className=" h-10 ml-10 relative right-10 cursor-pointer"
            src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
