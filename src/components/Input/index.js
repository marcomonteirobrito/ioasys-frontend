import React from 'react';
import PropTypes from 'prop-types';

import { InputField, Label, InputValue } from './styles';

function Input({ inputType }) {
  return (
    <InputField>
      <Label>teste</Label>
      <InputValue type={inputType} />
    </InputField>
  );
}

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
};

export default Input;
