import React from "react";
import { connect } from "react-redux";

import Modal from "../Modal/Modal";
import {
  toggleBCModal,
} from "../../redux/admin/admin.actions";
// import "./birthCertificate.scss";

const BirthCertificate = ({ toggleBCModal, bcShowing, playerIndex, teamDataArray, index }) => {
  
  return (
    <div className="birthcertificate">
      <Modal className="bc modal" show={bcShowing} close={toggleBCModal}>
        {playerIndex ?
          <img className='fileImage'
            src={teamDataArray[index][1].roster[playerIndex].birthCert}
            alt="birth certificate"
          /> : null}
      </Modal>
    </div>
  )
};

const mapStateToProps = ({ event: { bcShowing } }) => ({
  bcShowing,
});

const mapDispatchToProps = (dispatch) => ({
  toggleBCModal: () => dispatch(toggleBCModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BirthCertificate);
