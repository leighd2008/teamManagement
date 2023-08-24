import React from "react";

import Recruiting from "../../components/recruiting/recruiting";
import TourneyWins from "../../components/tourneyWins/tourneyWins";
import Teams from "../../components/all_teams/all_teams";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <h4 className="description">Optional: Celebratory photos for tournament wins, home runs etc. can go here</h4><TourneyWins />
    <h4 className="description">Optional: informational popups can go here i.e. ...</h4>
    <Recruiting />
    <h4 className="description">Individual team photos as links to team page.</h4>
    <Teams />
  </div>
);

export default HomePage;
