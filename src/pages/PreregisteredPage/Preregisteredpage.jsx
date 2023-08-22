import React from 'react';
import Registered from "./Preregistered";
import { NavLink } from "react-router-dom";


import './PreregisteredPage.scss'

const RegisteredPage = () => {
  return (
    <div>
      <h3 class="tc">This page displays new registrations for 2022, </h3>
      <NavLink exact to="/Registered" activeClassName="selected" title="Registered">
        <h4 class="tc">click here to view all registered players</h4>
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
    </div>
  );
}

export default RegisteredPage;

