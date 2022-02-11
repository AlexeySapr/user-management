import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './management-actions';

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const isModalAddUserOpen = createReducer(false, {
  [actions.openModalAddUser]: (_, { payload }) => payload,
});

const isModalUpdateUserOpen = createReducer(false, {
  [actions.openModalUdateUser]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
  isModalAddUserOpen,
  isModalUpdateUserOpen,
});
