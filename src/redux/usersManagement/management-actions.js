import { createAction } from '@reduxjs/toolkit';
const changeFilter = createAction('userManagement/changeFilter');

const openModalAddUser = createAction('userManagement/openModalAddUser');

const openModalUdateUser = createAction('userManagement/openModalUdateUser');

export { changeFilter, openModalAddUser, openModalUdateUser };
