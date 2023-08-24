import React from "react";
import { withRouter } from "react-router-dom";

import "./team.scss";

const Team = ({ title, imageUrl, history, linkUrl, match }) => {
  let imgsrc = `${imageUrl}`;
  return (
    <div
      className="team"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgsrc})`
        }}
      />
      <div className="team-name">
        <h1 className="title-wht">{title.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default withRouter(Team);
