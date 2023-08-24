import RegistrationActionTypes from "./registration.types.js";

export const updateRegistered = registeredMap => ({
  type: RegistrationActionTypes.UPDATE_REGISTERED,
  payload: registeredMap
});

