import React from "react";
import CoronaUpdate from "../../assets/Baseball-Softball.pdf"


import "./corona.scss";

const Corona = () => {
  return (
    <div >
      <h1 className="corona">
        <a href={CoronaUpdate} target="_blank" rel="noopener noreferrer" >Corona Virus Guidelines for Softball</a>
      </h1>
    </div>
  );
};
export default Corona;
