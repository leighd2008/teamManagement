import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import "./tryout.scss";

const TryOuts = () => {
  return (
    <div className="tryouts">
      <Card style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00", width: '100vw' }}>
        <CardBody>
          <CardTitle className="tc f1" tag="h1">
            Are you ready to play with FIRE?
          </CardTitle>
          <h3>FIRE FASTPITCH team tryouts for all age groups will be </h3>
          <h1>July 30st, July 31st, Aug. 6th & Aug. 7th</h1>
          <h3>REGISTRATION:</h3>
          <a href="Preregistration" rel="noopener noreferrer">
            <h2>Pre-registration form can be filled out here!</h2>
          </a>
          <h3> or at Field #1 on the day of tryouts. </h3>
          <br />
          <h2>10U(2012 & 2013) 12U(2010 & 2011) 14U(2008 & 2009) </h2><h3>10:00AM-12:00PM  - ARIVE @ 9:30AM</h3>
          <br />
          <h2>16U(2006 & 2007) 18U(2004 & 2005) </h2><h3>1:00-3:00PM  - ARIVE @ 12:30PM</h3>
          <br />
          <h2>*PITCHERS & CATCHERS</h2> <h3> will need to stay an additional 30 min to be evaluated separately</h3>
          <br />
          <h2>Please be sure that the girls are dressed & equipped as they would for a game. Arrive hydrated and bring water.</h2>
          <br />
          <h3>There is nothing to be nervous about, we look for much more than home runs & 70 MPH fastballs. We look for character, confidence and hustle!!!</h3>
          <br />
          <h2>LOCATION:</h2>
          <a
            href={`https://goo.gl/maps/TSZ2T6Ti4oo`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3>800 Gillmer Rd <br /> Leavittsbug Ohio 44430</h3>
          </a>
          <br />

          <h2>If you or anyone you know is interested in discussing a coaching opportunity or would like to get a private tryout for your daughter please contact us: </h2>
          <h3>Fire.Fastpitch.Softball@gmail.com</h3>
          <br />
          <h3>or call 330-980-1366</h3>
          <br />
        </CardBody>
      </Card>
    </div>
  );
};

export default TryOuts;
