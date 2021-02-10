import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, InputValue, InputField, Button } from './styles';

/**
 * @param {string} type - Tipo do input
 * @param {string} inputTitle - Titulo do input
 */

function Input({ type, inputTitle, onChange, value, placeholder, button }) {
  return (
    <Container className="input" onmouseho>
      <InputField>
        <Label>{inputTitle}</Label>
        <InputValue
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </InputField>

      {button && <Button>Entrar</Button>}
    </Container>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
