'use client'
import React, { useState } from "react";
import NavItem from "./NavItem";
import '../styles/globals.css'

const Navbar = () => {
  const MENU_LIST1 = [
    { text: "< INICIO />", href: "/" },
    { text: "< PORTFOLIO />", href: "#portafolio" },
  ];
  const MENU_LIST2 = [
    { text: "< CONTACTO />", href: "#formcontacto" },
    { text: "< HABILIDADES />", href: "#skills" },
  ];

  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="navbar">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-evenly">
                <div onClick={() => setNavActive(!navActive)} className={`burger order-1`}>
                  <img className="block h-8 w-auto" src="https://raw.githubusercontent.com/Jonvtvn/Jonvtvn.github.io/main/logo/Logo-jp-sin-fondo.png" />
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                  {MENU_LIST1.map((menu, idx) => (
                    <div
                      className="flex space-x-4"
                      onClick={() => {
                        setActiveIdx(idx);
                        setNavActive(false);
                      }}
                      key={menu.text}>
                      <NavItem active={activeIdx === idx} {...menu} />
                    </div>
                  ))}
                  <a href="/" className="logo-navbar">
                    <img className="mx-5 ml-6 block h-8 w-auto fill-white text-white" src="https://raw.githubusercontent.com/Jonvtvn/Jonvtvn.github.io/main/logo/Logo-jp-sin-fondo.png" />
                  </a>
                  {MENU_LIST2.map((menu, idx) => (
                    <div
                      className="flex space-x-4"
                      onClick={() => {
                        setActiveIdx(idx);
                        setNavActive(false);
                      }}
                      key={menu.text}>
                      <NavItem active={activeIdx === idx} {...menu} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav >
      </header>
    </>
  );
};

export default Navbar;
