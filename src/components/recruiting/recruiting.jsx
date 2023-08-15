import React from "react";
import { connect } from "react-redux";

import Modal from "../Modal/Modal";
import {
  openModalHandler,
  closeModalHandler,
} from "../../redux/recruiting/recruiting.actions";

import "./recruiting.scss";

const Recruiting = ({ openModalHandler, closeModalHandler, isShowing }) => (
  <div className="recruiting">
    {isShowing ? (
      <div onClick={closeModalHandler} className="back-drop"></div>
    ) : null}
    <div className="open-modal" onClick={openModalHandler}>
      <h1 className="plain">Are you ready for the College Scouts?</h1>
      <h1 className="fancy">Click here for Tips!</h1>
    </div>
    <Modal className="modal" show={isShowing} close={closeModalHandler}>
      <div className="iframe-container">
        <iframe
          title="recruiting tips"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7soS5kzJw64"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  </div>
);

const mapStateToProps = ({ recruiting: { isShowing } }) => ({
  isShowing,
});

const mapDispatchToProps = (dispatch) => ({
  openModalHandler: () => dispatch(openModalHandler()),
  closeModalHandler: () => dispatch(closeModalHandler()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recruiting);
