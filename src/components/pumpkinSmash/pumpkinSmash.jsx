import React from "react";
import { connect } from "react-redux";

import Modal from "../Modal/Modal";
import {
  openEventModalHandler,
  closeEventModalHandler,
} from "../../redux/event/event.actions";

import "./pumpkinSmash.scss";

const PumpkinSmash = ({ openEventModalHandler, closeEventModalHandler, isEventShowing }) => {
  const images = require.context("../../assets", true);
  let imgsrc = images(`./pumpkinSmash_2020.jpg`);
  return(
  <div className="pumpkinSmash">
    {isEventShowing ? (
      <div onClick={closeEventModalHandler} className="back-drop"></div>
    ) : null}
    <div className="open-pumpkin" onClick={openEventModalHandler}>
      <h1 className="fancy">First Annual Fire Fastpitch Pumpkin Smash Information</h1>
    </div>
    <Modal className="modal" show={isEventShowing} close={closeEventModalHandler}>
      <div className="pumpkin-smash">
        <img
          alt="pumpkin smash flyer"
          src={imgsrc}
        ></img>
      </div>
    </Modal>
    </div>
  )
};

const mapStateToProps = ({ event: { isEventShowing } }) => ({
  isEventShowing,
});

const mapDispatchToProps = (dispatch) => ({
  openEventModalHandler: () => dispatch(openEventModalHandler()),
  closeEventModalHandler: () => dispatch(closeEventModalHandler()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PumpkinSmash);
