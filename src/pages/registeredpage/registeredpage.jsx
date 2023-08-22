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
      <Registered index={2} division={'8U'} />
      <br />
      <Registered index={2} division={'10U'} />
      <br />
      <Registered index={2} division={'12U'} />
      <br />
      <Registered index={1} division={'14U'} />
      <br />
      <Registered index={4} division={'16U'} />
      <br />
      <Registered index={3} division={'18U'}/>
      <br />
      <h4>All registered players</h4>
      <CsvDownload data={registeredDataArray[0][1].Registered.players} />
      
      {/* <Registered index={2} /> */}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  registeredData: selectRegisteredData,
})

export default connect(mapStateToProps)(RegisteredPage);

