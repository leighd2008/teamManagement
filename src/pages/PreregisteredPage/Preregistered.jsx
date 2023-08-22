import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CsvDownload from 'react-json-to-csv'

import { selectCurrentUser } from "../../redux/user/user.selectors";
// import { selectRegistrationData } from "../../redux/registration/registration.selectors";
import { selectRegisteredData } from "../../redux/registration/registration.selectors";

import { selectTeamData } from "../../redux/team/team.selectors";

import { Card, CardTitle } from "reactstrap";

class Preregistered extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
  }

  render() {
    const { registeredData, division } = this.props;
    // const registrationDataArray = Object.entries(registrationData);
    const registeredDataArray = Object.entries(registeredData);
    
    const divisionDataArray=[]
    registeredDataArray[0][1].players.sort((a, b) => new Date(b.DOB) - new Date(a.DOB))
   
    registeredDataArray[0][1].players.map((player, i) => {
      if (player.Reg_year === 2023) {
        if (division === player.division ) {
            player.id=i;
            divisionDataArray.push(player);
          }
        }
      return null
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
          <CardTitle tag="h1">
            {`Preregistered Players: ${division}`}
            <h4>Click on player's name to view parent contact information</h4>
          </CardTitle>
          <table className="f6 w-100 mw8 center pa4 ma2">
            <thead>
              <tr >
                <th>Tryout Number</th>
                <th>Attended</th>
                <th>Session</th>
                <th>Name</th>
                <th>Previous Experience</th>
                <th>DOB</th>
                <th>Positions</th>
                <th>Bats</th>
                <th>Throws</th>
                <th>Coaching Interest</th>
              </tr>
            </thead>
            <tbody>
              {divisionDataArray.map((player, i) => {
                player.positions ? player.positions = player.positions.toString() : player.positions = ''
                return (
                  <tr className="stripe-dark"  key={i}>
                    <td>{`${player.tryout || ''}`}</td>
                    <td>{`${player.attended || ''}`}</td>
                    <td>{`${player.session || ''}`}</td>
                    <td onClick={(e) => {
                      alert(`${player.name} ${player.last} email: ${player.email || ''} \n ${player.parent1} \n phone: ${player.parent1phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")} \n email: ${player.parent1email || ''} \n ${player.parent2 || ""}\n phone: ${player.parent2phone ? player.parent2phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") : ""} \n email: ${player.parent2email || ""} `)
                    }}>{`${player.name || ''} ${player.last || ''}`}</td>

                    <td>{player.previous}</td>
                    <td>{player.DOB}</td>
                    <td>{player.positions}</td>
                    <td>{player.bats}</td>
                    <td>{player.throws}</td>
                    <td>{player.coaching}</td>
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
  // registrationData: selectRegistrationData,
  registeredData: selectRegisteredData,
  teamData: selectTeamData,
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Preregistered);

