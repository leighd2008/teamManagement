import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectTeamData } from "../../redux/team/team.selectors";
import { selectAll_TeamsTeams } from "../../redux/all_teams/all_teams.selectors";

const UploadTournaments = ({ csvArray, teamData }) => {

  const teamDataArray = Object.entries(teamData);

  teamDataArray.map((team, i) => {
    console.log(team)
  })
  
  return (
      csvArray.length > 0 ?
        <>
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Event</th>
                <th>Venue</th>
                <th>Weekend</th>
              </tr>
            </thead>
            <tbody>
              {
                csvArray.map((item, i) => (
                  <tr key={i}>
                    <td>{item.Team}</td>
                    <td>{item.Event}</td>
                    <td>{item.Venue}</td>
                    <td>{item.Weekend}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </> : null
  )
}

const mapStateToProps = createStructuredSelector({
  teams: selectAll_TeamsTeams,
  teamData: selectTeamData
})

export default connect(mapStateToProps)(UploadTournaments)
