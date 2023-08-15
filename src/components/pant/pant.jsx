import React from 'react';
import { connect } from "react-redux";

import * as Survey from "survey-react";
import { firestore } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";

// import './pant.scss'

const Pant = ({ teamData, title, playerIndex }) => {

const json1 = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "pant_size",
            "title": "Pants",
            "isRequired": true,
          },
        ],
      }
    ]
  }

  const pant = (survey, options) => {
    //Write survey results into database
    const roster = teamData[title].roster;
    const teamId = teamData[title].id;
    roster[playerIndex]['pant_size'] = survey.data.pant_size

    firestore.collection('teams').doc(teamId).update({
      roster: roster,
    })
  }
  var model1 = new Survey.Model(json1);

      return (
        <div className='survey'>
          <Survey.Survey model={model1} onComplete={pant} />
          <span> * idicates required field</span>
        </div>
      )
  };

  const mapStateToProps = createStructuredSelector({
    teamData: selectTeamData
  })

  export default connect(mapStateToProps)(Pant);