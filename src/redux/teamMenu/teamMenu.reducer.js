import TeamMenuActionTypes from "./teamMenu.types";
import { closeDropdown } from "./teamMenu.utils";

const INITIAL_STATE = {
  hidden: true
};

const teamMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamMenuActionTypes.TOGGLE_TEAMS_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case TeamMenuActionTypes.CLOSE_TEAMS_DROPDOWN:
      return {
        ...state,
        hidden: closeDropdown(action.payload, state.hidden)
      };
    default:
      return state;
  }
};

export default teamMenuReducer;
