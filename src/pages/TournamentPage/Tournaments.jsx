import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectTeamData } from "../../redux/team/team.selectors";
import { selectAll_TeamsTeams } from "../../redux/all_teams/all_teams.selectors";

import { Card, CardTitle } from "reactstrap";

const Tournaments = ({ index, teamData }) => {
  const teamDataArray = Object.entries(teamData);
  teamDataArray[index][1].tournaments.sort((a, b) => {
    let aa = new Date(a.date);
    let bb = new Date(b.date);
    return aa - bb;
  });
  
  return (
    <Card
      className="ma0 tournaments"
      style={{
        backgroundColor: "#rgb(194, 198, 202)",
        borderColor: "red",
        borderWidth: "4px",
        minWidth: "100%"
      }}
    >
      <CardTitle tag="h1">
        {`Tournaments: ${teamDataArray[index][1].teamName}`}
      </CardTitle>
      <table className="f6 w-100 mw8 center pa4 ma2">
        <thead>
          <tr>
            <th>Weekend</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {teamDataArray[index][1].tournaments.map((tournament, i) => {
            return (
              <tr className="stripe-dark" key={i}>
                <td>{tournament.weekend}</td>
                <td>{tournament.name}</td>
                <td>{tournament.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectAll_TeamsTeams,
  teamData: selectTeamData
});

export default connect(mapStateToProps)(Tournaments);
