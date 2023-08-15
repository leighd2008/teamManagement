import RecruitingActionTypes from "./recruiting.types";

export const openModalHandler = () => ({
  type: RecruitingActionTypes.OPEN_MODAL_HANDLER,
});

export const closeModalHandler = () => ({
  type: RecruitingActionTypes.CLOSE_MODAL_HANDLER,
});
