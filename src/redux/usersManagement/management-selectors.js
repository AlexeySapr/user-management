export const getFilter = state => state.managementReducer.filter;

export const getOpenModalAddUser = state =>
  state.managementReducer.isModalAddUserOpen;

export const getOpenModalUpdateUser = state =>
  state.managementReducer.isModalUpdateUserOpen;
