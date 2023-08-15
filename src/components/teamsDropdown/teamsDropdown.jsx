import React from "react";
import { NavLink } from "react-router-dom";

import "./teamsDropdown.scss";

const TeamsDropdown = () => (
  <div className="teams-dropdown">
    <div className="teams">
      <NavLink exact to="/Fire18U" activeClassName="selected">
        <h4>Fire 18U</h4>
      </NavLink>
      <NavLink exact to="/Fire16U" activeClassName="selected">
        <h4>Fire 16U</h4>
      </NavLink>
      <NavLink exact to="/Fire2007" activeClassName="selected">
        <h4>Fire 2007</h4>
      </NavLink>
      <NavLink exact to="/Fire2008" activeClassName="selected">
        <h4>Fire 2008</h4>
      </NavLink>
      <NavLink exact to="/Fire2009" activeClassName="selected">
        <h4>Fire 2009</h4>
      </NavLink>
      <NavLink exact to="/Fire2010" activeClassName="selected">
        <h4>Fire 2010</h4>
      </NavLink>
      <NavLink exact to="/Fire2011" activeClassName="selected">
        <h4>Fire 2011</h4>
      </NavLink>
      <NavLink exact to="/Fire2012" activeClassName="selected">
        <h4>Fire 2012</h4>
      </NavLink>
    </div>
  </div>
);

export default TeamsDropdown;
