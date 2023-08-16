import React from "react";
// import Tournaments from "./Tournaments";

import { Card } from "reactstrap";

import './TournamentPage.scss'


const TournamentPage = () => {
  return (
    <Card
      className="ma3 registered"
      style={{
        backgroundColor: "#rgb(194, 198, 202)",
        borderColor: "red",
        borderWidth: "4px",
        minWidth: "48vw"
      }}
    >
      {/* <Tournaments index={5} />
      <br />
      <Tournaments index={3} />
      <br />
      <Tournaments index={4} />
      <br />
      <Tournaments index={6} />
      <br />
      <Tournaments index={2} />
      <br />
      <Tournaments index={7} />
      <br />
      <Tournaments index={0} />
      <br />
      <Tournaments index={1} />
      <br />
       */}
    </Card>
  );
};

export default TournamentPage;
