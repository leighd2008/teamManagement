import React from "react";
import OHSAArulesdoc from "../../assets/OHSAArulesdoc.pdf"
import USArulesdoc from "../../assets/DigitalRulebook_Cover_USA.pdf"
import USAArulesdoc from "../../assets/Fastpitch_Rules_USSA.pdf"

import "./guidelinesDropdown.scss";

const GuidelinesDropdown = () => (
  <div className="guidelines-dropdown">
    <div className="guidelines">
      <a href={USAArulesdoc} target="_blank" rel="noopener noreferrer" ><h4>USAA rules 2022</h4>
      </a>
      <a href={USArulesdoc} target="_blank" rel="noopener noreferrer" ><h4>USA rules 2022</h4>
      </a>
      <a href={OHSAArulesdoc} target="_blank" rel="noopener noreferrer" ><h4>OHSAA rules</h4>
      </a>
    </div>
  </div>
);

export default GuidelinesDropdown;
