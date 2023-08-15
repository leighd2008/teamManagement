import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";
import { useState } from 'react'
import "./cvsReader.scss";
import { firestore } from "../../firebase/firebase.utils";


const CsvReader = ({ teamData }) => {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

  const processCSV = (str) => {
    let lines = str.split("\n");
    let result = [];
    
    for(const i of lines){
      let row = i.toString().split(",")
      result.push(row)
    }
    let headers = lines[0].split(",");
    let newArray = []
    
    for (let i=1; i<lines.length; i++){
      let row = result[i]
      let obj = {}
      for(var j=0; j<headers.length; j++){
        if(!row[j]){
          row[j]="";
        }
        obj[headers[j].replaceAll('"', '')] = row[j].toString().replaceAll('"', '')
      }
      newArray.push(obj)
    }
    setCsvArray(newArray)
  }
  
  const updateTournaments = (csvArray) => {
    const teamDataArray = Object.entries(teamData);
    
    teamDataArray.map((team, i) => {
      let currentTourns = []
      csvArray.map((tourn, j) => {
        if (tourn.Team === team[1].title) {
          let location = tourn.City + "," + tourn.State
          let newTourn = { Location: location, Weekend: tourn.Weekend, name: tourn.Event, date: tourn.Date }
          currentTourns.push(newTourn)
        }
        return null
      })
      firestore.collection("teams").doc(team[1].id).update({
        tournaments: currentTourns
      })
      return null
    })
    return null
  }

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();
    
    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text)
      updateTournaments(csvArray)
    }
    reader.readAsText(file);
  }
  
  return (
    <form id='csv-form' className="cvsReader">
      <input
        type='file'
        accept='.csv'
        id='csvFile'
        onChange={(e) => {
          setCsvFile(e.target.files[0])
        }}
      >
      </input>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault()
          if(csvFile)submit()
        }}>
        Submit
      </button>
      <br />
    </form>
  );
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData,
})

export default connect(mapStateToProps)(CsvReader);