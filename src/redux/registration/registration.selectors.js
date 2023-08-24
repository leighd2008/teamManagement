import { createSelector } from "reselect";

const selectRegistered = state => state.registration;

export const selectRegisteredData = createSelector(
  [selectRegistered],
  registration => registration.registered
);
