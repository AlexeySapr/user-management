import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/usersManagement';
import { useAddUserMutation, useUpdateUserMutation } from 'redux/usersAPI';

import LoadingButton from '@mui/lab/LoadingButton';

import { FormUser } from './FormUser.styled';
import InputField from './InputField';

const initState = { name: '', surname: '', birthday: '', phone: '', email: '' };

const UserForm = ({ closeModal, isAddUser, isUpdateUser }) => {
  const [formValues, setFormValues] = useState(() => initState);
  const isModalAddUserOpen = useSelector(selectors.getOpenModalAddUser);
  const isModalUpdateUserOpen = useSelector(selectors.getOpenModalUpdateUser);
  const updateUserID = useSelector(selectors.getUpdateUserID);

  const [addUser, { isLoading }] = useAddUserMutation();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    console.log('formValues: ', formValues);

    updateUser({ updateUserID, ...formValues });

    // addUser(formValues);
    // setFormValues(initState);
    closeModal();
  };

  return (
    <>
      <Toaster />
      <FormUser onSubmit={onSubmit}>
        <InputField
          label={'Name'}
          name={'name'}
          value={formValues.name}
          onChange={handleChange}
        />
        <InputField
          label={'Surname'}
          name={'surname'}
          value={formValues.surname}
          onChange={handleChange}
        />
        <InputField
          label={'Birthday'}
          name={'birthday'}
          value={formValues.birthday}
          onChange={handleChange}
        />
        <InputField
          label={'Phone'}
          name={'phone'}
          value={formValues.phone}
          onChange={handleChange}
        />
        <InputField
          label={'Email'}
          name={'email'}
          value={formValues.email}
          onChange={handleChange}
        />
        <LoadingButton
          type="submit"
          loading={isLoading}
          disabled={isLoading}
          loadingIndicator="Adding..."
          variant="outlined"
        >
          Add contact
        </LoadingButton>
      </FormUser>
    </>
  );
};

export default UserForm;
