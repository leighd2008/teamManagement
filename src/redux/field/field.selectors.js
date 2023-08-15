import { createSelector } from "reselect";

const selectField = state => state.field;

export const selectFieldData = createSelector(
  [selectField],
  field => field.fields
);

// export const selectFieldForDatabase = createSelector(
//   [selectFieldData],
//   fields => (fields ? Object.keys(fields).map(key => fields[key]) : [])
// );

// export const selectOneField = collectionUrlParam => createSelector(
//   [selectFieldData],
//   fields => (fields ? fields[collectionUrlParam] : null)
// );
