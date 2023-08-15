import React from "react";
import { NavLink } from "react-router-dom";

import "./tournament14U.scss"

const Tournament14U = () => (
  <div className="tournament14u">
    <NavLink className="tourney" to="/Tournament14U">
      <h1 className="fancy">1st Annual Battle in the Burg </h1><h1 className="plain"> 14U "B" only July 9-11, 2021 </h1>
    </NavLink>
  </div>
);

export default Tournament14U;