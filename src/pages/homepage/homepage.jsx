import React from "react";

import Recruiting from "../../components/recruiting/recruiting";
import TourneyWins from "../../components/tourneyWins/tourneyWins";
import Celebrate from "../../components/celebrate/celebrate";
import Teams from "../../components/all_teams/all_teams";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <TourneyWins />
    <Celebrate />
    <Recruiting />
    <Teams />
  </div>
);

export default HomePage;
