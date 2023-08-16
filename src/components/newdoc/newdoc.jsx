import React from "react";
import { NavLink } from "react-router-dom";

import "./newdoc.scss";

const NewDOC = () => (
  <div className="newdoc">
    <NavLink className="newDocBio" to="/DOC">
      <h3 >Individual Training by Some Awesome Trainer</h3>
      <h3>(XXX) XXX-XXXX, awesome@trainer.com</h3>
      <h3 > Click for Bio </h3>
    </NavLink>
  </div>
);

export default NewDOC;