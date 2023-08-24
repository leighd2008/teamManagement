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
    </div>
  );
}

export default RegisteredPage;

