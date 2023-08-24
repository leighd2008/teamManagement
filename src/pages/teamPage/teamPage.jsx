import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeamEvents from "../../components/teamEvents/teamEvents";
import Banner from "../../components/banner/banner";
import { selectTeamData } from "../../redux/team/team.selectors";
import MembersOnlyLogin from "../../components/membersOnlyLogin/membersOnlyLogin";

import "./teamPage.scss";

const TeamPage = ({ eventurls, title, teamData }) => {
  const team = teamData[title];
  const teamName = `${team.teamName}`;
  const eventboard = team.eventboard;
  let imgsrc = `${team.teamPic}`;

  const calendarLink = `${team.calendarLink}`;

  return (
    <div className="teampage">
      <Banner
        backgroundImage={imgsrc}
        teamName={teamName}
      />
      <h4>Access to secure page for uploading player information i.e. addresses and birth certificates.</h4>
      <MembersOnlyLogin />
      <h4>Use password Team1Family to see family page</h4>
      {eventboard === true ? (
          <TeamEvents
            eventUrls={eventurls}
            teamName={teamName}
            calendarLink={calendarLink}
          />
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
});

export default connect(mapStateToProps)(TeamPage);