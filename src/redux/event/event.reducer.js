import EventActionTypes from "./event.types";

const INITIAL_STATE = {
  isEventShowing: false,
};

const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EventActionTypes.OPEN_EVENT_MODAL_HANDLER:
      return {
        ...state,
        isEventShowing: true,
      };
    case EventActionTypes.CLOSE_EVENT_MODAL_HANDLER:
      return {
        ...state,
        isEventShowing: false,
      };
    default:
      return state;
  }
};

export default eventReducer;
