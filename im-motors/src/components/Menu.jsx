import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/inventory" activeClassName="active">
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink to="/finance" activeClassName="active">
              Finance
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              AboutUs
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
