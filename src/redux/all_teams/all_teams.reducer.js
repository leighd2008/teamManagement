const INITIAL_STATE = {
  teams: [
    {
      title: "Team 1",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/teammanagement-2507c.appspot.com/o/teampics%2Fhannah-busing-Zyx1bK9mqmA-unsplash.jpg?alt=media&token=d182c6b6-0c8c-4589-b725-36fd69ca29dc",
      id: 1,
      linkUrl: "Team1"
    },
    {
      title: "Team 2",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/teammanagement-2507c.appspot.com/o/teampics%2Fjavier-allegue-barros-i5Kx0P8A0d4-unsplash.jpg?alt=media&token=a51ef00e-8d6e-430a-b8ab-dde9994faa07",
      id: 2,
      linkUrl: "Team2"
    },
    {
      title: "Team 3",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/teammanagement-2507c.appspot.com/o/teampics%2Fpascal-swier-7de474KZIbs-unsplash.jpg?alt=media&token=52441d9a-f661-46ba-be79-a67dab13d88e",
      id: 3,
      linkUrl: "Team3"
    },
    {
      title: "Team 4",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/teammanagement-2507c.appspot.com/o/teampics%2Fvlad-hilitanu-1FI2QAYPa-Y-unsplash.jpg?alt=media&token=5e2e5bc7-367a-44ad-8476-d7a914059227",
      id: 4,
      linkUrl: "Team4"
    }
  ]
};

const all_teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default all_teamsReducer;
