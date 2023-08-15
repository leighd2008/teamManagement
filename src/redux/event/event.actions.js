import EventActionTypes from "./event.types";

export const openEventModalHandler = () => ({
  type: EventActionTypes.OPEN_EVENT_MODAL_HANDLER,
});

export const closeEventModalHandler = () => ({
  type: EventActionTypes.CLOSE_EVENT_MODAL_HANDLER,
});
