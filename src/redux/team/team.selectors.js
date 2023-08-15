import { createSelector } from "reselect";

const selectTeam = state => state.team;

export const selectTeamData = createSelector(
  [selectTeam],
  team => team.teams
);

export const selectTeamsForDatabase = createSelector(
  [selectTeamData],
  teams => (teams ? Object.keys(teams).map(key => teams[key]) : [])
);

export const selectOneTeam = collectionUrlParam =>
  createSelector(
    [selectTeamData],
    teams => (teams ? teams[collectionUrlParam] : null)
  );
