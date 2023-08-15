import { createSelector } from "reselect";

const selectAll_Teams = state => state.all_teams;

export const selectAll_TeamsTeams = createSelector(
  [selectAll_Teams],
  all_teams => all_teams.teams
);
