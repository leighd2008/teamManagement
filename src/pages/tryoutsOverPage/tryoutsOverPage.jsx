import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import "./tryoutsOverPage.scss";

const TryoutsOver = () => {
  return (
    <div className="tryouts">
      <Card style={{ backgroundColor: "#6c757d00", borderColor: "#6c757d00", width: '100vw' }}>
        <CardBody>
          <CardTitle className="tc f1" tag="h1">
            Are you ready to play?
          </CardTitle>
          <h3>Try-outs are over, check back for details on next year's tryouts. </h3> <br />

          <h2>If you or anyone you know is interested in discussing a coaching opportunity or would like to get a private tryout for your daughter please contact us: </h2>
          <h3>Fire.Fastpitch.Softball@gmail.com</h3>
          <br />
          <h3>or call XXX-XXX-XXXX</h3>
          <br />
        </CardBody>
      </Card>
    </div>
  );
};

export default TryoutsOver;
