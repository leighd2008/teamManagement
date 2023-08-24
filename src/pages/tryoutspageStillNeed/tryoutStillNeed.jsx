import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import "./tryoutStillNeed.scss";

const TryOutsStillNeed = () => {
  return (
    <div className="tryouts">
      <Card style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00", width: '100vw' }}>
        <CardBody>
          <CardTitle className="tc f1" tag="h1">
            Are you ready to play?
          </CardTitle>
          <h3>Our Organization is looking for the following girls to complete our rosters: </h3> <br />
          <a href="Preregistration" rel="noopener noreferrer">
            <h2>Please fill out registration form here!</h2>
          </a>
          <h3>10U - PITCHERS & MOST POSITIONS</h3>
          <br/>
          <h2>12U - SPEED UTILITY</h2>
          <br />
          <h3>14U - CATCHER & UTILITY</h3> 
          <br />
          <h2>16U - PITCHER</h2>
          <br />
          <h3>LOCATION:</h3>
          {/* <a
            href={`https://goo.gl/maps/TSZ2T6Ti4oo`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2>800 Gillmer Rd <br /> Leavittsbug Ohio 44430</h2>
          </a> */}
          <br />
          <h3>If you or anyone you know is interested in discussing a coaching opportunity or would like to get a private tryout for your daughter please contact us here by PM or email at: </h3>
          <h2>organization@email.com</h2>
          <br />
          <h2>or call XXX-XXX-XXXX</h2>
          <br />
        </CardBody>
      </Card>
    </div>
  );
};

export default TryOutsStillNeed;
