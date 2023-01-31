import React, { useState, useEffect } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 500;
      setIsTop(isTop);
    });

    return () => {
      document.removeEventListener("scroll", () => {
        const isTop = window.scrollY < 500;
        setIsTop(isTop);
      });
    };
  }, []);

  return (
    <nav className={`fixed-nav ${!isTop ? "scrolled" : ""}`}>
      <a className="logo" href="#about">
        BeYou™️
      </a>
      <div className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <a className="navItem" href="#about">
          About us
        </a>
        <a className="navItem" href="#testimonials">
          Testimonials
        </a>
        <a className="navItem" href="#buy">
          Buy now
        </a>
      </div>
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </nav>
  );
};

export default Nav;
