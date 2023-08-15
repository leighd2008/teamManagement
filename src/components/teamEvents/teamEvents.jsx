import React from "react";
import "./teamEvents.scss";
import { Card, CardTitle } from "reactstrap";
import Scroll from "../scroll/scroll";

import Events from "./events";

const TeamEvents = ({ eventUrls, teamname, calendarLink }) => {
  return (
    <div className="team-events">
      <Card className="ma3 events">
        <CardTitle tag="h1">{`${teamname} Team Events `}</CardTitle>
        <Scroll>
          <Events eventUrls={eventUrls} />
        </Scroll>
        <a
          className="primary-cta"
          href={calendarLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2> Go to Calendar </h2>
        </a>
      </Card>
    </div>
  );
};

export default TeamEvents;
