import RegistrationActionTypes from "./registration.types"

const INITIAL_STATE = {
  preregistration: null,
  registered: null
};

const registrationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegistrationActionTypes.UPDATE_REGISTERED:
      return {
      ...state,
      registered: action.payload
    };
      
    default:
      return state;
  }
};

export default registrationReducer;