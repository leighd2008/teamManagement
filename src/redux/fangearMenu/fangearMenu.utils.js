export const closeDropdown = hidden => {
  if (hidden === null) {
    return hidden;
  } else {
    hidden = !hidden;
    return hidden;
  }
};
