import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../../i18n/locales";

export const Navbar = ({ setLanguage }) => {
  const [lang, setLang] = useState("English");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <FormattedMessage id="smart" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-nav-links">
              <Link className="nav-link active" aria-current="page" to="/homes">
                <FormattedMessage id="spaces" />
              </Link>
            </div>
            <div className="navbar-nav-controls">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {lang === "Spanish" ? (
                    <img src="/spain.png" className="countries" />
                  ) : (
                    <img src="/united-states.png" className="countries" />
                  )}
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {lang !== "Spanish" ? (
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          setLanguage(LOCALES.SPANISH);
                          setLang("Spanish");
                        }}
                      >
                        <img src="/spain.png" className="countries" />
                      </a>
                    </li>
                  ) : (
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          setLanguage(LOCALES.ENGLISH);
                          setLang("English");
                        }}
                      >
                        <img src="/united-states.png" className="countries" />
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
