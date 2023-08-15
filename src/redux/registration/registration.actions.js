import RegistrationActionTypes from "./registration.types.js";

export const updatePreregistration = preregistrationMap => ({
  type: RegistrationActionTypes.UPDATE_PREREGISTRATION,
  payload: preregistrationMap
});

export const updateRegistered = registeredMap => ({
  type: RegistrationActionTypes.UPDATE_REGISTERED,
  payload: registeredMap
});

