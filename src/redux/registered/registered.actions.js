import RegisteredActionTypes from "./registered.types.js";

export const updateRegistered = registeredMap => ({
  type: RegisteredActionTypes.UPDATE_REGISTERED,
  payload: registeredMap
});
