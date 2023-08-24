import React from 'react';
import { connect } from "react-redux";

// import * as Survey from "survey-react";
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { firestore } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectRegisteredData } from "../../redux/registration/registration.selectors";

import './preregistrationpage.scss'
const currentMonth = new Date().getMonth
let currentYear
if (currentMonth > 8) {
  currentYear = new Date().getFullYear()
} else {
  currentYear = new Date().getFullYear() - 1
}
const surveyJson = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "name",
          "title": "Player's First Name:",
          "isRequired": true,
          "size": 50
        },
        {
          "type": "text",
          "name": "last",
          "title": "Player's Last Name:",
          "isRequired": true,
          "size": 50
        },
        {
          "type": "text",
          "name": "experience",
          "title": "Years of Travel Softball Experience:",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "previous",
          "title": "Previous Travel Teams:",
          "defaultValue": "  ",
          "cols": 50
        },
        {
          "type": "checkbox",
          "name": "positions",
          "title": "Positions:",
          "isRequired": true,
          "choices": [
            {
              "value": "P, ",
              "text": "Pitcher"
            },
            {
              "value": "C, ",
              "text": "Catcher"
            },
            {
              "value": "1B, ",
              "text": "1st Base"
            },
            {
              "value": "2B, ",
              "text": "2cnd Base"
            },
            {
              "value": "3B, ",
              "text": "3rd Base"
            },
            {
              "value": "SS, ",
              "text": "Shortstop"
            },
            {
              "value": "LF, ",
              "text": "Left field"
            },
            {
              "value": "CF, ",
              "text": "Center field"
            },
            {
              "value": "RF, ",
              "text": "Right field"
            }
          ],
          "colCount": 3
        },
        {
          "type": "radiogroup",
          "name": "throws",
          "title": "Throws:",
          "isRequired": true,
          "choices": [
            {
              "value": "Right",
              "text": "Right handed"
            },
            {
              "value": "Left",
              "text": "Left handed"
            },
            {
              "value": "Both",
              "text": "Both"
            }
          ],
          "colCount": 3
        },
        {
          "type": "radiogroup",
          "name": "bats",
          "title": "Bats:",
          "isRequired": true,
          "choices": [
            {
              "value": "Right",
              "text": "Right handed"
            },
            {
              "value": "Left",
              "text": "Left handed"
            },
            {
              "value": "Both",
              "text": "Both"
            }
          ],
          "colCount": 3
        },
        {
          "type": "radiogroup",
          "name": "division",
          "title": "Division age group:",
          "isRequired": true,
          "choices": [
            {
              "value": "8U",
              "text": `8U (DOB: 09/${currentYear - 8} - 08/${currentYear - 6})`
            },
            {
              "value": "10U",
              "text": `10U (DOB: 09/${currentYear - 10} - 08/${currentYear - 8})`
            },
            {
              "value": "12U",
              "text": `12U (DOB: 09/${currentYear - 12} - 08/${currentYear - 10})`
            },
            {
              "value": "14U",
              "text": `14U (DOB: 09/${currentYear - 14} - 08/${currentYear - 12})`
            },
            {
              "value": "16U",
              "text": `16U (DOB: 09/${currentYear - 16} - 08/${currentYear - 14})`
            },
            {
              "value": "18U",
              "text": `18U (DOB: 09/${currentYear - 18} - 08/${currentYear - 16})`
            }
          ],
          "colCount": 2
        },
        {
          "type": "text",
          "name": "DOB",
          "title": "Date of Birth",
          "isRequired": true,
          "requiredErrorText": "Please enter a valid Date of Birth.",
          "inputType": "date",
          "min": `09/01/${currentYear - 18}`,
          "max": `09/01/${currentYear - 6}`,
          "placeHolder": "mm/dd/yyyy"
        },
        {
          "type": "text",
          "name": "parent1",
          "isRequired": true,
          "title": "Parent/Guardian name -1",
          "size": 50,
        },
        {
          "type": "text",
          "name": "parent1phone",
          "title": "Parent/Guardian Phone number:",
          "isRequired": true,
          "requiredErrorText": "Please enter a valid phone number.",
          "validators": [
            {
              "type": "numeric"
            }
          ],
          "inputType": "tel",
          "maxLength": 10,
          "size": 50,
        },
        {
          "type": "text",
          "name": "parent1email",
          "title": "Parent/Guardian Email Address:",
          "isRequired": true,
          "requiredErrorText": "Please enter a valid email address.",
          "validators": [
            {
              "type": "email"
            }
          ],
          "inputType": "email",
          "size": 50,
        },
        {
          "type": "text",
          "name": "parent2",
          "title": "Parent/Guardian name -2",
          "placeHolder": "optional",
          "defaultValue": "  ",
          "size": 50,
        },
        {
          "type": "text",
          "name": "parent2phone",
          "title": "Parent/Guardian Phone number:",
          "defaultValue": "  ",
          "requiredErrorText": "Please enter a valid phone number.",
          "validators": [
            {
              "type": "numeric"
            }
          ],
          "inputType": "tel",
          "maxLength": 10,
          "size": 50,
          "placeHolder": "optional"

        },
        {
          "type": "text",
          "name": "parent2email",
          "title": "Parent/Guardian Email Address:",
          "defaultValue": "  ",
          "requiredErrorText": "Please enter a valid email address.",
          "validators": [
            {
              "type": "email"
            }
          ],
          "inputType": "email",
          "size": 50,
          "placeHolder": "optional"
        },
        {
          "type": "radiogroup",
          "name": "coaching",
          "defaultValue": "  ",
          "title": "Are you interested in coaching?",
          "isRequired": true,
          "choices": [
            {
              "value": "yes",
              "text": "Yes"
            },
            {
              "value": "no",
              "text": "No"
            },
            {
              "value": "maybe",
              "text": "Maybe"
            }
          ],
          "colCount": 3
        },
        {
          "type": "radiogroup",
          "name": "session",
          "title": "Which tryout session will you be attending",
          "defaultValue": "  ",
          "choices": [
            {
              "value": "July 30",
              "text": "July 30"
            },
            {
              "value": "July 31",
              "text": "July 31"
            },
            {
              "value": "August 6th",
              "text": "August 6th"
            },
            {
              "value": "August 7th",
              "text": "August 7th"
            },
            {
              "value": "TBD",
              "text": "Private, you will be contacted to schedule"
            }
          ]
        }
      ],
      "title": "Tryout Preregistration Form"
    }
  ]
};

function PreregistrationPage (allRegisteredData) {
  let registeredData = allRegisteredData.allRegisteredData
  
  const survey = new Model(surveyJson);
  
  const surveyComplete = (survey, options) => {
    //Write survey results into database
    let player = survey.data;
    player.onTeam = '';
    player.tryout = '';
    player.Reg_year = new Date().getFullYear();
    let birthdate = new Date(player.DOB);
    player.year = birthdate.getYear() + 1900;
    
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Please check your answers and click OK to proceed or Cancel to start over! \n name: ${player.name} ${player.last} \n    travel experience: ${player.experience} years \n ${player.previous ? `previous teams: ${player.previous} \n` : ""} positions: ${player.positions} \n throws: ${player.throws} handed \n bats: ${player.bats} handed \n division: ${player.division} \n DOB: ${player.DOB} \n ${player.email ? `email: ${player.email} \n` : ""} ${player.phone ? `phone: ${player.phone} \n` : ""} parent/guardians: ${player.parent1} phone: ${player.parent1phone} email: ${player.parent1email} \n ${player.parent2 ? `${player.parent2} phone: ${player.parent2phone} email: ${player.parent2email} \n` : ""} tryout session: ${player.session}`)) {
      let newplayers2 = [
        player,
        ...registeredData.Registered.players
      ];
      
      const ID = registeredData.Registered.id;
      firestore.collection("registered").doc(ID).update({
        players: newplayers2,
      })
        .then(response => {
          alert(`Your registration has been submitted `)
          window.location = '/Tryouts'
        })
        
      } else {
        window.location = '/Preregistration'
    }
  }
  
  survey.onComplete.add(surveyComplete)
  return (
    <div className='survey'>
      <Survey model={survey} ></Survey>
      <span> * indicates required field</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  allRegisteredData: selectRegisteredData,
})

export default connect(mapStateToProps)(PreregistrationPage);