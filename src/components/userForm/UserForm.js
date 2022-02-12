import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useSelector } from 'react-redux';
import { selectors } from 'redux/usersManagement';
import {
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
} from 'redux/usersAPI';

import Button from '@mui/material/Button';

import { FormUser } from './FormUser.styled';
import InputField from './InputField';

const initState = {
  name: '',
  surname: '',
  birthday: '',
  phone: '',
  email: '',
};

const UserForm = ({ closeModal }) => {
  const [formValues, setFormValues] = useState(() => initState);
  const isModalAddUserOpen = useSelector(selectors.getOpenModalAddUser);
  const isModalUpdateUserOpen = useSelector(selectors.getOpenModalUpdateUser);
  const updateUserID = useSelector(selectors.getUpdateUserID);
  const { data: userData } = useGetUserQuery(updateUserID, {
    skip: isModalAddUserOpen,
  });

  useEffect(() => {
    if (isModalUpdateUserOpen && userData) {
      setFormValues({ ...userData });
    }
  }, [isModalUpdateUserOpen, userData]);

  const [addUser, { error: addError }] = useAddUserMutation();
  console.log('addError: ', addError);
  const [updateUser, { error: updateError, isSuccess }] =
    useUpdateUserMutation();
  console.log('isSuccess: ', isSuccess);
  console.log('updateError: ', updateError);

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    if (isModalUpdateUserOpen) {
      updateUser({
        updateUserID,
        ...formValues,
        createdAt: new Date().toLocaleString(),
      });
    }
    if (isModalAddUserOpen) {
      addUser(formValues);
    }

    setFormValues(initState);

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
        <Button type="submit" variant="outlined">
          {isModalAddUserOpen && 'Add user'}
          {isModalUpdateUserOpen && 'Update user'}
        </Button>
      </FormUser>
    </>
  );
};

export default UserForm;
