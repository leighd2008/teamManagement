import RecruitingActionTypes from "./recruiting.types";

const INITIAL_STATE = {
  isShowing: false,
};

const recruitingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecruitingActionTypes.OPEN_MODAL_HANDLER:
      return {
        ...state,
        isShowing: true,
      };
    case RecruitingActionTypes.CLOSE_MODAL_HANDLER:
      return {
        ...state,
        isShowing: false,
      };
    default:
      return state;
  }
};

export default recruitingReducer;
