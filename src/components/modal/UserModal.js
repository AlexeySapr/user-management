import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/usersManagement';

import Modal from '@mui/material/Modal';
import { FormContainer } from './UserModal.styled';
import UserForm from 'components/userForm/UserForm';

const UserModal = () => {
  const isModalAddUserOpen = useSelector(selectors.getOpenModalAddUser);
  const isModalUpdateUserOpen = useSelector(selectors.getOpenModalUpdateUser);
  const dispatch = useDispatch();

  const handleClose = () => {
    if (isModalAddUserOpen) {
      dispatch(actions.openModalAddUser(false));
    }
    if (isModalUpdateUserOpen) {
      dispatch(actions.openModalUdateUser({ id: -1, isModalopen: false }));
    }
  };

  return (
    <>
      <Modal
        open={isModalAddUserOpen || isModalUpdateUserOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FormContainer>
          <UserForm closeModal={handleClose} />
        </FormContainer>
      </Modal>
    </>
  );
};

export default UserModal;
