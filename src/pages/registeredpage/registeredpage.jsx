import React from 'react';
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
      <h4 className="tc">This page displays all registered players, click here to view new registrations for 2022</h4>
      <Registered index={2} year={2014} />
      <br />
      <Registered index={1} year={2013} />
      <br />
      <Registered index={4} year={2012} />
      <br />
      <Registered index={3} year={2011}/>
      <br />
      <Registered index={0} year={2010}/>
      <br />
      <Registered index={0} year={2009}/>
      <br />
      <Registered index={0} year={2008}/>
      <br />
      <Registered index={0} year={2007}/>
      <br />
      <Registered index={0} year={2006}/>
      <br />
      <Registered index={0} year={2005}/>
      <br />
      <Registered index={0} year={2004}/>
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

