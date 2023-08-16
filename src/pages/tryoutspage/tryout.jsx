import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import "./tryout.scss";

const TryOuts = () => {
  return (
    <div className="tryouts">
      <Card style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00", width: '100vw' }}>
        <CardBody>
          <CardTitle className="tc f1" tag="h1">
            Are you ready to play?
          </CardTitle>
          <h3>Your Organization team tryouts for all age groups will be </h3>
          <h1>July 30st, July 31st, Aug. 6th & Aug. 7th</h1>
          <h3>REGISTRATION:</h3>
          <a href="Preregistration" rel="noopener noreferrer">
            <h2>Pre-registration form can be filled out here!</h2>
          </a>
          <h3> or at Field #1 on the day of tryouts. </h3>
          <br />
          <h2>Age Group 1 </h2><h3>10:00AM-12:00PM  - ARRIVE @ 9:30AM</h3>
          <br />
          <h2>Age Group 2 </h2><h3>1:00-3:00PM  - ARRIVE @ 12:30PM</h3>
          <br />
          <h2>*Special group</h2> <h3> special instructions</h3>
          <br />
          <h2>Please be sure that players are dressed & equipped as they would for a game. Arrive hydrated and bring water.</h2>
          <br />
          <h3>Anything else you may want to say</h3>
          <br />
          <h2>LOCATION: map link</h2>
          {/* <a
            href={`https://goo.gl/maps/TSZ2T6Ti4oo`}
            rel="noopener noreferrer"
            target="_blank"
          > */}
            <h3>address</h3>
          {/* </a> */}
          <br />

          <h2>Something else to add? </h2>
          <h3>yourOrganization@email.com</h3>
          <br />
          <h3>organization phone number</h3>
          <br />
        </CardBody>
      </Card>
    </div>
  );
};

export default TryOuts;
