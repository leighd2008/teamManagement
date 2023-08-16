import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeamEvents from "../../components/teamEvents/teamEvents";
import Banner from "../../components/banner/banner";
// import { selectTeamData } from "../../redux/team/team.selectors";
import Recruiting from "../../components/recruiting/recruiting";
// import MembersOnlyLogin from "../../components/membersOnlyLogin/membersOnlyLogin";


import "./teamPage.scss";

const TeamPage = ({ eventurls, teamname, title, teamData }) => {
  const team = teamData[title];
  // console.log(teamData)
  // const teamName = `${team.teamName}`;
  // const location = `${team.location}`;
  // const eventboard = team.eventUrls;
  // const images = require.context("../../assets", true);
  // let imgsrc = images(`./${team.teamPic}`);
  // let imgsrc = `${team.teamPic}`;

  // const calendarLink = `${team.calendarLink}`;
  // console.log(eventboard, eventurls, team.eventUrls)

  return (
    <div className="teampage">
      <Recruiting />
      {/* <Banner
        backgroundImage={imgsrc}
        teamName={teamName}
        location={location}
      /> */}
      {/* <MembersOnlyLogin /> */}
      {/* {eventboard === true ? (
          <TeamEvents
            eventUrls={eventurls}
            teamname={teamname}
            calendarLink={calendarLink}
          />
      ) : null} */}
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   teamData: selectTeamData
// });

// export default connect(mapStateToProps)(TeamPage);
export default TeamPage