import React from 'react';
import Registered from "./Preregistered";

import './PreregisteredPage.scss'

const RegisteredPage = () => {
  return (
    <div>
      <h4 class="tc">This page displays new registrations for 2022, click here to view all registered players</h4>
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
    </div>
  );
}

export default RegisteredPage;

