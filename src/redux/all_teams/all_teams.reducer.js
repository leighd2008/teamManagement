const INITIAL_STATE = {
  teams: [
    {
      title: "Fire 18U",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F18U_team.jpg?alt=media&token=ef057099-35b3-4e28-95d3-a75de0dd3187",
      id: 4,
      linkUrl: "Fire18U"
    },
    {
      title: "Fire 16U",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F16_Team.jpeg?alt=media&token=b853b5a4-cdb5-49b4-a187-b64109e62653",
      id: 3,
      linkUrl: "Fire16U"
    },
    {
      title: "Fire 2007",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F07_team.jpg?alt=media&token=52721f9e-592b-41d3-9775-0c59efae56cb",
      id: 5,
      linkUrl: "Fire2007"
    },
    {
      title: "Fire 2008",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F08_Team.jpg?alt=media&token=788c6b61-1bb4-4824-9878-e44b975d6699",
      id: 1,
      linkUrl: "Fire2008"
    },
    {
      title: "Fire 2009",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F09_team.jpg?alt=media&token=e5305f7e-2cec-403d-9bc9-8bce39a2d0c6",
      id: 2,
      linkUrl: "Fire2009"
    },
    {
      title: "Fire 2010",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F10_team.jpg?alt=media&token=4cd42aa8-72a3-4d44-ac9c-52b8be68fd1f",
      id: 6,
      linkUrl: "Fire2010"
    },
    {
      title: "Fire 2011",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F11_team.jpg?alt=media&token=16d63e87-0e53-4c4f-8504-ddd391221702",
      id: 7,
      linkUrl: "Fire2011"
    },
    {
      title: "Fire 2012",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F12_team.jpg?alt=media&token=baa7d286-6aa8-4b70-b0e2-a64cf76d899f",
      id: 8,
      linkUrl: "Fire2012"
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
