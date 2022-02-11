import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { FormContacts } from './UserForm.styled';

import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import PhoneMaskCustom from '../inputMasks/PhoneMaskCustom';

const initState = { name: '', phone: '' };

const UserForm = () => {
  const [formValues, setFormValues] = useState(() => initState);

  const handleChange = event => {};

  const onSubmit = event => {
    event.preventDefault();

    console.log('formValues: ', formValues);
    setFormValues(initState);
  };

  return (
    <>
      <Toaster />
      <FormContacts onSubmit={onSubmit}>
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          inputProps={{
            inputMode: 'text',
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              'Name may contain only letters, apostrophe, dash and spaces.',
          }}
          variant="standard"
          sx={{ mb: 2 }}
          required
        />
        <TextField
          id="standard-basic"
          label="Phone"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          InputProps={{
            inputMode: 'tel',
            inputComponent: PhoneMaskCustom,
          }}
          variant="standard"
          sx={{ mb: 2 }}
          required
        />
        <LoadingButton
          type="submit"
          // loading={isLoading}
          // disabled={isLoading}
          loadingIndicator="Adding..."
          variant="outlined"
        >
          Add contact
        </LoadingButton>
      </FormContacts>
    </>
  );
};

export default UserForm;
