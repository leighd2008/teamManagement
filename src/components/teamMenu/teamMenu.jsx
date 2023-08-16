import React from "react";
import { connect } from "react-redux";

import { toggleTeamsHidden } from "../../redux/teamMenu/teamMenu.actions";
import TeamsDropdown from "../teamsDropdown/teamsDropdown";
import { closeFangearDropdown } from "../../redux/fangearMenu/fangearMenu.actions";
import { closeGuidelinesDropdown } from "../../redux/guidelinesMenu/guidelinesMenu.actions";

import "./teamMenu.scss";

const TeamMenu = ({ toggleTeamsHidden, closeFangearDropdown, closeGuidelinesDropdown, hidden }) => (
  <div className="teams" onClick={() => {
    toggleTeamsHidden();
    closeFangearDropdown();
    closeGuidelinesDropdown();
  }}>
    <h2 className="dropdown">TEAMS</h2>
    {hidden ? null : <TeamsDropdown />}
  </div>
);

const mapStateToProps = ({ teamMenu: { hidden } }) => ({
  hidden
});

const mapDispatchToProps = dispatch => ({
  toggleTeamsHidden: () => dispatch(toggleTeamsHidden()),
  closeFangearDropdown: () => dispatch(closeFangearDropdown()),
  closeGuidelinesDropdown: () => dispatch(closeGuidelinesDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMenu);
