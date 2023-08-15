import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAll_TeamsTeams } from "../../redux/all_teams/all_teams.selectors";

import Team from "../team/team";
import "./all_teams.scss";

const Teams = ({ teams }) => (
  <div className="all-teams">
    <div className="team-menu">
      {teams.map(({ id, ...otherTeamProps }) => (
        <Team key={id} {...otherTeamProps} />
      ))}
    </div>
    <div className="content">
        <h1 className="title">
      These TEAMS are on FIRE! Can you handle the heat?
        </h1>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  teams: selectAll_TeamsTeams
});

export default connect(mapStateToProps)(Teams);
