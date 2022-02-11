import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';

const BirthdayMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="##.##.####"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

BirthdayMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BirthdayMaskCustom;
