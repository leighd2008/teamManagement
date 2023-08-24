import React from "react";
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";
import { connect } from "react-redux";

import "./coachesContact.scss";

const CoachesContact = ({ teamData }) => {
  let teamDataArray = Object.entries(teamData);
  teamDataArray.sort((a, b) => {
    let aa = a[1].teamNum;
    let bb = b[1].teamNum;
    return aa - bb;
  });

  return (
    <div className='coachesContact'>
      <h1 className='admin-title'>Manager Contact Information</h1>
      <table className="f6 w-100 mw8 center pa4 ma2">
        <thead>
          <tr >
            <th>Team</th>
            <th>Manager</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teamDataArray.map((team, i) => {
            return (
              <tr key={i}>
                <td>{`${team[1].division}`}</td>
                <td className="Manager">{`${team[1].teamManager}`}</td>
                <td>{`${team[1].managerPhone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}`}</td>
                <td className="email">{`${team[1].teamEmail}`}</td>
              </tr>
            )
          })}
          <tr>
            <td>Treasurer</td>
            <td className="coach">Zack Cutter</td>
            <td>(330) 282-2210</td>
            <td className="email">fire.fastpitch.treasurer@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) 
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
})

export default connect(mapStateToProps)(CoachesContact);
