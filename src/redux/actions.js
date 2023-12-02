export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

// why is it here if not used anywhere?
export const setSelectedCategory = category => ({
  type: SET_SELECTED_CATEGORY,
  payload: category
});
