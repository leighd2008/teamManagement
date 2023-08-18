import React from "react";
import { NavLink } from "react-router-dom";

import "./teamsDropdown.scss";

const TeamsDropdown = () => (
  <div className="teams-dropdown">
    <div className="teams">
      <NavLink exact to="/Team1" activeClassName="selected">
        <h4>Team 1</h4>
      </NavLink>
      <NavLink exact to="/Team2" activeClassName="selected">
        <h4>Team 2</h4>
      </NavLink>
      <NavLink exact to="/Team3" activeClassName="selected">
        <h4>Team 3</h4>
      </NavLink>
      <NavLink exact to="/Team4" activeClassName="selected">
        <h4>Team 4</h4>
      </NavLink>
    </div>
  </div>
);

export default TeamsDropdown;
