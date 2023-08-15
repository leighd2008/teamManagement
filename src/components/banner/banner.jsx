import React from "react";
import { Jumbotron } from "reactstrap";
import "./banner.scss";

const Banner = ({ teamName, backgroundImage, location }) => {
  return (
    <div className="banner">
      <h1 className="banner-title">
        {teamName} {location}
      </h1>
      <Jumbotron
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></Jumbotron>
    </div>
  );
};

export default Banner;
