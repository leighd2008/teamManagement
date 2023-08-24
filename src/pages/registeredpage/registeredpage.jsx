import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Registered from "./registered";
import CsvDownload from 'react-json-to-csv'
import { selectRegisteredData } from "../../redux/registration/registration.selectors";

import './registeredPage.scss'

const RegisteredPage = (registeredData) => {
    const registeredDataArray = Object.entries(registeredData);
  return (
    <div>
      <h3 className="tc">This page displays all registered players</h3>
      <NavLink exact to="/Preregistered" activeClassName="selected" title="Registered">
        <h4 className="tc">click here to view new registrations for 2022</h4>
      </NavLink>
      <Registered division={'8U'} />
      <br />
      <Registered division={'10U'} />
      <br />
      <Registered division={'12U'} />
      <br />
      <Registered division={'14U'} />
      <br />
      <Registered division={'16U'} />
      <br />
      <Registered division={'18U'}/>
      <br />
      <h4>All registered players</h4>
      <CsvDownload data={registeredDataArray[0][1].Registered.players} />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  registeredData: selectRegisteredData,
})

export default connect(mapStateToProps)(RegisteredPage);

