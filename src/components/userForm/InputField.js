import TextField from '@mui/material/TextField';
import PhoneMaskCustom from 'components/inputMasks/PhoneMaskCustom';
import BirthdayMaskCustom from 'components/inputMasks/BirthdayMaskCustom';

const getInputProps = type => {
  switch (type) {
    case 'name':
      return {
        type: 'text',
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        title: 'Name may contain only letters, apostrophe, dash and spaces',
      };
    case 'surname':
      return {
        type: 'text',
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        title: 'Surname may contain only letters, apostrophe, dash and spaces',
      };
    // case 'birthday':
    //   return {
    //     type: 'date',
    //     inputComponent: BirthdayMaskCustom,
    //     placeholder: 'dd.mm.yyyy',
    //   };
    // case 'phone':
    //   return {
    //     type: 'tel',
    //     inputComponent: PhoneMaskCustom,
    //     placeholder: '+38(xxx) xxx-xx-xx',
    //   };
    case 'email':
      return {
        type: 'email',
        // pattern: '^[^s@]+@[^s@]+.[^s@]+$',
        title: 'Email may contain @ symbol',
      };

    default:
      break;
  }
};

const InputField = ({ label, name, value, onChange }) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      // InputProps={getInputProps(inputType)}
      inputProps={getInputProps(name)}
      variant="standard"
      sx={{ mb: 2 }}
      fullWidth
      required
      // error
      // helperText="Name may contain only letters, apostrophe, dash and spaces"
    />
  );
};

export default InputField;
