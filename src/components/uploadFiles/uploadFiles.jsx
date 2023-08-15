import React, { useState } from 'react';
import { storage } from "../../firebase/firebase.utils";
import { firestore } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";


import "./uploadFiles.scss";

const UploadFiles = ({ teamData, title, playerIndex, category }) => {
  const [imageAsFile, setImageAsFile] = useState(null)
  const [imageAsUrl, setImageAsUrl] = useState("")

  const handleImageAsFile = (e) => {
    setImageAsFile(e.target.files[0]);
  }

  const updateTeamData = (imageAsUrl) => {
    const roster = teamData[title].roster;
    const teamId = teamData[title].id
    roster[playerIndex][category] = imageAsUrl;
    firestore.collection('teams').doc(teamId).update({
      roster: roster,
    })
  }

  const handleFireBaseUpload = (e) => {
    e.preventDefault()
    const uploadTask = storage.ref(`/${category}/${title}/${imageAsFile.name}`).put(imageAsFile);
    uploadTask.on('state_changed', () => {
      storage
        .ref(`${category}/${title}`)
        .child(imageAsFile.name)
        .getDownloadURL()
        .then((imageAsUrl) => {
          setImageAsFile(null);
          setImageAsUrl(imageAsUrl);
          updateTeamData(imageAsUrl);
        })
    });

  }

  return (
    <div className="uploadFiles">
      <form className='upload' onSubmit={handleFireBaseUpload}>
        <input className='file'
          type="file"
          onChange={handleImageAsFile}
          style={{ backgroundColor: "white", color: "white"}}
        />
        <div className="preview">
          {!imageAsFile ? <p>No file selected</p> : <p>{`${imageAsFile.name}`}</p>
          }
        </div>
        <button className='uploadFirebase' disabled={!imageAsFile}>Upload </button>
      </form>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
})

export default connect(mapStateToProps)(UploadFiles);