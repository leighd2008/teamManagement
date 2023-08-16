import React from "react";
import { connect } from "react-redux";

import { toggleGuidelinesHidden } from "../../redux/guidelinesMenu/guidelinesMenu.actions";
import GuidelinesDropdown from "../guidelinesDropdown/guidelinesDropdown";
import { closeTeamDropdown } from "../../redux/teamMenu/teamMenu.actions";
import { closeFangearDropdown } from "../../redux/fangearMenu/fangearMenu.actions";
import "./guidelinesMenu.scss";

const GuidelinesMenu = ({ toggleGuidelinesHidden, closeFangearDropdown, closeTeamDropdown, hidden }) => (
  <div className="stores" onClick={() => {
    closeTeamDropdown();
    closeFangearDropdown();
    toggleGuidelinesHidden();
  }}>
    <h2 className="dropdown">Guidelines</h2>
    {hidden ? null : <GuidelinesDropdown />}
  </div>
);

const mapStateToProps = ({ guidelinesMenu: { hidden } }) => ({
  hidden
});

const mapDispatchToProps = dispatch => ({
  toggleGuidelinesHidden: () => dispatch(toggleGuidelinesHidden()),
  closeTeamDropdown: () => dispatch(closeTeamDropdown()),
  closeFangearDropdown: () => dispatch(closeFangearDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuidelinesMenu);
