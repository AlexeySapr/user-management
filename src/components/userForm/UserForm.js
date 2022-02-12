import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useSelector } from 'react-redux';
import { selectors } from 'redux/usersManagement';
import {
  useGetUsersQuery,
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

const getUserByID = (usersArr, userID) => {
  return usersArr.filter(user => user.id === userID)[0];
};

const UserForm = ({ closeModal }) => {
  const [formValues, setFormValues] = useState(() => initState);
  const isModalAddUserOpen = useSelector(selectors.getOpenModalAddUser);
  const isModalUpdateUserOpen = useSelector(selectors.getOpenModalUpdateUser);
  const updateUserID = useSelector(selectors.getUpdateUserID);

  const { data: users } = useGetUsersQuery();
  const currentUser = getUserByID(users, updateUserID);

  useEffect(() => {
    if (isModalUpdateUserOpen && currentUser) {
      setFormValues({ ...currentUser });
    }
  }, [currentUser, isModalUpdateUserOpen]);

  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    if (isModalUpdateUserOpen) {
      toast.success(
        `User ${formValues.name} ${formValues.surname} successfully updated`,
      );
      updateUser({
        updateUserID,
        ...formValues,
        createdAt: new Date().toLocaleString(),
      });
    }
    if (isModalAddUserOpen) {
      addUser(formValues);
      toast.success(
        `User ${formValues.name} ${formValues.surname} successfully added`,
      );
    }

    setFormValues(initState);

    closeModal();
  };

  return (
    <>
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
