import React from "react";

import Banner from "../../components/banner/banner";

import "./demetraBiopage.scss";

const DemetraBioPage = () => {
  const images = require.context("../../assets", true);
  let imgsrc = images(`./Demetra_Noble.jpg`);
  
  return (

    <div className="demetraBio">
      <Banner
        backgroundImage={imgsrc}
        teamName="Demetra Noble"
        // location={location}
      // /><img src={imgsrc} alt="Demetra" 
      />
      <h2>FIRE FASTPITCH believes that having an organized, uniform, well educated coaching staff is the key to our future success.
      </h2>
      <br/>
      <h2>We announced earlier today that Demetra Noble will serve as an invaluable training  resource for all of our existing, new and future coaches. The goal for our coaches is to become the most efficient, well rounded coaching group in the area.
      </h2>
      <br />
      <h2>Demetra has an impressive softball resume and she knows how to train and coach players to get the most from them and it is our goal to pass that on to our coaches.
      </h2>
      <br />
      <h2>She will be a guiding force for coaching initiatives and coaching education seminars. With the addition of Demetra, we believe that our coaching staff will be the most efficient, well rounded coaching group in the area. 
      </h2>
      <br />
    </div>
  );
}

export default DemetraBioPage;