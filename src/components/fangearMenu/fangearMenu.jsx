import React from "react";
import { connect } from "react-redux";

import { toggleFangearHidden } from "../../redux/fangearMenu/fangearMenu.actions";
import FangearDropdown from "../fangearDropdown/fangearDropdown";
import { closeTeamDropdown } from "../../redux/teamMenu/teamMenu.actions";
import { closeGuidelinesDropdown } from "../../redux/guidelinesMenu/guidelinesMenu.actions";
import "./fangearMenu.scss";

const FangearMenu = ({ toggleFangearHidden, closeGuidelinesDropdown, closeTeamDropdown,  hidden }) => (
  <div className="stores" onClick={() => {
    closeTeamDropdown();
    toggleFangearHidden();
    closeGuidelinesDropdown();
  }}>
    <h2>Fangear</h2>
    {hidden ? null : <FangearDropdown />}
  </div>
);

const mapStateToProps = ({ fangearMenu: { hidden } }) => ({
  hidden
});

const mapDispatchToProps = dispatch => ({
  toggleFangearHidden: () => dispatch(toggleFangearHidden()),
  closeTeamDropdown: () => dispatch(closeTeamDropdown()),
  closeGuidelinesDropdown: () => dispatch(closeGuidelinesDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FangearMenu);
