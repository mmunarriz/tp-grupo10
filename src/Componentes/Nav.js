import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (

    <div className={`nav ${show && "nav_blank"}`}>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img
                className="nav_logo"
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                alt="Netflix Logo"
              />
            </a>
          </li>

          <li className="cont-user">
            <a className="nav__avatar">
              <i className="fa-solid fa-user"></i>
            </a>
            <hr />
            <ul className="links">
              <div className="triangulo"></div>
              <li id="primer-li">
                <a href="/mostrarfavoritas">Mis Favoritos</a>
              </li>
              <hr />
              <li>
                <a href="/logout">Log Out</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;