import GuidelinesMenuActionTypes from "./guidelinesMenu.types";

export const toggleGuidelinesHidden = () => ({
  type: GuidelinesMenuActionTypes.TOGGLE_GUIDELINES_HIDDEN
});

export const closeGuidelinesDropdown = () => ({
  type: GuidelinesMenuActionTypes.CLOSE_GUIDELINES_DROPDOWN
});
