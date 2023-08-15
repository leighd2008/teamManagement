import TeamMenuActionTypes from "./teamMenu.types";

export const toggleTeamsHidden = () => ({
  type: TeamMenuActionTypes.TOGGLE_TEAMS_HIDDEN
});

export const closeTeamDropdown = () => ({
  type: TeamMenuActionTypes.CLOSE_TEAMS_DROPDOWN
});
