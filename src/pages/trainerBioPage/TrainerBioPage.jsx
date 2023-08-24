import React from "react";

import Banner from "../../components/banner/banner";

const TrainerBioPage = () => {
  const images = require.context("../../assets", true);
  let imgsrc = images(`./Trainer_Pic.jpg`);
  
  return (

    <div className="trainerBio">
      <Banner
        backgroundImage={imgsrc}
        teamName="Trainer Name"
      />
      <h2>Biography for whatever awesome trainer you have available.</h2>
    </div>
  );
}

export default TrainerBioPage;