/**
 *  @version 1.1.1
 *  @author Rony - Mrvalem
 *  @description Estilos del componente <Header />
 */

import * as React from "react";
import { NavLink } from "react-router-dom";
import ImgLogo from "../../static/img/digitalnews.jpeg";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <header className="justify-center">
      <div className="container row-responsive align-center">
        <div className="logo align-center full">
          <a href="/" className="logo responsive-img">
            <img width="80" src={ImgLogo} alt="React Boilerplate Logo" />
          </a>
          <div className="column">
            {/* <div className="white-space-16"></div> */}
            <h2 className="color-secondary">Boilerplate</h2>
          </div>
        </div>
        <nav className="full">
          <NavLink
            exact
            to="/"
            className="nav-item weight-semi font-small color-secondary"
            activeClassName="nav-active"
          >
            Inicio
          </NavLink>
          <NavLink
            exact
            to="/fetch"
            className="nav-item weight-semi font-small color-secondary"
            activeClassName="nav-active"
          >
            Fetch Request
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
