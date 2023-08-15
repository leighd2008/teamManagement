/* eslint-disable eqeqeq */
import React from 'react';
import { connect } from "react-redux";
import { firestore } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import CsvDownload from 'react-json-to-csv'

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectRegisteredData } from "../../redux/registration/registration.selectors";
import { selectTeamData } from "../../redux/team/team.selectors";

import { Card, CardTitle } from "reactstrap";

class Registered extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.updateRoster = this.updateRoster.bind(this);

  }

  updateRoster = (players, teamdiv, teamId) => {
    let teamMembers = this.props.teamData[teamdiv].roster;
    let currentRoster = []
    
    this.props.teamData[teamdiv].roster.map((member, i) => {
      return currentRoster.push(`${member.name} ${member.last}`)
    })
    
    players.map((player, i) => {
      
      if (player.onTeam && teamdiv === `Fire${player.year || player.division}`) {
        if (!currentRoster.includes(`${player.name} ${player.last}`)) {
          player.jersey = '';
          teamMembers.push(player)
        }
      } else {
        if (currentRoster.includes(`${player.name} ${player.last}`)) {
          teamMembers = teamMembers.filter(teamMembers => teamMembers.name!==player.name && teamMembers.last!==player.last)
        }
      }
      return teamMembers;
    }
    )
    
    firestore.collection("teams").doc(teamId).update({
      roster: teamMembers,
    })
  }

  checkboxHandler = (player, id) => (e) => {
    let division = player.division
    let year = player.year
    let players = this.props.registeredData.Registered.players
    if (e.target.checked) {
      players[id].onTeam = "yes";
    } else {
      players[id].onTeam = "";
    }
    
    const ID = this.props.registeredData.Registered.id;
    const teamdiv = `Fire${year || division}`
    const teamId = this.props.teamData[teamdiv].id
    firestore.collection("registered").doc(ID).update({
      players: players,
    })
    this.updateRoster(players, teamdiv, teamId);
  }

  render() {
    const { registeredData, currentUser, year } = this.props;
    const registeredDataArray = Object.entries(registeredData);
    
    const divisionDataArray=[]
    registeredDataArray[0][1].players.sort((a, b) => new Date(b.DOB) - new Date(a.DOB))
    
    // eslint-disable-next-line array-callback-return
    registeredDataArray[0][1].players.map((player, i) => {
      let birthdate = new Date(player.DOB);
      let birthyear = birthdate.getYear() + 1900;
      if (year === birthyear ) {
          player.id=i;
          divisionDataArray.push(player);
        }
    }) 

    return (
      <div>
        <Card
          className="ma0 registered"
          style={{
            backgroundColor: "#rgb(194, 198, 202)",
            borderColor: "red",
            borderWidth: "4px",
            minWidth: "60vw"
          }}
        >
          <CardTitle>
          <h1 className='tc'>{`Registered Players: ${year}`}</h1>
          <h4 className='tc'>Click on player's name to view parent contact information</h4>
          </CardTitle>
          <table className="f6 w-100 mw8 center pa4 ma2">
            <thead>
              <tr >
                {/* <th>Tryout Number</th>
                <th>Attended</th>
                <th>Session</th> */}
                <th>Registration year</th>
                <th>Name</th>
                <th>Previous Experience</th>
                <th>DOB</th>
                <th>Positions</th>
                <th>Bats</th>
                <th>Throws</th>
                <th>Coaching Interest</th>
                <th>On Team</th>
              </tr>
            </thead>
            <tbody>
              {divisionDataArray.map((player, i) => {
                player.positions ? player.positions = player.positions.toString() : player.positions = ''
                return (
                  <tr className="stripe-dark"  key={i}>
                    {/* <td>{`${player.tryout || ''}`}</td>
                    <td>{`${player.attended || ''}`}</td>
                    <td>{`${player.session || ''}`}</td> */}
                    <td>{`${player.Reg_year || ''}`}</td>
                    <td onClick={(e) => {
                      alert(`${player.name} ${player.last} email: ${player.email || ''} \n ${player.parent1} \n phone: ${player.parent1phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")} \n email: ${player.parent1email || ''} \n ${player.parent2 || ""}\n phone: ${player.parent2phone ? player.parent2phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") : ""} \n email: ${player.parent2email || ""} `)
                    }}>{`${player.name || ''} ${player.last || ''}`}</td>

                    <td>{player.previous}</td>
                    <td>{player.DOB}</td>
                    <td>{player.positions}</td>
                    <td>{player.bats}</td>
                    <td>{player.throws}</td>
                    <td>{player.coaching}</td>
                  {currentUser.role === "admin" ?
                    <td>
                        <input type="checkbox" division={player.division} id={`${i}`} defaultChecked={player.onTeam} onChange={this.checkboxHandler(player, player.id)} /></td>
                      : <td>{player.onTeam}</td> }
                  </tr>
                );
              })}
            </tbody>
          </table>
          <CsvDownload data={divisionDataArray} />
        </Card>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  registeredData: selectRegisteredData,
  teamData: selectTeamData,
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Registered);

