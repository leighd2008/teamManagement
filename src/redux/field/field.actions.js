import FieldActionTypes from "./field.types";

export const updateFields = fieldsMap => ({
  type: FieldActionTypes.UPDATE_FIELDS,
  payload: fieldsMap
});
