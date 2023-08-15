import GuidelinesMenuActionTypes from "./guidelinesMenu.types";
import { closeDropdown } from "./guidelinesMenu.utils";

const INITIAL_STATE = {
  hidden: true
};

const guidelinesMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GuidelinesMenuActionTypes.TOGGLE_GUIDELINES_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case GuidelinesMenuActionTypes.CLOSE_GUIDELINES_DROPDOWN:
      return {
        ...state,
        hidden: closeDropdown(action.payload, state.hidden)
      };
    default:
      return state;
  }
};

export default guidelinesMenuReducer;
