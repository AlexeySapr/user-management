import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/usersManagement';
// import { useState } from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserForm from 'components/userForm/UserForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserModal = () => {
  const isModalAddUserOpen = useSelector(selectors.getOpenModalAddUser);
  const isModalUpdateUserOpen = useSelector(selectors.getOpenModalUpdateUser);
  const dispatch = useDispatch();

  const handleClose = () => {
    if (isModalAddUserOpen) {
      dispatch(actions.openModalAddUser(false));
    }
    if (isModalUpdateUserOpen) {
      dispatch(actions.openModalUdateUser(false));
    }
  };

  return (
    <div>
      <Modal
        open={isModalAddUserOpen || isModalUpdateUserOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UserForm />
      </Modal>
    </div>
  );
};

export default UserModal;
