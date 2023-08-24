import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { StickyTable, Row, Cell } from 'react-sticky-table';

import { Card, CardTitle } from "reactstrap";

import "./membersOnlyPage.scss";
import UploadFiles from "../../components/uploadFiles/uploadFiles";
// import EnterAddress from "../../components/enterAddress/enterAddress"

const MembersOnlyPage = ({ title, teamName, index, teamData }) => {

  const teamDataArray = Object.entries(teamData);

  return (
    <div className="members-only">
      <h1>{`${teamName} Family`}</h1>
      <h1>{`Coach: ${teamDataArray[index][1].headCoach}`}</h1>
      <Card
        className="ma0 roster"
        style={{
          backgroundColor: "#rgb(194, 198, 202)",
          borderColor: "red",
          borderWidth: "4px",
          minWidth: "90vw",
          minHeight: "700px"
        }}
      >
        <CardTitle tag="h1">
          {`Team Roster: ${teamDataArray[index][1].title}`}
        </CardTitle>
        <div className="table-container">
          <StickyTable className='stickytable' >
            <Row >
              <Cell>Name</Cell>
              <Cell>Jersey Number</Cell>
              <Cell>Birth Certificate</Cell>
              <Cell>Address</Cell>
            </Row>
            {teamDataArray[index][1].roster.map((player, i) => {
              let playerIndex = i
              return (
                <Row className="stripe-dark" key={i}>
                  <Cell className="fix">{`${player.name || ''} ${player.last || ''}`}</Cell>
                  <Cell>{`${player.jersey || ''}`}</Cell>
                  {player.birthCert ?
                    <Cell><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon> </Cell> :
                    <Cell><UploadFiles title={title} playerIndex={playerIndex} category='birthCert' /></Cell>
                  }
                  {/* {player.address ?
                    <Cell><FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon> </Cell> :
                    <Cell><EnterAddress title={title} playerIndex={playerIndex} /></Cell>} */}
                </Row>
              )
            }
            )}
          </StickyTable>
        </div>
      </Card>
      <span>Swipe/Scroll to the side for more columns</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
})

export default connect(mapStateToProps)(MembersOnlyPage);
