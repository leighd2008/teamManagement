import FieldActionTypes from "./field.types"
import { addEventToSchedule } from "./field.utils";

const INITIAL_STATE = {
  fields: []
};

const fieldReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FieldActionTypes.UPDATE_FIELDS:
      return {
        ...state,
        fields: action.payload
      };
    case FieldActionTypes.ADD_EVENT:
      return {
        ...state,
        schedule: addEventToSchedule(state.schedule, action.payload)
      };
    default:
      return state;
  }
};

export default fieldReducer;