import TextField from '@mui/material/TextField';
import PhoneMaskCustom from 'components/inputMasks/PhoneMaskCustom';
import BirthdayMaskCustom from 'components/inputMasks/BirthdayMaskCustom';

const getInputProps = type => {
  switch (type) {
    case 'birthday':
      return {
        inputMode: 'numeric',
        inputComponent: BirthdayMaskCustom,
        placeholder: 'dd.mm.yyyy',
      };
    case 'phone':
      return {
        inputMode: 'tel',
        inputComponent: PhoneMaskCustom,
        placeholder: '+38(xxx) xxx-xx-xx',
      };
    case 'email':
      return {
        type: 'email',
      };

    default:
      break;
  }
};

const InputField = ({ label, name, value, onChange, error, errorText }) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      InputProps={getInputProps(name)}
      variant="standard"
      sx={{ mb: 2 }}
      fullWidth
      required
      error={error}
      helperText={errorText}
    />
  );
};

export default InputField;
