import React from "react";

import "./welcome.scss";

const Welcome = () => {
  const images = require.context("../../assets", true);
  let imgsrc = images(`./12U_14U_teams.jpg`);
  return (
    <div className="welcome">
      <img src={imgsrc} alt="both teams" />
      <div className="content">
        <h1 className="title">
          These TEAMS are on FIRE! Can you handle the heat?
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
