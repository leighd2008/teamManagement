import AdminActionTypes from "./admin.types";

const INITIAL_STATE = {
  bcShowing: false, /* birth certificate */
  rcShowing: false, /* report card */
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminActionTypes.TOGGLE_BC_MODAL:
      return {
        ...state,
        bcShowing: !state.bcShowing,
      };
    case AdminActionTypes.TOGGLE_RC_MODAL:
      return {
        ...state,
        rcShowing: !state.rcShowing,
      };
    default:
      return state;
  }
};

export default adminReducer;
