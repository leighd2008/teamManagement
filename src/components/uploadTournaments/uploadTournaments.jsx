import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectTeamData } from "../../redux/team/team.selectors";
import { selectAll_TeamsTeams } from "../../redux/all_teams/all_teams.selectors";

import "./uploadTournaments.scss";

const UploadTournaments = ({ csvArray, teamData }) => {

  const teamDataArray = Object.entries(teamData);
  // let currentTourns = []

  teamDataArray.map((team, i) => {
    console.log(team)
  })
    //  map csvArray
    //    if tournament.team = team.title
    //        currentTourns.push? tournamnet

    
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
