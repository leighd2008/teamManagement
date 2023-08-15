import React, { useState } from 'react';
import { connect } from 'react-redux';
import CsvDownload from 'react-json-to-csv'
import { StickyTable, Row, Cell } from 'react-sticky-table';

import { selectTeamData } from "../../redux/team/team.selectors";
import {
  toggleBCModal,
  toggleRCModal,
} from "../../redux/admin/admin.actions";
import Modal from "../../components/Modal/Modal";

import { Card, CardTitle } from "reactstrap";
import './TeamRosterPage.scss';

const TeamRoster = ({ index, teamData, toggleBCModal, bcShowing, toggleRCModal, rcShowing }) => {

  const [playerIndex, setplayerIndex] = useState("");

  const handleBCClick = (e, playerIndex) => {
    setplayerIndex(playerIndex)
    toggleBCModal()
  }

  // const handleRCClick = (e, playerIndex) => {
  //   setplayerIndex(playerIndex)
  //   toggleRCModal()
  // }

  const teamDataArray = Object.entries(teamData);

  //copy team roster
  const team_roster = teamDataArray[index][1].roster.map(e => Object.assign({}, e))
  team_roster.forEach(elm => elm.positions ? elm.positions  = elm.positions.toString() : "")
  // team_roster.forEach(elm => delete elm.birthCert)

  
  console.log(teamDataArray)
  return (
      <div>
      <Card
        className="ma0 roster"
        style={{
          backgroundColor: "#rgb(194, 198, 202)",
          borderColor: "red",
          borderWidth: "4px",
          minWidth: "60vw",
          maxHeight: "90vh"
        }}
      >
        <CardTitle tag="h1">
          {`Team Roster: ${teamDataArray[index][1].title} Division`}
        </CardTitle>
        <div className="table-container">
          <StickyTable className='stickytable' >
            <Row >
              <Cell>Name</Cell>
              <Cell>Jersey Number</Cell>
              {/* <Cell>1st Qtr Report Card</Cell> */}
              {/* <Cell>2cnd Qtr Report Card</Cell> */}
              {/* <Cell>3rd Qtr Report Card</Cell> */}
              {/* <Cell>4th Qtr Report Card</Cell> */}
              <Cell>Birth Certificate</Cell>
              {/* <Cell>T_Shirt Size</Cell>
              <Cell>Helmet Size</Cell>
              <Cell>Pant Size</Cell> */}
              <Cell>DOB</Cell>
              <Cell>Parent_1</Cell>
              <Cell>Parent 1 Email</Cell>
              <Cell>Parent 1 Phone</Cell>
              <Cell>Complete_Street_Address</Cell>
              <Cell>Parent_2</Cell>
              <Cell>Parent 2 Email</Cell>
              <Cell>Parent 2 Phone</Cell>
            </Row>
            {teamDataArray[index][1].roster.map((player, i) => {
              let playerIndex = i
                return (
                  <Row className="stripe-dark" key={i}>
                    <Cell >{`${player.name || ''} ${player.last || ''}`}</Cell>
                    <Cell>{`${player.jersey || ''}`}</Cell>
                    {/* {player.reportCard1 ?
                      (<Cell onClick={e => handleRCClick(e, playerIndex)}>
                        <img className='fileImage' src={player.reportCard1} alt="Report Card" />
                      </Cell>) :
                      <Cell>Not on File</Cell>
                    } */}
                    {/* {player.reportCard2 ?
                      (<Cell onClick={e => handleRCClick(e, playerIndex)}>
                        <img className='fileImage' src={player.reportCard2} alt="Report Card" />
                      </Cell>) :
                      <Cell>Not on File</Cell>
                    } */}
                    {/* {player.reportCard3 ?
                      (<Cell onClick={e => handleRCClick(e, playerIndex)}>
                        <img className='fileImage' src={player.reportCard3} alt="Report Card" />
                      </Cell>) :
                      <Cell>Not on File</Cell>
                    } */}
                    {/* {player.reportCard4 ?
                      (<Cell onClick={e => handleRCClick(e, playerIndex)}>
                        <img className='fileImage' src={player.reportCard4} alt="Report Card" />
                      </Cell>) :
                      <Cell>Not on File</Cell>
                    } */}
                    {player.birthCert ?
                        <Cell onClick={e => handleBCClick(e, playerIndex)}>
                        <img className='fileImage'
                          src={player.birthCert}
                          alt="birth certificate"
                          />
                        </Cell>
                       :
                      <Cell>Not On File</Cell>
                    }
                    {/* <Cell className='size'>{player.tshirt_size || ''}</Cell>
                    <Cell className='size'>{player.helmet_size || ''}</Cell>
                    <Cell className='size'>{player.pant_size || ''}</Cell> */}
                    <Cell>{player.DOB}</Cell>
                    <Cell>{player.parent1}</Cell>
                    <Cell>{player.parent1email}</Cell>
                    <Cell className='phone'>{player.parent1phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}</Cell>
                    {player.address ?
                      <Cell className='street'>{`${player.address}
                      ${player.city}, ${player.state}
                      ${player.zipcode} `}</Cell> :
                      <Cell>Not on File</Cell>
                    }
                    <Cell>{player.parent2 || ''}</Cell>
                    <Cell>{player.parent2email || ''}</Cell>
                    <Cell className='phone'>{player.parent2phone ? player.parent2phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") : ""}</Cell>
                  </Row>
                )
            }
            )}
          </StickyTable>
        </div>
      </Card>
      <span>Swipe/Scroll to the side for more columns</span>
      <br />
      <CsvDownload data={team_roster} />
      <Modal className="bc modal" show={bcShowing} close={toggleBCModal}>
        {playerIndex || playerIndex === 0 ?
          <img className='fileImage'
          src={teamDataArray[index][1].roster[playerIndex].birthCert}
          alt="birth certificate"
          />  : null}
      </Modal>
      <Modal className="bc modal" show={rcShowing} close={toggleRCModal}>
        {playerIndex || playerIndex === 0 ?
          <img className='fileImage'
            src={teamDataArray[index][1].roster[playerIndex].reportCard1}
            alt="report card"
          /> : null}
      </Modal>
    </div>
    );
  }

const mapStateToProps = state => ({
  teamData: selectTeamData(state),
  bcShowing: state.admin.bcShowing,
  rcShowing: state.admin.rcShowing,
});

const mapDispatchToProps = (dispatch) => ({
  toggleBCModal: () => dispatch(toggleBCModal()),
  toggleRCModal: () => dispatch(toggleRCModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamRoster);
