export const useValidateName = ({ name }) => {
  const isNameEmpty = name === '';
  const regName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  if (!isNameEmpty && !regName.test(name)) {
    return [true, 'Name may contain only letters, apostrophe, dash and spaces'];
  } else {
    return [false, ''];
  }
};

export const useValidateSurname = ({ surname }) => {
  const isSurnameEmpty = surname === '';
  const regSurname =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  if (!isSurnameEmpty && !regSurname.test(surname)) {
    return [
      true,
      'Surname may contain only letters, apostrophe, dash and spaces',
    ];
  } else {
    return [false, ''];
  }
};

export const useValidateEmail = ({ email }) => {
  const isEmailEmpty = email === '';
  const regEmail = /^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/;

  if (!isEmailEmpty && !regEmail.test(email)) {
    return [true, 'Invalid email'];
  } else {
    return [false, ''];
  }
};
