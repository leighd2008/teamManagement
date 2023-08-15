import TeamActionTypes from "./team.types";

const INITIAL_STATE = {
  teams: null
};

const teamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamActionTypes.UPDATE_TEAMS:
      return {
        ...state,
        teams: action.payload
      };
    default:
      return state;
  }
};

export default teamReducer;
