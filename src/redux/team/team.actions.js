import TeamActionTypes from "./team.types";

export const updateTeams = teamsMap => ({
  type: TeamActionTypes.UPDATE_TEAMS,
  payload: teamsMap
});
