import React from 'react';
import { connect } from "react-redux";

import * as Survey from "survey-react";
import { firestore } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";

const EnterAddress = ({ teamData, title, playerIndex }) => {

const json = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "street",
          "title": "Street Address",
          "isRequired": true,
          "size": 25
        },
        {
          "type": "text",
          "name": "city",
          "title": "City:",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "state",
          "title": "State",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "zipcode",
          "title": "Zip Code",
          "isRequired": true,
          "validators": [
            {
              "type": "numeric"
            }
          ],
          "maxLength": 5
        },
      ],
    }
  ]
}

  const onComplete = (survey, options) => {
    //Write survey results into database
    const roster = teamData[title].roster;
    const teamId = teamData[title].id;
    roster[playerIndex]['address'] = survey.data.street
    roster[playerIndex]['city'] = survey.data.city
    roster[playerIndex]['state'] = survey.data.state
    roster[playerIndex]['zipcode'] = survey.data.zipcode

    firestore.collection('teams').doc(teamId).update({
      roster: roster,
    })
  }

      var model = new Survey.Model(json);
      return (
        <div className='survey'>
          <Survey.Survey model={model} onComplete={onComplete} />
          <span> * idicates required field</span>
        </div>
      )
  };

  const mapStateToProps = createStructuredSelector({
    teamData: selectTeamData
  })

  export default connect(mapStateToProps)(EnterAddress);