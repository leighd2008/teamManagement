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
                <NavLink exact to="/Field1" activeClassName="selected" title="Field 1">
                  <h4>Field 1 Scheduling</h4>
                </NavLink>
                <NavLink exact to="/Field2" activeClassName="selected" title="Field 2">
                  <h4>Field 2 Scheduling</h4>
                </NavLink>
                <NavLink exact to="/Field3" activeClassName="selected" title="Field 3">
                  <h4>Field 3 Scheduling</h4>
                </NavLink>
                <NavLink exact to="/Preregistered" activeClassName="selected" title="Registered">
                  <h4>2022 Registered Players</h4>
                </NavLink>
                <NavLink exact to="/Registered" activeClassName="selected" title="Registered">
                  <h4>All Registered Players</h4>
                </NavLink>
                <NavLink exact to="/18URoster" activeClassName="selected" title="18URoster">
                  <h4>18U Team Roster</h4>
                </NavLink>
                <NavLink exact to="/16URoster" activeClassName="selected" title="16URoster">
                  <h4>16U Team Roster</h4>
                </NavLink>
                <NavLink exact to="/2007Roster" activeClassName="selected" title="2007Roster">
                  <h4>2007 Team Roster</h4>
                </NavLink>
                <NavLink exact to="/2008Roster" activeClassName="selected" title="2008Roster">
                  <h4>2008 Team Roster</h4>
                </NavLink>
                <NavLink exact to="/2009Roster" activeClassName="selected" title="2009Roster">
                  <h4>2009 Team Roster</h4>
                </NavLink>
                <NavLink exact to="/2010Roster" activeClassName="selected" title="2010Roster">
                  <h4>2010 Team Roster</h4>
                </NavLink>
                <NavLink exact to="/2011Roster" activeClassName="selected" title="2011Roster">
                  <h4>2011 Team Roster</h4>
                </NavLink>
                <NavLink exact to="/2012Roster" activeClassName="selected" title="2012Roster">
                  <h4>2012 Team Roster</h4>
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
