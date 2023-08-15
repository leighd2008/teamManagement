import FangearMenuActionTypes from "./fangearMenu.types";
import { closeDropdown } from "./fangearMenu.utils";

const INITIAL_STATE = {
  hidden: true
};

const fangearMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FangearMenuActionTypes.TOGGLE_FANGEAR_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case FangearMenuActionTypes.CLOSE_FANGEAR_DROPDOWN:
      return {
        ...state,
        hidden: closeDropdown(action.payload, state.hidden)
      };
    default:
      return state;
  }
};

export default fangearMenuReducer;
