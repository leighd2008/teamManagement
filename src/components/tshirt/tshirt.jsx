import React from 'react';
import { connect } from "react-redux";

import * as Survey from "survey-react";
import { firestore } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";

// import './enterAddress.scss'

const TShirt = ({ teamData, title, playerIndex }) => {

const json1 = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "tshirt_size",
          "title": "T-Shirt",
          "isRequired": true,
          "size": 25
        },
      ],
    }
  ]
}

  const tshirt = (survey, options) => {
    //Write survey results into database
    const roster = teamData[title].roster;
    const teamId = teamData[title].id;
    roster[playerIndex]['tshirt_size'] = survey.data.tshirt_size

    firestore.collection('teams').doc(teamId).update({
      roster: roster,
    })
  }

  
  var model1 = new Survey.Model(json1);
  
      return (
        <div className='survey'>
          <Survey.Survey model={model1} onComplete={tshirt} />
          <span> * idicates required field</span>
        </div>
      )
  };

  const mapStateToProps = createStructuredSelector({
    teamData: selectTeamData
  })

export default connect(mapStateToProps)(TShirt);