import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import SignInPage from "../sign-inpage/sign-inpage";
import HomePage from "../homepage/homepage";
import CoachesContact from "../../components/coachesContact/coachesContact";
import ResetTournaments from "../../components/resetTournaments/resetTournaments";


import "./adminpage.scss";

const AdminPage = ({ currentUser }) => {
  
  return (
  currentUser ?
    currentUser.role === "admin" | currentUser.role === "coach" ?
        (
        <div>
          <div className="adminPage">
            <div className='adminLinks'>
              <div className="links">
                <NavLink exact to="/Preregistered" activeClassName="selected" title="Registered">
                  <h4>2022 Registered Players</h4>
                </NavLink>
                <NavLink exact to="/Registered" activeClassName="selected" title="Registered">
                  <h4>All Registered Players</h4>
                </NavLink>
                <NavLink exact to="/Team1Roster" activeClassName="selected" title="Team1Roster">
                  <h4>Team 1 Roster</h4>
                </NavLink>
                <NavLink exact to="/Team2Roster" activeClassName="selected" title="Team2Roster">
                  <h4>Team 2 Roster</h4>
                </NavLink>
                <NavLink exact to="/Team3Roster" activeClassName="selected" title="Team3Roster">
                  <h4>Team 3 Roster</h4>
                </NavLink>
                <NavLink exact to="/Team4Roster" activeClassName="selected" title="Team4Roster">
                  <h4>Team 4 Roster</h4>
                </NavLink>
              </div>
            </div>
            <CoachesContact />
          </div>
          {currentUser.role === "admin" ?
            <ResetTournaments/> 
            : null }
        </div>
      ) : (
        // alert('The account you entered is not an Admin Account')
        < HomePage />
        )
        : (
          <SignInPage />
          )
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(AdminPage);
