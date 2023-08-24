import AdminActionTypes from "./admin.types";

const INITIAL_STATE = {
  bcShowing: false, /* birth certificate */
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminActionTypes.TOGGLE_BC_MODAL:
      return {
        ...state,
        bcShowing: !state.bcShowing,
      };
    default:
      return state;
  }
};

export default adminReducer;
